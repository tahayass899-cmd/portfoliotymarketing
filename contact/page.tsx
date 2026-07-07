import type { Metadata } from "next";
import { ContactSection, InnerHero, PageShell } from "@/components/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TYMarketing for brand identity, website development, advertising, graphic design, and AI strategy projects."
};

export default function ContactPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow="Contact"
        title="Let us build the next premium version of your brand."
        copy="Reach TYMarketing through email or Instagram and share your brand, offer, goals, and the type of project you want to launch."
        image="/portfolio/pdf-page-21-image-02.jpg"
      />
      <ContactSection />
    </PageShell>
  );
}
