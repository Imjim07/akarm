import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

async function getCampaignData() {
  return await client.fetch(`*[_type == "campaign"][0]{
    label,
    headline,
    ctaText,
    image
  }`);
}

export default async function CampaignBanner() {
  const campaign = await getCampaignData();

  const imageUrl = campaign?.image
    ? urlFor(campaign.image).width(1400).url()
    : "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=1400&q=80";

  const headlineLines = (campaign?.headline || "The Evening Edit").split(" ");
  const mid = Math.ceil(headlineLines.length / 2);
  const line1 = headlineLines.slice(0, mid).join(" ");
  const line2 = headlineLines.slice(mid).join(" ");

  return (
    <section style={{ position: "relative", height: "80vh", overflow: "hidden" }}>
      <img
        src={imageUrl}
        alt="AKARM Campaign"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />

      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(26, 26, 26, 0.45)" }} />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: "1.5rem",
          }}
        >
          {campaign?.label || "Limited Edition"}
        </p>

        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 300,
            color: "#F5F2EE",
            lineHeight: 1.1,
            marginBottom: "2.5rem",
          }}
        >
          {line1}
          <br />
          {line2}
        </h2>
<a
        
          href="#"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#F5F2EE",
            textDecoration: "none",
            border: "1px solid rgba(245, 242, 238, 0.5)",
            padding: "0.9rem 2.5rem",
          }}
          >
          {campaign?.ctaText || "Shop Now"}
        </a>
      </div>
    </section>
  );
}