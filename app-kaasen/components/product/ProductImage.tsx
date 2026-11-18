import Image from "next/image";
import type { ProductImage as ProductImageData } from "@/lib/types";

type ProductImageProps = {
  image: ProductImageData | null;
  alt: string;
  sizes: string;
  /** padding used for `contain` shots */
  padClass?: string;
  priority?: boolean;
};

/** Product visual inside a positioned container (parent sets aspect ratio + background). */
export function ProductImage({ image, alt, sizes, padClass = "p-3.5", priority = false }: ProductImageProps) {
  if (!image) {
    return (
      <span className="absolute inset-0 grid place-items-center text-micro font-bold uppercase tracking-label text-kaasen-blue/72">
        Produktbild folgt
      </span>
    );
  }
  return (
    <Image
      src={image.src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`${image.fit === "cover" ? "object-cover" : "object-contain"} ${image.padded ? padClass : ""}`}
    />
  );
}
