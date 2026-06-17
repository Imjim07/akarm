export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-text)",
        padding: "5rem 2.5rem 3rem",
        color: "var(--color-bg)",
      }}
    >
      {/* Top Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "3rem",
          marginBottom: "4rem",
        }}
      >
        {/* Brand */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.75rem",
              fontWeight: 400,
              letterSpacing: "0.15em",
              marginBottom: "1rem",
            }}
          >
            AKARM
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.75rem",
              lineHeight: 1.8,
              opacity: 0.5,
              maxWidth: "260px",
            }}
          >
            Quiet. Considered. Worn.
            <br />
            Premium unisex fashion for those
            <br />
            who dress with intention.
          </p>
        </div>

        {/* Links */}
        {[
          { heading: "Shop", links: ["New Arrivals", "Collection", "Sale"] },
          { heading: "Info", links: ["About", "Stores", "Careers"] },
          { heading: "Help", links: ["Shipping", "Returns", "Contact"] },
        ].map((col) => (
          <div key={col.heading}>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.4,
                marginBottom: "1.25rem",
              }}
            >
              {col.heading}
            </p>
            {col.links.map((link) => (
              <p
                key={link}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.8rem",
                  lineHeight: 2.2,
                  opacity: 0.6,
                  cursor: "pointer",
                }}
              >
                {link}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div
        style={{
          borderTop: "1px solid rgba(245, 242, 238, 0.1)",
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.65rem",
            opacity: 0.3,
            letterSpacing: "0.1em",
          }}
        >
          © 2026 AKARM. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.65rem",
            opacity: 0.3,
            letterSpacing: "0.1em",
          }}
        >
          Lagos · London · Paris
        </p>
      </div>
    </footer>
  );
}