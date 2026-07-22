"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type FrameComponentType = {
  className?: string;
  backgroundImageOne: string;
  sTARTFRESH?: string;
  buildingFromScratch?: string;
  tellSugarPressWhatYouNeedIn?: string;

  /** Style props */
  backgroundImageOneHeight?: CSSProperties["height"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  backgroundImageOne,
  backgroundImageOneHeight,
  sTARTFRESH,
  buildingFromScratch,
  tellSugarPressWhatYouNeedIn,
}) => {
  const backgroundImageOneStyle: CSSProperties = useMemo(() => {
    return {
      height: backgroundImageOneHeight,
    };
  }, [backgroundImageOneHeight]);

  return (
    <section
      className={`w-[444px] flex flex-col items-start py-5 px-0 box-border gap-2.5 max-w-full text-left text-sm text-red-red-500 font-['Google_Sans'] mq925:min-w-full mq1350:flex-1 ${className}`}
    >
      <div className="self-stretch flex flex-col items-start gap-[30px]">
        <div className="w-[75px] h-[75px] rounded-[22.5px] bg-red-red-50 flex items-center justify-center">
          <Image
            className="h-[37px] w-full relative"
            loading="lazy"
            width={37}
            height={37}
            sizes="100vw"
            alt=""
            src={backgroundImageOne}
            style={backgroundImageOneStyle}
          />
        </div>
        <div className="self-stretch flex flex-col items-start gap-1">
          <div className="self-stretch relative tracking-[-0.01em] leading-[150%] font-medium">
            {sTARTFRESH}
          </div>
          <h2 className="m-0 self-stretch relative text-4xl tracking-[-0.01em] leading-[130%] font-bold font-[inherit] text-text-default mq925:text-[29px] mq925:leading-[37px] mq450:text-[22px] mq450:leading-7">
            {buildingFromScratch}
          </h2>
        </div>
      </div>
      <h3 className="m-0 self-stretch relative text-xl tracking-[0.01em] leading-[160%] font-normal font-[inherit] text-text-muted mq450:text-base mq450:leading-[26px]">
        {tellSugarPressWhatYouNeedIn}
      </h3>
    </section>
  );
};

export default FrameComponent;
