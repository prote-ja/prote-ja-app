import FieldContainer from "@/components/FieldContainer/FieldContainer";
import FieldContainerInputPhone from "@/components/FieldContainer/FieldContainerInputPhone";
import FieldContainerInputText from "@/components/FieldContainer/FieldContainerInputText";
import InformationContainer from "@/components/InformationContainer";
import { Button } from "@/components/ui/button";
import { sendPasswordResetEmail } from "@/db/auth";
import { updateUser } from "@/db/users";
import { useAuth } from "@/hooks/useAuth";
import { KeyRound } from "lucide-react";
import { FunctionComponent, useMemo, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "react-toastify";

interface UserInfoProps {}

const UserInfo: FunctionComponent<UserInfoProps> = () => {
  const { session, user, setUser, loading } = useAuth();
  const [sendingPasswordReset, setSendingPasswordReset] = useState(false);

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

  const handlePhoneChange = async (v: string) => {
    if (!user) {
      toast.error("Usuário não encontrado.");
      return;
    }
    try {
      const newUser = await updateUser(user.id, { phone: v });

      if (newUser.error) {
        throw newUser.error;
      }

      if (newUser.data.length === 0) {
        throw new Error("User not found");
      }

      setUser({ ...user, phone: newUser.data[0].phone });
      toast.success("Telefone atualizado com sucesso.");
    } catch (error) {
      console.error("Error updating user phone: ", error);
      toast.error("Erro ao atualizar telefone. Tente novamente.");
    }
  };

  const handlePasswordChange = async () => {
    if (!email) {
      toast.error("Email não encontrado.");
      return;
    }
    setSendingPasswordReset(true);

    try {
      const { error } = await sendPasswordResetEmail(email);

      if (error) {
        throw error;
      }
      toast.success("Email de troca de senha enviado com sucesso.");
    } catch (error) {
      console.error("Error sending password reset email: ", error);
      toast.error("Erro ao enviar email de recuperação de senha.");
    }

    setSendingPasswordReset(false);
  };
  return (
    <div className="space-y-2 md:mx-0">
      <FieldContainer title="Nome">
        <FieldContainerInputText value={name} onConfirm={handleNameChange} />
      </FieldContainer>

      <FieldContainer title="Email">
        <FieldContainerInputText
          value={email}
          onConfirm={async (v) => {
            alert("Salvando email");
          }}
        />
      </FieldContainer>
      <FieldContainer title="Telefone">
        <FieldContainerInputPhone value={phone} onConfirm={handlePhoneChange} />
      </FieldContainer>
      <FieldContainer title="Senha">
        <Button
          variant={"secondary"}
          size={"sm"}
          onClick={handlePasswordChange}
          disabled={sendingPasswordReset}
        >
          {sendingPasswordReset ? (
            <>
              Enviando <RotatingLines strokeColor="white" />
            </>
          ) : (
            <>
              Alterar senha
              <KeyRound />
            </>
          )}
        </Button>
      </FieldContainer>
    </div>
  );
};

export default UserInfo;
