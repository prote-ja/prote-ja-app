import InformationContainer from "@/components/InformationContainer";
import { Button } from "@/components/ui/button";
import { updateUser } from "@/db/users";
import { useAuth } from "@/hooks/useAuth";
import { KeyRound } from "lucide-react";
import { FunctionComponent } from "react";
import { toast } from "react-toastify";

interface UserInfoProps {}

const UserInfo: FunctionComponent<UserInfoProps> = () => {
  const { user, setUser, loading } = useAuth();

  if (loading) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div>
        <p>Usuário não encontrado</p>
      </div>
    );
  }

  const handleNameChange = async (v: string) => {
    try {
      const newUser = await updateUser(user.id, { name: v });

      if (newUser.error) {
        throw newUser.error;
      }

      if (newUser.data.length === 0) {
        throw new Error("User not found");
      }

      setUser({ ...user, name: newUser.data[0].name });
      toast.success("Nome atualizado com sucesso.");
    } catch (error) {
      console.error("Error updating user name: ", error);
      toast.error("Erro ao atualizar nome. Tente novamente.");
    }
  };

  return (
    <div className="space-y-2 md:mx-0">
      <InformationContainer
        name="Nome"
        value={user.name}
        onEdit={handleNameChange}
      />
      <InformationContainer
        name="Email"
        value="joao@hotmail.com"
        onEdit={async () => {
          alert("Editando email");
        }}
      />
      <InformationContainer
        name="Telefone"
        value="(24)9 9983-1283"
        onEdit={async () => {
          alert("Editando telefone");
        }}
      />
      <InformationContainer name="Senha">
        <Button variant={"secondary"} size={"sm"}>
          Alterar senha
          <KeyRound />
        </Button>
      </InformationContainer>
    </div>
  );
};

export default UserInfo;
