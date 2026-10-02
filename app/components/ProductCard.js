"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartProvider";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <article className="product-card">
      <Link href={`/shop/${product.categorySlug}`} className="product-art" aria-label={`Browse ${product.category}`}>
        <Image src={product.image} alt={product.name} width={240} height={340} className="product-image" />
      </Link>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="muted">{product.description}</p>
        <button className="button small" onClick={() => addItem(product)}>Add to enquiry</button>
      </div>
    </article>
  );
}
