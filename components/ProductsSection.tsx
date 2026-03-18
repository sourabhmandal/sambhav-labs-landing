import ProductCard from "@/components/ProductCard";
import { Separator } from "@/components/ui/separator";

type ProductsSectionProps = {
  products: Array<Product>;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
};

export default function ProductsSection({ products, hoveredId, setHoveredId }: ProductsSectionProps) {
  return (
    <section id="products-section" className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-10 flex items-center gap-4">
        <h2 className="mono text-xs font-semibold tracking-widest text-neutral-400 uppercase">
          / Products & Tools
        </h2>
        <Separator className="flex-1 bg-neutral-200" />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
          />
        ))}
      </div>
    </section>
  );
}
