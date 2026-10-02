"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  function sendEnquiry(event) {
    event.preventDefault();
    const text = `Hello Lion Castle, my name is ${name || "a customer"}. ${contact ? `You can reach me at ${contact}. ` : ""}${message || "I would like to make an enquiry."}`;
    window.open(`https://wa.me/233539182309?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="page-shell">
      <section className="page-hero"><p className="eyebrow">CONTACT</p><h1>Let’s talk drinks.</h1><p>For current stock, pricing, wholesale enquiries or general questions, contact Lion Castle directly.</p></section>
      <section className="section contact-grid">
        <div className="contact-card"><p className="eyebrow">DIRECT CONTACT</p><h2>Reach Lion Castle</h2><a className="contact-big" href="tel:+233539182309">+233 539 182 309</a><a className="button" href="https://wa.me/233539182309" target="_blank" rel="noreferrer">Chat on WhatsApp</a><p className="muted">Location: Ghana</p></div>
        <form className="contact-form" onSubmit={sendEnquiry}>
          <label>Name<input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required /></label>
          <label>Phone or email<input value={contact} onChange={(e) => setContact(e.target.value)} placeholder="How can we reach you?" /></label>
          <label>Message<textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="6" placeholder="Tell us what you need..." required /></label>
          <button className="button" type="submit">Send enquiry on WhatsApp</button>
          <p className="form-note">Your enquiry opens in WhatsApp so Lion Castle can receive it directly.</p>
        </form>
      </section>
    </div>
  );
}
