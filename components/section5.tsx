import type { NextPage } from "next";
import Image from "next/image";

export type Section5Type = {
  className?: string;
};

const Section5: NextPage<Section5Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center pt-[70px] px-5 pb-5 mq925:gap-[38px] mq925:pt-[45px] mq925:box-border mq450:gap-[19px] mq1350:gap-[76px] ${className}`}
    >
      <div className="w-[1272px] flex flex-col items-start gap-[50px] mq925:gap-[25px]">
        <section className="self-stretch rounded-[15px] [background:linear-gradient(238.31deg,_#37010c,_#952a58_51.76%,_#f9d275)] overflow-hidden flex items-center justify-center py-[60px] px-0 relative isolate text-center text-[54px] text-text-inverse font-['Google_Sans'] mq450:pt-[39px] mq450:pb-[39px] mq450:box-border">
          <div className="h-[2716px] w-[1313px] absolute !!m-[0 important] top-[-856px] left-[-39px] mix-blend-screen overflow-hidden flex items-center justify-center z-[0] shrink-0">
            <Image
              className="h-full w-full mix-blend-screen object-cover absolute left-[19px] top-[0px] [transform:scale(1)]"
              width={1313}
              height={2716}
              sizes="100vw"
              alt=""
              src="/Rectangle-2513@2x.png"
            />
          </div>
          <div className="flex flex-col items-center gap-5 z-[1] shrink-0">
            <div className="flex flex-col items-start">
              <h1 className="m-0 w-[528px] relative text-[length:inherit] tracking-[0.01em] leading-[120%] font-bold font-[inherit] flex items-center justify-center mq925:text-[43px] mq925:leading-[52px] mq450:text-[32px] mq450:leading-[39px]">
                AI for WordPress
                <br />
                is here.
              </h1>
            </div>
            <h3 className="m-0 self-stretch relative text-xl tracking-[0.01em] leading-[160%] font-normal font-[inherit] mq450:text-base mq450:leading-[26px]">
              Be first in line when SugarPress opens.
            </h3>
            <button className="cursor-pointer [border:none] pt-[14.5px] px-7 pb-[15.5px] bg-text-default rounded-[100px] overflow-hidden flex items-center justify-center gap-2.5">
              <div className="relative text-sm tracking-[-0.01em] leading-[150%] font-medium font-['Google_Sans'] text-text-inverse text-center">
                Join the Waitlist
              </div>
              <div className="flex flex-col items-center">
                <div className="relative text-sm tracking-[-0.01em] leading-[150%] font-medium font-['Google_Sans'] text-text-inverse text-center">
                  →
                </div>
              </div>
            </button>
          </div>
        </section>
        <footer className="self-stretch flex items-start justify-between flex-wrap content-start gap-x-5 gap-y-0 text-left text-sm text-text-muted font-['Google_Sans']">
          <div className="h-[27.6px] w-[152px] overflow-hidden shrink-0 flex items-start pt-[4.1px] px-px pb-[5.5px] box-border gap-[5.5px] text-[15.2px] text-red-red-500 font-[Inter]">
            <div className="flex flex-col items-start pt-[2.1px] px-0 pb-0">
              <div className="w-[20.7px] h-[15.2px] relative">
                <Image
                  className="absolute top-[0px] left-[0px] w-[4.8px] h-[15.2px]"
                  width={4.8}
                  height={15.2}
                  sizes="100vw"
                  alt=""
                  src="/Logo-Icon-Elements.svg"
                />
                <Image
                  className="absolute top-[3.4px] left-[6.2px] w-[8.3px] h-[8.3px]"
                  width={8.3}
                  height={8.3}
                  sizes="100vw"
                  alt=""
                  src="/Group1.svg"
                />
                <Image
                  className="absolute top-[0px] left-[15.9px] w-[4.8px] h-[15.2px]"
                  width={4.8}
                  height={15.2}
                  sizes="100vw"
                  alt=""
                  src="/Logo-Icon-Elements1.svg"
                />
              </div>
            </div>
            <b className="h-[18px] w-[106px] relative inline-block">
              SugarPress AI
            </b>
          </div>
          <div className="flex flex-col items-center justify-center gap-[23px]">
            <div className="flex flex-col items-start">
              <div className="relative tracking-[-0.01em] leading-4">
                A product from Sugar Design Group · Based in Vancouver, BC ·
                Available worldwide
              </div>
            </div>
            <div className="relative tracking-[-0.01em] leading-[150%] font-medium text-red-red-500 text-center">
              Powered by 10Web
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="self-stretch flex flex-col items-start">
              <div className="relative tracking-[-0.01em] leading-4">
                Privacy
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start">
              <div className="relative tracking-[-0.01em] leading-4">Terms</div>
            </div>
            <div className="self-stretch flex flex-col items-start">
              <div className="relative tracking-[-0.01em] leading-4">
                Contact
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Section5;
