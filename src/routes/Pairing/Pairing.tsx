import BlurredContainer from "@/components/BlurredContainer";
import { FunctionComponent, useState, useEffect, useCallback } from "react";
import CredentialsInput from "./CredentialsInput";
import PairingOpening from "./PairingOpening";
import { toast } from "react-toastify";

const Pairing: FunctionComponent = () => {
  const [availableNetworks, setAvailableNetworks] = useState<string[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [device, setDevice] = useState<BluetoothDevice | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [characteristics, setCharacteristics] = useState<{
    ssid?: BluetoothRemoteGATTCharacteristic;
    password?: BluetoothRemoteGATTCharacteristic;
  }>({});

  const SERVICE_UUID = "376ef6fe-e050-47f3-b68d-de711430d4cf";
  const CHARACTERISTIC_UUIDS = {
    LIST: "6db902b8-3853-4eaf-a55e-a48559fac157",
    SSID: "14796829-59dc-4f1b-90d8-e1f3a02f1248",
    PASSWORD: "839c314c-7b1d-40aa-8782-525e7bac8477",
  };

  // Use useCallback for the disconnect handler to ensure stable reference
  const handleDisconnection = useCallback(() => {
    console.log("Disconnection event triggered");
    setIsConnected(false);
    setCharacteristics({});
    setAvailableNetworks([]);
    // Don't clear the device here to allow reconnection
  }, []);

  // Clean up event listeners when component unmounts
  useEffect(() => {
    return () => {
      if (device) {
        device.removeEventListener(
          "gattserverdisconnected",
          handleDisconnection
        );
      }
    };
  }, [device, handleDisconnection]);

  const disconnectDevice = async () => {
    try {
      if (device?.gatt?.connected) {
        device.removeEventListener(
          "gattserverdisconnected",
          handleDisconnection
        );
        await device.gatt.disconnect();
      }
      // Clear device reference only after disconnection is complete
      setDevice(null);
    } catch (err) {
      handleError(err);
    } finally {
      setIsConnected(false);
      setCharacteristics({});
      setAvailableNetworks([]);
    }
  };

  const ensureDeviceConnection = async (btDevice: BluetoothDevice) => {
    if (!btDevice.gatt) throw new Error("Bluetooth GATT not available");

    try {
      // Always attempt a fresh connection
      return await btDevice.gatt.connect();
    } catch (err) {
      console.error("Connection error:", err);
      // Add a small delay before retrying connection
      await new Promise((resolve) => setTimeout(resolve, 500));
      try {
        return await btDevice.gatt.connect();
      } catch (retryErr) {
        throw new Error(`Failed to connect to device: ${retryErr}`);
      }
    }
  };

  const retryGattOperation = async <T,>(
    operation: () => Promise<T>,
    btDevice: BluetoothDevice,
    retries = 3
  ): Promise<T> => {
    let lastError;

    for (let i = 0; i < retries; i++) {
      try {
        return await operation();
      } catch (err) {
        lastError = err;
        console.warn(
          `GATT operation failed (attempt ${i + 1}/${retries}):`,
          err
        );

        // Check if we're still connected, if not, try to reconnect
        if (!btDevice.gatt?.connected) {
          try {
            await ensureDeviceConnection(btDevice);
            // Wait a moment for connection to stabilize
            await new Promise((resolve) => setTimeout(resolve, 300));
          } catch (connErr) {
            console.error("Reconnection failed:", connErr);
          }
        } else {
          // If still connected but operation failed, add a small delay before retry
          await new Promise((resolve) => setTimeout(resolve, 300));
        }
      }
    }

    throw new Error(
      `Operation failed after ${retries} retries: ${
        lastError || "Unknown error"
      }`
    );
  };

  const readNetworkList = async (char: BluetoothRemoteGATTCharacteristic) => {
    const value = await char.readValue();
    return new TextDecoder("utf-8").decode(value).split("\n").filter(Boolean);
  };

  const connectAndPairDevice = async (btDevice: BluetoothDevice) => {
    try {
      // Set up disconnect listener before attempting connection
      btDevice.addEventListener("gattserverdisconnected", handleDisconnection);

      const server = await ensureDeviceConnection(btDevice);

      const service = await retryGattOperation(
        () => server.getPrimaryService(SERVICE_UUID),
        btDevice
      );

      const [listChar, ssidChar, passwordChar] = await Promise.all([
        retryGattOperation(
          () => service.getCharacteristic(CHARACTERISTIC_UUIDS.LIST),
          btDevice
        ),
        retryGattOperation(
          () => service.getCharacteristic(CHARACTERISTIC_UUIDS.SSID),
          btDevice
        ),
        retryGattOperation(
          () => service.getCharacteristic(CHARACTERISTIC_UUIDS.PASSWORD),
          btDevice
        ),
      ]);

      setCharacteristics({ ssid: ssidChar, password: passwordChar });

      console.log("Reading network list...");
      const networks = await readNetworkList(listChar);
      console.log("Networks found:", networks);

      setAvailableNetworks(networks);
      setIsConnected(true);
    } catch (err) {
      // If connection fails, ensure we clean up the event listener
      btDevice.removeEventListener(
        "gattserverdisconnected",
        handleDisconnection
      );
      handleError(err);
    }
  };

  const startScan = async () => {
    setIsScanning(true);
    setError(null);
    setAvailableNetworks([]);

    // First ensure any existing device is fully disconnected
    if (device) {
      try {
        console.log("Disconnecting existing device");
        await disconnectDevice();
        console.log("Device disconnected");
        // Add a small delay after disconnection before starting a new scan
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (error) {
        console.error("Failed to disconnect device", error);
        toast.error("Error disconnecting device");
      }
    }

    console.log("Requesting Bluetooth device...");
    try {
      const newDevice = await navigator.bluetooth.requestDevice({
        optionalServices: [SERVICE_UUID],
        filters: [{ manufacturerData: [{ companyIdentifier: 0xa6b6 }] }],
      });

      console.log("Device found:", newDevice);
      setDevice(newDevice);

      await connectAndPairDevice(newDevice);
    } catch (err) {
      handleError(err);
    } finally {
      setIsScanning(false);
    }
  };

  const stopScan = () => {
    setIsScanning(false);
    disconnectDevice();
  };

  const handleError = (err: unknown) => {
    const message =
      err instanceof Error ? err.message : "Unknown error occurred";

    // Provide more specific error messages for common Bluetooth errors
    let displayError = message;
    if (message.includes("GATT operation failed")) {
      displayError =
        "Erro de conexão. Por favor tente novamente. (Tente reiniciar o totem)";
    } else if (message.startsWith("User cancelled")) {
      displayError = "Operação cancelada pelo usuário";
    }

    setError(displayError);
    console.error("Error details:", err);

    if (!message.startsWith("User cancelled")) {
      toast.error(displayError);
    }

    stopScan();
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3">
      <BlurredContainer
        border
        className="flex-col flex gap-5 p-4 shadow-lg w-full max-w-md text-white"
      >
        {!isConnected ? (
          <PairingOpening startScan={startScan} isScanning={isScanning} />
        ) : availableNetworks.length > 0 ? (
          <CredentialsInput
            networks={availableNetworks}
            ssidCharacteristic={characteristics.ssid}
            passwordCharacteristic={characteristics.password}
            disconnect={disconnectDevice}
          />
        ) : (
          <div>Algo deu errado</div>
        )}
      </BlurredContainer>
      {error && (
        <div className="p-3 bg-white rounded-md animate-pulse">
          <p className="text-destructive font-medium">{error}</p>
        </div>
      )}
    </div>
  );
};

export default Pairing;
