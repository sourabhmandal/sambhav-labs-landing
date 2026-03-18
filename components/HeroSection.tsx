import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type HeroSectionProps = {
  headline: string;
};

export default function HeroSection({ headline }: HeroSectionProps) {
  const handleExploreProducts = () => {
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="grid-bg relative overflow-hidden border-b border-black px-6 py-20 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="stagger-1 mb-4 fade-in">
          <Badge
            variant="outline"
            className="mono rounded-none border-black px-2 py-0.5 text-xs text-black"
          >
            Research Lab · SaaS Studio
          </Badge>
        </div>
        <h1 className="stagger-2 sans mb-6 text-4xl leading-tight font-semibold tracking-tight fade-in md:text-6xl">
          {headline}
          <span className="blink">_</span>
        </h1>
        <p className="stagger-3 sans mb-10 max-w-xl text-base leading-relaxed text-neutral-500 fade-in md:text-lg">
          Sambhav Labs is an independent lab building Open-Source
          tools and SaaS products to make AI accessible to businesses.
        </p>
        <div className="stagger-4 flex flex-wrap items-center gap-3 fade-in">
          <Button className="mono h-9 rounded-none bg-black px-5 text-xs text-white hover:bg-neutral-800" onClick={handleExploreProducts}>
            Explore Products
          </Button>
          {/* <Button
            variant="ghost"
            className="mono h-9 px-4 text-xs text-neutral-500 hover:text-black"
          >
            Read the research →
          </Button> */}
        </div>
      </div>
      <div className="absolute right-6 bottom-6 hidden md:block">
        <span className="mono text-xs tracking-widest text-neutral-300 uppercase">
          est. 2021
        </span>
      </div>
    </section>
  );
}
