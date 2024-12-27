import { FunctionComponent } from "react";
import PartnerCard from "./PartnerCard";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import { FloatingPartnerBubbles } from "./FloatingPartnerBubbles";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBackground />
      <FloatingPartnerBubbles />
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-6 py-12 lg:px-8 relative z-10">
        <div className="glass-panel p-8 rounded-lg w-full max-w-6xl">
          <div className="lg:flex-1 sm:mx-auto sm:w-full sm:max-w-sm mb-10 lg:mb-0">
            <img
              className="mx-auto h-20 w-auto"
              src="/placeholder.svg?height=80&width=80"
              alt="ProteJÁ Logo"
            />
            <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white">
              Sign in to your account
            </h2>
            <form className="mt-10 space-y-6" action="#" method="POST">
              <div>
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Email address
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
                  Password
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
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Sign in
                </Button>
              </div>
            </form>

            <div className="mt-6">
              <Button
                variant="outline"
                className="w-full text-white border-white/20 hover:bg-white/20"
              >
                Sign in with Google
              </Button>
            </div>

            <p className="mt-10 text-center text-sm text-white/70">
              Not a member?{" "}
              <Link
                to="/register"
                className="font-semibold leading-6 text-primary hover:text-primary/90"
              >
                Register now
              </Link>
            </p>
          </div>

          <div className="lg:flex-1 w-full max-w-2xl mt-16 lg:mt-0 lg:ml-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PartnerCard
                name="Amazon Web Services"
                logo="/placeholder.svg?height=40&width=80"
                description="Powering our infrastructure with world-class cloud solutions."
              />
              <PartnerCard
                name="META"
                logo="/placeholder.svg?height=40&width=80"
                description="Collaborating on next-gen AR experiences for health monitoring."
              />
              <PartnerCard
                name="Google Health"
                logo="/placeholder.svg?height=40&width=80"
                description="Integrating cutting-edge AI for predictive health analytics."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
