import { ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import MarketCapDisplay from "../Marketcap";
const Logo = () => (
  <Image src={"/images/logo_agent.png"} alt="logo" width={150} height={60} className="" />
);
export function GuideInfoBox(props: { children: ReactNode }) {
  return (
    <div className="max-w-[768px] w-full overflow-hidden flex-col justify-center items-center gap-5 flex text-md my-16 mx-auto">
      {/* <div className="text-4xl text-center">
        <Logo />
      </div> */}
      <div className="flex items-center space-x-6 text-sm font-medium">
        {/* Navigasi halaman */}
        <Link href="/whitepaper.pdf" className="hover:text-gray-900 transition">
          Whitepaper
        </Link>
        {/* Ikon X / Twitter */}
        <Link
          href="https://x.com/davodagents" // 🔗 ganti dengan URL akun X kamu
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 transition flex items-center"
        >
          <X className="w-5 h-5" />
        </Link>
        
      </div>
<a
          href="https://pump.fun/coin/7gLBph41BwACer5gv5NTwRyrqUX6AwPgqmrYHqFvpump"
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-green-500/40 
                             text-green-300 hover:text-black hover:bg-green-400/90 transition-all duration-200"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Buy $DAVOD</span>
        </a>
      <div className="text-sm max-w-[600px] mx-auto text-center">
        {props.children}
      </div>
    </div>
  );
}
