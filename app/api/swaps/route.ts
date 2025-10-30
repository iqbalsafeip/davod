import { NextResponse } from "next/server";

const MORALIS_API_KEY = process.env.MORALIS_API_KEY!;
const TOKEN_MINT = process.env.TOKEN_MINT!;

export async function GET() {
  try {
    const url = `https://solana-gateway.moralis.io/token/mainnet/${TOKEN_MINT}/swaps?order=DESC`;
    const res = await fetch(url, {
      headers: { "x-api-key": MORALIS_API_KEY },
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Pump.fun API error ${res.status}`);
      const raw = await res.json();
    const list = raw.result || raw || [];

    // normalisasi data agar ringan
    const swaps = list.map((t: any) => ({
      signature: t.transactionHash,
      side: t.transactionType,
      amount: parseFloat(t.sold?.amount ?? t.bought?.amount ?? 0),
      symbol: t.sold?.symbol ?? t.bought?.symbol ?? "?",
      usd: parseFloat(t.totalValueUsd ?? 0),
      wallet: t.walletAddress,
      timestamp: t.blockTimestamp,
    }));

    return NextResponse.json(swaps);

    // pastikan array dikembalikan
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
