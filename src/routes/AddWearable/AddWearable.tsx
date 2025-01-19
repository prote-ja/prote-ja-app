import { FormEvent, FunctionComponent, useState } from "react";

import { Link } from "lucide-react";
import ElementTitleHeader from "@/components/ElementTitleHeader";
import MacInput from "@/components/MacInput";
import HardwarePassword from "@/components/HardwarePassword";
import Wristband300 from "@/assets/wristband_300.png";
import { Button } from "@/components/ui/button";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "react-toastify";
import { setOwner } from "@/db/devices";
import { checkValidMac } from "@/lib/helpers";
import { RotatingLines } from "react-loader-spinner";
import { useAuth } from "@/hooks/useAuth";

interface AddWearableProps {}

const AddWearable: FunctionComponent<AddWearableProps> = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const toNavigate = searchParams.get("to");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const mac = formData.get("mac") as string;
    const password = formData.get("password") as string;

    console.log(mac, password);

    if (!mac || !password) {
      toast.error("Preencha todos os campos");
      return;
    }

    if (!checkValidMac(mac)) {
      toast.error("Endereço MAC inválido");
      return;
    }

    if (!user) {
      toast.error("Usuário não encontrado");
      return;
    }

    try {
      setLoading(true);
      const response = await setOwner(mac, password, user.id);

      console.log(response);

      if (response.error) {
        const errorMessage = await response.error.context.json();
        console.log(errorMessage);

        switch (errorMessage.error) {
          case "Invalid credentials":
            toast.error(
              "Credenciais inválidas, verifique o endereço MAC e a senha"
            );
            break;

          default:
            toast.error("Erro ao adicionar pulseira");
            break;
        }
        setLoading(false);
        return;
      }

      toast.success("Pulseira adicionada com sucesso");
      navigate(toNavigate || "/dashboard");
    } catch (error: any) {
      console.error(error);
      toast.error("Erro ao adicionar pulseira, tente novamente mais tarde");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        {/* Imagem do Totem */}

        <div className="flex flex-col items-center">
          <ElementTitleHeader
            className="pb-2 text-white"
            title="Pulseira"
            titleAppend={
              <div className="flex gap-2 border rounded-md px-2 items-center text-lg font-medium leading-none h-7">
                <Link className="stroke-white w-5 h-5" />
              </div>
            }
          />

          <img src={Wristband300} alt="Pulseira" className="w-64 h-auto" />
        </div>

        {/* Campo MAC */}
        <MacInput name="mac" />

        {/* Campo Senha */}
        <HardwarePassword name="password" />
        <div className="flex flex-row-reverse w-full">
          <Button
            className="bg-white text-primary"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <RotatingLines
                  ariaLabel="submitting-spinner"
                  strokeColor="#7357FF"
                />
                Carregando...
              </>
            ) : (
              <>Confirmar</>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddWearable;
