import type { Metadata } from "next";
import { ActivityBrowser } from "@/components/activity-browser";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeading } from "@/components/ui";
import { conferences, siteImages } from "@/data/site";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Conferences",
  description: "Conference information and an archive of earth-science events.",
  alternates: { canonical: "/conferences" },
};

export default function ConferencesPage() {
  return (
    <>
      <PageHero
        image={siteImages.conferences}
        imageAlt="Illustrative strata visible in an exposed rock face"
        eyebrow="Conferences"
        title="Ideas move forward when we meet."
        description="Explore current listings and archived conferences. Sample records are separated by date and are not confirmed MIEPS events."
        crumb="Conferences"
      />
      <section className="page-section section-tint">
        <Container>
          <SectionHeading
            eyebrow="Conference hub"
            title="A shared space for scientific exchange."
            description="Conference programs, schedules, speakers, abstract submission, and registration details are structured for future verified information."
          />
          <ActivityBrowser items={conferences} detailPrefix="/conferences" archiveLabel="Previous conferences" />
        </Container>
      </section>
    </>
  );
}
