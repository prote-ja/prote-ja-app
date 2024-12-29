import { FunctionComponent } from "react";
import PartnerCard from "./PartnerCard";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { FloatingPartnerBubbles } from "./FloatingPartnerBubbles";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ProtejaLogo from "@/assets/proteja_logo.svg";
import BlurredContainer from "@/components/BlurredContainer";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  return (
    <>
      <FloatingPartnerBubbles />
      <div className="flex flex-col p-6 gap-6 lg:flex-row justify-center">
        <BlurredContainer className="w-full">
          <div className="p-6 flex flex-col items-center justify-center space-y-6 w-full">
            <img src={ProtejaLogo} alt="proteja-logo" className="max-h-24" />

            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Faça login em sua conta
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
                    autoComplete="current-password"
                    required
                    className="bg-white/10 text-white placeholder-white/50 border-white/20"
                  />
                </div>
              </div>

              <div>
                <Button type="submit" className="w-full">
                  Entrar
                </Button>
              </div>
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="w-full text-white border-white/20 hover:bg-white/20"
                  disabled
                >
                  Sign in with Google
                </Button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-white/70">
              É novo aqui?{" "}
              <Link
                to="/register"
                className="font-semibold leading-6 text-primary hover:text-primary/90"
              >
                Registre-se agora
              </Link>
            </p>
          </div>
        </BlurredContainer>

        <BlurredContainer title="Apoiado por">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PartnerCard
                name="UTFPR"
                logo="/placeholder.svg?height=40&width=80"
                description="Universidade Tecnológica Federal do Paraná"
              />
              <PartnerCard
                name="Biopark Educação"
                logo="/placeholder.svg?height=40&width=80"
                description=""
              />
              <PartnerCard
                name="Mãe do Reinaldo"
                logo="/placeholder.svg?height=40&width=80"
                description="Reinaldo's mom administration TM."
              />
            </div>
          </div>
        </BlurredContainer>
      </div>
    </>
  );
};

export default Login;
