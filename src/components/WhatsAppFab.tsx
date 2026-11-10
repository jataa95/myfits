import { waLink, waMessages } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFab() {
  return (
    <a
      href={waLink(waMessages.production)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MyFits on WhatsApp"
      className="group fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full bg-[#25d366] p-4 text-white shadow-[0_12px_40px_-8px_rgba(37,211,102,0.7)] transition hover:scale-105 md:right-6 md:bottom-6"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25d366]/40 motion-reduce:hidden md:hidden" />
      <WhatsAppIcon className="size-7" />
      <span className="hidden pr-1 font-semibold md:inline">Chat with us</span>
    </a>
  );
}
