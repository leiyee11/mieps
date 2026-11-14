import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { ButtonLink, Container, Eyebrow, SampleLabel } from "@/components/ui";
import { conferences, homeImage } from "@/data/site";
import { formatDate } from "@/lib/dates";

export function generateStaticParams() {
  return conferences.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = conferences.find((item) => item.slug === slug);
  return event ? {
    title: event.title,
    description: event.description,
    alternates: { canonical: `/conferences/${event.slug}` },
  } : {};
}

export default async function ConferenceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = conferences.find((item) => item.slug === slug);
  if (!event) notFound();

  return (
    <>
      <PageHero
        image={homeImage}
        imageAlt="Mountain terrain used as illustrative conference imagery"
        eyebrow="Conference listing · Sample"
        title={event.title}
        description={event.description}
        crumb="Conferences"
      />
      <section className="page-section">
        <Container className="page-intro">
          <div>
            <Eyebrow>{formatDate(event.date)}</Eyebrow>
            <h2>{event.location}</h2>
          </div>
          <div className="page-intro-copy">
            <p>{event.description}</p>
            <SampleLabel>Mock conference data — not a confirmed event</SampleLabel>
            <p>Program, schedule, speaker biographies, abstract submission, and registration information have not been supplied. No registration link is active.</p>
            <ButtonLink href="/conferences">Back to conferences</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
