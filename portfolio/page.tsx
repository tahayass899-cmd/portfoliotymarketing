import type { Metadata } from "next";
import { InnerHero, PageShell, PortfolioSection } from "@/components/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore TYMarketing portfolio projects including DJMarket, Tres Jolie Tours, TaalibPass, Dar Lalla, Taj Dental Clinic, and website concepts."
};

export default function PortfolioPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow="Portfolio"
        title="PDF-extracted case studies, now organized for the web."
        copy="Browse the project cards, service sections, visual assets, and placeholders generated from Taha's portfolio PDF."
        image="/portfolio/pdf-page-13-image-01.jpg"
      />
      <PortfolioSection />
    </PageShell>
  );
}
