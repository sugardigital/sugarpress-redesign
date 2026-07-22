import type { NextPage } from "next";
import Image from "next/image";

export type NavType = {
  className?: string;
};

const Nav: NextPage<NavType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex items-center justify-between py-3.5 px-6 gap-5 z-[4] shrink-0 text-left text-sm text-red-red-500 font-['Google_Sans'] ${className}`}
    >
      <div className="h-[27.3px] w-[150px] overflow-hidden shrink-0 flex items-start pt-[4.1px] px-px pb-[5.2px] box-border gap-[5.4px] text-[15px] font-[Inter]">
        <div className="flex flex-col items-start pt-0.5 px-0 pb-0">
          <div className="w-[20.5px] h-[15px] relative">
            <Image
              className="absolute top-[0px] left-[0px] w-[4.8px] h-[15px]"
              width={4.8}
              height={15}
              sizes="100vw"
              alt=""
              src="/Logo-Icon-Elements.svg"
            />
            <Image
              className="absolute top-[3.4px] left-[6.1px] w-[8.2px] h-[8.2px]"
              width={8.2}
              height={8.2}
              sizes="100vw"
              alt=""
              src="/Group.svg"
            />
            <Image
              className="absolute top-[0px] left-[15.7px] w-[4.8px] h-[15px]"
              width={4.8}
              height={15}
              sizes="100vw"
              alt=""
              src="/Logo-Icon-Elements1.svg"
            />
          </div>
        </div>
        <b className="h-[18px] w-[104px] relative inline-block">
          SugarPress AI
        </b>
      </div>
      <div className="flex items-center gap-[50px] text-[#04000b] mq925:hidden mq450:gap-[25px]">
        <div className="flex flex-col items-start">
          <div className="relative tracking-[-0.01em] leading-4">
            How it works
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="relative tracking-[-0.01em] leading-4">Features</div>
        </div>
        <div className="flex flex-col items-start">
          <div className="relative tracking-[-0.01em] leading-4">Pricing</div>
        </div>
        <div className="flex flex-col items-start">
          <div className="relative tracking-[-0.01em] leading-4">FAQ</div>
        </div>
      </div>
      <div className="rounded-[100px] bg-red-red-500 flex items-center justify-center py-2 px-4 text-center text-text-inverse">
        <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
          Join the Waitlist
        </div>
      </div>
    </section>
  );
};

export default Nav;
