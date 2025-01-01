import { FunctionComponent, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ProtejaLogo from "@/assets/proteja_logo.svg";
import BlurredContainer from "@/components/BlurredContainer";
import { signInWithEmail } from "@/db/auth";
import { AuthTokenResponsePassword } from "@supabase/supabase-js";
import { toast } from "react-toastify";
import PasswordInput from "@/components/PasswordInput";
import { RotatingLines } from "react-loader-spinner";
import { LogIn } from "lucide-react";
import { authErrorParser } from "@/lib/helpers";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const email = data.get("email") as string;
    const password = data.get("password") as string;

    setLoading(true);

    let res: AuthTokenResponsePassword | undefined = undefined;
    try {
      res = await signInWithEmail(email, password);

      console.log(res);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao fazer login.");
    }

    if (!res) {
      console.error("Erro ao fazer login.");
      toast.error("Erro ao fazer login.");
      setLoading(false);
      return;
    }
    if (res.error) {
      toast.error(authErrorParser(res.error));
      console.error(res.error);
    }

    if (!res.error && res.data) {
      console.log(res.data);

      toast.success("Login com sucesso.");
      navigate("/dashboard");
    }

    setLoading(false);
  };
  return (
    <BlurredContainer border className="p-4">
      <div className="flex flex-col items-center justify-center space-y-6 w-full">
        <img src={ProtejaLogo} alt="proteja-logo" className="max-h-24" />

        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white">
          Faça login em sua conta
        </h2>
        <form className="mt-2 space-y-4 w-full text-white" onSubmit={onSubmit}>
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
                  Fazendo login...
                </>
              ) : (
                <>
                  <LogIn />
                  Entrar
                </>
              )}
            </Button>
          </div>
          {/* <div className="mt-6">
                <Button
                  variant="outline"
                  className="w-full text-white border-white/20 hover:bg-white/20"
                  disabled
                >
                  Sign in with Google
                </Button>
              </div> */}
        </form>

        <p className="mt-10 text-center text-sm text-muted">
          É novo aqui?{" "}
          <Link
            to="/register"
            className="font-bold leading-6 text-[#fff] hover:text-primary/20 hover:border-b border-primary/20"
            viewTransition
          >
            Registre-se agora
          </Link>
        </p>
      </div>
    </BlurredContainer>
  );
};

export default Login;
