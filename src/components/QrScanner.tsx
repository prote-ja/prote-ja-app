import React, { useState, useRef, useEffect } from "react";
import {
  Html5Qrcode,
  Html5QrcodeScanType,
  Html5QrcodeSupportedFormats,
} from "html5-qrcode";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RotatingLines } from "react-loader-spinner";
import { Pencil, QrCode, ShieldX } from "lucide-react";
import { Html5QrcodeScannerConfig } from "html5-qrcode/esm/html5-qrcode-scanner";

const QrScanner: React.FC = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [error, setError] = useState("");
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const config: Html5QrcodeScannerConfig = {
    fps: 14,
    qrbox: 250,
    rememberLastUsedCamera: true,
    supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
    formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
  };

  const startScanner = async () => {
    if (scannerRef.current) return; // Prevent multiple instances
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
          setScanResult(decodedText);
          stopScanner();
        },
        () => {}
      );

      setHasPermission(true);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Erro ao acessar a câmera");
      setHasPermission(false);
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
        setHasPermission(false);
      } catch (error) {
        console.error("Error stopping scanner:", error);
      }
    }
  };

  useEffect(() => {
    return () => {
      stopScanner(); // Ensure scanner stops on unmount
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        ref={containerRef}
        id="qr-scanner"
        className="w-full max-w-md rounded-lg overflow-hidden shadow-lg"
      />

      {isLoading && (
        <div className="flex items-center p-4 gap-4 text-white">
          Abrindo a câmera
          <RotatingLines
            ariaLabel="loading-spinner"
            strokeColor="white"
            width="24"
          />
        </div>
      )}

      {!hasPermission && !isLoading && (
        <div className="mt-4 text-center text-white">
          <h3 className="text-lg">
            Para escanear o QR Code, precisamos de acesso à sua câmera.
          </h3>
        </div>
      )}

      <div className="mt-4 gap-2 flex flex-col items-center w-full max-w-xs">
        {!hasPermission && (
          <Button
            onClick={startScanner}
            disabled={isLoading}
            className="bg-white text-primary w-full"
          >
            {isLoading ? (
              "Abrindo a câmera..."
            ) : (
              <>
                <QrCode /> Escanear QR Code
              </>
            )}
          </Button>
        )}
        <Button className="w-full" variant="secondary" onClick={stopScanner}>
          Inserir manualmente <Pencil />
        </Button>
      </div>

      {error && (
        <Alert variant="destructive" className="mt-4 max-w-md">
          <ShieldX color="white" />
          <AlertTitle>Ops, algo deu errado</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {scanResult && (
        <div className="mt-6 p-4 bg-white rounded-lg max-w-md break-words shadow-sm">
          <p className="font-semibold mb-2">Scanned content:</p>
          <code className="text-sm">{scanResult}</code>
        </div>
      )}
    </div>
  );
};

export default QrScanner;
