import AlreadyAuth from "@/components/AlreadyAuth";
import BlurredContainer from "@/components/BlurredContainer";
import { FloatingPartnerBubbles } from "@/components/FloatingPartnerBubbles";
import PartnerCard from "@/components/PartnerCard";
import { useAuth } from "@/hooks/useAuth";
import { FunctionComponent } from "react";
import { Outlet, useLocation } from "react-router";
import BioparkLogo from "@/assets/biopark.png";
import UtfprLogo from "@/assets/utfpr.png";
import SapatilhasLogo from "@/assets/sapatilhas.png";

interface AuthLayoutProps {}

const AuthLayout: FunctionComponent<AuthLayoutProps> = () => {
  const { pathname } = useLocation();
  const { session } = useAuth();
  return (
    <>
      <FloatingPartnerBubbles />
      <div className="p-6 max-w-xl justify-center lg:max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div
            key={pathname}
            className="col-span-1 lg:col-span-2 animated-container"
          >
            {session ? <AlreadyAuth /> : <Outlet />}
          </div>

          <BlurredContainer
            border
            className="col-span-1 lg:col-span-3 h-min p-4"
          >
            <div>
              <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-white mb-6">
                Apoiado por
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PartnerCard
                  name="UTFPR"
                  logo={UtfprLogo}
                  description="Universidade Tecnológica Federal do Paraná"
                />
                <PartnerCard
                  name="Biopark Educação"
                  logo={BioparkLogo}
                  description=""
                />
                <PartnerCard
                  name="Use Sapatilhas"
                  logo={SapatilhasLogo}
                  description=""
                />
              </div>
            </div>
          </BlurredContainer>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
