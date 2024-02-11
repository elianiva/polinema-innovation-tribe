import TermsSection from "~/features/Authentication/TermsSection";
import { AuthOption, FormHeader } from "~/components/Form";
import { AuthButtons } from "~/features/Authentication/AuthButtons";

type AuthFormProps = {
  name: "Register" | "Login";
};

export function AuthForm({ name }: AuthFormProps) {
  const authOption = name == "Register" ? "Registered" : "Not Yet";

  return (
    <>
      <form className="space-y-6 w-72 lg:w-80 p-2 rounded-lg flex flex-col justify-center items-center">
        <FormHeader title={`${name} To`} backTo="/" />
        <AuthButtons name={name} />
        <AuthOption ask={authOption} />
        <TermsSection title={name} />
      </form>
    </>
  );
}
