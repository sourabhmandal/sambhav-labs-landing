import { Button } from "@/components/ui/button";

export default function NavBar() {
  // Find the CTA section by id and scroll to it
  const handleGetInTouch = () => {
    const ctaSection = document.getElementById("cta-section");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-black bg-white px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-black">
          <span className="mono text-xs font-bold text-white">S</span>
        </div>
        <span className="mono text-sm font-semibold tracking-tight">
          Sambhav Labs
        </span>
      </div>
      <nav className="hidden items-center gap-6 md:flex">
        {/* {["Products", "Research", "Open Source", "Blog"].map((item) => (
          <a
            key={item}
            href="#"
            className="mono text-xs text-neutral-500 transition-colors hover:text-black"
          >
            {item}
          </a>
        ))} */}
      </nav>
      <Button
        variant="outline"
        size="sm"
        className="mono h-8 rounded-none border border-black px-8 text-xs text-black"
        onClick={handleGetInTouch}
      >
        Get in touch →
      </Button>
    </header>
  );
}
