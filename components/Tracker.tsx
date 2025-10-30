"use client";

import { useEffect, useState } from "react";

interface Swap {
  signature: string;
  side: string;
  amount: number;
  symbol: string;
  tokenName?: string;
  usd: number;
  wallet: string;
  timestamp: string;
}

export default function SwapMarquee() {
  const [swaps, setSwaps] = useState<Swap[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSwaps() {
      try {
        const res = await fetch("/api/swaps");
        const data = await res.json();
        if (Array.isArray(data)) setSwaps(data);
      } catch (err) {
        console.error("Error fetching swaps:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchSwaps();
    const interval = setInterval(fetchSwaps, 30000);
    return () => clearInterval(interval);
  }, []);

  const renderSwap = (tx: Swap, i: number, isClone = false) => {
    const wallet = tx.wallet ?? "unknown";
    const side = tx.side ?? "buy";
    const usd = tx.usd?.toFixed(2) ?? "0.00";
    const amount = tx.amount?.toFixed(3) ?? "0.000";
    const symbol = tx.symbol ?? "???";
    const tokenName = tx.tokenName ?? symbol;
    const avatarUrl = `https://api.dicebear.com/7.x/identicon/svg?seed=${wallet}`;
    const solscanUrl = `https://solscan.io/tx/${tx.signature}`;

    return (
      <a
        key={tx.signature + (isClone ? "-clone" : "") || i}
        href={solscanUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-3 ml-10 px-5 py-1 rounded-full bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm transition-transform duration-200 hover:scale-105 hover:bg-neutral-800/70 ${
          side === "buy"
            ? "text-green-400"
            : side === "sell"
            ? "text-red-400"
            : "text-gray-400"
        }`}
      >
        <img
          src={avatarUrl}
          alt="avatar"
          className="w-5 h-5 rounded-full bg-neutral-800"
        />
        <span className="font-mono opacity-70">
          {wallet.slice(0, 4)}...{wallet.slice(-4)}
        </span>
        <span className="uppercase font-semibold">{side}</span>
        <span>
          {amount} {symbol}
        </span>
        <span className="opacity-80">${usd}</span>
        <span className="text-gray-400">({tokenName})</span>
      </a>
    );
  };

  return (
    <div className=" w-full bg-black border-b border-neutral-800 z-50 overflow-hidden">
      <div className="h-10 flex items-center relative overflow-hidden">
        {loading ? (
          <div className="px-6 text-gray-400 animate-pulse text-sm">
            Loading swaps...
          </div>
        ) : swaps.length === 0 ? (
          <div className="px-6 text-gray-400 text-sm">No recent swaps</div>
        ) : (
          <>
            <div className="flex items-center animate-marquee text-sm whitespace-nowrap">
              {swaps.map((tx, i) => renderSwap(tx, i))}
            </div>
            <div className="flex items-center animate-marquee2 text-sm whitespace-nowrap absolute top-0 left-0">
              {swaps.map((tx, i) => renderSwap(tx, i, true))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
