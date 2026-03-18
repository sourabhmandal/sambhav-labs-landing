export default function PhilosophyStrip() {
  const philosophies = [
    {
      num: "I",
      title: "Opinionated defaults",
      body: "We ship with strong opinions. Good defaults beat infinite configurability for 90% of use-cases.",
    },
    {
      num: "II",
      title: "Open by default",
      body: "Every internal tool that doesn't break a business reason to stay private gets open-sourced.",
    },
    {
      num: "III",
      title: "Boring tech, novel ideas",
      body: "Postgres, Python, LangChain, and Next.js. No hype-cycles. We spend novelty budget on the product, not the stack.",
    },
  ];
  return (
    <section className="border-t border-b border-black bg-black px-6 py-14 text-white" id="get-in-touch">
      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-3">
        {philosophies.map(({ num, title, body }) => (
          <div key={num}>
            <p className="mono mb-2 text-xs text-neutral-500">{num}</p>
            <h3 className="sans mb-2 text-base font-semibold">{title}</h3>
            <p className="sans text-sm leading-relaxed text-neutral-400">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
