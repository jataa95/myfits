import Image, { type StaticImageData } from "next/image";
import { waLink } from "@/lib/site";
import { ArrowIcon } from "./icons";
import boxyTees from "@/assets/work/boxy-tees.jpg";
import footballJersey from "@/assets/work/football-jersey.jpg";
import shortsRack from "@/assets/work/shorts-rack.jpg";
import jeans from "@/assets/work/jeans.jpg";
import varsityJacket from "@/assets/work/varsity-jacket.jpg";
import poloBlue from "@/assets/work/polo-blue.jpg";
import crownCaps from "@/assets/work/crown-caps.jpg";
import redTank from "@/assets/work/red-tank.jpg";
import crest from "@/assets/work/embroidered-crest.jpg";
import sublimation from "@/assets/work/sublimation.jpg";
import heatPress from "@/assets/work/heat-press.jpg";
import packaging from "@/assets/work/packaging.jpg";

type Category = { name: string; note: string; img: StaticImageData; alt: string };

const categories: Category[] = [
  { name: "Tees", note: "Boxy, oversized, ringer, raglan", img: boxyTees, alt: "Rack of boxy white and black branded tees" },
  { name: "Jerseys", note: "Football, basketball, sublimated", img: footballJersey, alt: "Custom football jersey held up in the workshop" },
  { name: "2-piece sets", note: "Shorts & top, joggers & top", img: shortsRack, alt: "Matching white shorts on a rail" },
  { name: "Pants & denim", note: "Jeans, jorts, cargos, joggers", img: jeans, alt: "Light-wash jeans with appliqué patch" },
  { name: "Jackets", note: "Varsity, track, denim, windbreaker", img: varsityJacket, alt: "Yellow and green custom jacket" },
  { name: "Polos", note: "Zip polos, contrast collars", img: poloBlue, alt: "Blue zip polo with contrast white collar" },
  { name: "Tanks & vests", note: "Basketball tanks, ribbed vests", img: redTank, alt: "Red tank top with graphic print" },
  { name: "Caps & beanies", note: "Trucker, snapback, sublimated beanies", img: crownCaps, alt: "Trucker caps with embroidered crown logo" },
];

const finishes: { name: string; pos?: string; desc: string; img: StaticImageData; alt: string }[] = [
  { name: "Embroidery", pos: "50% 30%", desc: "Crests, logos, chain-stitch and patch work that feels premium in hand.", img: crest, alt: "Close-up of an embroidered crest" },
  { name: "Sublimation", desc: "All-over, edge-to-edge prints that won’t crack or peel — perfect for jerseys.", img: sublimation, alt: "Stack of sublimation-printed pieces" },
  { name: "Heat press & transfers", desc: "Sharp graphics, numbers and names, pressed clean on any colour.", img: heatPress, alt: "Heat press machine with printed transfers" },
  { name: "Labels & packaging", desc: "Branded poly bags, neck labels and finishing so it's ready to sell.", img: packaging, alt: "Finished garments packed in branded poly bags" },
];

export function Production() {
  return (
    <section id="production" className="bg-chalk py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="tag text-cobalt">01 — Production for brands</p>
            <h2 className="display mt-4 text-[clamp(2.8rem,7vw,6rem)]">
              What we make
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-ink/70">
              From your first drop to your restock, we produce the full range —
              built to your design, your colours and your label.
            </p>
          </div>
          <a
            href="#quote"
            className="group inline-flex items-center gap-2 self-start rounded-full bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-cobalt md:self-end"
          >
            Price my order
            <ArrowIcon className="size-4 transition group-hover:translate-x-1" />
          </a>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {categories.map((c) => (
            <li key={c.name} className="reveal">
              <a
                href={waLink(`Hi MyFits 👋 I'd like a quote for ${c.name.toLowerCase()} for my brand.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-ink"
              >
                <Image
                  src={c.img}
                  alt={c.alt}
                  placeholder="blur"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white md:p-5">
                  <h3 className="display text-3xl md:text-4xl">{c.name}</h3>
                  <p className="mt-1 text-xs text-white/75 md:text-sm">{c.note}</p>
                  <span className="tag mt-3 inline-flex items-center gap-1.5 text-white/90 opacity-100 transition md:opacity-0 md:group-hover:opacity-100">
                    Get a quote <ArrowIcon className="size-3.5" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* Finishes */}
        <div className="mt-24 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="tag text-cobalt">In-house finishing</p>
            <h3 className="display mt-4 text-5xl md:text-6xl">
              Every detail,
              <br />
              under one roof.
            </h3>
            <p className="mt-5 max-w-md text-ink/70">
              Cutting, sewing, printing, embroidery and packing all happen in our
              Apapa workshop — so you get tighter quality control, fewer
              middlemen and faster turnaround.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Cut & sew", "Pattern making", "Sampling", "Bulk runs", "Custom sizing", "QC on every piece"].map((t) => (
                <li key={t} className="tag rounded-full border border-ink/15 px-3 py-1.5 text-ink/80">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {finishes.map((f, i) => (
              <li
                key={f.name}
                className={`reveal overflow-hidden rounded-2xl border border-ink/10 bg-white ${i % 2 === 1 ? "sm:translate-y-10" : ""}`}
              >
                <div className="relative aspect-[4/3]">
                  <Image src={f.img} alt={f.alt} placeholder="blur" fill sizes="(min-width: 640px) 30vw, 100vw" className="object-cover" style={{ objectPosition: f.pos ?? "50% 50%" }} />
                </div>
                <div className="p-5">
                  <h4 className="display text-3xl">{f.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
