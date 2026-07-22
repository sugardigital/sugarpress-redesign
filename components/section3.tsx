"use client";
import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import BackgroundBorder from "./background-border";

export type Section3Type = {
  className?: string;
};

const Section3: NextPage<Section3Type> = ({ className = "" }) => {
  const [backgroundBorderItems] = useState([
    {
      clientAvatar: "/Client-Avatar@2x.png",
    },
    {
      clientAvatar: "/Client-Avatar-Two@2x.png",
    },
    {
      clientAvatar: "/Client-Avatar-Three@2x.png",
    },
  ]);
  const [backgroundBorderItems1] = useState([
    {
      clientAvatar: "/Ellipse-6@2x.png",
    },
    {
      clientAvatar: "/Ellipse-62@2x.png",
    },
    {
      clientAvatar: "/Ellipse-61@2x.png",
    },
  ]);
  return (
    <section
      className={`self-stretch flex flex-col items-center pt-[152px] px-5 pb-[100px] box-border relative isolate gap-[152px] max-w-full mq925:gap-[38px] mq925:pt-16 mq925:pb-[42px] mq925:box-border mq450:gap-[19px] mq1350:gap-[76px] mq1350:pt-[99px] mq1350:pb-[65px] mq1350:box-border ${className}`}
    >
      <div className="w-[1272px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.2)] rounded-2xl overflow-hidden flex flex-col items-center gap-[60px] max-w-full z-[0] shrink-0 mq925:gap-[30px]">
        <section className="self-stretch flex items-start justify-between gap-5 max-w-full text-center text-xs text-red-red-500 font-['Google_Sans'] mq1350:flex-wrap mq1350:gap-5">
          <div className="w-[575px] flex flex-col items-start gap-5 max-w-full mq925:min-w-full mq1350:flex-1">
            <div className="self-stretch flex flex-col items-start gap-2">
              <div className="relative tracking-[-0.01em] font-medium">
                BUILT BY HUMANS WHO KNOW WORDPRESS
              </div>
              <h1 className="m-0 self-stretch relative text-5xl tracking-[0.01em] leading-[120%] font-bold font-[inherit] text-text-default text-left mq925:text-[38px] mq925:leading-[46px] mq450:text-[29px] mq450:leading-[35px]">
                Over a decade of WordPress. Now powered by AI.
              </h1>
            </div>
            <h3 className="m-0 self-stretch relative text-xl tracking-[0.01em] leading-[160%] font-normal font-[inherit] text-text-muted text-left mq450:text-base mq450:leading-[26px]">
              SugarPress is a product from Sugar Design Group — consistently
              rated five stars on Google, with over a decade of WordPress builds
              behind us.
            </h3>
          </div>
          <div className="w-[518px] flex flex-col items-start gap-5 max-w-full text-left text-xl text-text-muted mq925:min-w-full mq1350:flex-1">
            <h3 className="m-0 self-stretch relative text-[length:inherit] tracking-[0.01em] leading-[160%] font-normal font-[inherit] mq450:text-base mq450:leading-[26px]">
              When the AI gets you 90% of the way there, real humans are here
              for the last mile. Real designers can craft your homepage by hand.
              Stuck on something else? Our team can take over.
            </h3>
            <button className="cursor-pointer [border:none] pt-[14.5px] px-7 pb-[15.5px] bg-text-default rounded-[100px] overflow-hidden flex items-center justify-center gap-2.5">
              <div className="relative text-sm tracking-[-0.01em] leading-[150%] font-medium font-['Google_Sans'] text-text-inverse text-center">{`About Sugar Design Group `}</div>
              <div className="flex flex-col items-center">
                <div className="relative text-sm tracking-[-0.01em] leading-[150%] font-medium font-['Google_Sans'] text-text-inverse text-center">
                  →
                </div>
              </div>
            </button>
          </div>
        </section>
        <div className="w-[1272px] flex flex-col items-start gap-[15px]">
          <section className="self-stretch flex items-start flex-wrap content-start gap-[15px] text-left text-2xl text-text-default font-['Google_Sans']">
            {backgroundBorderItems.map((item, index) => (
              <BackgroundBorder key={index} clientAvatar={item.clientAvatar} />
            ))}
          </section>
          <section className="self-stretch flex items-start flex-wrap content-start gap-[15px]">
            {backgroundBorderItems1.map((item, index) => (
              <BackgroundBorder key={index} clientAvatar={item.clientAvatar} />
            ))}
          </section>
        </div>
      </div>
      <div className="w-[282px] h-[282px] absolute !!m-[0 important] top-[943.4px] left-[42.4px] shadow-[0px_40.7px_39.9px_rgba(0,_0,_0,_0.18)] [filter:blur(2px)] rounded-[14.2px] overflow-hidden flex items-center justify-center z-[1] shrink-0">
        <Image
          className="w-full h-full shadow-[0px_40.7px_39.9px_rgba(0,_0,_0,_0.18)] [filter:blur(2px)] object-cover absolute left-[0px] top-[41px] [transform:scale(1)]"
          loading="lazy"
          width={282}
          height={282}
          sizes="100vw"
          alt=""
          src="/Rating-Star.svg"
        />
      </div>
    </section>
  );
};

export default Section3;
