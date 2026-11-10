"use client";

import { useState, type FormEvent } from "react";
import { site, waLink } from "@/lib/site";
import { ArrowIcon, PinIcon, TikTokIcon, WhatsAppIcon } from "./icons";

const products = ["T-shirts", "Jerseys", "2-piece sets", "Shorts", "Pants / jeans", "Jackets", "Polos", "Tank tops", "Caps / beanies", "Bags", "Other"];
const quantities = ["Just a sample", "10 – 50", "50 – 100", "100 – 300", "300+"];
const finishes = ["Embroidery", "Sublimation", "Print / heat press", "Custom labels", "Branded packaging", "Not sure yet"];
const timelines = ["As soon as possible", "Within 2 weeks", "Within a month", "Just planning ahead"];

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
        active
          ? "border-cobalt bg-cobalt text-white"
          : "border-ink/15 bg-white text-ink/80 hover:border-ink/40"
      }`}
    >
      {label}
    </button>
  );
}

export function QuoteForm() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [qty, setQty] = useState("");
  const [finish, setFinish] = useState<string[]>([]);
  const [timeline, setTimeline] = useState(timelines[0]);
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");

  const toggle = (list: string[], set: (v: string[]) => void, v: string) =>
    set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return setError("Please add your name.");
    if (items.length === 0) return setError("Pick at least one item you want made.");
    setError("");

    const lines = [
      "Hi MyFits 👋 I'd like a production quote.",
      "",
      `*Name:* ${name.trim()}`,
      brand.trim() ? `*Brand:* ${brand.trim()}` : null,
      `*Items:* ${items.join(", ")}`,
      qty ? `*Quantity:* ${qty}` : null,
      finish.length > 0 ? `*Finishing:* ${finish.join(", ")}` : null,
      `*Timeline:* ${timeline}`,
      details.trim() ? `*Details:* ${details.trim()}` : null,
      "",
      "I'll send my design/mockup here.",
    ].filter((l): l is string => l !== null);

    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="quote" className="bg-chalk py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="tag text-cobalt">05 — Get a quote</p>
          <h2 className="display mt-4 text-[clamp(2.8rem,7vw,6rem)]">
            Let&apos;s make
            <br />
            your next drop.
          </h2>
          <p className="mt-6 max-w-md text-lg text-ink/70">
            Tell us what you need in 30 seconds. Your request opens in WhatsApp
            so you can attach your design and chat directly with our team.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={waLink("Hi MyFits 👋")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-5 transition hover:border-ink/30"
            >
              <span className="grid size-12 place-items-center rounded-full bg-[#25d366]/15 text-[#1faa53]">
                <WhatsAppIcon className="size-6" />
              </span>
              <span>
                <span className="tag block text-ink/50">WhatsApp</span>
                <span className="text-lg font-semibold">{site.whatsappDisplay}</span>
              </span>
            </a>
            <a
              href={site.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-5 transition hover:border-ink/30"
            >
              <span className="grid size-12 place-items-center rounded-full bg-ink text-white">
                <TikTokIcon className="size-5" />
              </span>
              <span>
                <span className="tag block text-ink/50">TikTok</span>
                <span className="text-lg font-semibold">{site.tiktokHandle}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-5">
              <span className="grid size-12 place-items-center rounded-full bg-cobalt/10 text-cobalt">
                <PinIcon className="size-6" />
              </span>
              <span>
                <span className="tag block text-ink/50">Workshop</span>
                <span className="text-lg font-semibold">{site.location}</span>
              </span>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-3xl border border-ink/10 bg-white p-6 shadow-[0_30px_80px_-40px_rgba(11,11,12,0.35)] md:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="tag text-ink/60">Your name *</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                className="mt-2 w-full rounded-xl border border-ink/15 bg-chalk px-4 py-3 outline-none transition focus:border-cobalt focus:ring-2 focus:ring-cobalt/20"
                placeholder="Tolu Adeyemi"
              />
            </label>
            <label className="block">
              <span className="tag text-ink/60">Brand name</span>
              <input
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                autoComplete="organization"
                className="mt-2 w-full rounded-xl border border-ink/15 bg-chalk px-4 py-3 outline-none transition focus:border-cobalt focus:ring-2 focus:ring-cobalt/20"
                placeholder="Optional"
              />
            </label>
          </div>

          <fieldset className="mt-7">
            <legend className="tag text-ink/60">What do you want made? *</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {products.map((p) => (
                <Chip key={p} label={p} active={items.includes(p)} onClick={() => toggle(items, setItems, p)} />
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-7">
            <legend className="tag text-ink/60">Quantity (pieces)</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {quantities.map((q) => (
                <Chip key={q} label={q} active={qty === q} onClick={() => setQty(qty === q ? "" : q)} />
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-7">
            <legend className="tag text-ink/60">Finishing</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {finishes.map((f) => (
                <Chip key={f} label={f} active={finish.includes(f)} onClick={() => toggle(finish, setFinish, f)} />
              ))}
            </div>
          </fieldset>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="tag text-ink/60">When do you need it?</span>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="mt-2 w-full rounded-xl border border-ink/15 bg-chalk px-4 py-3 outline-none transition focus:border-cobalt focus:ring-2 focus:ring-cobalt/20"
              >
                {timelines.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <label className="block sm:row-span-2">
              <span className="tag text-ink/60">Anything else?</span>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={3}
                className="mt-2 w-full resize-none rounded-xl border border-ink/15 bg-chalk px-4 py-3 outline-none transition focus:border-cobalt focus:ring-2 focus:ring-cobalt/20"
                placeholder="Colours, fabric, sizes, reference brands…"
              />
            </label>
          </div>

          {error && (
            <p role="alert" className="mt-5 text-sm font-medium text-signal">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="group mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-ink py-4 text-base font-semibold text-white transition hover:bg-cobalt"
          >
            <WhatsAppIcon className="size-5 text-[#25d366] group-hover:text-white" />
            Send request on WhatsApp
            <ArrowIcon className="size-4 transition group-hover:translate-x-1" />
          </button>
          <p className="mt-3 text-center text-xs text-ink/50">
            We typically reply on WhatsApp. Attach your design in the chat.
          </p>
        </form>
      </div>
    </section>
  );
}
