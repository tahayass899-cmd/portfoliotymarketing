import type { Metadata } from "next";
import { AboutSection, InnerHero, PageShell, ProcessSection, TestimonialsSection } from "@/components/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Taha Yassine Moussaoui, the Digital Marketing and AI Strategy freelancer behind TYMarketing."
};

export default function AboutPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow="About"
        title="Taha Yassine Moussaoui"
        copy="A focused Digital Marketing and AI Strategy freelancer building premium brand systems, websites, campaigns, and AI-assisted workflows for ambitious businesses."
        image="/tymarketing-visual.svg"
      />
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
    </PageShell>
  );
}
