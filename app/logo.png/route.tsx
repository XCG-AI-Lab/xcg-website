import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14171a",
          borderRadius: 96,
        }}
      >
        <div style={{ fontSize: 320, fontWeight: 800, color: "#ffc000", fontFamily: "sans-serif" }}>X</div>
      </div>
    ),
    { width: 512, height: 512 }
  );
}
