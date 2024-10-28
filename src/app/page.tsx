"use client";

import { HomeSection } from "./_components/Home/HomeSection";
import { AboutUs } from "./_components/About/AbousUs";
import { Contact } from "./_components/Contact/Contact";
import { Footer } from "./_components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <div className="relative z-10">
        <HomeSection />
        <AboutUs />
        <Contact />
      </div>
      <div className="w-screen h-[30vh] bg-neutral-100 relative z-0">
        <Footer />
      </div>
    </main>
  );
}
