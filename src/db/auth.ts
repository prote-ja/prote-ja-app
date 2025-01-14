import { supabase } from "@/client";
// import { E164Number } from "libphonenumber-js/min";
import { Database } from "@/types/database.types";

type RegistrationData = {
  type: Database["public"]["Enums"]["profile_type"];
  name: string;
  phone: string;
};

/**
 * Registers a new user with Supabase.
 * Warning: The error should be handled by the caller.
 *
 * @param name
 * @param email
 * @param phone
 * @param password
 * @returns
 */
export async function registerNewUser(
  name: string,
  email: string,
  phone: string,
  password: string
) {
  console.log({
    name,
    email,
    phone,
    password,
  });

  const redirectionURL = `${window.location.origin}${
    import.meta.env.VITE_PUBLIC_BASE_PATH
  }dashboard`;
  console.log("Redirection URL: ", redirectionURL);

  // Removes +
  // const fixedPhone = phone.replace("+", "");

  const data: RegistrationData = {
    type: "user",
    name: name,
    phone: phone,
  };

  console.log({ ...data });

  const response = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: redirectionURL,
      data: { ...data },
    },
  });

  return response;
}

export async function signInWithEmail(email: string, password: string) {
  const res = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return res;
}

export async function signOut() {
  const res = await supabase.auth.signOut();
  return res;
}
