import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import "./globals.css";

const siteUrl = "https://mieps-edu.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MIEPS | Myanmar Institute of Earth and Planetary Sciences",
    template: "%s | MIEPS",
  },
  description:
    "Advancing earth and planetary sciences through research, education, collaboration, and community engagement.",
  openGraph: {
    type: "website",
    siteName: "Myanmar Institute of Earth and Planetary Sciences",
    title: "MIEPS | Understanding Earth. Advancing Knowledge.",
    description:
      "Explore earth and planetary sciences, research, education, and community learning.",
    url: siteUrl,
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    name: "Myanmar Institute of Earth and Planetary Sciences",
    alternateName: "MIEPS",
    url: siteUrl,
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navigation />
        <main id="main-content"><PageTransition>{children}</PageTransition></main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
