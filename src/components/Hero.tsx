import { client } from "@/lib/sanity";

async function getHeroData() {
  return await client.fetch(`*[_type == "hero"][0]{
    tagline,
    headline,
    ctaText
  }`);
}

export default async function Hero() {
  const hero = await getHeroData();

  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "var(--color-surface)",
        display: "flex",
        alignItems: "flex-end",
        padding: "4rem 2.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#2a2520",
          opacity: 0.85,
        }}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: "600px" }}>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: "1.5rem",
          }}
        >
          {hero?.tagline || "SS 2026 Collection"}
        </p>

        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(3rem, 7vw, 6rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "#F5F2EE",
            marginBottom: "2rem",
          }}
        >
          {hero?.headline || "Dressed in Quiet Confidence"}
        </h1>

        <a
          href="#collection"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#F5F2EE",
            textDecoration: "none",
            borderBottom: "1px solid var(--color-accent)",
            paddingBottom: "0.25rem",
          }}
        >
          {hero?.ctaText || "Explore Collection"}
        </a>
      </div>
    </section>
  );
}