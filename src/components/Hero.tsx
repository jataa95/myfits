import Image from "next/image";
import { site, waLink, waMessages } from "@/lib/site";
import { ArrowIcon, TikTokIcon, WhatsAppIcon } from "./icons";
import upformBlue from "@/assets/work/upform-blue.jpg";
import laventi from "@/assets/work/laventi-tee.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink pt-28 pb-16 text-white md:pt-36 md:pb-24"
    >
      {/* grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:56px_56px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] size-[42rem] rounded-full bg-cobalt/30 blur-[140px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="tag inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-white/80">
            <span className="size-1.5 animate-pulse rounded-full bg-signal" />
            Clothing manufacturer · Apapa, Lagos
          </p>

          <h1 className="display mt-6 text-[clamp(3.4rem,10vw,8.5rem)]">
            We make
            <br />
            clothing
            <br />
            <span className="text-cobalt">for your</span> brand.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
            Send in your design — we cut, sew, print, embroider and package it.
            Tees, jerseys, 2‑piece sets, pants, jackets, caps and more, produced
            in-house in Lagos.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(waMessages.production)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-cobalt px-7 py-4 text-base font-semibold transition hover:bg-cobalt-deep"
            >
              <WhatsAppIcon className="size-5" />
              Start production on WhatsApp
            </a>
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-base font-semibold transition hover:border-white hover:bg-white hover:text-ink"
            >
              Get a quote
              <ArrowIcon className="size-4 transition group-hover:translate-x-1" />
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-7">
            <div>
              <dt className="tag text-white/50">TikTok fam</dt>
              <dd className="display mt-2 text-4xl">{site.stats.followers}</dd>
            </div>
            <div>
              <dt className="tag text-white/50">Likes</dt>
              <dd className="display mt-2 text-4xl">{site.stats.likes}</dd>
            </div>
            <div>
              <dt className="tag text-white/50">Made in</dt>
              <dd className="display mt-2 text-4xl">Lagos</dd>
            </div>
          </dl>
        </div>

        {/* Visual stack */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto aspect-[9/16] w-[72%] overflow-hidden rounded-[2rem] border border-white/15 bg-ink-2 shadow-2xl shadow-cobalt/20 lg:w-[64%]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/factory-floor.mp4"
              poster="/videos/factory-floor.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Inside the MyFits workshop: garments being cut, sewn and finished"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="tag flex items-center gap-2 text-white/90">
                <span className="size-2 rounded-full bg-signal" /> Live from the floor
              </p>
            </div>
          </div>

          <figure className="absolute -left-2 top-10 hidden w-[34%] rotate-[-7deg] overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block">
            <Image src={upformBlue} alt="Custom sublimated basketball jersey" placeholder="blur" sizes="200px" priority />
          </figure>
          <figure className="absolute -right-2 bottom-10 hidden w-[34%] rotate-[6deg] overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block">
            <Image src={laventi} alt="Branded oversized tee produced for Laventi" placeholder="blur" sizes="200px" />
          </figure>

          <a
            href={site.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-lg transition hover:scale-105"
          >
            <TikTokIcon className="size-4" />
            Watch us work · {site.tiktokHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
