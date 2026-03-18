import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section id="cta-section" className="mx-auto max-w-4xl px-6 py-20 text-center">
      <p className="mono mb-4 text-xs tracking-widest text-neutral-400 uppercase">
        / Work with us
      </p>
      <h2 className="sans mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
        Building something in the AI space?
      </h2>
      <p className="sans mx-auto mb-8 max-w-md text-base leading-relaxed text-neutral-500">
        We&rsquo;re open to consulting, co-building, and OSS collaboration. Drop us
        a line.
      </p>
      <Button className="mono h-10 rounded-none bg-black px-8 text-xs text-white hover:bg-neutral-800" onClick={() => window.location.href = "mailto:work.sourabhmandal@gmail.com"}>
        work.sourabhmandal@gmail.com →
      </Button>
    </section>
  );
}
