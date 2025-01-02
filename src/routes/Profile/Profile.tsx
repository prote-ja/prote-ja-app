import { Button } from "@/components/ui/button";
import { signOut } from "@/db/auth";
import { FunctionComponent } from "react";
import { toast } from "react-toastify";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const handleSignOut = async () => {
    const res = await signOut();

    if (res.error) {
      console.error("Error signing out: ", res.error);
      toast.error("Erro ao sair. Tente novamente.");
      return;
    }
  };

  return (
    <Button variant={"secondary"} onClick={handleSignOut}>
      Sair
    </Button>
  );
};

export default Profile;
