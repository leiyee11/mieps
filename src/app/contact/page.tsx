import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Myanmar Institute of Earth and Planetary Sciences.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <Container className="page-hero-content">
          <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Contact</span></div>
          <Eyebrow light>Contact</Eyebrow>
          <h1>Start a conversation.</h1>
          <p>For research, education, and general inquiries. Verified contact information is not yet available.</p>
        </Container>
      </section>
      <section className="page-section">
        <Container className="contact-grid">
          <div className="contact-copy">
            <Eyebrow>Get in touch</Eyebrow>
            <h2>We welcome thoughtful questions about earth science.</h2>
            <p>
              This contact form is a frontend demonstration only. It validates
              entries in your browser and does not send or store a message.
            </p>
            <div className="sample-notice">
              To enable real inquiries, configure an approved MIEPS email
              address and a secure form-submission endpoint. No fake contact
              information is shown.
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
