import Image from "next/image";
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
      <div>
         <a
         href="#"
      className="relative group overflow-hidden px-6 py-3 rounded-lg font-semibold text-white 
                 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 
                 shadow-lg shadow-purple-800/40 
                 hover:from-pink-500 hover:via-purple-600 hover:to-blue-500
                 transition-all duration-300 ease-in-out
                 flex items-center gap-3"
    >
      {/* Futuristic border glow effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 opacity-30 blur-lg group-hover:opacity-50 transition-all duration-300"></span>

      {/* Foreground Content */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 z-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 17l6-6-6-6M20 7h-9M20 17h-9" />
      </svg>

      <span className="z-10">Buy $KOMMIAI</span>
    </a>
      </div>

      <div className="text-sm max-w-[600px] mx-auto text-center">
        {props.children}
      </div>
    </div>
  );
}
