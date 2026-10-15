import { ImageResponse } from "next/server";

export const runtime = "edge";
export const alt = "Jacob Yi, technical deal origination and AI automation systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #000000 0%, #18181b 60%, #000000 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: "-0.04em" }}>
          Jacob Yi
        </div>
        <div style={{ marginTop: 24, fontSize: 36, color: "#a1a1aa" }}>
          Technical Deal Origination · AI Automation
        </div>
        <div style={{ marginTop: 48, fontSize: 26, color: "#71717a" }}>
          jacobyi.info
        </div>
      </div>
    ),
    { ...size }
  );
}
