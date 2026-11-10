const items = [
  "T-shirts",
  "Ringer tees",
  "Jerseys",
  "2-piece sets",
  "Tank tops",
  "Shorts",
  "Pants & jeans",
  "Track jackets",
  "Denim jackets",
  "Polos",
  "Caps",
  "Beanies",
  "Bags",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-ink bg-cobalt py-4 text-white" aria-label="Products we make">
      <div className="flex w-max animate-marquee">
        {row.map((item, i) => (
          <span key={i} className="display flex items-center gap-6 px-3 text-3xl md:text-4xl" aria-hidden={i >= items.length}>
            {item}
            <span className="text-white/45">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
