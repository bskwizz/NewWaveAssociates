import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const ALLOWED_ORIGINS = new Set([
  "https://newwaveassociates.com",
  "https://www.newwaveassociates.com",
]);

function corsHeaders(origin: string | null) {
  const allowOrigin =
    origin && ALLOWED_ORIGINS.has(origin)
      ? origin
      : "https://newwaveassociates.com";

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type",
    "Vary": "Origin",
  };
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

Deno.serve(async (req) => {
  const origin = req.headers.get("origin");
  const headers = corsHeaders(origin);

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ ok: false, error: "Method not allowed" }),
      { status: 405, headers: { ...headers, "Content-Type": "application/json" } }
    );
  }

  try {
    const body = await req.json();

    // Honeypot (bots fill this, humans don't)
    if (body?.website) {
      return new Response(
        JSON.stringify({ ok: true }),
        { status: 200, headers: { ...headers, "Content-Type": "application/json" } }
      );
    }

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const reason = String(body?.reason ?? "").trim();
    const timeline = String(body?.timeline ?? "").trim();
    const phone = body?.phone ? String(body.phone).trim() : null;
    const company = body?.company ? String(body.company).trim() : null;
    const message = body?.message ? String(body.message).trim() : null;
    const page_url = body?.pageUrl ? String(body.pageUrl).trim() : null;

    if (!name || !email || !reason || !timeline) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing required fields" }),
        { status: 400, headers: { ...headers, "Content-Type": "application/json" } }
      );
    }

    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid email" }),
        { status: 400, headers: { ...headers, "Content-Type": "application/json" } }
      );
    }

    const projectUrl = Deno.env.get("PROJECT_URL");
    const serviceRoleKey = Deno.env.get("SERVICE_ROLE_KEY");

    if (!projectUrl || !serviceRoleKey) {
      return new Response(
        JSON.stringify({ ok: false, error: "Server misconfigured" }),
        { status: 500, headers: { ...headers, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(projectUrl, serviceRoleKey);

    const { error } = await supabase.from("leads").insert([{
      name,
      email,
      reason,
      timeline,
      phone,
      company,
      message,
      page_url,
      status: "new",
    }]);

    if (error) {
      return new Response(
        JSON.stringify({ ok: false, error: "Database insert failed" }),
        { status: 500, headers: { ...headers, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { ...headers, "Content-Type": "application/json" } }
    );
  } catch {
    return new Response(
      JSON.stringify({ ok: false, error: "Invalid request body" }),
      { status: 400, headers: { ...headers, "Content-Type": "application/json" } }
    );
  }
});
