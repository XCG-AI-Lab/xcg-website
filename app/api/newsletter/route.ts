import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = String(body.email ?? "").trim().slice(0, 200);
  const locale = body.locale === "zh" ? "zh" : "en";
  const source = String(body.source ?? "footer").trim().slice(0, 60);

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("newsletter: Supabase not configured; subscription not stored", { email });
    return NextResponse.json({ error: "Storage unavailable" }, { status: 503 });
  }

  const { error } = await supabase
    .from("newsletter_subscribers")
    .upsert({ email, locale, source }, { onConflict: "email" });

  if (error) {
    console.error("newsletter upsert failed:", error.message);
    return NextResponse.json({ error: "Storage failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
