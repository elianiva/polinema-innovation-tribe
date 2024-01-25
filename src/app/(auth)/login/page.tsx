import { AuthForm } from "~/parts/Authentication/AuthForm";

export default async function LoginPage() {
  return (
    <section className={"h-screen flex justify-center items-center"}>
      <AuthForm name="Login" />
    </section>
  );
}
