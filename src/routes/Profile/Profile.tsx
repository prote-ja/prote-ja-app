import { Button } from "@/components/ui/button";
import { signOut } from "@/db/auth";
import { FunctionComponent } from "react";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  return (
    <Button variant={"secondary"} onClick={signOut}>
      Sair
    </Button>
  );
};

export default Profile;
