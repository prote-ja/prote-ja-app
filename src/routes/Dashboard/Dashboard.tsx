import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "react-toastify";
import { updateUser } from "@/db/users";
import NotificationPromptDialog from "@/components/NotificationPromptDialog";
import BottomNavBar from "@/components/BottomNavBar";

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
      <div className="mb-16 md:mb-0">
        <h1 className="text-white">Dashboard</h1>
      </div>
      <BottomNavBar />
    </>
  );
};

export default Dashboard;
