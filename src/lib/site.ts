export const site = {
  name: "MyFits",
  legalName: "MyFits Clothing Manufacturer",
  tagline: "Clothing manufacturer for brands in Lagos",
  description:
    "MyFits is a Lagos clothing manufacturer. Send in your design and we cut, sew, print, embroider and package tees, jerseys, 2-piece sets, pants, jackets, caps and more for your brand. We also train new tailors and fashion entrepreneurs.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://myfits.ng",
  whatsapp: "2349063794294",
  whatsappDisplay: "+234 906 379 4294",
  tiktok: "https://www.tiktok.com/@my.fits1",
  tiktokHandle: "@my.fits1",
  location: "Apapa, Lagos, Nigeria",
  stats: {
    followers: "43.7K",
    likes: "673K",
  },
} as const;

/** Build a wa.me link with a pre-filled message. */
export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  production:
    "Hi MyFits 👋 I have a clothing brand and I'd like to start production. Can we talk?",
  training:
    "Hi MyFits 👋 I'm interested in your fashion/tailoring training. When is the next intake?",
  sample:
    "Hi MyFits 👋 I'd like to make a sample piece for my brand first. How does it work?",
};
