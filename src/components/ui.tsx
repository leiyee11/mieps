import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? "section-heading-light" : ""}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {description && <p className="section-lead">{description}</p>}
    </div>
  );
}

export function ArrowLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link className={`arrow-link ${light ? "arrow-link-light" : ""}`} href={href}>
      <span>{children}</span>
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}

export function ResearchCard({
  title,
  description,
  image,
  imageAlt,
  href,
  index,
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.07} className="research-card-wrap">
      <Link href={href} className="research-card">
        <div className="research-card-image">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
          />
          <span className="card-index">0{index + 1}</span>
          <span className="image-context-label">Illustrative image</span>
        </div>
        <div className="research-card-copy">
          <h3>{title}</h3>
          <p>{description}</p>
          <span className="card-action">
            Explore area <ArrowDownRight size={17} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function SampleLabel({ children = "Illustrative sample content" }: { children?: ReactNode }) {
  return <span className="sample-label">{children}</span>;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
}) {
  return (
    <Link className={`button button-${variant}`} href={href}>
      {children}
      <ArrowRight size={16} aria-hidden="true" />
    </Link>
  );
}
