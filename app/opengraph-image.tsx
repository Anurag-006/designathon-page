import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "VNR DESIGNATHON 2026 - 4th Edition";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      // Outer Background Container
      <div
        style={{
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Subtle Background Grid Line Simulation */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0, 255, 100, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 100, 0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            zIndex: 0,
          }}
        />

        {/* Content Wrapper */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          {/* Top Badge */}
          <div
            style={{
              display: "flex",
              padding: "10px 30px",
              border: "2px solid rgba(34, 211, 238, 0.3)", // Cyan border
              backgroundColor: "rgba(34, 211, 238, 0.05)",
              borderRadius: "100px",
              color: "#22d3ee", // Cyan text
              fontSize: 20,
              fontWeight: "bold",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              marginBottom: 40,
            }}
          >
            4th Edition // VNRVJIET
          </div>

          {/* Main Title (Solid white for perfect rendering in Satori) */}
          <div
            style={{
              fontSize: 100,
              fontWeight: 900,
              color: "#ffffff",
              fontFamily: "sans-serif",
              letterSpacing: "-0.05em",
              lineHeight: 1,
              marginBottom: 30,
              textShadow: "0 0 40px rgba(255, 255, 255, 0.3)",
            }}
          >
            VNR DESIGNATHON
          </div>

          {/* Tagline / Dates */}
          <div
            style={{
              fontSize: 24,
              color: "#6b7280", // Gray-500
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: 50,
            }}
          >
            24-HOUR SYSTEM CYCLE // MARCH 24-25, 2026
          </div>

          {/* Prize Pool */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 60,
                fontWeight: "bold",
                color: "#eab308", // Yellow-500
                marginBottom: 10,
              }}
            >
              INR 1,00,000
            </div>
            <div
              style={{
                fontSize: 16,
                color: "#9ca3af", // Gray-400
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                borderBottom: "2px solid rgba(234, 179, 8, 0.3)",
                paddingBottom: 8,
              }}
            >
              PRIZE_POOL_AUTHORIZED
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
