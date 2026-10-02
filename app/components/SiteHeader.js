"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "./CartProvider";

const links = [
  ["Home", "/"],
  ["Shop", "/shop"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function SiteHeader() {
  const pathname = usePathname();
  const { items } = useCart();
  const [open, setOpen] = useState(false);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Lion Castle home">
          <span className="brand-mark"><Image src="/lion-castle-logo.jpg" alt="Lion Castle" width={220} height={74} priority /></span>
        </Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">☰</button>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([label, href]) => (
            <Link key={href} href={href} className={pathname === href ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link href="/cart" className="cart-link" onClick={() => setOpen(false)}>
            Cart <span>{count}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
