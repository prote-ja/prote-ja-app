import { getListOfUsers } from "@/db/users";
import { usePermissionsView } from "@/hooks/usePermissionsView";
import { Database } from "@/types/database.types";
import { FunctionComponent, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import SharedDeviceUser from "./SharedDeviceUser";
import HorizontalDivider from "../HorizontalDivider";
import { Button } from "../ui/button";
import { Share2 } from "lucide-react";

interface SharedDeviceUsersListProps {
  id: string | null;
}

const SharedDeviceUsersList: FunctionComponent<SharedDeviceUsersListProps> = ({
  id,
}) => {
  const { permissions, loading, forceUpdate } = usePermissionsView(id);

  const [users, setUsers] = useState<
    Database["public"]["Tables"]["users"]["Row"][]
  >([]);

  const nonBlockedPermissions = useMemo(() => {
    return permissions.filter(
      (permission) => permission.permission !== "blocked"
    );
  }, [permissions]);

  const userIds = useMemo(() => {
    const list: string[] = [];
    for (const permission of nonBlockedPermissions) {
      if (permission.user) {
        list.push(permission.user);
      }
    }
    return list;
  }, [nonBlockedPermissions]);

  const fetchUsers = async () => {
    try {
      const response = await getListOfUsers(userIds);

      if (response.error) {
        throw new Error(response.error.message);
      }

      console.log("Users fetched:", response);

      setUsers(response.data);
    } catch (error) {
      console.log("Unexpected error fetching users:", error);
      toast.error("Algo deu errado ao buscar os usuários");
    }
  };

  useEffect(() => {
    if (!userIds.length) return;

    fetchUsers();
  }, [userIds]);

  return (
    <div>
      <ul>
        {nonBlockedPermissions.map((permission) => (
          <li key={permission.user}>
            <HorizontalDivider className="border-white my-0" />
            <SharedDeviceUser
              permission={permission}
              users={users}
              forceUpdate={forceUpdate}
              loading={loading}
            />
          </li>
        ))}
        <li>
          <HorizontalDivider className="border-white my-0" />
          <div className="flex justify-center p-4 ">
            <Button variant="secondary" disabled={loading}>
              {loading ? (
                "Carregando..."
              ) : (
                <>
                  Compartilhar com outro usuário <Share2 />
                </>
              )}
            </Button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SharedDeviceUsersList;
