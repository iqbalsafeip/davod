import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
const Logo = () => (
  <Image src={"/images/logo_agent.png"} alt="logo" width={150} height={60} className="" />
);
export function GuideInfoBox(props: { children: ReactNode }) {
  return (
    <div className="max-w-[768px] w-full overflow-hidden flex-col justify-center items-center gap-5 flex text-md my-16 mx-auto">
      <div className="text-4xl text-center">
        <Logo />
      </div>
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
            href="https://x.com/filesenseagents" // 🔗 ganti dengan URL akun X kamu
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition flex items-center"
          >
            <X className="w-5 h-5" />
          </Link>
      </div>

      <div className="text-sm max-w-[600px] mx-auto text-center">
        {props.children}
      </div>
    </div>
  );
}
