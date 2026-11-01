"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const progressBar = document.getElementById("progress-bar");
    const nav = document.getElementById("nav");
    const navLogoImg = document.getElementById("nav-logo-img");
    const navLinks = document.getElementById("nav-links");
    const navCta = document.getElementById("nav-cta");
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");

    let ticking = false;

    function tick() {
      ticking = false;
      const y = window.scrollY;

      if (progressBar) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progressBar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
      }

      if (nav && navLogoImg && navLinks && navCta) {
        const scrolled = y > 60;
        nav.style.transition =
          "padding 0.7s ease, background 0.7s ease, border-color 0.7s ease";
        nav.style.paddingTop = scrolled ? "12px" : "24px";
        nav.style.paddingBottom = scrolled ? "12px" : "24px";
        nav.style.backdropFilter = scrolled ? "blur(14px) saturate(180%)" : "";
        nav.style.borderBottom = scrolled ? "1px solid rgba(0,0,0,0.07)" : "";
        nav.style.background = scrolled
          ? "color-mix(in oklch, var(--color-paper) 75%, transparent)"
          : "transparent";
        navLogoImg.style.color = scrolled ? "var(--color-ink)" : "var(--color-paper)";
        navLinks.style.color = scrolled
          ? "color-mix(in oklch, var(--color-ink) 80%, transparent)"
          : "color-mix(in oklch, var(--color-paper) 85%, transparent)";
        navCta.style.borderColor = scrolled
          ? "color-mix(in oklch, var(--color-ink) 40%, transparent)"
          : "color-mix(in oklch, var(--color-paper) 60%, transparent)";
        navCta.style.color = scrolled ? "var(--color-ink)" : "var(--color-paper)";
        if (mobileMenuBtn) {
          mobileMenuBtn.style.color = scrolled ? "var(--color-ink)" : "var(--color-paper)";
        }
      }

      document.querySelectorAll<HTMLImageElement>(".pimg").forEach((img) => {
        const rect = img.parentElement!.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const range = window.innerHeight / 2 + rect.height / 2;
        const offset = ((center - window.innerHeight / 2) / range) * 44;
        img.style.transform = `translate3d(0, ${offset}px, 0) scale(1.1)`;
      });
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(tick);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    tick();

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
