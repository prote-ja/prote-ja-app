import { supabase } from "@/client";

export async function signUpNewUser() {
  const { data, error } = await supabase.auth.signUp({
    email: "valid.email@supabase.io",
    password: "example-password",
    options: {
      emailRedirectTo: "https://example.com/welcome",
    },
  });

  if (error) {
    throw error;
  }

  return data;
}

export async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "valid.email@supabase.io",
    password: "example-password",
  });

  if (error) {
    throw error;
  }

  return data;
}
