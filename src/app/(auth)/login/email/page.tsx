import type { Metadata } from "next";
import TermsSection from "~/features/authentication/components/TermsSection";
import AuthLoginForm from "~/features/authentication/components/AuthLoginForm";
import { FormHeader } from "~/components/Form";
import { AuthOption } from "~/features/authentication/components/AuthOption";

export const metadata: Metadata = {
  title: "Login with Email"
};

export default function EmailLoginPage() {
  return (
    <div className="w-full h-fit lg:h-screen py-4 px-2 flex flex-col gap-4 justify-center items-center">
      <FormHeader
        title="Login to"
        backTo="/login"
      />
      <AuthLoginForm />
      <AuthOption ask="Not Yet" />
      <TermsSection title="Register" />
    </div>
  );
}
