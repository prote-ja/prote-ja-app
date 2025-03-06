import { FunctionComponent, useMemo, useState } from "react";
import FieldContainer from "@/components/FieldContainer/FieldContainer";
import FieldContainerInput from "@/components/FieldContainer/FieldContainerInput";
import FieldContainerInputSelect from "@/components/FieldContainer/FieldContainerInputSelect";
import { Button } from "@/components/ui/button";
import { SelectContent, SelectItem } from "@/components/ui/select";
import { Bluetooth, CircleHelp, Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

interface CredentialsInputProps {
  networks: string[];
  ssidCharacteristic: BluetoothRemoteGATTCharacteristic | undefined;
  passwordCharacteristic: BluetoothRemoteGATTCharacteristic | undefined;
  disconnect: () => void;
}

const CredentialsInput: FunctionComponent<CredentialsInputProps> = ({
  networks,
  ssidCharacteristic,
  passwordCharacteristic,
  disconnect,
}) => {
  const [isSending, setIsSending] = useState(false);

  const networksFilteredAndSorted = useMemo(
    () => networks.filter((e) => e !== "").sort((a, b) => a.localeCompare(b)),
    [networks]
  );

  const navigate = useNavigate();

  const [selectedNetwork, setSelectedNetwork] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const sendCredentials = async () => {
    if (!ssidCharacteristic || !passwordCharacteristic) {
      toast.error("Dispositivo não encontrado.");
      console.error("No device selected");
      return;
    }

    if (!selectedNetwork || !password) {
      toast.error("Preencha todos os campos.");
      console.error("Fields not filled");
      return;
    }
    console.log("Sending credentials: ", { selectedNetwork, password });
    setIsSending(true);
    try {
      if (!ssidCharacteristic || !passwordCharacteristic) {
        throw new Error("Characteristic not found");
      }

      const encoder = new TextEncoder();
      await ssidCharacteristic.writeValueWithResponse(
        encoder.encode(selectedNetwork)
      );
      await passwordCharacteristic.writeValueWithResponse(
        encoder.encode(password)
      );

      toast.success("Credenciais enviadas com sucesso.");
      navigate("/totems");
    } catch (error) {
      toast.error("Erro ao enviar credenciais.");
      console.error("Failed to send credentials: ", error);
    }
    setIsSending(false);
  };

  return (
    <>
      <h1 className="font-semibold text-2xl mx-auto">
        Totem conectado <Bluetooth className="inline-block text-positive" />
      </h1>
      <p className="text-sm">
        Preencha os campos abaixo para conectar o totem à sua rede.
      </p>
      <div className="space-y-2">
        <FieldContainer
          title={
            <div className="flex items-center gap-1">
              Rede
              <CircleHelp size={14} className="mb-4" />
            </div>
          }
          tooltip="A senha da rede que deseja conectar."
        >
          <FieldContainerInputSelect
            closedSize="sm"
            placeholder="Conectar a rede"
            onValueChange={(value) => setSelectedNetwork(value)}
          >
            <SelectContent>
              {networksFilteredAndSorted.map((e, index) => (
                <SelectItem key={index} value={e}>
                  {e}
                </SelectItem>
              ))}
            </SelectContent>
          </FieldContainerInputSelect>
        </FieldContainer>
        <FieldContainer
          title={
            <div className="flex items-center gap-1">
              Senha
              <CircleHelp size={14} className="mb-4" />
            </div>
          }
          tooltip="A senha da rede que deseja conectar."
        >
          <FieldContainerInput
            type="text"
            placeholder="Senha da rede"
            name="password"
            required
            closedSize="sm"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FieldContainer>
        <div className="flex justify-between gap-2 pt-2">
          <Button
            className="w-full"
            variant={"ghost"}
            onClick={disconnect}
            disabled={isSending}
          >
            Cancelar
          </Button>
          <Button
            className="w-full bg-white text-primary"
            onClick={sendCredentials}
            disabled={isSending}
          >
            {isSending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            {isSending ? "Enviando..." : "Enviar"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default CredentialsInput;
