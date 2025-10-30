
import "./globals.css";
import { ActiveSelectMenu } from "@/components/Navbar";
import { ShoppingCart, FileText, Layers, Globe } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import Image from "next/image";

const Logo = () => (
  <Image src="/images/logo.png" alt="logo" width={140} height={80} />
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const options = [
    {
      label: "x402 Agent (default)",
      href: "/",
      icon: <FileText className="w-4 h-4 text-green-400" />,
    },
    {
      label: "x403 Agent",
      href: "/structured_output",
      icon: <Layers className="w-4 h-4 text-green-400" />,
    },
    {
      label: "x404 Agent",
      href: "/agents",
      icon: <Globe className="w-4 h-4 text-green-400" />,
    },
  ];


  return (
    <html lang="en">
      <head>
        <title>— DAVOD</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta property="og:title" content="— DAVOD" />
      </head>

      <body
        className={`font-mono text-green-400 bg-black min-h-screen tracking-wide`}
      >
        <NuqsAdapter>
          <MarketCap />
          <Tracker />

          <div className="grid grid-rows-[auto,1fr,auto] min-h-[100dvh] mt-15">
            {/* HEADER */}
            <div className="border-b border-green-500/30 p-4 flex justify-between items-center bg-black">
              <div className="flex items-center gap-3">
                <Logo />
                
              </div>

              <nav className="flex items-center gap-3">
                

                <ActiveSelectMenu options={options} />
              </nav>
            </div>

            {/* MAIN */}
            <main
              className="bg-black border-x border-green-500/20 relative overflow-hidden flex-1"
              style={{
                boxShadow: "inset 0 0 20px rgba(0,255,100,0.1)",
              }}
            >
              {/* background scanline */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,255,0,0.05)_1px,transparent_1px)] bg-[length:100%_2px] opacity-50" />
              <div className="">{children}</div>
            </main>

            {/* FOOTER */}
            <Footer />
          </div>
          <Toaster />
        </NuqsAdapter>
      </body>
    </html>
  );
}

import Link from "next/link";
import { Twitter } from "lucide-react";
import Tracker from "@/components/Tracker";
import MarketCap from "@/components/Marketcap";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-500/30 text-green-400 text-xs md:text-sm">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="tracking-widest text-center md:text-left">
          © {new Date().getFullYear()}/DAVOD Teams
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="https://x.com/davodagents"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition flex items-center gap-2"
          >
            <Twitter className="w-5 h-5" />
            <span className="hidden md:inline">/DAVOD Agents</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

