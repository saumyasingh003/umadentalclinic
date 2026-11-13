import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import OurStory from "@/components/about/OurStory";
import Doctor from "@/components/about/Doctor";

export const metadata: Metadata = {
  title: "About Us | Uma Dental Care",
  description: "Learn about Uma Dental Care, our values and our approach to gentle, modern dentistry.",
};

const AboutPage = () => (
  <main>
    <PageHeader
      title="Caring for Smiles, Building Trust"
      highlight="Smiles"
      description="Uma Dental Care is a complete dental clinic dedicated to helping every patient feel comfortable, informed and confident about their smile."
      image="/about.png"
      imageAlt="Bright, modern treatment room at Uma Dental Care"
    />

    <OurStory />
    <Doctor />
  </main>
);

export default AboutPage;
