import { AuthError } from "@supabase/supabase-js";

export function authErrorParser(error: AuthError) {
  switch (error.code) {
    case "conflict":
      return "Conflito.";
    case "email_address_invalid":
      return "Email inválido.";
    case "email_exists":
      return "Email já cadastrado.";
    case "no_authorization":
      return "Sem autorização.";
    case "weak_password":
      return "Senha fraca.";
    case "invalid_credentials":
      return "Credenciais inválidas.";
    case "provider_disabled":
      return "Provedor desabilitado.";
    case "validation_failed":
      return "Falha na validação, verifique as credenciais.";
    case "email_not_confirmed":
      return "Email não confirmado.";
    case "phone_not_confirmed":
      return "Telefone não confirmado.";
    default:
      return "Houve um problema. Tente novamente mais tarde.";
  }
}

export function checkValidMac(mac: string): boolean {
  const macRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
  return macRegex.test(mac);
}

export function getFirstName(name?: string) {
  return name?.split(" ")[0];
}

export function getInitials(name?: string) {
  return name
    ?.toUpperCase()
    .split(" ")
    .map((n) => n[0])
    .join("");
}

// Formats the input text to DD/MM/YYYY
// Inserting the / automatically
export function formatToDate(text: string): string {
  const numbers = text.replace(/[^\d]/g, ""); // Remove all non-digit characters

  const chars = numbers.split("");
  const currentYear = new Date().getFullYear();

  // Ensure day is valid (1-31)
  if (chars.length >= 2) {
    const day = parseInt(chars.slice(0, 2).join(""), 10);
    if (day > 31) {
      chars[0] = "3"; // Set to max possible valid value
      chars[1] = "1";
    }
  }

  // Ensure month is valid (1-12)
  if (chars.length >= 4) {
    const month = parseInt(chars.slice(2, 4).join(""), 10);
    if (month > 12) {
      chars[2] = "1"; // Set to max possible valid value
      chars[3] = "2";
    }
  }

  // Ensure year is not beyond the current year
  if (chars.length > 4) {
    const year = parseInt(chars.slice(4, 8).join(""), 10);
    if (year > currentYear) {
      const currentYearStr = currentYear.toString();
      for (let i = 4; i < 8; i++) {
        chars[i] = currentYearStr[i - 4];
      }
    }
  }

  // Add slashes to format as DD/MM/YYYY
  if (chars.length > 2) {
    chars.splice(2, 0, "/");
  }
  if (chars.length > 5) {
    chars.splice(5, 0, "/");
  }

  return chars.join("");
}
