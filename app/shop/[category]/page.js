import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductCard from "../../components/ProductCard";
import { categories, getCategory, getProductsByCategory } from "../../data";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export default async function CategoryPage({ params }) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const products = getProductsByCategory(slug);

  return (
    <div className="page-shell">
      <section className="category-hero">
        <div className="category-hero-copy">
          <p className="eyebrow">{category.label}</p>
          <h1>{category.name}</h1>
          <p>{category.description} Explore the selection and add anything you are interested in to your enquiry.</p>
          <Link href="/shop" className="button ghost">← All categories</Link>
        </div>
        <div className="category-hero-image"><Image src={category.heroImage} alt={category.name} width={300} height={420} priority /></div>
      </section>

      <section className="section category-products-section">
        <div className="section-heading"><div><p className="eyebrow">OUR SELECTION</p><h2>{category.name}</h2></div><Link href="/cart" className="text-link">View enquiry list →</Link></div>
        <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>
    </div>
  );
}
