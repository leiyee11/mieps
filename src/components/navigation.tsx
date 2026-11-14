"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { navItems } from "@/data/site";

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const solid = scrolled || pathname !== "/";
  const exploreActive = navItems.slice(2, 6).some(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
  );

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 28);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.querySelector<HTMLDetailsElement>(".nav-dropdown")?.removeAttribute("open");
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className={`site-header ${solid ? "site-header-solid" : ""}`}>
      <nav className="nav-shell container" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="MIEPS home">
          <Image
            className="brand-logo"
            src="/images/logo.png"
            alt="Myanmar Institute of Earth and Planetary Sciences"
            width={740}
            height={487}
            priority
          />
        </Link>

        <div className="desktop-nav">
          {navItems.slice(0, 2).map((item) => (
            <Link
              className={`nav-link ${pathname === item.href || pathname.startsWith(`${item.href}/`) ? "nav-link-active" : ""}`}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <details className="nav-dropdown">
            <summary className={`nav-link nav-dropdown-trigger ${exploreActive ? "nav-link-active" : ""}`}>
              Explore <ChevronDown size={14} aria-hidden="true" />
            </summary>
            <div className="nav-dropdown-panel">
              {navItems.slice(2, 6).map((item) => (
                <Link
                  href={item.href}
                  className="nav-dropdown-link"
                  onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          <Link
            className={`nav-link ${pathname === "/contact" ? "nav-link-active" : ""}`}
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Contact
          </Link>
        </div>

        <Link className="nav-cta" href="/research">
          Explore research <ArrowRight size={15} aria-hidden="true" />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.24 }}
          >
            <div className="mobile-menu-inner container">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035 }}
                >
                  <Link
                    href={item.href}
                    className="mobile-nav-link"
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                    <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
