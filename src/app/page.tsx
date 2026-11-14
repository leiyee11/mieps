import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  activities,
  conferences,
  homeImage,
  newsItems,
  researchAreas,
} from "@/data/site";
import { isUpcoming, formatDate } from "@/lib/dates";
import {
  ArrowLink,
  ButtonLink,
  Container,
  Eyebrow,
  ResearchCard,
  SampleLabel,
  SectionHeading,
} from "@/components/ui";
import { Reveal } from "@/components/reveal";

export const dynamic = "force-dynamic";
export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const upcoming = [
    ...activities.map((activity) => ({ ...activity, href: `/activities/${activity.slug}` })),
    ...conferences.map((activity) => ({ ...activity, href: `/conferences/${activity.slug}` })),
  ]
    .filter((activity) => isUpcoming(activity))
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 3);

  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-image">
          <Image
            src={homeImage}
            alt="Mountain ridgelines rising beneath a wide open sky"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-scrim" />
        <div className="contour-lines" aria-hidden="true" />
        <Container className="hero-content">
          <p className="hero-kicker">Myanmar Institute of Earth and Planetary Sciences</p>
          <h1 id="home-title">
            <span>Understanding Earth.</span>
            <span>Advancing <em>Knowledge.</em></span>
            <span>Building a Safer Future.</span>
          </h1>
          <p className="hero-subtitle">
            Advancing earth and planetary sciences through research, education,
            collaboration, and community engagement.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/research">Explore our research</ButtonLink>
            <ButtonLink href="/about" variant="outline">Discover MIEPS</ButtonLink>
          </div>
        </Container>
        <a className="hero-scroll" href="#introduction">
          <span>Scroll to explore</span><ArrowDown size={14} aria-hidden="true" />
        </a>
      </section>

      <section id="introduction" className="section">
        <Container className="intro-grid">
          <Reveal className="intro-visual">
            <div className="intro-visual-main">
              <Image
                src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85"
                alt="Aerial view across a green mountain landscape"
                fill
                sizes="(max-width: 760px) 90vw, 45vw"
              />
            </div>
            <div className="intro-visual-mark">
              <strong>Science for a deeper understanding of our planet.</strong>
            </div>
          </Reveal>
          <Reveal className="intro-copy">
            <Eyebrow>About MIEPS</Eyebrow>
            <h2>Science for a deeper understanding of <em>our planet.</em></h2>
            <p>
              The Myanmar Institute of Earth and Planetary Sciences advances
              earth and planetary sciences through research, education,
              collaboration, and community engagement. This site brings those
              themes together in one place.
            </p>
            <p className="sample-notice">
              Institutional history, formal mission and vision statements, and
              leadership details are not included until verified information is provided.
            </p>
            <ArrowLink href="/about">Discover the institute</ArrowLink>
          </Reveal>
        </Container>
      </section>

      <section className="section section-tint">
        <Container>
          <div className="section-topline">
            <SectionHeading
              eyebrow="Research areas"
              title="Explore the systems that shape our world."
              description="Four areas named in the project brief. These introductions are thematic, not claims about specific MIEPS projects."
            />
            <ArrowLink href="/research">View all research</ArrowLink>
          </div>
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
          <p className="research-disclaimer">Thematic descriptions are illustrative. No project, publication, or result is attributed to MIEPS.</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Featured perspective"
            title="A closer look at the forces beneath the surface."
            description="An editorial feature area for verified research, field observations, and publications."
          />
          <Reveal className="feature-grid">
            <div className="feature-image">
              <Image
                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1500&q=85"
                alt="Patterns of water meeting a rugged coastline"
                fill
                sizes="(max-width: 760px) 100vw, 55vw"
              />
            </div>
            <div className="feature-copy">
              <span className="feature-meta">Editorial feature · Sample content</span>
              <h3>Earth’s hidden landscapes, seen from a new perspective.</h3>
              <p>
                This space is reserved for a verified research story, including
                its authors, methods, findings, and publication date. No
                research findings have been invented for this preview.
              </p>
              <SampleLabel>Replace with approved research feature</SampleLabel>
              <div style={{ marginTop: 27 }}>
                <ArrowLink href="/research" light>Explore research themes</ArrowLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section section-dark">
        <Container>
          <div className="section-topline">
            <SectionHeading
              eyebrow="Education & activities"
              title="Learning through ideas, practice, and place."
              description="Courses, workshops, field activities, and public learning opportunities can be added as confirmed details become available."
              light
            />
            <ArrowLink href="/education" light>Explore education</ArrowLink>
          </div>
          <div className="event-list">
            {activities.slice(0, 2).map((activity) => (
              <div className="event-row" key={activity.slug}>
                <div className="event-date">{formatDate(activity.date)}</div>
                <div className="event-copy">
                  <h3>{activity.title}<span className="event-status">Sample</span></h3>
                  <p>{activity.category} · {activity.location}</p>
                </div>
                <Link className="event-link" href={`/activities/${activity.slug}`}>
                  Details <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
          <p className="event-note">Dates and programs above are mock records for layout demonstration, not confirmed MIEPS opportunities.</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="section-topline">
            <SectionHeading
              eyebrow="Events"
              title="Gathering around earth science."
              description="Upcoming entries are separated from the archive by their date. Sample records are explicitly identified."
            />
            <ArrowLink href="/conferences">Conference hub</ArrowLink>
          </div>
          {upcoming.length ? (
            <div className="activity-grid">
              {upcoming.map((activity) => (
                <Reveal key={activity.slug} className="activity-card">
                  <div className="activity-card-top">
                    <span className="activity-date">{formatDate(activity.date)}</span>
                    <SampleLabel>Sample event</SampleLabel>
                  </div>
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                  <p className="activity-location">{activity.location}</p>
                  <Link className="arrow-link" href={activity.href} style={{ marginTop: 18 }}>
                    View details <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="empty-note">There are no upcoming events listed.</p>
          )}
          <p className="research-disclaimer">Event listings are illustrative sample data and are not registration opportunities.</p>
        </Container>
      </section>

      <section className="section section-small">
        <Container>
          <div className="safety-panel">
            <div className="safety-copy">
              <Eyebrow>Earthquake safety</Eyebrow>
              <h2>Knowledge today. Safer communities tomorrow.</h2>
              <p>
                Explore clear, educational preparedness guidance and links to
                established public-safety resources. This website is not a
                real-time emergency alert service.
              </p>
              <ButtonLink href="/earthquake-safety">Explore safety resources</ButtonLink>
            </div>
            <ul className="safety-points">
              <li><strong>Before</strong> Prepare a plan and understand your surroundings.</li>
              <li><strong>During</strong> Follow established protective actions for your situation.</li>
              <li><strong>After</strong> Check for immediate hazards and follow official guidance.</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="section-topline">
            <SectionHeading
              eyebrow="From the institute"
              title="Ideas, learning, and updates."
              description="An editorial space for verified announcements, educational opportunities, and research stories."
            />
            <ArrowLink href="/contact">Share an inquiry</ArrowLink>
          </div>
          <div className="news-grid">
            {newsItems.map((item, index) => (
              <Reveal className="news-card" delay={index * 0.06} key={item.title}>
                <Eyebrow>{item.category}</Eyebrow>
                <SampleLabel>Content placeholder</SampleLabel>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ArrowLink href={item.href}>Explore</ArrowLink>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section-tint section-small">
        <Container className="section-topline">
          <div>
            <Eyebrow>Collaboration</Eyebrow>
            <h2 style={{ maxWidth: 650, margin: 0, fontFamily: "var(--font-display)", fontSize: "clamp(34px, 4vw, 52px)", fontWeight: 540, letterSpacing: "-.05em", lineHeight: 1.1 }}>
              Better questions emerge when disciplines meet.
            </h2>
            <p className="section-lead">MIEPS collaboration and partner information will be added when approved institutional details are available.</p>
          </div>
          <div>
            <SampleLabel>Partner names and logos not supplied</SampleLabel>
            <div style={{ marginTop: 22 }}><ArrowLink href="/about">About the institute</ArrowLink></div>
          </div>
        </Container>
      </section>
    </>
  );
}
