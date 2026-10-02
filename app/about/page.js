import Image from "next/image";

export default function About() {
  return (
    <div className="page-shell">
      <section className="page-hero about-hero"><p className="eyebrow">ABOUT LION CASTLE</p><h1>A bold shop with a bigger selection.</h1><p>Lion Castle is a Ghana-based wine/liquor shop serving customers looking for beverages for everyday moments, celebrations and wholesale needs.</p></section>
      <section className="section about-grid">
        <div className="about-image"><Image src="/lion-castle-logo.jpg" alt="Lion Castle logo" width={1536} height={513} /></div>
        <div><p className="eyebrow">OUR STORY</p><h2>More than a bottle. It is the experience around it.</h2><p className="large-muted">The Lion Castle identity is built around confidence, character and hospitality. This website brings that identity into a clean digital shop where customers can explore categories and contact the store easily.</p><div className="stat-row"><div><strong>01</strong><span>Retail</span></div><div><strong>02</strong><span>Wholesale</span></div><div><strong>03</strong><span>Ghana</span></div></div></div>
      </section>
    </div>
  );
}
