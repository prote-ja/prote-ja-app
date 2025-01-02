import { FunctionComponent, Suspense, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ProtejaLogo from "@/assets/proteja_logo.svg";
import BlurredContainer from "@/components/BlurredContainer";
import { RotatingLines } from "react-loader-spinner";
import PasswordInput from "@/components/PasswordInput";
import { Pencil } from "lucide-react";
import { toast } from "react-toastify";
import { registerNewUser } from "@/db/auth";
import pt_BR from "react-phone-number-input/locale/pt-BR";
import { AuthResponse } from "@supabase/supabase-js";
import { authErrorParser } from "@/lib/helpers";
import React from "react";

const PhoneInputComponent = React.lazy(
  () => import("react-phone-number-input")
);

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [phone, setPhone] = useState<string | undefined>();
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const passwordConfirm = data.get("password-confirm") as string;

    if (password !== passwordConfirm) {
      toast.error("As senhas não coincidem.");
      return;
    }

    if (!phone) {
      toast.error("Preencha o campo de telefone.");
      return;
    }

    const libphone = await import("libphonenumber-js/min");

    const parsedPhone = libphone.parsePhoneNumber(phone);

    console.log("Parsed phone: ", parsedPhone);

    if (!parsedPhone || !(parsedPhone.isPossible() && parsedPhone.isValid())) {
      toast.error("Número de telefone inválido.");
      return;
    }

    setLoading(true);

    let res: AuthResponse | undefined = undefined;
    try {
      res = await registerNewUser(name, email, phone, password);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao criar usuário.");
    }

    if (!res) {
      console.error("Erro ao criar usuário.");
      toast.error("Erro ao criar usuário.");
      setLoading(false);
      return;
    }
    if (res.error) {
      toast.error(authErrorParser(res.error));
      console.error(res.error);
    }

    if (!res.error && res.data) {
      console.log(res.data);

      toast.success("Usuário criado com sucesso.");
      navigate("/login");
    }

    setLoading(false);
  };

  return (
    <BlurredContainer className="col-span-1 lg:col-span-2 p-4" border>
      <div className="flex flex-col items-center justify-center space-y-4 w-full">
        <img src={ProtejaLogo} alt="proteja-logo" className="max-h-20" />

        <h2 className=" text-center text-3xl font-bold leading-9 tracking-tight text-white">
          Registrar nova conta
        </h2>

        <form className="mt-2 space-y-4 w-full text-white" onSubmit={onSubmit}>
          <div>
            <Label
              htmlFor="name"
              className="block text-sm font-medium leading-6"
            >
              Nome completo
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              disabled={loading}
              className="bg-white/10 placeholder-white/50 border-white/20 mt-1"
            />
          </div>
          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              disabled={loading}
              className="bg-white/10 placeholder-white/50 border-white/20 mt-1"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-right ">
              Telefone (WhatsApp)
            </Label>
            {/* <Input
                id="phone"
                value={newUser.phone}
                onChange={(e) =>
                  setNewUser({ ...newUser, phone: e.target.value })
                }
                placeholder="(xx)xxxxx-xxxx"
                pattern="$$\d{2}$$\d{5}-\d{4}"
                className="col-span-3"
              /> */}
            <Suspense fallback={<div>Carregando...</div>}>
              <PhoneInputComponent
                placeholder="(99) 99999-9999"
                value={phone}
                onChange={(phone: string) => setPhone(phone)}
                defaultCountry="BR"
                labels={pt_BR}
                inputComponent={Input}
                className="col-span-3 placeholder-red-200 text-black"
                autoComplete="tel"
                // labels={{ BR: "Brazil" }}
                // international
                disabled={loading}
              />
            </Suspense>

            <p className="mt-1 text-sm text-muted">
              Número de WhatsApp para contato.
            </p>
          </div>

          <div>
            <Label
              htmlFor="password"
              className="block text-sm font-medium leading-6"
            >
              Senha
            </Label>
            <PasswordInput
              className="mt-1"
              disabled={loading}
              name="password"
            />
            <p className="mt-1 text-sm text-muted">
              A senha deve conter no mínimo 6 caracteres.
            </p>
          </div>

          <div>
            <Label
              htmlFor="password-confirmation"
              className="block text-sm font-medium leading-6"
            >
              Confirme sua senha
            </Label>
            <PasswordInput
              className="mt-1"
              disabled={loading}
              name="password-confirm"
            />
          </div>

          <div>
            <Button
              type="submit"
              className="w-full bg-[#fff] text-[#7F6AFF] hover:bg-[#c2c2c2c2] mt-1"
              disabled={loading}
            >
              {loading ? (
                <>
                  <RotatingLines
                    ariaLabel="submitting-spinner"
                    strokeColor="#7F6AFF"
                  />
                  Criando usuário...
                </>
              ) : (
                <>
                  <Pencil />
                  Registrar
                </>
              )}
            </Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-muted">
          Já possui uma conta?{" "}
          <Link
            to="/login"
            className="font-bold leading-6 text-[#fff] hover:text-primary/20 hover:border-b border-primary/20"
            viewTransition
          >
            Faça login
          </Link>
        </p>
      </div>
    </BlurredContainer>
  );
};

export default Register;
