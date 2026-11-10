import Image from "next/image";
import { site, waLink, waMessages } from "@/lib/site";
import { Logo } from "./Header";
import { TikTokIcon, WhatsAppIcon } from "./icons";
import trackTop from "@/assets/work/track-top.jpg";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      {/* Final CTA */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="tag text-white/50">Your brand. Our machines.</p>
            <h2 className="display mt-4 text-[clamp(3.2rem,9vw,8rem)]">
              Ready when
              <br />
              <span className="text-cobalt">you are.</span>
            </h2>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(waMessages.production)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-cobalt px-7 py-4 font-semibold transition hover:bg-cobalt-deep"
              >
                <WhatsAppIcon className="size-5" />
                Start production
              </a>
              <a
                href={waLink(waMessages.training)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 font-semibold transition hover:bg-white hover:text-ink"
              >
                Join the training
              </a>
            </div>
          </div>
          <div className="relative mx-auto hidden aspect-[3/4] w-full max-w-xs rotate-3 overflow-hidden rounded-3xl border-4 border-white/10 lg:block">
            <Image src={trackTop} alt="Custom track jacket in production" placeholder="blur" fill sizes="320px" className="object-cover" />
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <Logo />
          <p className="mt-3 max-w-sm text-sm text-white/50">
            Clothing manufacturer &amp; training studio. {site.location}.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
          <a href="#production" className="hover:text-white">Production</a>
          <a href="#work" className="hover:text-white">Our work</a>
          <a href="#process" className="hover:text-white">How it works</a>
          <a href="#training" className="hover:text-white">Training</a>
          <a href="#quote" className="hover:text-white">Get a quote</a>
        </nav>
        <div className="flex gap-3">
          <a href={waLink("Hi MyFits 👋")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid size-11 place-items-center rounded-full border border-white/15 transition hover:bg-white hover:text-ink">
            <WhatsAppIcon className="size-5" />
          </a>
          <a href={site.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="grid size-11 place-items-center rounded-full border border-white/15 transition hover:bg-white hover:text-ink">
            <TikTokIcon className="size-5" />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © MyFits. Made in Lagos, Nigeria.
      </div>
    </footer>
  );
}
