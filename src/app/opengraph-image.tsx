import { ImageResponse } from "next/og";

export const alt = "MIEPS — Myanmar Institute of Earth and Planetary Sciences";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#f7f8f5",
          background: "linear-gradient(112deg, #101d30 0%, #172d45 70%, #315d7a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, color: "#c6a66b", fontSize: 24, letterSpacing: 8 }}>
          <span style={{ width: 36, height: 3, background: "#67b7b0" }} />
          MIEPS
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ color: "#c6a66b", fontSize: 18, letterSpacing: 5, textTransform: "uppercase" }}>
            Myanmar Institute of Earth and Planetary Sciences
          </div>
          <div style={{ maxWidth: 950, fontSize: 68, fontWeight: 600, lineHeight: 1.06, letterSpacing: -3 }}>
            Understanding Earth. Advancing Knowledge.
          </div>
        </div>
        <div style={{ color: "#c7d2d7", fontSize: 20 }}>
          Research · Education · Collaboration · Community
        </div>
      </div>
    ),
    size,
  );
}
