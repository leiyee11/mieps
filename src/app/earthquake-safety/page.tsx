import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { homeImage } from "@/data/site";

export const metadata: Metadata = {
  title: "Earthquake Safety",
  description: "Educational earthquake preparedness resources and guidance.",
  alternates: { canonical: "/earthquake-safety" },
};

const resources = [
  { title: "Ready.gov — Earthquakes", href: "https://www.ready.gov/earthquakes" },
  { title: "USGS — Earthquake Hazards Program", href: "https://www.usgs.gov/programs/earthquake-hazards" },
  { title: "FEMA — Earthquake Risk", href: "https://www.fema.gov/emergency-managers/risk-management/earthquake" },
];

export default function EarthquakeSafetyPage() {
  return (
    <>
      <PageHero
        image={homeImage}
        imageAlt="Mountain landscape used as illustrative educational page imagery"
        eyebrow="Earthquake safety"
        title="Knowledge today. Safer communities tomorrow."
        description="Clear, calm educational information about earthquakes and preparedness. This page is not an emergency alert service."
        crumb="Earthquake safety"
      />
      <section className="page-section">
        <Container>
          <div className="safety-callout">
            Educational overview only. Conditions and recommended actions vary by location and situation. Follow local emergency management instructions and consult authoritative guidance. This website does not provide real-time earthquake alerts.
          </div>
          <div className="page-intro" style={{ marginTop: 46 }}>
            <div>
              <Eyebrow>Understanding earthquakes</Eyebrow>
              <h2>Energy released within the Earth travels as seismic waves.</h2>
            </div>
            <div className="page-intro-copy">
              <p>
                Earthquakes happen when accumulated stress causes rocks
                underground to move suddenly. The released energy travels
                through the Earth as seismic waves. Their effects depend on
                factors such as the event, local ground conditions, and
                building resilience.
              </p>
              <p>
                Earthquake monitoring improves scientific understanding, but
                exact earthquake timing and location cannot currently be
                predicted. For current local advice, consult official sources.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 50 }}>
            <SectionHeading
              eyebrow="Preparedness basics"
              title="Practical steps before, during, and after shaking."
              description="General preparedness reminders. Consult the linked official resources for detailed, location-appropriate advice."
            />
          </div>
          <div className="safety-step-grid">
            <article className="safety-step">
              <span>01</span>
              <h2>Before</h2>
              <p>Learn how to protect yourself where you live, work, and study. Make a household communication plan, identify safer places, and secure heavy items where practical.</p>
            </article>
            <article className="safety-step">
              <span>02</span>
              <h2>During</h2>
              <p>If shaking begins, follow the protective action recommended by your local emergency authority. Guidance commonly emphasizes getting low, taking cover, and holding on when indoors.</p>
            </article>
            <article className="safety-step">
              <span>03</span>
              <h2>After</h2>
              <p>Check for injuries and immediate hazards. Avoid damaged structures and follow local officials for updates, aftershock information, and instructions.</p>
            </article>
          </div>
        </Container>
      </section>
      <section className="page-section section-tint">
        <Container>
          <SectionHeading
            eyebrow="Further learning"
            title="Continue with established public-safety sources."
            description="These external resources are provided for general educational use, not as MIEPS-authored guidance."
          />
          <div className="resource-links">
            {resources.map((resource) => (
              <a className="resource-link" href={resource.href} target="_blank" rel="noreferrer" key={resource.href}>
                {resource.title}<ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="research-disclaimer">No MIEPS-authored downloadable guides have been supplied for this preview.</p>
        </Container>
      </section>
    </>
  );
}
