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
