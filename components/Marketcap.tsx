"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MarketData {
  name: string;
  symbol: string;
  price: number;
  supply: number;
  marketCap: number;
}

export default function MarketCap() {
  const [data, setData] = useState<MarketData | null>(null);
  const [prevCap, setPrevCap] = useState<number | null>(null);
  const [trendUp, setTrendUp] = useState<boolean | null>(null);

  async function fetchData() {
    try {
      const res = await fetch("/api/marketcap");
      const json = await res.json();

      if (json.marketCap) {
        if (prevCap !== null) {
          setTrendUp(json.marketCap > prevCap);
        }
        setPrevCap(json.marketCap);
        setData(json);
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 15000); // update setiap 15 detik
    return () => clearInterval(interval);
  }, []);

  if (!data) {
    return (
      <div className="  bg-neutral-900 text-gray-400 text-sm text-center py-2 z-40">
        Loading Market Cap... 
      </div>
    );
  }

  const formattedCap = data.marketCap.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

  const formattedPrice = data.price.toFixed(8);

  const colorClass =
    trendUp === null
      ? "text-white"
      : trendUp
      ? "text-green-400"
      : "text-red-400";

  return (
    <div className=" w-full bg-black border-b border-neutral-800 z-40 px-4 py-2 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
      {/* Info Token */}
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <div className="text-gray-400 text-xs sm:text-sm uppercase">
          {data.symbol} — {data.name}
        </div>
        <div className="text-gray-500 text-xs hidden sm:block">
          Supply:{" "}
          {data.supply
            ? data.supply.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })
            : "—"}
        </div>
      </div>

      {/* MarketCap Display */}
      <div className="flex items-center gap-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={data.marketCap}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className={`font-mono font-semibold text-lg sm:text-xl ${colorClass}`}
          >
            ${formattedCap}
          </motion.div>
        </AnimatePresence>

        {trendUp === true && (
          <ArrowUpRight className="text-green-400 w-5 h-5 animate-bounce" />
        )}
        {trendUp === false && (
          <ArrowDownRight className="text-red-400 w-5 h-5 animate-bounce" />
        )}
      </div>

      {/* Price Display */}
      <div className="text-xs text-gray-500 font-mono sm:text-sm">
        ${formattedPrice}
      </div>
    </div>
  );
}
