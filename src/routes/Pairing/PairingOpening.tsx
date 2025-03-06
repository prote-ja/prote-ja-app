import { Button } from "@/components/ui/button";
import { Loader2, ScanSearch } from "lucide-react";
import { FunctionComponent } from "react";

interface PairingOpeningProps {
  isScanning: boolean;
  startScan: () => Promise<void>;
}

const PairingOpening: FunctionComponent<PairingOpeningProps> = ({
  isScanning,
  startScan,
}) => {
  return (
    <>
      <h1 className="font-semibold text-2xl mx-auto">Parear totem</h1>
      <p className="text-sm">
        Mantenha o botão de pareamento do totem pressionado até a luz piscar e
        clique no botão abaixo para iniciar a busca.
      </p>

      <div className="flex flex-col gap-4">
        <Button
          onClick={startScan}
          disabled={isScanning}
          className="w-full bg-white text-primary hover:bg-gray-100 transition-colors"
        >
          {isScanning ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <ScanSearch className="mr-2" />
          )}
          {isScanning ? "Escaneando..." : "Iniciar busca"}
        </Button>
      </div>
    </>
  );
};

export default PairingOpening;
