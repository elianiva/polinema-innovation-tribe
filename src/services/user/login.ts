import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import type { AuthSchema } from "~/schema/auth";
import { supabaseBrowser } from "~/utils/supabase";

type UseUserLoginProps = {
  provider: "email" | "google";
};

export function useUserLogin(props: UseUserLoginProps) {
  async function login(input?: { email: string; password: string }) {
    if (props.provider === "google") {
      await supabaseBrowser.auth.signInWithOAuth({
        provider: "google",
        options: {
          scopes: "openid",
        },
      });
    }

    if (props.provider === "email") {
      if (input === undefined) {
        throw new Error("Email or password can't be empty!");
      }

      const { error } = await supabaseBrowser.auth.signInWithPassword({
        email: input.email,
        password: input.password,
      });
      if (error !== null) {
        throw error;
      }
    }
  }

  return useMutation({
    mutationFn: async (input?: AuthSchema) => {
      // don't need to use toast when using google provider
      if (props.provider === "google") {
        try {
          await login(input);
        } catch (err: unknown) {
          const errorMessage =
            err instanceof Error ? err.message : "Unknown Error";
          toast.error(errorMessage);
        }
        return;
      }

      await toast.promise(login(input), {
        error: (err: Error) => {
          // supabase errors
          if (err.name === "AuthApiError") {
            return err.message;
          }
          return `Failed to login. Reason: ${err.message}`;
        },
        loading: "Signing in...",
        success: "Signed in successfully",
      });
    },
  });
}
