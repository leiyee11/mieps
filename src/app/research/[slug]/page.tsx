import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { ButtonLink, Container, Eyebrow, SampleLabel, SectionHeading } from "@/components/ui";
import { researchAreas } from "@/data/site";

export function generateStaticParams() {
  return researchAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = researchAreas.find((item) => item.slug === slug);
  return area ? {
    title: area.title,
    description: area.short,
    alternates: { canonical: `/research/${area.slug}` },
  } : {};
}

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = researchAreas.find((item) => item.slug === slug);
  if (!area) notFound();

  return (
    <>
      <PageHero
        image={area.image}
        imageAlt={area.imageAlt}
        eyebrow={`Research · ${area.theme}`}
        title={area.title}
        description={area.overview}
        crumb="Research"
      />
      <section className="page-section">
        <Container className="page-intro">
          <h2>Exploring {area.title.toLowerCase()}</h2>
          <div className="page-intro-copy">
            <p>{area.overview}</p>
            <p>These themes are a starting point for learning about the discipline, not a description of a verified MIEPS project.</p>
            <SampleLabel>{area.sampleNote}</SampleLabel>
          </div>
        </Container>
      </section>
      <section className="page-section section-tint">
        <Container>
          <SectionHeading eyebrow="Questions and themes" title="A framework for exploration." />
          <ul className="objective-list">
            {area.objectives.map((objective) => <li key={objective}>{objective}</li>)}
          </ul>
        </Container>
      </section>
      <section className="page-section">
        <Container>
          <div className="page-intro">
            <div>
              <Eyebrow>Projects &amp; publications</Eyebrow>
              <h2>Verified work will be featured here.</h2>
            </div>
            <div className="page-intro-copy">
              <p>Project records, publications, research staff, and dates have not been supplied. No findings or contributors are fabricated.</p>
              <ButtonLink href="/research">Back to research</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      <section className="page-section section-tint">
        <Container className="page-intro">
          <div>
            <Eyebrow>Researchers</Eyebrow>
            <h2>Meet the people behind the work.</h2>
          </div>
          <div className="page-intro-copy">
            <p>
              Researcher names, biographies, and institutional affiliations
              have not been supplied. Profiles will appear here only after
              MIEPS approves the information.
            </p>
            <SampleLabel>Researcher profiles not yet supplied</SampleLabel>
          </div>
        </Container>
      </section>
    </>
  );
}
