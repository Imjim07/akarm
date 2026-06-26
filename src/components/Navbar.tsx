"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";


function BagButton() {
  const { count, setIsOpen } = useCart();
  return (
    <span
      onClick={() => setIsOpen(true)}
      style={{
        fontFamily: "var(--font-inter)",
        fontSize: "0.75rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        opacity: 0.7,
        cursor: "pointer",
      }}
    >
      Bag ({count})
    </span>
  );
}
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "var(--color-bg)",
        borderBottom: "1px solid var(--color-surface)",
        padding: "1.25rem 2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "1.5rem",
          fontWeight: 500,
          letterSpacing: "0.2em",
          color: "var(--color-text)",
        }}
      >
        AKARM
      </span>

      <div className="akarm-nav-links" style={{ display: "flex", gap: "2.5rem" }}>
        {["Collection", "About", "Stores"].map((link) => (
          <span
            key={link}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-text)",
              opacity: 0.7,
              cursor: "pointer",
            }}
          >
            {link}
          </span>
        ))}
      </div>

<BagButton />
<button
  onClick={() => setOpen(!open)}
  className="akarm-mobile-menu"
  style={{
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "var(--color-text)",
  }}
>
  {open ? <X size={20} /> : <Menu size={20} />}
</button>

{open && (
  <div style={{
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "var(--color-bg)",
    borderBottom: "1px solid var(--color-surface)",
    padding: "1.5rem 2.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  }}>
    {["Collection", "About", "Stores"].map((link) => (
      <span
        key={link}
        onClick={() => setOpen(false)}
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "1rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--color-text)",
          cursor: "pointer",
        }}
      >
        {link}
      </span>
    ))}
  </div>
)}
    </nav>
  );
}