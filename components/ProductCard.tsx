import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const statusStyles = {
  Live: "bg-black text-white",
  Beta: "border border-black bg-white text-black",
  "Open Source": "border border-black bg-white text-black",
  "Coming Soon": "bg-neutral-100 text-neutral-400 border border-neutral-200",
};

type ProductCardProps = {
  product: {
    id: string;
    name: string;
    tag: string;
    description: string;
    status: "Live" | "Beta" | "Open Source" | "Coming Soon";
    tech: string[];
    href: string;
  };
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
};

export default function ProductCard({ product, hoveredId, setHoveredId }: ProductCardProps) {
  return (
    <Card
      className={`product-card cursor-cross rounded-none border border-black bg-white ${
        product.status === "Coming Soon" ? "opacity-70" : ""
      }`}
      onMouseEnter={() => setHoveredId(product.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <CardHeader className="px-5 pt-5 pb-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="mono mb-1 text-xs text-neutral-400">{product.id}</p>
            <CardTitle className="sans text-lg font-semibold tracking-tight text-black">
              {product.name}
            </CardTitle>
            <p className="mono mt-0.5 text-xs text-neutral-400">{product.tag}</p>
          </div>
          <span
            className={`mono mt-1 shrink-0 px-2 py-0.5 text-[10px] font-medium ${statusStyles[product.status]}`}
          >
            {product.status}
          </span>
        </div>
      </CardHeader>
      <CardContent className="px-5 pb-5">
        <CardDescription className="sans mb-4 text-sm leading-relaxed text-neutral-600">
          {product.description}
        </CardDescription>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {product.tech.map((t) => (
            <span
              key={t}
              className="mono bg-neutral-100 px-1.5 py-0.5 text-[10px] text-neutral-500"
            >
              {t}
            </span>
          ))}
        </div>
        {product.status !== "Coming Soon" && (
          <a
            href={product.href}
            className="mono text-xs text-black underline underline-offset-2 hover:no-underline"
          >
            {hoveredId === product.id ? "→ Open" : "View product"}
          </a>
        )}
      </CardContent>
    </Card>
  );
}
