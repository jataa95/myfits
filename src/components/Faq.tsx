const faqs = [
  {
    q: "What's your minimum order quantity?",
    a: "It depends on the item and the finishing. We're happy to start with a sample so you can see the quality first, then scale to bulk. Send your design and quantity on WhatsApp and we'll advise.",
  },
  {
    q: "Can I order a sample before bulk production?",
    a: "Yes — and we recommend it. A sample lets you approve the fit, fabric, colour and finish before we cut your full order.",
  },
  {
    q: "I only have an idea, not a design. Can you help?",
    a: "Absolutely. Send a sketch, a reference photo or a description. We'll guide you on fabric, cut and finishing so the final piece matches what you have in mind.",
  },
  {
    q: "How long does production take?",
    a: "Timelines depend on the quantity and finishing. You'll get a clear timeline with your quote, before you pay — so you can plan your drop with confidence.",
  },
  {
    q: "Where are you located? Do you deliver?",
    a: "Our workshop is in Apapa, Lagos. You can pick up your order or we can arrange delivery to you.",
  },
  {
    q: "What is your refund policy?",
    a: "Every order is custom-made to your design, so we don't offer refunds. That's exactly why we confirm every detail and sample with you before production starts.",
  },
  {
    q: "How do I join the training?",
    a: "Message us on WhatsApp to ask about the next intake, schedule and fees. Beginners are welcome — no experience needed.",
  },
];

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="bg-bone py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="tag text-cobalt">06 — FAQ</p>
          <h2 className="display mt-4 text-[clamp(2.8rem,7vw,6rem)]">
            Good
            <br />
            questions.
          </h2>
        </div>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-2">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-4 text-lg font-semibold md:text-xl">
                {f.q}
                <span className="faq-icon grid size-9 shrink-0 place-items-center rounded-full border border-ink/15 text-xl transition">
                  +
                </span>
              </summary>
              <p className="pb-5 pr-12 leading-relaxed text-ink/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
