import "./globals.css";
import { Public_Sans } from "next/font/google";
import {  ActiveSelectMenu } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Database, FileText, GithubIcon, Globe, Layers, ShoppingCart } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import Image from "next/image";

const publicSans = Public_Sans({ subsets: ["latin"] });

const Logo = () => (
  <Image src={"/images/logo.png"} alt="logo" width={140} height={80} className="" />
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  // 🧭 List menu options
  const options = [
    {
      label: "Basic FILESENSE Agent (default)",
      href: "/",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      label: "Structured FILESENSE Agent",
      href: "/structured_output",
      icon: <Layers className="w-4 h-4" />,
    },
    {
      label: "WWW FILESENSE Agent",
      href: "/agents",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      label: "Main FILESENSE Agent",
      href: "/retrieval",
      icon: <Database className="w-4 h-4" />,
    },
  ];
  ;

  return (
    <html lang="en">
      <head>
        <title>FILESENSE</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />

        <meta property="og:title" content="FILESENSE" />


      </head>
      <body className={publicSans.className}>
        <NuqsAdapter>
          <div className="bg-indigo-900 grid grid-rows-[auto,1fr] h-[100dvh]">
            <div className="grid grid-cols-[1fr,auto] gap-2 p-4">
              <div className="flex gap-4 flex-col md:flex-row md:items-center justify-between">
                <a
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <Logo />
                </a>
                <nav className="flex gap-1 flex-col md:flex-row text-white items-center gap-2" >
                  <a
                    href={"https://pump.fun/coin/HAkt3gFSXWzXcKh3fBAf4WDT4csxryEZUERPjMX3pump"}
                    target={"_blank"}
                    className={`
        inline-flex items-center justify-center gap-2
        px-6 py-3 rounded-2xl font-semibold text-sm tracking-wide
        text-white bg-teal-700 hover:bg-teal-600
        shadow-md hover:shadow-lg active:scale-95
        transition-all duration-300
      `}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Buy $FILESENSE</span>
                  </a>
                  <ActiveSelectMenu
                    options={options}
                  />

                  {/* <ActiveLink href="/">Basic FILESENSE Agent  (default)</ActiveLink>
                    <ActiveLink href="/structured_output">
                      Structured FILESENSE Agent
                    </ActiveLink>
                    <ActiveLink href="/agents">WWW FILESENSE Agent</ActiveLink>
                    <ActiveLink href="/retrieval">Main FILESENSE Agent</ActiveLink> */}
                  {/* <ActiveLink href="/about">About</ActiveLink>
                  <ActiveLink href="/terms-condition">Terms And Condition</ActiveLink> */}

                </nav>
              </div>

              <div className="flex justify-center">
                {/* <Button asChild variant="outline" size="default">
                  <a
                    href="https://github.com/langchain-ai/langchain-nextjs-template"
                    target="_blank"
                  >
                    <GithubIcon className="size-3" />
                    <span>Open in GitHub</span>
                  </a>
                </Button> */}
              </div>
            </div>
            <div className="bg-background mx-4 relative grid rounded-t-2xl border border-input border-b-0">
              <div className="absolute inset-0">{children}</div>
            </div>
          </div>
          <Toaster />
        </NuqsAdapter>
      </body>
    </html>
  );
}

import React from "react";
import Link from "next/link";
import { Twitter } from "lucide-react"; // ✅ ikon X (Twitter)

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} FILESENSE Team. All rights reserved.
        </p>

        <div className="flex items-center space-x-6 text-sm font-medium">
          {/* Navigasi halaman */}
          <Link href="/about" className="hover:text-gray-900 transition">
            About
          </Link>
          <Link href="/terms-condition" className="hover:text-gray-900 transition">
            Terms & Conditions
          </Link>

          {/* Ikon X / Twitter */}
          <Link
            href="https://x.com/FILESENSEAgent" // 🔗 ganti dengan URL akun X kamu
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition flex items-center"
          >
            <Twitter className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

