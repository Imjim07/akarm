"use client";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";


export default function Collection() {
  const { addItem } = useCart();
  return (
    <section
      id="collection"
      style={{
        backgroundColor: "var(--color-bg)",
        padding: "8rem 2.5rem",
      }}
    >
      <div className="akarm-grid-3"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "4rem",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 300,
            color: "var(--color-text)",
          }}
        >
          The Collection
        </h2>
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: 0.5,
            cursor: "pointer",
          }}
        >
          View All
        </span>
      </div>

      <div className="akarm-grid-3"
style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "2rem",
}}
      >
        {products.map((product) => (
          <a key={product.id}
          
          href={"/product/" + product.slug}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                marginBottom: "1.25rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {product.tag && (
                <span
                  style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    backgroundColor: "var(--color-text)",
                    color: "var(--color-bg)",
                    padding: "0.25rem 0.6rem",
                  }}
                >
                  {product.tag}
                </span>
              )}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  color: "var(--color-text)",
                }}
              >
                {product.name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.75rem",
                  color: "var(--color-text)",
                  opacity: 0.6,
                }}
              >
                <span
                >
                  {product.price}
                  </span>
 
              </span>
            </div>
             <button
    onClick={() => addItem({
    id: product.id.toString(),
    name: product.name,
    price: 185000,
    image: product.image,
    size: "M",
  })}
  style={{
    marginTop: "0.75rem",
    width: "100%",
    padding: "0.6rem",
    backgroundColor: "#1A1A1A",
    color: "#F5F2EE",
    border: "none",
    cursor: "pointer",
    fontFamily: "var(--font-inter)",
    fontSize: "0.7rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
  }}
>
  Add to Bag
</button>

          </a>
        ))}
      </div>
    </section>
  );
}