import { AuthOption, FormHeader } from "~/components/Form";
import AuthRegisterForm from "~/parts/Authentication/AuthRegisterForm";
import TermsSection from "~/parts/Authentication/TermsSection";

export default function RegisterPage() {
  return (
    <div className="w-full h-fit lg:h-screen py-4 px-2 flex flex-col gap-4 justify-center items-center">
      <FormHeader title="Welcome to" backTo="/register" />
      <AuthRegisterForm />
      <AuthOption ask="Registered" />
      <TermsSection title="Register" />
    </div>
  );
}