import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without storing
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim().slice(0, 120);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const phone = String(body.phone ?? "").trim().slice(0, 30);
  const company = String(body.company ?? "").trim().slice(0, 200);
  const service = String(body.service ?? "").trim().slice(0, 60);
  const message = String(body.message ?? "").trim().slice(0, 5000);
  const locale = body.locale === "zh" ? "zh" : "en";

  if (!name || !email || !phone || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("contact: Supabase not configured; submission not stored", { name, email });
    return NextResponse.json({ error: "Storage unavailable" }, { status: 503 });
  }

  const { error } = await supabase.from("contact_submissions").insert({
    name,
    email,
    phone,
    company: company || null,
    service: service || null,
    message,
    locale,
  });

  if (error) {
    console.error("contact insert failed:", error.message);
    return NextResponse.json({ error: "Storage failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
