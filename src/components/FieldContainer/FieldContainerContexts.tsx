import { createContext } from "react";

export interface IsEditingContextInterface {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IsEditingContext = createContext<IsEditingContextInterface>({
  isEditing: false,
  setIsEditing: () => {},
});
