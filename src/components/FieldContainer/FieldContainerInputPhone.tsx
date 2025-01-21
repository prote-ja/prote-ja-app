import { FunctionComponent, useContext, useState } from "react";
import { IsEditingContext } from "./FieldContainerContexts";
import Backdrop from "../Backdrop";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { RotatingLines } from "react-loader-spinner";
import { Check, Settings } from "lucide-react";
import pt_BR from "react-phone-number-input/locale/pt-BR";
import PhoneInputWithCountrySelect, {
  formatPhoneNumber,
} from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/min";

export interface FieldContainerInputPhoneProps {
  value: string;
  onConfirm?: (newValue: string) => Promise<void>;
  onCancel?: () => void;
  onChange?: (newValue: string) => void;
}

const FieldContainerInputPhone: FunctionComponent<
  FieldContainerInputPhoneProps
> = ({ value, onConfirm: onSave, onCancel, onChange }) => {
  const { isEditing, setIsEditing } = useContext(IsEditingContext);

  const [editedValue, setEditedValue] = useState<string>(value ?? "");
  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedValue(value ?? "");
  };

  const handleSave = () => {
    if (onSave) {
      setIsLoading(true);
      onSave(editedValue).finally(() => {
        setIsEditing(false);
        setIsLoading(false);
      });
    } else setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedValue(value ?? "");
    if (onCancel) {
      onCancel();
    }
  };

  const handleChange = (value?: E164Number | undefined) => {
    setEditedValue(value ?? "");
    onChange && onChange(value ?? "");
  };

  return (
    <>
      {isEditing && (
        <Backdrop
          onClose={handleCancel}
          open={isEditing}
          confirm={value !== editedValue}
        />
      )}
      <form
        className={cn(
          "text-lg flex items-center",
          isEditing ? "rounded-md gap-2 z-[20] w-full sm:max-w-xs" : "gap-4"
        )}
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        {isEditing ? (
          <PhoneInputWithCountrySelect
            placeholder="(99) 99999-9999"
            value={value}
            onChange={handleChange}
            defaultCountry="BR"
            labels={pt_BR}
            inputComponent={Input}
            className="w-full text-black"
            autoComplete="tel"
            // labels={{ BR: "Brazil" }}
            // international
            disabled={isLoading}
          />
        ) : (
          <>{formatPhoneNumber(value)}</>
        )}

        {isEditing ? (
          <Button
            onClick={handleSave}
            className="[&_svg]:size-5 aspect-square"
            size={"icon"}
            variant={"secondary"}
            disabled={isLoading}
            key={"accept-button"}
            type="submit"
          >
            {isLoading ? <RotatingLines strokeColor="white" /> : <Check />}
          </Button>
        ) : (
          <Button
            onClick={handleEdit}
            className="[&_svg]:size-5"
            size={"icon"}
            variant={"secondary"}
            key={"edit-button"}
            type="button"
          >
            <Settings />
          </Button>
        )}
      </form>
    </>
  );
};

export default FieldContainerInputPhone;
