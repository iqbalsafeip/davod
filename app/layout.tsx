import "./globals.css";
import { Public_Sans } from "next/font/google";
import { ActiveLink } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import Image from "next/image";

const publicSans = Public_Sans({ subsets: ["latin"] });

const Logo = () => (
  <Image src={"/images/logo.png"} alt="logo" width={100} height={60} className="" />
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>SyncDoc</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        
        <meta property="og:title" content="SyncDoc" />
       
      
      </head>
      <body className={publicSans.className}>
        <NuqsAdapter>
          <div className="bg-teal-950 grid grid-rows-[auto,1fr] h-[100dvh]">
            <div className="grid grid-cols-[1fr,auto] gap-2 p-4">
              <div className="flex gap-4 flex-col md:flex-row md:items-center">
                <a
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <Logo />
                </a>
                <nav className="flex gap-1 flex-col md:flex-row text-white">
                  <ActiveLink href="/">Basic SyncDoc Agent  (default)</ActiveLink>
                  <ActiveLink href="/structured_output">
                    Structured SyncDoc Agent 
                  </ActiveLink>
                  <ActiveLink href="/agents">WWW SyncDoc Agent</ActiveLink>
                  <ActiveLink href="/retrieval">Main SyncDoc Agent</ActiveLink>
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
          <Footer />
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
          © {new Date().getFullYear()} SyncDoc Team. All rights reserved.
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
            href="https://x.com/SyncDocAgent" // 🔗 ganti dengan URL akun X kamu
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

