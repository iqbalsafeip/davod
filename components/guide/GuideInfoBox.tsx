import Image from "next/image";
import { ReactNode } from "react";
const Logo = () => (
  <Image src={"/images/logo_agent.png"} alt="logo" width={100} height={60} className="" />
);
export function GuideInfoBox(props: { children: ReactNode }) {
  return (
    <div className="max-w-[768px] w-full overflow-hidden flex-col justify-center items-center gap-5 flex text-md my-16 mx-auto">
      <div className="text-4xl text-center">
        <Logo />
      </div>

      <div className="text-sm max-w-[600px] mx-auto text-center">
        {props.children}
      </div>
    </div>
  );
}
