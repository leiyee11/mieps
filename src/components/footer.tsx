import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { navItems, researchAreas } from "@/data/site";
import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main">
          <div className="footer-about">
            <Link className="brand brand-footer" href="/" aria-label="MIEPS home">
              <Image
                className="brand-logo"
                src="/images/logo.png"
                alt="Myanmar Institute of Earth and Planetary Sciences"
                width={740}
                height={487}
              />
            </Link>
            <p>
              Advancing earth and planetary sciences through research, education,
              collaboration, and community engagement.
            </p>
            <span className="footer-note">Institutional details are awaiting verification. Photography is illustrative and does not document MIEPS projects or personnel.</span>
          </div>
          <div className="footer-column">
            <h2>Explore</h2>
            {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
          <div className="footer-column">
            <h2>Research areas</h2>
            {researchAreas.map((area) => <Link href={`/research/${area.slug}`} key={area.slug}>{area.title}</Link>)}
          </div>
          <div className="footer-column footer-contact">
            <h2>Get in touch</h2>
            <p>Verified contact details will be published here.</p>
            <Link className="footer-contact-link" href="/contact">Contact MIEPS <ArrowUpRight size={15} /></Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Myanmar Institute of Earth and Planetary Sciences</span>
          <span><Link href="/privacy">Privacy</Link> · Science for a deeper understanding of our planet.</span>
        </div>
      </Container>
    </footer>
  );
}
