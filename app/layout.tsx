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
        <title>OnExagi</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        
        <meta property="og:title" content="OnEXAGI" />
       
      
      </head>
      <body className={publicSans.className}>
        <NuqsAdapter>
          <div className="bg-secondary grid grid-rows-[auto,1fr] h-[100dvh]">
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
                <nav className="flex gap-1 flex-col md:flex-row">
                  <ActiveLink href="/">Basic EXAGI Agent  (default)</ActiveLink>
                  <ActiveLink href="/structured_output">
                    Structured EXAGI Agent 
                  </ActiveLink>
                  <ActiveLink href="/agents">WWW EXAGI Agents</ActiveLink>
                  <ActiveLink href="/retrieval">Main EXAGI Agents</ActiveLink>
                
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
