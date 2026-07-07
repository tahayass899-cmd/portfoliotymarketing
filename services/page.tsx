import type { Metadata } from "next";
import { InnerHero, PageShell, ProcessSection, ServicesSection } from "@/components/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand identity design, graphic design, website development, brand strategy, advertising, and AI strategy services by TYMarketing."
};

export default function ServicesPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow="Services"
        title="Premium marketing execution with strategy underneath."
        copy="TYMarketing covers identity, design, websites, brand strategy, and advertising so your brand feels consistent from first impression to conversion."
        image="/portfolio/pdf-page-05-image-01.jpg"
      />
      <ServicesSection />
      <ProcessSection />
    </PageShell>
  );
}
