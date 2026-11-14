import type { Metadata } from "next";
import { ButtonLink, Container, Eyebrow, SectionHeading, SampleLabel } from "@/components/ui";
import { homeImage } from "@/data/site";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About MIEPS",
  description: "Learn about the Myanmar Institute of Earth and Planetary Sciences.",
  alternates: { canonical: "/about" },
};

const principles = [
  ["Scientific inquiry", "A commitment to careful observation, evidence, and continued learning."],
  ["Education", "Making earth and planetary science accessible to learners and communities."],
  ["Collaboration", "Creating room for exchange across disciplines and communities."],
  ["Public engagement", "Connecting scientific knowledge with questions that matter to society."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={homeImage}
        imageAlt="Mountain terrain beneath a broad sky"
        eyebrow="About the institute"
        title="Science grounded in curiosity about our planet."
        description="An introduction to the Myanmar Institute of Earth and Planetary Sciences, with institutional details kept honest and ready to be completed."
      />
      <section className="page-section">
        <Container className="page-intro">
          <h2>About MIEPS</h2>
          <div className="page-intro-copy">
            <p>
              The Myanmar Institute of Earth and Planetary Sciences (MIEPS)
              advances earth and planetary sciences through research,
              education, collaboration, and community engagement.
            </p>
            <p>
              This institutional profile uses only information in the project
              brief. Historical background, governance, and organizational
              details require confirmation before they can be published.
            </p>
            <SampleLabel>Background details awaiting verified source material</SampleLabel>
          </div>
        </Container>
      </section>
      <section className="page-section section-tint">
        <Container>
          <SectionHeading eyebrow="Purpose" title="A clear foundation for learning and discovery." />
          <div className="two-column">
            <article className="info-card">
              <Eyebrow>Vision</Eyebrow>
              <h2>Placeholder for the approved MIEPS vision</h2>
              <p>The institute’s formal vision statement has not been supplied. Add the approved wording here.</p>
            </article>
            <article className="info-card">
              <Eyebrow>Mission</Eyebrow>
              <h2>Research, education, collaboration, engagement</h2>
              <p>The brief describes these as MIEPS’s focus. A formal mission statement has not been supplied.</p>
            </article>
          </div>
        </Container>
      </section>
      <section className="page-section">
        <Container>
          <SectionHeading eyebrow="Core values" title="Principles for how we learn and work." />
          <div className="activity-grid">
            {principles.map(([title, description], index) => (
              <article className="info-card" key={title}>
                <span className="activity-date">0{index + 1}</span>
                <h3 style={{ marginTop: 13 }}>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className="research-disclaimer">These are design-level principles derived from the project brief, not a quoted or approved MIEPS values statement.</p>
        </Container>
      </section>
      <section className="page-section section-tint">
        <Container className="page-intro">
          <div>
            <Eyebrow>Strategic objectives</Eyebrow>
            <h2>Institutional priorities belong to MIEPS.</h2>
          </div>
          <div className="page-intro-copy">
            <p>
              Approved strategic objectives have not been supplied. This
              section is reserved for institute-approved priorities and
              measurable commitments.
            </p>
            <SampleLabel>Strategic objectives awaiting confirmation</SampleLabel>
          </div>
        </Container>
      </section>
      <section className="page-section section-tint">
        <Container className="page-intro">
          <div>
            <Eyebrow>Governance &amp; collaboration</Eyebrow>
            <h2>People and partnerships, represented accurately.</h2>
          </div>
          <div className="page-intro-copy">
            <p>
              Names, portraits, titles, biographies, affiliations, strategic
              objectives, and institutional partners have not been supplied.
              No board members, leaders, or partner logos are invented here.
            </p>
            <SampleLabel>Advisory board and leadership profiles not yet supplied</SampleLabel>
            <div style={{ marginTop: 25 }}>
              <ButtonLink href="/contact" variant="primary">Contact the institute</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
