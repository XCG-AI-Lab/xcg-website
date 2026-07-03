import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

const allowedTools = new Set(["e-invoicing-readiness", "deadline-calendar", "name-checker"]);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim().slice(0, 120);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const tool = String(body.tool ?? "").trim();
  const locale = body.locale === "zh" ? "zh" : "en";
  const payload = typeof body.payload === "object" && body.payload !== null ? body.payload : {};

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !allowedTools.has(tool)) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("lead: Supabase not configured; lead not stored", { email, tool });
    return NextResponse.json({ error: "Storage unavailable" }, { status: 503 });
  }

  const { error } = await supabase.from("leads").insert({
    name: name || null,
    email,
    tool,
    payload,
    locale,
  });

  if (error) {
    console.error("lead insert failed:", error.message);
    return NextResponse.json({ error: "Storage failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
