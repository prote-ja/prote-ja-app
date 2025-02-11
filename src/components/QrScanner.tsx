import React, { useState, useRef, useEffect } from "react";
import {
  Html5Qrcode,
  Html5QrcodeScanType,
  Html5QrcodeSupportedFormats,
} from "html5-qrcode";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RotatingLines } from "react-loader-spinner";
import { Pencil, QrCode, ShieldX, Check, CircleHelp } from "lucide-react";
import { Html5QrcodeScannerConfig } from "html5-qrcode/esm/html5-qrcode-scanner";
import { useAuth } from "@/hooks/useAuth";
import { setOwner } from "@/db/devices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import MacInput from "./MacInput";
import FieldContainer from "./FieldContainer/FieldContainer";
import FieldContainerInput from "./FieldContainer/FieldContainerInput";

const QrScanner: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [manualMode, setManualMode] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const config: Html5QrcodeScannerConfig = {
    fps: 14,
    qrbox: 250,
    rememberLastUsedCamera: true,
    supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
    formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
  };

  const handleSubmit = async (mac: string, password: string) => {
    setIsLoading(true);
    setError("");
    if (!user) {
      setError("Usuário não autenticado");
      setIsLoading(false);
      return;
    }
    const owner = user.id;
    try {
      const response = await setOwner(mac, password, owner);

      if (response.error) {
        throw new Error(response.error);
      }
      toast.success("Cadastrado com sucesso");
      navigate("/totems/edit/" + mac);
    } catch (err) {
      console.error(err);
      setError(parseError(err));
    } finally {
      setIsLoading(false);
    }
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
          stopScanner();
          console.log(decodedText);
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

  const handleManualSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const mac = data.get("mac") as string;
    const password = data.get("password") as string;
    handleSubmit(mac, password);
    setManualMode(false);
  };
  useEffect(() => {
    return () => {
      stopScanner();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 bg-background border text-white rounded-md shadow-lg w-full max-w-md">
      <h1 className="font-semibold text-2xl">Adicionar Dispositivo</h1>
      {!manualMode ? (
        <>
          <div
            ref={containerRef}
            id="qr-scanner"
            className="w-full rounded-md overflow-hidden shadow-md"
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
        <form onSubmit={handleManualSubmit} className="w-full">
          <div className="flex flex-col gap-3 w-full min-w-full">
            <MacInput name="mac" />
            <FieldContainer
              title={
                <div className="flex items-center gap-1">
                  Senha
                  <CircleHelp size={14} className="mb-4" />
                </div>
              }
              tooltip="A senha é composta de 6 dígitos"
            >
              <FieldContainerInput
                type="text"
                placeholder="123123"
                name="password"
                required
                closedSize="sm"
                minLength={6}
                maxLength={6}
              />
            </FieldContainer>
            <Button className="w-full bg-white text-primary" type="submit">
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
        </form>
      )}

      {error && (
        <Alert variant="destructive" className="w-full">
          <ShieldX color="white" />
          <AlertTitle>Ops, algo deu errado!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default QrScanner;
