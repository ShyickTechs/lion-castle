"use client";

import Link from "next/link";
import { useCart } from "../components/CartProvider";

export default function Cart() {
  const { items, changeQuantity, removeItem, clearCart } = useCart();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const message = encodeURIComponent(`Hello Lion Castle, I would like to enquire about: ${items.map((item) => `${item.quantity} x ${item.name}`).join(", ")}`);

  return (
    <div className="page-shell">
      <section className="page-hero"><p className="eyebrow">YOUR ENQUIRY</p><h1>Cart / enquiry list.</h1><p>Add products you are interested in, then send the list to Lion Castle on WhatsApp.</p></section>
      <section className="section cart-section">
        {!items.length ? <div className="empty-state"><div className="empty-icon">＋</div><h2>Your list is empty.</h2><p className="muted">Choose products from the shop to build an enquiry.</p><Link href="/shop" className="button">Browse shop</Link></div> : <>
          <div className="cart-list">{items.map((item) => <div className="cart-item" key={item.id}><div><p className="eyebrow">{item.category}</p><h3>{item.name}</h3></div><div className="qty"><button onClick={() => changeQuantity(item.id, -1)}>-</button><span>{item.quantity}</span><button onClick={() => changeQuantity(item.id, 1)}>+</button></div><button className="remove" onClick={() => removeItem(item.id)}>Remove</button></div>)}</div>
          <div className="cart-actions"><span>{count} item{count === 1 ? "" : "s"}</span><div><button className="button ghost" onClick={clearCart}>Clear</button><a className="button" href={`https://wa.me/233539182309?text=${message}`} target="_blank" rel="noreferrer">Send on WhatsApp</a></div></div>
        </>}
      </section>
    </div>
  );
}
