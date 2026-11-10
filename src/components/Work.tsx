import Image from "next/image";
import { site } from "@/lib/site";
import { Reel } from "./Reel";
import { TikTokIcon } from "./icons";
import upformRed from "@/assets/work/upform-red.jpg";
import raglan from "@/assets/work/raglan.jpg";
import numbers from "@/assets/work/numbers.jpg";
import trackJacket from "@/assets/work/track-jacket.jpg";
import denimJacket from "@/assets/work/denim-jacket.jpg";
import jorts from "@/assets/work/jorts.jpg";
import tank from "@/assets/work/tank.jpg";
import jeansPatch from "@/assets/work/jeans-patch.jpg";

const reels = [
  { src: "/videos/made-for-brands.mp4", poster: "/videos/made-for-brands.jpg", title: "Made for brands", caption: "Jerseys, raglans, denim & caps" },
  { src: "/videos/send-your-design.mp4", poster: "/videos/send-your-design.jpg", title: "Send your design", caption: "Sublimation, embroidery & packing" },
  { src: "/videos/polo-drop.mp4", poster: "/videos/polo-drop.jpg", title: "The polo drop", caption: "Zip polos with contrast collars" },
];

const gallery = [
  { img: upformRed, alt: "Red and white sublimated basketball jerseys for Upform" },
  { img: trackJacket, alt: "Red, black and white custom track jacket" },
  { img: numbers, alt: "Black jersey with stitched number 25" },
  { img: raglan, alt: "Black and white raglan tee with badge" },
  { img: denimJacket, alt: "Dark denim trucker jacket" },
  { img: jorts, alt: "Light-wash denim jorts" },
  { img: tank, alt: "White graphic tank top" },
  { img: jeansPatch, alt: "Jeans with embroidered patch detail" },
];

const madeFor = ["Upform", "Laventi", "Arabix", "SJE Atelier", "Blaq Storm", "W.O.G", "Cashwood"];

export function Work() {
  return (
    <section id="work" className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="tag text-cobalt">02 — Fresh off the machines</p>
            <h2 className="display mt-4 text-[clamp(2.8rem,7vw,6rem)]">Our work</h2>
            <p className="mt-5 max-w-xl text-lg text-white/70">
              Real pieces, real brands, filmed in our workshop. This is what your
              order looks like before it ships.
            </p>
          </div>
          <a
            href={site.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/25 px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-ink md:self-end"
          >
            <TikTokIcon className="size-4" />
            More on TikTok
          </a>
        </div>

        <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {reels.map((r) => (
            <div key={r.src} className="w-[78%] shrink-0 snap-center sm:w-[46%] md:w-auto">
              <Reel {...r} />
            </div>
          ))}
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 md:mt-10 md:gap-5">
          {gallery.map((g, i) => (
            <li
              key={i}
              className={`reveal relative aspect-[3/4] overflow-hidden rounded-2xl ${i % 2 === 1 ? "sm:mt-8" : ""}`}
            >
              <Image src={g.img} alt={g.alt} placeholder="blur" fill sizes="(min-width: 640px) 25vw, 50vw" className="object-cover transition duration-700 hover:scale-105" />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20 border-y border-white/10 py-6">
        <p className="tag mb-4 text-center text-white/50">Pieces we&apos;ve produced for</p>
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee-rev">
            {[...madeFor, ...madeFor].map((b, i) => (
              <span
                key={i}
                aria-hidden={i >= madeFor.length}
                className="display px-8 text-4xl text-white/30 transition hover:text-white md:text-5xl"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
