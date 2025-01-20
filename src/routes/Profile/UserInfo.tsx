import InformationContainer from "@/components/InformationContainer";
import { Button } from "@/components/ui/button";
import { updateUser } from "@/db/users";
import { useAuth } from "@/hooks/useAuth";
import { KeyRound } from "lucide-react";
import { FunctionComponent, useMemo } from "react";
import { toast } from "react-toastify";

interface UserInfoProps {}

const UserInfo: FunctionComponent<UserInfoProps> = () => {
  const { session, user, setUser, loading } = useAuth();

  const name = useMemo(() => {
    if (loading) {
      return "Carregando...";
    }
    if (!user) {
      return "";
    }

    return user.name;
  }, [user]);

  const email = useMemo(() => {
    if (loading) {
      return "Carregando...";
    }
    if (!session) {
      return "";
    }

    return session.user.email;
  }, [user]);

  const phone = useMemo(() => {
    if (loading) {
      return "Carregando...";
    }
    if (!user) {
      return "";
    }

    return user.phone ?? "Não informado";
  }, [user]);

  const handleNameChange = async (v: string) => {
    if (!user) {
      toast.error("Usuário não encontrado.");
      return;
    }
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
        value={name}
        onEdit={handleNameChange}
      />
      <InformationContainer
        name="Email"
        value={email}
        onEdit={async () => {
          alert("Editando email");
        }}
      />
      <InformationContainer
        name="Telefone"
        value={phone}
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
