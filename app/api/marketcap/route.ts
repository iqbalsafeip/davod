import { NextResponse } from "next/server";


const MORALIS_API_KEY = process.env.MORALIS_API_KEY!;
const TOKEN_MINT = process.env.TOKEN_MINT!;

export async function GET() {
  try {
    const baseUrl = "https://solana-gateway.moralis.io/token/mainnet";

    // Ambil data harga token
    const priceRes = await fetch(`${baseUrl}/${TOKEN_MINT}/price`, {
      headers: { "x-api-key": MORALIS_API_KEY },
    });
    const priceData = await priceRes.json();
    if (!priceData.usdPrice) throw new Error("No price data");

    // Ambil metadata token (nama, symbol, supply)
    const metaRes = await fetch(`${baseUrl}/${TOKEN_MINT}/metadata`, {
      headers: { "x-api-key": MORALIS_API_KEY },
    });
    const meta = await metaRes.json();

    // Coba ambil supply dari metadata
    let supply = meta?.supply ? Number(meta.supply) / Math.pow(10, meta.decimals || 9) : null;

    // Jika tidak ada supply, fallback ke estimasi 1_000_000_000 (biar tidak null)
    if (!supply || isNaN(supply)) {
      supply = 1_000_000_000; // asumsi sementara
    }

    const marketCap = priceData.usdPrice * supply;

    return NextResponse.json({
      name: meta?.name || "Unknown",
      symbol: meta?.symbol || "N/A",
      price: priceData.usdPrice,
      supply,
      marketCap,
    });
  } catch (err: any) {
    console.error("MarketCap API error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
