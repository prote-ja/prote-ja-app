import { FunctionComponent } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ProtejaLogo from "@/assets/proteja_logo.svg";
import BlurredContainer from "@/components/BlurredContainer";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  return (
    <BlurredContainer className="col-span-1 lg:col-span-2">
      <div className="flex flex-col items-center justify-center space-y-6 w-full">
        <img src={ProtejaLogo} alt="proteja-logo" className="max-h-24" />

        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white">
          Registrar nova conta
        </h2>
        <form className="mt-10 space-y-4 w-full" action="#" method="POST">
          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Email
            </Label>
            <div className="mt-2">
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="bg-white/10 text-white placeholder-white/50 border-white/20"
              />
            </div>
          </div>

          <div>
            <Label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-white"
            >
              Senha
            </Label>
            <div className="mt-2">
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="bg-white/10 text-white placeholder-white/50 border-white/20"
              />
            </div>
          </div>

          <div>
            <Label
              htmlFor="password-confirmation"
              className="block text-sm font-medium leading-6 text-white"
            >
              Confirme sua senha
            </Label>
            <div className="mt-2">
              <Input
                id="confirm_password"
                name="password-confirmation"
                type="password"
                required
                className="bg-white/10 text-white placeholder-white/50 border-white/20"
              />
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full bg-[#fff] text-[#7F6AFF] ">
              Registrar
            </Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-white/70">
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
