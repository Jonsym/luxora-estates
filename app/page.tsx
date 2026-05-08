import { About } from "@/components/sections/about";
import { Collections } from "@/components/sections/collections";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Editorial } from "@/components/sections/editorial";
import { FeaturedProperties } from "@/components/sections/featured-properties";
import { Hero } from "@/components/sections/hero";
import { Signature } from "@/components/sections/signature";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <FeaturedProperties />
      <Collections />
      <About />
      <Stats />
      <Signature />
      <Testimonials />
      <Editorial />
      <CtaBanner />
    </main>
  );
}
