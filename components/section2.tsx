import type { NextPage } from "next";
import Image from "next/image";
import ComparisonCards from "./comparison-cards";

export type Section2Type = {
  className?: string;
};

const Section2: NextPage<Section2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch [background:linear-gradient(178.68deg,_#fff,_rgba(255,_255,_255,_0.2)_33.52%,_#a43765)] flex flex-col items-center py-[152px] px-5 text-center text-xs text-red-red-500 font-['Google_Sans'] mq925:gap-[38px] mq925:pt-16 mq925:pb-16 mq925:box-border mq450:gap-[19px] mq1350:gap-[76px] mq1350:pt-[99px] mq1350:pb-[99px] mq1350:box-border ${className}`}
    >
      <div className="w-[1272px] flex flex-col items-center gap-[60px] mq925:gap-[30px]">
        <div className="self-stretch flex flex-col items-center gap-2">
          <div className="relative tracking-[-0.01em] font-medium">
            WHY NOT JUST…
          </div>
          <h1 className="m-0 w-[678px] relative text-5xl tracking-[0.01em] leading-[120%] font-bold font-[inherit] text-text-default flex items-center justify-center mq925:text-[38px] mq925:leading-[46px] mq450:text-[29px] mq450:leading-[35px]">
            SugarPress vs.
            <br />
            the alternatives.
          </h1>
        </div>
        <div className="self-stretch flex items-center flex-wrap content-center gap-3">
          <ComparisonCards
            dEVSHOP="DEV SHOP"
            k50K="$5K–$50K"
            durationIcons="/Duration-Icons.svg"
            weeksToMonths="Weeks to months"
            payForEveryChange="Pay for every change"
            platformIcons="/Vector.svg"
            realWordPress="Real WordPress"
            supportIcons="/Vector.svg"
            realHumans="Real humans"
          />
          <ComparisonCards
            comparisonCardsPadding="7px 8px 7px 6px"
            comparisonCardsAlignSelf="stretch"
            comparisonCardsJustifyContent="flex-end"
            devShopCardPadding="25px 10px 10px"
            devShopCardFlex="1"
            cardComponentsGap="20px"
            cardComponentsFlex="1"
            cardComponentsJustifyContent="space-between"
            dEVSHOP="GENERIC AI"
            k50K="Cheap, locked-in"
            durationIcons="/Vector.svg"
            weeksToMonths="Fast"
            payForEveryChange="Walled garden"
            platformIcons="/Duration-Icons.svg"
            realWordPress="Can't migrate out"
            supportIcons="/Duration-Icons.svg"
            realHumans="No human help"
          />
          <section className="self-stretch flex-1 rounded-[7.5px] bg-[rgba(255,255,255,0.4)] border-[rgba(255,255,255,0.15)] border-solid border-[0.8px] box-border overflow-hidden flex flex-col items-start py-[7px] pl-2 pr-1.5 min-w-[312px] text-left text-base text-text-inverse font-['Google_Sans']">
            <div className="self-stretch flex-1 rounded-lg [background:linear-gradient(238.31deg,_#f9d275,_#952a58_48.24%,_#37010c_74.73%)] overflow-hidden flex flex-col items-start pt-[25px] px-2.5 pb-2.5 relative isolate gap-2.5">
              <div className="w-[400px] h-[962px] absolute !!m-[0 important] top-[-96px] left-[0px] mix-blend-screen overflow-hidden flex items-center justify-center z-[0] shrink-0">
                <Image
                  className="w-full h-full mix-blend-screen object-cover absolute left-[0px] top-[0px] [transform:scale(1)]"
                  width={400}
                  height={962}
                  sizes="100vw"
                  alt=""
                  src="/Rectangle-2513@2x.png"
                />
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-3.5 z-[1] shrink-0">
                <div className="self-stretch flex flex-col items-start gap-3">
                  <div className="self-stretch flex flex-col items-start gap-[18px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-6">
                      SUGARPRESS
                    </div>
                    <h2 className="m-0 self-stretch relative text-4xl tracking-[-0.01em] leading-[130%] font-bold font-[inherit] mq925:text-[29px] mq925:leading-[37px] mq450:text-[22px] mq450:leading-7">
                      Free to start
                    </h2>
                  </div>
                  <button className="cursor-pointer [border:none] pt-[14.5px] px-7 pb-[15.5px] bg-[rgba(255,255,255,0.2)] w-[368px] [backdrop-filter:blur(10px)] rounded-[100px] overflow-hidden flex items-center justify-center box-border">
                    <div className="relative text-sm tracking-[-0.01em] leading-[150%] font-medium font-['Google_Sans'] text-text-inverse text-center">
                      Start Now
                    </div>
                  </button>
                </div>
                <div className="self-stretch rounded-[10px] bg-text-inverse flex flex-col items-start pt-6 px-0 pb-[30px] gap-3.5 text-text-muted">
                  <div className="self-stretch border-[rgba(0,0,0,0.08)] border-solid border-b-[1px] flex items-center pt-0 pb-3 pl-6 pr-0 gap-2">
                    <Image
                      className="h-4 w-4 relative"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
                      src="/Vector.svg"
                    />
                    <div className="relative tracking-[0.01em] leading-6">
                      Minutes to launch
                    </div>
                  </div>
                  <div className="self-stretch border-[rgba(0,0,0,0.08)] border-solid border-b-[1px] flex items-center pt-0 pb-3 pl-6 pr-0 gap-2">
                    <Image
                      className="h-4 w-4 relative"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
                      src="/Vector.svg"
                    />
                    <div className="relative tracking-[0.01em] leading-6">
                      Real WordPress
                    </div>
                  </div>
                  <div className="self-stretch border-[rgba(0,0,0,0.08)] border-solid border-b-[1px] flex items-center pt-0 pb-3 pl-6 pr-0 gap-2">
                    <Image
                      className="h-4 w-4 relative"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
                      src="/Vector.svg"
                    />
                    <div className="relative tracking-[0.01em] leading-6">
                      Edit by chat anytime
                    </div>
                  </div>
                  <div className="self-stretch flex items-center py-0 pl-6 pr-0 gap-2">
                    <Image
                      className="h-4 w-4 relative"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
                      src="/Vector.svg"
                    />
                    <div className="relative tracking-[0.01em] leading-6">
                      Real team behind it
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Section2;
