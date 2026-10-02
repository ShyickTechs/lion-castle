import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <p className="eyebrow">LION CASTLE</p>
          <h2>Wine, liquor & beverages.</h2>
          <p className="muted">A modern shop experience for retail and wholesale customers in Ghana.</p>
        </div>
        <div>
          <p className="footer-title">Explore</p>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <a href="tel:+233539182309">+233 539 182 309</a>
          <a href="https://wa.me/233539182309" target="_blank" rel="noreferrer">WhatsApp</a>
          <span>Ghana</span>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Lion Castle. All rights reserved.</div>
    </footer>
  );
}
