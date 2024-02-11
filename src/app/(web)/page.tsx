import Hero from "~/features/Index/Hero";
import ContributorSection from "~/features/Index/ContributorSection";
import BenefitSection from "~/features/Index/BenefitSection";
import StepsSection from "~/features/Index/Step";
import ContactForm from "~/features/Index/ContactForm";
import { contributors } from "~/data/contributors";
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
