export default function BrandStatement() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-text)",
        padding: "10rem 2.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "800px", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
            fontWeight: 300,
            lineHeight: 1.4,
            color: "var(--color-bg)",
            letterSpacing: "0.02em",
          }}
        >
          We make clothes for people who don't need to be noticed.
          <br />
          <span style={{ color: "var(--color-accent)" }}>
            Quiet. Considered. Worn.
          </span>
        </p>
      </div>
    </section>
  );
}