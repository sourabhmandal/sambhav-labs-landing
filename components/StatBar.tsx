export default function StatBar() {
  const stats = [
    { label: "Products Shipped", value: "01" },
    { label: "Open Source Repos", value: "01" },
    { label: "Engineers", value: "01" },
    { label: "Impacted Businesses", value: "02" },
  ];
  return (
    <section className="border-b border-black" id="products">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 px-6 py-5 md:grid-cols-4">
        {stats.map(({ label, value }) => (
          <div key={label}>
            <p className="mono text-2xl font-semibold">{value}</p>
            <p className="mono mt-1 text-xs text-neutral-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
