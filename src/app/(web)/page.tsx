import Hero from "~/parts/Index/Hero";
import ContributorSection from "~/parts/Index/ContributorSection";
import BenefitSection from "~/parts/Index/BenefitSection";
import StepsSection from "~/parts/Index/StepByStepSection/Step";
import ContactForm from "~/parts/Index/ContactForm";
import { contributors } from "~/data/contributor/contributors";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home"
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StepsSection />
      <ContactForm />
      <ContributorSection contributors={contributors} />
    </>
  );
}
