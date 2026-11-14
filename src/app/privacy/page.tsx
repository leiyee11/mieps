import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container, Eyebrow } from "@/components/ui";
import { homeImage } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for this MIEPS website preview.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        image={homeImage}
        imageAlt="Mountain landscape used as illustrative page imagery"
        eyebrow="Privacy"
        title="A clear note on this preview."
        description="How this website preview handles the information you provide."
        crumb="Privacy"
      />
      <section className="page-section">
        <Container className="page-intro">
          <div>
            <Eyebrow>Website preview</Eyebrow>
            <h2>Designed to demonstrate, not collect.</h2>
          </div>
          <div className="page-intro-copy">
            <p>
              The contact form validates entered information in your browser
              only. It does not transmit or store form contents. No analytics
              or account features are implemented in this preview.
            </p>
            <p>
              Illustrative photography is delivered from Unsplash image
              servers, which may process ordinary connection information when
              a browser requests an image. Refer to the provider’s privacy
              information for details.
            </p>
            <p>
              Before a production launch, MIEPS should review and approve a
              privacy notice that reflects the final hosting, analytics,
              cookies, and contact-form services in use.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
