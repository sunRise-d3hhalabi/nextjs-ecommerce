import { Product } from "@/lib/mocks";
import Image from "next/image";

export function ProductCard({ product }: { product: Product }) {
  return (
      <div className="relative aspect-video">
        <Image
          src={product.image}
          alt={product.name}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
  );
}
