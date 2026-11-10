"use client";

import { useEffect, useState } from "react";
import { site, waLink, waMessages } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

const links = [
  { href: "#production", label: "Production" },
  { href: "#work", label: "Our work" },
  { href: "#process", label: "How it works" },
  { href: "#training", label: "Training" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-ink/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 text-white md:h-20 md:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label={`${site.name} home`}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/75 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#quote"
            className="hidden rounded-full border border-white/25 px-4 py-2 text-sm font-medium transition hover:border-white sm:inline-flex"
          >
            Get a quote
          </a>
          <a
            href={waLink(waMessages.production)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-bone"
          >
            <WhatsAppIcon className="size-4 text-[#1faa53]" />
            <span>Chat</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="ml-1 grid size-10 place-items-center rounded-full border border-white/20 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-0.5 w-4 bg-white transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-0.5 w-4 bg-white transition ${open ? "top-1.5 -rotate-45" : "top-2.5"}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`lg:hidden ${open ? "block" : "hidden"} h-[calc(100dvh-4rem)] bg-ink px-5 pb-10 text-white`}
      >
        <nav className="flex flex-col border-t border-white/10" aria-label="Mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="display border-b border-white/10 py-5 text-4xl"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#quote"
          onClick={() => setOpen(false)}
          className="mt-8 flex w-full items-center justify-center rounded-full bg-cobalt py-4 font-semibold"
        >
          Get a production quote
        </a>
      </div>
    </header>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className="grid size-8 place-items-center rounded-md bg-cobalt text-white">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
          {/* stylised tee */}
          <path
            d="M8 3 3 6l2 4 2-1v12h10V9l2 1 2-4-5-3c-.5 1.7-2 2.6-4 2.6S8.5 4.7 8 3Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="display text-2xl tracking-wide">
        My<span className="text-cobalt">Fits</span>
      </span>
    </span>
  );
}
