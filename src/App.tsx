import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Pricing } from "@/components/sections/Pricing";
import { Guarantees } from "@/components/sections/Guarantees";
import { Faq } from "@/components/sections/Faq";
import { Stack } from "@/components/sections/Stack";
import { Contact } from "@/components/sections/Contact";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Aller au contenu
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Stack />
        <Pricing />
        <Guarantees />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
