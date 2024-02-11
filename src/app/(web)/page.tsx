import Hero from "~/features/homepage/components/Hero";
import ContributorSection from "~/features/homepage/components/ContributorSection";
import BenefitSection from "~/features/homepage/components/BenefitSection";
import StepsSection from "~/features/homepage/components/Step";
import ContactForm from "~/features/homepage/components/ContactForm";
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
