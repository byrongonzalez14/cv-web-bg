import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Byron González — AI Solutions Consultant";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale !== "en";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#0a0a0f",
          backgroundImage:
            "radial-gradient(ellipse at top right, rgba(34,211,238,0.15), transparent 55%), radial-gradient(ellipse at bottom left, rgba(124,58,237,0.12), transparent 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#22d3ee",
            fontSize: 28,
            letterSpacing: 2,
          }}
        >
          {es ? "// consultor de soluciones de ia" : "// ai solutions consultant"}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#e8e8ee",
              fontSize: 84,
              fontWeight: 700,
              letterSpacing: -2,
            }}
          >
            Byron González
          </div>
          <div
            style={{
              marginTop: 16,
              color: "#9a9aa8",
              fontSize: 34,
            }}
          >
            {es
              ? "Automatización con IA · Análisis de Negocio · Integraciones"
              : "AI Automation · Business Analysis · Integrations"}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", color: "#22d3ee", fontSize: 26 }}>
            byrongonzalez.com.co
          </div>
          <div
            style={{
              display: "flex",
              width: 220,
              height: 6,
              backgroundColor: "#22d3ee",
              borderRadius: 3,
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
