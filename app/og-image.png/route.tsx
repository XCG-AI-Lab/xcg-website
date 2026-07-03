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
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #14171a 0%, #24282c 60%, #32373c 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 110,
              height: 110,
              borderRadius: 24,
              background: "#ffc000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 72,
              fontWeight: 800,
              color: "#14171a",
            }}
          >
            X
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 54, fontWeight: 800, color: "#ffffff", letterSpacing: 2 }}>
              X CONSULTANCY GROUP
            </div>
            <div style={{ fontSize: 28, color: "#ffc000", marginTop: 6, letterSpacing: 4 }}>
              YOUR PARTNERS IN GROWTH®
            </div>
          </div>
        </div>
        <div style={{ fontSize: 30, color: "#b9c0c7", marginTop: 56, lineHeight: 1.4 }}>
          Company Secretarial · Accounting · Taxation · E-Invoicing · Payroll
        </div>
        <div style={{ fontSize: 26, color: "#76828c", marginTop: 16 }}>
          Bukit Jalil & Kepong, Kuala Lumpur · xconsultancygroup.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
