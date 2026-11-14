import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="page-hero">
      <Container className="page-hero-content">
        <p className="eyebrow eyebrow-light">404 · Page not found</p>
        <h1>This path has not been mapped.</h1>
        <p>The page may have moved, or its address may be incorrect.</p>
        <Link className="button button-primary" href="/" style={{ marginTop: 26, width: "fit-content" }}>
          Return home
        </Link>
      </Container>
    </section>
  );
}
