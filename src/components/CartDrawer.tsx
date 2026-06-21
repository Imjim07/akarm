"use client";

import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, removeItem, total, isOpen, setIsOpen } = useCart();

  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 200,
          }}
        />
      )}

      <div style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "400px",
        height: "100vh",
        backgroundColor: "#F5F2EE",
        zIndex: 201,
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s ease",
        display: "flex",
        flexDirection: "column",
      }}>
        <div style={{
          padding: "2rem",
          borderBottom: "1px solid #EDEAE5",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <h2 style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "1.5rem",
            fontWeight: 500,
            color: "#1A1A1A",
          }}>
            Your Bag ({items.length})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.2rem",
              color: "#1A1A1A",
            }}
          >
            X
          </button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "2rem" }}>
          {items.length === 0 ? (
            <p style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.85rem",
              color: "#1A1A1A",
              opacity: 0.5,
              textAlign: "center",
              marginTop: "3rem",
            }}>
              Your bag is empty.
            </p>
          ) : (
            items.map((item) => (
              <div key={item.id + item.size} style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1.5rem",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid #EDEAE5",
              }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "80px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color: "#1A1A1A",
                    marginBottom: "0.25rem",
                  }}>
                    {item.name}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.75rem",
                    color: "#1A1A1A",
                    opacity: 0.5,
                    marginBottom: "0.5rem",
                  }}>
                    Size: {item.size} — Qty: {item.quantity}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.85rem",
                    color: "#1A1A1A",
                  }}>
                    NGN {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id, item.size)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.75rem",
                    color: "#1A1A1A",
                    opacity: 0.4,
                    alignSelf: "flex-start",
                  }}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div style={{
            padding: "2rem",
            borderTop: "1px solid #EDEAE5",
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1.5rem",
            }}>
              <span style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.85rem",
                color: "#1A1A1A",
              }}>
                Total
              </span>
              <span style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.2rem",
                fontWeight: 500,
                color: "#1A1A1A",
              }}>
                NGN {total.toLocaleString()}
              </span>
            </div>
            <a
              href="/checkout"
              style={{
                display: "block",
                width: "100%",
                padding: "1rem",
                backgroundColor: "#1A1A1A",
                color: "#F5F2EE",
                textAlign: "center",
                textDecoration: "none",
                fontFamily: "var(--font-inter)",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                borderRadius: "2px",
              }}
            >
              Proceed to Checkout
            </a>
          </div>
        )}
      </div>
    </>
  );
}