import type { Metadata } from "next";
import { ActivityBrowser } from "@/components/activity-browser";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { activities, homeImage } from "@/data/site";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Education & Activities",
  description: "Explore educational activities and learning opportunities.",
  alternates: { canonical: "/education" },
};

export default function EducationPage() {
  return (
    <>
      <PageHero
        image={homeImage}
        imageAlt="Mountain landscape in soft afternoon light"
        eyebrow="Education & activities"
        title="Learning about Earth, together."
        description="A place for courses, training, workshops, field trips, seminars, public lectures, and student opportunities."
        crumb="Education & activities"
      />
      <section className="page-section">
        <Container>
          <SectionHeading
            eyebrow="Learning opportunities"
            title="From the field to the classroom."
            description="Use the filters to explore sample listings. Verified programs, dates, locations, and registration links have not been provided."
          />
          <ActivityBrowser items={activities} detailPrefix="/activities" />
        </Container>
      </section>
    </>
  );
}
