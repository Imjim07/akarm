"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";

export default function CheckoutPage() {
  const { items, total, setIsOpen } = useCart();
  const [placed, setPlaced] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleOrder() {
    if (!form.name || !form.email || !form.address || !form.city || !form.state) {
      alert("Please fill in all fields");
      return;
    }
    setPlaced(true);
  }

  if (placed) {
    return (
      <main style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", maxWidth: "500px", padding: "2rem" }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-text)", opacity: 0.5, marginBottom: "1.5rem" }}>
            Order Confirmed
          </p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "3rem", fontWeight: 300, color: "var(--color-text)", marginBottom: "1rem" }}>
            Thank you, {form.name}.
          </h1>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--color-text)", opacity: 0.6, marginBottom: "2rem" }}>
            Your order has been received. We will send a confirmation to {form.email} shortly.
          </p>
          <a href="/" style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-text)", textDecoration: "none", borderBottom: "1px solid var(--color-accent)", paddingBottom: "0.25rem" }}>
            Continue Shopping
          </a>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)", paddingTop: "80px" }}>
      <Navbar />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", maxWidth: "1200px", margin: "0 auto", padding: "4rem 2.5rem", gap: "6rem" }}>

        <div>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-text)", opacity: 0.5, marginBottom: "2rem" }}>
            Delivery Details
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { label: "Full Name", name: "name", type: "text" },
              { label: "Email Address", name: "email", type: "email" },
              { label: "Delivery Address", name: "address", type: "text" },
              { label: "City", name: "city", type: "text" },
              { label: "State", name: "state", type: "text" },
            ].map((field) => (
              <div key={field.name}>
                <label style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-text)", opacity: 0.5, marginBottom: "0.5rem" }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "0.85rem 1rem", fontSize: "0.95rem", border: "1px solid var(--color-surface)", borderRadius: "2px", backgroundColor: "white", color: "var(--color-text)", outline: "none", fontFamily: "var(--font-inter)" }}
                />
              </div>
            ))}
          </div>

          <button
            onClick={handleOrder}
            style={{ marginTop: "2rem", width: "100%", padding: "1rem", backgroundColor: "var(--color-text)", color: "var(--color-bg)", border: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}
          >
            Place Order
          </button>
        </div>

        <div>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-text)", opacity: 0.5, marginBottom: "2rem" }}>
            Order Summary
          </p>

          {items.map((item) => (
            <div key={item.id + item.size} style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--color-surface)" }}>
              <img src={item.image} alt={item.name} style={{ width: "70px", height: "90px", objectFit: "cover" }} />
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem", fontWeight: 500, color: "var(--color-text)", marginBottom: "0.25rem" }}>{item.name}</p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "var(--color-text)", opacity: 0.5 }}>Size: {item.size} — Qty: {item.quantity}</p>
              </div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", color: "var(--color-text)" }}>NGN {(item.price * item.quantity).toLocaleString()}</p>
            </div>
          ))}

          <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "1.5rem" }}>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", color: "var(--color-text)" }}>Total</span>
            <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.3rem", fontWeight: 500, color: "var(--color-text)" }}>NGN {total.toLocaleString()}</span>
          </div>
        </div>

      </div>
    </main>
  );
}