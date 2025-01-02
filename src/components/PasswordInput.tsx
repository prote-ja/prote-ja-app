import { Eye, EyeOff } from "lucide-react";
import { FunctionComponent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

interface PasswordInputProps {
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
  name?: string;
}

const PasswordInput: FunctionComponent<PasswordInputProps> = ({
  disabled = false,
  className,
  inputClassName,
  name = "password",
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className={cn("relative", className)}>
      <Input
        id="password-police"
        name={name}
        type={showPassword ? "text" : "password"}
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
        required
        disabled={disabled}
        autoComplete="password"
        className={inputClassName}
        minLength={6}
      />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <EyeOff className="h-4 w-4" color="white" />
        ) : (
          <Eye className="h-4 w-4" color="white" />
        )}
        <span className="sr-only">
          {showPassword ? "Ocultar senha" : "Mostrar senha"}
        </span>
      </Button>
    </div>
  );
};

export default PasswordInput;
