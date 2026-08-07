// Fonction serverless Vercel : cours en direct via Yahoo Finance (contourne le CORS navigateur)
// Appel : /api/quotes?s=AI.PA,NVDA,BTC-EUR,EURUSD=X
export default async function handler(req, res) {
  const syms = String(req.query.s || "").split(",").map((x) => x.trim()).filter(Boolean).slice(0, 40);
  if (!syms.length) return res.status(400).json({ error: "paramètre s manquant" });

  const out = {};
  await Promise.all(syms.map(async (sym) => {
    try {
      const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(sym)}?interval=1d&range=1d`;
      const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (PupitrePatrimoine)" } });
      if (!r.ok) throw new Error("HTTP " + r.status);
      const j = await r.json();
      const meta = j?.chart?.result?.[0]?.meta;
      if (meta && meta.regularMarketPrice != null) {
        out[sym] = { price: meta.regularMarketPrice, currency: meta.currency || null };
      } else {
        out[sym] = { error: "cotation introuvable" };
      }
    } catch (e) {
      out[sym] = { error: String(e.message || e) };
    }
  }));

  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600"); // cache 5 min côté Vercel
  res.status(200).json({ at: new Date().toISOString(), quotes: out });
}
