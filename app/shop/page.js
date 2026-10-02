import Image from "next/image";
import Link from "next/link";
import { categories } from "../data";

export default function Shop() {
  return (
    <div className="page-shell">
      <section className="page-hero"><p className="eyebrow">THE SHOP</p><h1>Choose a category.</h1><p>Open a selection to browse the products in that category. Add anything you are interested in to your enquiry list, then send the list to Lion Castle on WhatsApp.</p></section>
      <section className="section shop-section">
        <div className="category-grid shop-category-grid">
          {categories.map((category) => (
            <Link href={`/shop/${category.slug}`} className="category-card large" key={category.slug}>
              <div className="category-card-image"><Image src={category.heroImage} alt={category.name} width={210} height={300} /></div>
              <div><p className="product-category">{category.label}</p><h2>{category.name}</h2><p className="muted">{category.description}</p><span className="text-link">Open selection →</span></div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
