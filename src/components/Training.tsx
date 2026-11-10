import Image from "next/image";
import { waLink, waMessages } from "@/lib/site";
import { CheckIcon, WhatsAppIcon } from "./icons";
import cutting from "@/assets/work/cutting.jpg";
import overlock from "@/assets/work/overlock.jpg";
import sewing from "@/assets/work/sewing.jpg";

const tracks = [
  {
    level: "Beginner",
    title: "Sewing foundations",
    points: ["Taking body measurements", "Machine handling & safety", "Your first tee, shorts & tank"],
  },
  {
    level: "Intermediate",
    title: "Pattern & cutting",
    points: ["Pattern drafting & grading", "Fabric layout & cutting", "Fits: boxy, oversized, slim"],
  },
  {
    level: "Advanced",
    title: "Industrial production",
    points: ["Overlock & industrial machines", "Finishing, pressing & QC", "Producing in bulk, on time"],
  },
  {
    level: "Business",
    title: "Start your clothing brand",
    points: ["Costing & pricing a piece", "Sourcing fabric in Lagos", "Planning your first drop"],
  },
];

const perks = [
  "Learn inside a working factory, around real client orders",
  "Hands-on from day one",
  "Train on industrial machines, not just home machines",
  "Learn the business side, not just the stitching",
];

export function Training() {
  return (
    <section id="training" className="relative overflow-hidden bg-cobalt py-20 text-white md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-15 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="tag text-white/75">04 — MyFits training</p>
            <h2 className="display mt-4 text-[clamp(2.8rem,7vw,6rem)]">
              Learn the craft.
              <br />
              <span className="text-ink">Build a career.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Our training takes you from threading your first needle to running
              production — taught by the same team that makes clothing for
              brands every day.
            </p>
            <ul className="mt-8 space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-white text-cobalt">
                    <CheckIcon className="size-3.5" />
                  </span>
                  <span className="text-white/90">{p}</span>
                </li>
              ))}
            </ul>
            <a
              href={waLink(waMessages.training)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-semibold transition hover:bg-ink-2"
            >
              <WhatsAppIcon className="size-5 text-[#25d366]" />
              Ask about the next intake
            </a>
          </div>

          <div className="relative grid grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-3xl border-4 border-white/20">
              <Image src={cutting} alt="Trainee cutting fabric from a pattern on the cutting table" placeholder="blur" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
            <div className="grid gap-4">
              <div className="relative aspect-square overflow-hidden rounded-3xl border-4 border-white/20">
                <Image src={overlock} alt="Hands guiding fabric through an overlock machine" placeholder="blur" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-3xl border-4 border-white/20">
                <Image src={sewing} alt="Sewing a garment on an industrial machine" placeholder="blur" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map((t) => (
            <li key={t.title} className="reveal stitch rounded-3xl bg-white p-7 text-ink">
              <p className="tag text-cobalt">{t.level}</p>
              <h3 className="display mt-3 text-3xl">{t.title}</h3>
              <ul className="mt-5 space-y-2 text-sm text-ink/75">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-cobalt">—</span>
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
