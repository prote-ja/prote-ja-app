import React, { useState, useRef, useEffect } from "react";
import {
  Html5Qrcode,
  Html5QrcodeScanType,
  Html5QrcodeSupportedFormats,
} from "html5-qrcode";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RotatingLines } from "react-loader-spinner";
import { Pencil, QrCode, ShieldX, Check } from "lucide-react";
import { Html5QrcodeScannerConfig } from "html5-qrcode/esm/html5-qrcode-scanner";

const QrScanner: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [manualMac, setManualMac] = useState("");
  const [manualPassword, setManualPassword] = useState("");
  const [manualMode, setManualMode] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const config: Html5QrcodeScannerConfig = {
    fps: 14,
    qrbox: 250,
    rememberLastUsedCamera: true,
    supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
    formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
  };

  const handleSubmit = async (mac: string, password: string) => {
    console.log(mac, password);
  };

  const parseError = (error: unknown): string => {
    if (error instanceof Error) {
      switch (error.message) {
        case "Permission denied":
          return "Acesso à câmera negado";
        default:
          return error.message;
      }
    }
    return "Erro desconhecido";
  };

  const startScanner = async () => {
    if (scannerRef.current) return;
    setIsLoading(true);
    setError("");

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach((track) => track.stop());

      if (!containerRef.current) {
        throw new Error("Scanner container not found");
      }

      scannerRef.current = new Html5Qrcode(containerRef.current.id);
      await scannerRef.current.start(
        { facingMode: "environment" },
        config,
        (decodedText) => {
          const parsedJson = JSON.parse(decodedText);
          handleSubmit(parsedJson.mac, parsedJson.password);
          setScanResult(decodedText);
          stopScanner();
        },
        () => {}
      );
    } catch (err) {
      console.error(err);
      setError(parseError(err));
    } finally {
      setIsLoading(false);
    }
  };

  const stopScanner = async () => {
    if (scannerRef.current) {
      try {
        await scannerRef.current.stop();
        scannerRef.current.clear();
        scannerRef.current = null;
      } catch (error) {
        console.error("Error stopping scanner:", error);
      }
    }
  };

  const handleManualSubmit = () => {
    const data = JSON.stringify({ mac: manualMac, password: manualPassword });
    setScanResult(data);
    setManualMode(false);
  };

  useEffect(() => {
    return () => {
      stopScanner();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 bg-background border text-white rounded-lg shadow-lg w-full max-w-md">
      <h1 className="font-semibold text-2xl">Adicionar Dispositivo</h1>
      {!manualMode ? (
        <>
          <div
            ref={containerRef}
            id="qr-scanner"
            className="w-full rounded-lg overflow-hidden shadow-md"
          />

          {isLoading && (
            <div className="flex items-center gap-4">
              Abrindo a câmera...
              <RotatingLines
                ariaLabel="loading-spinner"
                strokeColor="white"
                width="24"
              />
            </div>
          )}

          {!isLoading && !scannerRef.current && (
            <p className="text-center text-sm">
              Para escanear o QR Code, precisamos de acesso à sua câmera.
            </p>
          )}

          <div className="flex flex-col gap-3 w-full">
            {!scannerRef.current && (
              <Button
                onClick={startScanner}
                disabled={isLoading}
                className="w-full bg-white text-primary"
              >
                <QrCode className="mr-2" /> Escanear QR Code
              </Button>
            )}

            <Button
              className="w-full"
              variant={"secondary"}
              onClick={() => {
                setManualMode(true);
                stopScanner();
              }}
              disabled={isLoading}
            >
              <Pencil className="mr-2" /> Inserir manualmente
            </Button>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-3 w-full">
          <Input
            type="text"
            placeholder="Endereço MAC"
            value={manualMac}
            onChange={(e) => setManualMac(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={manualPassword}
            onChange={(e) => setManualPassword(e.target.value)}
          />
          <Button
            className="w-full bg-white text-primary"
            onClick={handleManualSubmit}
          >
            <Check /> Confirmar
          </Button>
          <Button
            className="w-full"
            variant={"secondary"}
            onClick={() => setManualMode(false)}
          >
            Cancelar
          </Button>
        </div>
      )}

      {error && (
        <Alert variant="destructive" className="w-full">
          <ShieldX color="white" />
          <AlertTitle>Ops, algo deu errado!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {scanResult && (
        <div className="p-4 bg-white rounded-lg shadow-md w-full text-sm break-words">
          <p className="font-semibold">Dados escaneados:</p>
          <code>{scanResult}</code>
        </div>
      )}
    </div>
  );
};

export default QrScanner;
