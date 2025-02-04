import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "react-toastify";
import { updateUser } from "@/db/users";
import BentoItem from "@/components/BentoItem";
import { Button } from "@/components/ui/button";
import { useDevices } from "@/hooks/useDevices";
import { Link as LinkIcon } from "lucide-react";
import { SatelliteDish, TriangleAlert } from "lucide-react";
import ImageBattery from "@/assets/img_battery.jpg";
import { MessagesSquare, Music, Zap, HeartPulse } from "lucide-react";
import NotificationPromptDialog from "@/components/NotificationPromptDialog";
import BatteryChart from "@/components/BatteryLevel";
import LineChartComponent from "./MultipleChart";
interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const { wearables, totems } = useDevices();
  const heartRateData = [
    { time: "00:00", value: 72, valueTwo: 68, valueThree: 75 },
    { time: "01:00", value: 75, valueTwo: 70, valueThree: 77 },
    { time: "02:00", value: 70, valueTwo: 65, valueThree: 72 },
    { time: "03:00", value: 68, valueTwo: 67, valueThree: 70 },
    { time: "04:00", value: 72, valueTwo: 69, valueThree: 74 },
    { time: "05:00", value: 74, valueTwo: 71, valueThree: 76 },
  ];

  const heartRateConfig = {
    person1: {
      label: "Person 1",
      color: "hsl(var(--chart-1))",
    },
    person2: {
      label: "Person 2",
      color: "hsl(var(--chart-2))",
    },
    person3: {
      label: "Person 3",
      color: "hsl(var(--chart-3))",
    },
  };

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
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <BentoItem
              title="Bem vindo devolta"
              description={user?.name}
              className="lg:col-span-3 text-[#624DE2]  "
              descriptionClassName="text-3xl"
              rightContent={
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-white font-semibold rounded-full px-4 py-1">
                    <span>Pulseiras</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{wearables.length}</span>
                      <LinkIcon />
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-white font-semibold rounded-full px-4 py-1">
                    <span>Totens</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{totems.length}</span>
                      <SatelliteDish />
                    </div>
                  </div>
                </div>
              }
              rightBackground="#624DE2"
            />

            <BentoItem
              title="Batimento Cardíaco"
              description="Acompanhe o batimento cardíaco dos usuários"
              icon={<HeartPulse className="h-6 w-6 text-[#F96900]" />}
              className="lg:col-span-2 lg:row-span-2 bg-purple-100 text-white"
              bentoBackground="#624DE2"
            >
              <LineChartComponent
                title="Frequência Cardíaca"
                description="Frequência cardíaca dos usuários"
                chartData={heartRateData}
                height={300}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                chartConfig={heartRateConfig}
              />
            </BentoItem>

            <BentoItem
              title="Notificações"
              description="Você tem 3 novas notificações"
              icon={<TriangleAlert className="h-6 w-6 text-white" />}
              className="bg-[#F96900] text-white"
              bentoBackground="#F96900"
            ></BentoItem>

            <BentoItem
              title="Bateria"
              icon={<Zap className="h-6 w-6 text-[#7AC74F]" />}
              className=" lg:aspect-[3/4] aspect-[4/5] text-white"
              bentoBackgroundImage={ImageBattery}
              bentoBackgroundOverlay="linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.9))"
            >
              <BatteryChart
                batteryLevel={75}
                colorChart="#7AC74F"
              ></BatteryChart>
            </BentoItem>

            <BentoItem title="Teste" className="lg:col-span-2 bg-yellow-100">
              <div className="mt-2 bg-yellow-200 h-1 rounded-full">
                <div className="bg-yellow-500 h-1 w-1/3 rounded-full"></div>
              </div>
            </BentoItem>

            <BentoItem
              title="Fale com a"
              description="JULiA"
              icon={<MessagesSquare className="h-6 w-6 text-white" />}
              className="text-white"
              bentoBackground="#FF1654"
              descriptionClassName="text-4xl"
            />

            <BentoItem title="Quick Actions" className="bg-indigo-100">
              <div className="grid grid-cols-2 gap-2">
                {["Action 1", "Action 2", "Action 3", "Action 4"].map(
                  (action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="flex items-center"
                    >
                      <Zap className="h-4 w-4 mr-1" />
                      {action}
                    </Button>
                  )
                )}
              </div>
            </BentoItem>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
