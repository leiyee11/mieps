import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { ButtonLink, Container, Eyebrow, SampleLabel } from "@/components/ui";
import { activities, homeImage } from "@/data/site";
import { formatDate } from "@/lib/dates";

export function generateStaticParams() {
  return activities.map((activity) => ({ slug: activity.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const activity = activities.find((item) => item.slug === slug);
  return activity ? {
    title: activity.title,
    description: activity.description,
    alternates: { canonical: `/activities/${activity.slug}` },
  } : {};
}

export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = activities.find((item) => item.slug === slug);
  if (!activity) notFound();

  return (
    <>
      <PageHero
        image={homeImage}
        imageAlt="Earth science landscape used as illustrative event imagery"
        eyebrow={`Education & activities · ${activity.category}`}
        title={activity.title}
        description={activity.description}
        crumb="Education & activities"
      />
      <section className="page-section">
        <Container className="page-intro">
          <div>
            <Eyebrow>Activity listing · Sample</Eyebrow>
            <h2>{formatDate(activity.date)}</h2>
          </div>
          <div className="page-intro-copy">
            <p>{activity.description}</p>
            <p>Location: {activity.location}</p>
            <SampleLabel>Mock activity data — not a confirmed opportunity</SampleLabel>
            <p>Registration information and participation details have not been supplied.</p>
            <ButtonLink href="/education">Back to education &amp; activities</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
