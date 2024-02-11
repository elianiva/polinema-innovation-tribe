import type { Metadata } from "next";
import { FormHeader } from "~/components/Form";
import AuthRegisterForm from "~/features/authentication/components/AuthRegisterForm";
import TermsSection from "~/features/authentication/components/TermsSection";
import { AuthOption } from "~/features/authentication/components/AuthOption";

export const metadata: Metadata = {
  title: "Register New Account",
};

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