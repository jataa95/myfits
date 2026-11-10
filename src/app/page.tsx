import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Production } from "@/components/Production";
import { Work } from "@/components/Work";
import { Process } from "@/components/Process";
import { Training } from "@/components/Training";
import { QuoteForm } from "@/components/QuoteForm";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Production />
        <Work />
        <Process />
        <Training />
        <QuoteForm />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
