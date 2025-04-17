import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Integration from "@/components/sections/Integration";
import CTA from "@/components/sections/CTA";
import { AnimatedBackground } from "@/components/ui/animated-background";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      {/* <Header /> */}
      <main className="flex-1">
        <Hero />
        {/* <Features /> */}
        {/* <Integration /> */}
        {/* <CTA /> */}
      </main>
      <Footer />
    </div>
  );
}
