import { waLink, waMessages } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

const steps = [
  {
    n: "01",
    title: "Send your design",
    body: "Share a sketch, mockup, tech pack or even a reference photo on WhatsApp. Tell us the item, quantity and sizes.",
  },
  {
    n: "02",
    title: "Get your quote",
    body: "We recommend fabric, finishing and construction, then send a clear price and timeline. No guesswork.",
  },
  {
    n: "03",
    title: "Approve a sample",
    body: "We make a sample so you can check fit, colour and finish before a single bulk piece is cut.",
  },
  {
    n: "04",
    title: "Production & QC",
    body: "Cut, sew, print, embroider — then every piece is checked, folded and packed, ready to sell.",
  },
  {
    n: "05",
    title: "Pickup or delivery",
    body: "Collect from our Apapa workshop or we arrange delivery to you. Then we do it again for your restock.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-bone py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="tag text-cobalt">03 — How it works</p>
          <h2 className="display mt-4 text-[clamp(2.8rem,7vw,6rem)]">
            From idea to drop
            <br />
            in 5 steps.
          </h2>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-5">
          {steps.map((s) => (
            <li key={s.n} className="reveal flex flex-col bg-chalk p-6 md:min-h-80 md:p-7">
              <span className="display text-6xl text-cobalt">{s.n}</span>
              <h3 className="display mt-auto pt-10 text-3xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-3xl bg-ink p-7 text-white md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="display text-3xl md:text-4xl">Not sure where to start?</p>
            <p className="mt-2 text-white/70">
              Start with a single sample. See the quality before you commit to bulk.
            </p>
          </div>
          <a
            href={waLink(waMessages.sample)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-bone"
          >
            <WhatsAppIcon className="size-5 text-[#1faa53]" />
            Ask about a sample
          </a>
        </div>
      </div>
    </section>
  );
}
