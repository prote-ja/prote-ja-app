import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "react-toastify";
import { updateUser } from "@/db/users";
import { Button } from "@/components/ui/button";
import NotificationPromptDialog from "@/components/NotificationPromptDialog";
import NewCarousel from "./NewCarousel";
import AdvancedFunc from "./AdvencedFun";
import Greeting from "./Greetings";
import AlertComponent from "@/components/AlertComponent";
import { AlertCircle, AlertTriangle } from "lucide-react";
interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkFirstLogin = async () => {
      if (!user) {
        return;
      }
      if (user.first_login) {
        try {
          const response = await updateUser(user.id, { first_login: false });

          if (response.error) {
            throw new Error(response.error.message);
          }

          console.log("return from edit", response.data[0]);

          console.log("user before set", user);

          setUser(response.data[0]);

          navigate("/first-login", {
            replace: true,
          });
        } catch (error) {
          console.error(error);

          toast.error("Erro ao atualizar status de primeiro login");
        }
      }
    };

    checkFirstLogin();
  }, [user]);

  return (
    <>
      <NotificationPromptDialog />
      <div className="mb-16 md:mb-0 ">
        <div className="mb-8">
          <Greeting name={user?.name} />
        </div>
        <div className="mb-8">
          <AlertComponent
            variant="warning"
            iconTitle={AlertTriangle}
            title="Queda Detectada"
            description="1 hora atrás"
            buttonLabel="Informações"
            buttonRedirectUrl="/device/fall-detected/77:8f:34:64:ec:09"
            iconButton={AlertCircle}
            className="h-16 md:h-14 md:p-6 p-6"
          />
        </div>
        <NewCarousel>
          <div className="text-center flex flex-col h-full justify-between">
            {" "}
            <h3 className="text-xl font-semibold">Capítulo 1</h3>
            <p className="text-gray-600">Descrição do capítulo 1.</p>
          </div>
          <div className="text-center flex flex-col h-full justify-between">
            {" "}
            <h3 className="text-xl font-semibold">Capítulo 2</h3>
            <p className="text-gray-600">Descrição do capítulo 2.</p>
            <Button
              variant={"default"}
              title="Ver mais"
              className="h-10 w-full"
            >
              Ver mais
            </Button>
          </div>
          <div className="text-center flex flex-col h-full justify-between">
            {" "}
            {/* Adicione flex, flex-col, h-full e justify-between */}
            <h3 className="text-xl font-semibold">Capítulo 3</h3>
            <p className="text-gray-600">Descrição do capítulo 3.</p>
          </div>
        </NewCarousel>

        <div className="flex ">
          <AdvancedFunc>
            <div className="flex items-center space-x-4">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center aspect-square"
                style={{
                  backgroundImage:
                    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRsk3bGw7WHBSek3D8GPduvAI35oRrHyWeTw&s')",
                }}
              ></div>
              <div>
                <h3 className="font-semibold">Padrão de movimento</h3>
                <p className="text-gray-300">
                  Identifique problemas iminentes com o usuário
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center aspect-square"
                style={{
                  backgroundImage:
                    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRsk3bGw7WHBSek3D8GPduvAI35oRrHyWeTw&s')",
                }}
              ></div>
              <div>
                <h3 className="font-semibold">Padrão de movimento</h3>
                <p className="text-gray-300">
                  Identifique problemas iminentes com o usuário
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center aspect-square"
                style={{
                  backgroundImage:
                    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRsk3bGw7WHBSek3D8GPduvAI35oRrHyWeTw&s')",
                }}
              ></div>
              <div>
                <h3 className="font-semibold">Padrão de movimento</h3>
                <p className="text-gray-300">
                  Identifique problemas iminentes com o usuário
                </p>
              </div>
            </div>
          </AdvancedFunc>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
