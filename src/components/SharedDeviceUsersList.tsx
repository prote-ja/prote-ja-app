import { usePermissionsView } from "@/hooks/usePermissionsView";
import { Database } from "@/types/database.types";
import { FunctionComponent } from "react";

interface SharedDeviceUsersListProps {
  id: string | null;
}

const SharedDeviceUsersList: FunctionComponent<SharedDeviceUsersListProps> = ({
  id,
}) => {
  const { permissions, loading } = usePermissionsView(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {permissions.map(
          (
            permission: Database["public"]["Views"]["permissions_view"]["Row"]
          ) => (
            <li key={permission.user}>{permission.user}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default SharedDeviceUsersList;
