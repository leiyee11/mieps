import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  crumb,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  crumb?: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-image">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" />
      </div>
      <Container className="page-hero-content">
        {crumb && <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>{crumb}</span></div>}
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{description}</p>
      </Container>
    </section>
  );
}
