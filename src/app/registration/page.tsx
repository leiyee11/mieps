import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Container, Eyebrow, SampleLabel } from "@/components/ui";
import { siteImages } from "@/data/site";

export const metadata: Metadata = {
  title: "Registration",
  description: "Registration information for MIEPS education and conference events.",
  alternates: { canonical: "/registration" },
};

export default function RegistrationPage() {
  return (
    <>
      <PageHero
        image={siteImages.education}
        imageAlt="Illustrative hands examining a mineral sample"
        eyebrow="Registration"
        title="Find the details before you sign up."
        description="A clear starting point for registration information about courses, activities, and conferences."
        crumb="Registration"
      />
      <section className="page-section">
        <Container className="page-intro">
          <div>
            <Eyebrow>Registration status</Eyebrow>
            <h2>No confirmed registration opportunities are listed.</h2>
          </div>
          <div className="page-intro-copy">
            <p>
              Event listings in this website preview are sample records and
              cannot be registered for. Confirmed dates, fees, eligibility,
              deadlines, and application links have not been supplied.
            </p>
            <SampleLabel>Registration information awaiting confirmation</SampleLabel>
            <p>
              Browse the <Link className="text-link" href="/education">education and activities</Link> or
              <Link className="text-link" href="/conferences"> conference archive</Link> for context.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
