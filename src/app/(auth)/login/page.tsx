import { AuthForm } from "~/features/Authentication/AuthForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login"
};

export default async function LoginPage() {
  return (
    <section className={"h-screen flex justify-center items-center"}>
      <AuthForm name="Login" />
    </section>
  );
}
