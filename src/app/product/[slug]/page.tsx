"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import { use } from "react";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [selectedSize, setSelectedSize] = useState("");
  const { addItem } = useCart();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <main style={{ padding: "8rem 2.5rem" }}>
        <p>Product not found.</p>
      </main>
    );
  }

  function handleAddToBag() {
    if (!selectedSize || !product) {
      alert("Please select a size");
      return;
    }
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
    });
  }

  return (
    <main>
      <Navbar />
      <CartDrawer />
      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "100vh",
        paddingTop: "80px",
      }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div style={{
          padding: "6rem 4rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "var(--color-bg)",
        }}>
          {product.tag && (
            <span style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-text)",
              opacity: 0.5,
              marginBottom: "1rem",
              display: "block",
            }}>
              {product.tag}
            </span>
          )}

          <h1 style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "3rem",
            fontWeight: 300,
            color: "var(--color-text)",
            marginBottom: "0.75rem",
            lineHeight: 1.1,
          }}>
            {product.name}
          </h1>

          <p style={{
            fontFamily: "var(--font-inter)",
            fontSize: "1.1rem",
            color: "var(--color-text)",
            marginBottom: "2rem",
          }}>
            NGN {product.price.toLocaleString()}
          </p>

          <p style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.9rem",
            lineHeight: 1.8,
            color: "var(--color-text)",
            opacity: 0.6,
            marginBottom: "2.5rem",
            maxWidth: "400px",
          }}>
            {product.description}
          </p>

          <p style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--color-text)",
            opacity: 0.5,
            marginBottom: "1rem",
          }}>
            Select Size
          </p>

          <div style={{
            display: "flex",
            gap: "0.75rem",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
          }}>
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  width: "48px",
                  height: "48px",
                  border: selectedSize === size ? "1px solid var(--color-text)" : "1px solid var(--color-surface)",
                  backgroundColor: selectedSize === size ? "var(--color-text)" : "transparent",
                  color: selectedSize === size ? "var(--color-bg)" : "var(--color-text)",
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                }}
              >
                {size}
              </button>
            ))}
          </div>

          <button
            onClick={handleAddToBag}
            style={{
              padding: "1rem 2rem",
              backgroundColor: "var(--color-text)",
              color: "var(--color-bg)",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-inter)",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              maxWidth: "400px",
            }}
          >
            Add to Bag
          </button>
        </div>
      </section>
    </main>
  );
}