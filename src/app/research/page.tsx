import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ArrowLink, Container, ResearchCard, SectionHeading } from "@/components/ui";
import { homeImage, researchAreas } from "@/data/site";

export const metadata: Metadata = {
  title: "Research",
  description: "Explore MIEPS research themes in earth and planetary sciences.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        image={homeImage}
        imageAlt="Mountain ridges and highland terrain"
        eyebrow="Research"
        title="Questions about Earth, explored together."
        description="Explore the four research themes named in the project brief. Specific MIEPS projects, publications, and researchers will be added when verified."
        crumb="Research"
      />
      <section className="page-section section-tint">
        <Container>
          <SectionHeading
            eyebrow="Research themes"
            title="Earth’s many interconnected systems."
            description="The summaries describe scientific subject areas and do not claim specific institute activity or findings."
          />
          <div className="research-grid">
            {researchAreas.map((area, index) => (
              <ResearchCard
                key={area.slug}
                title={area.title}
                description={area.short}
                image={area.image}
                imageAlt={area.imageAlt}
                href={`/research/${area.slug}`}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>
      <section className="page-section">
        <Container className="page-intro">
          <h2>Research stories &amp; publications</h2>
          <div className="page-intro-copy">
            <p>Verified research projects, publications, contributors, and dates have not been provided for this build.</p>
            <p>Each research page includes editable sections to add approved project information without changing its layout.</p>
            <ArrowLink href="/contact">Research inquiries</ArrowLink>
          </div>
        </Container>
      </section>
    </>
  );
}
