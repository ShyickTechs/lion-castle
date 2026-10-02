import Link from "next/link";
import Image from "next/image";
import { categories, products } from "./data";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const featured = [products[0], products[3], products[6]];

  return (
    <>
      <section className="hero">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="hero-copy">
          <p className="eyebrow">GHANA • RETAIL • WHOLESALE</p>
          <h1>Raise the glass.<br /><em>Choose Lion Castle.</em></h1>
          <p className="hero-text">Discover wines, whisky, sparkling drinks, beer and beverages through a modern Lion Castle shopping experience.</p>
          <div className="hero-actions">
            <Link className="button" href="/shop">Explore the shop</Link>
            <Link className="button ghost" href="/contact">Talk to us</Link>
          </div>
          <div className="hero-meta"><span>01</span><i /><span>Curated drinks</span><span>•</span><span>Wholesale available</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-ring ring-one" />
          <div className="hero-ring ring-two" />
          <div className="logo-card"><Image src="/lion-castle-logo.jpg" alt="Lion Castle Wine/Liquor Shop logo" width={900} height={300} priority /></div>
          <Image className="floating-bottle bottle-a" src="/bottles/wine-red.svg" alt="Lion Castle red wine bottle" width={100} height={145} priority />
          <Image className="floating-bottle bottle-b" src="/bottles/whisky-reserve.svg" alt="Lion Castle whisky bottle" width={95} height={145} priority />
          <Image className="floating-bottle bottle-c" src="/bottles/beer-lager.svg" alt="Lion Castle beer bottle" width={80} height={125} priority />
        </div>
      </section>

      <section className="section intro-section">
        <div><p className="eyebrow">THE LION CASTLE EXPERIENCE</p><h2>Built around choice, quality and a bold identity.</h2></div>
        <p className="large-muted">Browse the selection by category, build your enquiry list and send it directly to Lion Castle on WhatsApp.</p>
      </section>

      <section className="section">
        <div className="section-heading"><div><p className="eyebrow">POPULAR CATEGORIES</p><h2>Something for every occasion.</h2></div><Link href="/shop" className="text-link">View all categories →</Link></div>
        <div className="category-grid home-category-grid">
          {categories.slice(0, 4).map((category) => (
            <Link href={`/shop/${category.slug}`} className="category-card" key={category.slug}>
              <div className="category-card-image"><Image src={category.heroImage} alt={category.name} width={180} height={255} /></div>
              <div><p className="product-category">{category.label}</p><h3>{category.name}</h3><span>Browse selection →</span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><div><p className="eyebrow">FEATURED SELECTIONS</p><h2>Featured bottles & beverages.</h2></div></div>
        <div className="product-grid home-products">{featured.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>

      <section className="feature-banner">
        <div><p className="eyebrow">WHOLESALE</p><h2>Stocking a shop, event or celebration?</h2><p>Contact Lion Castle for beverage and wholesale enquiries.</p></div>
        <Link className="button light" href="/contact">Make an enquiry</Link>
      </section>
    </>
  );
}
