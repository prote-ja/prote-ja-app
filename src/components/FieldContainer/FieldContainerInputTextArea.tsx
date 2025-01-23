import {
  FunctionComponent,
  TextareaHTMLAttributes,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { IsEditingContext } from "./FieldContainerContexts";
import Backdrop from "../Backdrop";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import { Textarea } from "../ui/textarea";

export interface FieldContainerInputTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  onConfirm?: (newValue: string) => Promise<void>;
  placeholder?: string;
}

const FieldContainerInputTextArea: FunctionComponent<
  FieldContainerInputTextAreaProps
> = ({ value, onConfirm, onChange, placeholder, ...props }) => {
  const { isEditing, setIsEditing } = useContext(IsEditingContext);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [editedValue, setEditedValue] = useState<string>(value ?? "");

  useEffect(() => {
    setEditedValue(value ?? "");

    if (textareaRef.current) {
      adjustHeight();
    }
  }, [value]);

  useEffect(() => {
    if (textareaRef.current) {
      // Set the initial height to 2 lines
      const lineHeight = parseFloat(
        getComputedStyle(textareaRef.current).lineHeight || "20"
      );
      textareaRef.current.style.height = `${lineHeight * 2}px`;
    }
  }, []);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Adjust height dynamically
    }
  };

  const handleSave = () => {
    if (onConfirm) {
      onConfirm(editedValue).finally(() => {
        setIsEditing(false);
      });
    } else {
      setIsEditing(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedValue(e.target.value);
    onChange && onChange(e);

    adjustHeight();
  };

  return (
    <>
      {isEditing && (
        <Backdrop
          onClose={handleSave}
          open={isEditing}
          confirm={value !== editedValue}
        />
      )}
      <div
        className={cn(
          "text-md flex items-center relative w-full",
          isEditing ? "rounded-md gap-2 z-[20] sm:max-w-md" : "gap-4 max-w-xs"
        )}
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <div className="relative flex w-full">
          <Textarea
            ref={textareaRef}
            value={editedValue}
            onChange={handleChange}
            placeholder={placeholder}
            onFocusCapture={() => setIsEditing(true)}
            onBlur={() => {
              setIsEditing(false);
              handleSave();
            }}
            className={cn(
              "w-full resize-none overflow-hidden min-h-3",
              isEditing ? "pr-10" : ""
            )}
            {...props}
          />
          {isEditing && (
            <Button
              onClick={handleSave}
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 px-3 py-2 hover:bg-transparent"
            >
              <Check className="h-4 w-4 horizontal-grow z-10" color="white" />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default FieldContainerInputTextArea;
