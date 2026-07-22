"use client";
import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import FrameComponent from "./frame-component";
import StatDisplay from "./stat-display";

export type Section1Type = {
  className?: string;
};

const Section1: NextPage<Section1Type> = ({ className = "" }) => {
  const [statDisplayItems] = useState([
    {
      m: "2M+",
      wordPressSitesBuilt: "WordPress sites built",
    },
    {
      m: "60K+",
      wordPressSitesBuilt: "Plugins available",
    },
    {
      m: "99.9%",
      wordPressSitesBuilt: "Uptime guarantee",
    },
    {
      m: "90+",
      wordPressSitesBuilt: "Google PageSpeed",
    },
  ]);
  return (
    <section
      className={`self-stretch flex flex-col items-center pt-[152px] px-5 pb-[100px] box-border relative isolate gap-[152px] max-w-full text-center text-xs text-red-red-500 font-['Google_Sans'] mq925:gap-[38px] mq925:pt-[42px] mq925:pb-[27px] mq925:box-border mq450:gap-[19px] mq1350:gap-[76px] mq1350:pt-16 mq1350:pb-[42px] mq1350:box-border ${className}`}
    >
      <div className="w-[189.6px] h-[189.6px] absolute !!m-[0 important] top-[1679.1px] left-[1580px] shadow-[0px_40.7px_39.9px_rgba(0,_0,_0,_0.18)] [filter:blur(2px)] rounded-[14.2px] overflow-hidden flex items-center justify-center z-[0]">
        <Image
          className="w-full h-full shadow-[0px_40.7px_39.9px_rgba(0,_0,_0,_0.18)] [filter:blur(2px)] object-cover absolute left-[0px] top-[39px] [transform:scale(1.186)]"
          loading="lazy"
          width={189.6}
          height={189.6}
          sizes="100vw"
          alt=""
          src="/Vector1.svg"
        />
      </div>
      <div className="w-[1272px] flex flex-col items-center gap-[60px] max-w-full z-[1] mq925:gap-[30px]">
        <div className="self-stretch flex flex-col items-center gap-2">
          <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
            TWO WAYS IN
          </div>
          <h1 className="m-0 w-[678px] relative text-5xl tracking-[0.01em] leading-[120%] font-bold font-[inherit] text-text-default flex items-center justify-center mq925:text-[38px] mq925:leading-[46px] mq450:text-[29px] mq450:leading-[35px]">
            Start a new site,
            <br />
            or convert your existing one.
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start gap-[120px] max-w-full mq925:gap-[60px] mq450:gap-[30px]">
          <div className="self-stretch flex items-center justify-between gap-5 max-w-full mq1350:flex-wrap mq1350:gap-5">
            <FrameComponent
              backgroundImageOne="/Background-Image-One.svg"
              sTARTFRESH="START FRESH"
              buildingFromScratch="Building from scratch?"
              tellSugarPressWhatYouNeedIn="Tell SugarPress what you need. In minutes, you'll have a complete WordPress site ready to refine and publish. No templates to hack, no code to write."
            />
            <section className="h-[583px] w-[665px] rounded-[12.5px] overflow-hidden shrink-0 flex items-start pt-[207.5px] px-[197px] pb-[207px] box-border bg-[url('/Convert-Option-Block@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq925:min-w-full mq450:py-[135px] mq450:px-5 mq450:box-border mq1350:flex-1">
              <div className="bg-[#8d2b52] flex flex-col items-start py-0.5 px-[3px]">
                <Image
                  className="w-full h-[11.5px] relative shrink-0"
                  loading="lazy"
                  width={14.9}
                  height={11.5}
                  sizes="100vw"
                  alt=""
                  src="/Group-14.svg"
                />
              </div>
            </section>
          </div>
          <div className="self-stretch flex items-center justify-between gap-5 max-w-full mq1350:flex-wrap mq1350:gap-5">
            <section className="h-[583px] w-[665px] rounded-[12.5px] [background:linear-gradient(237.72deg,_#37010c,_#952a58_46.61%,_#ff84b9)] overflow-hidden shrink-0 flex flex-col items-end pt-[69px] px-[50px] pb-[35.7px] box-border relative isolate max-w-full text-left text-[17.4px] text-red-red-500 font-[Inter] mq925:h-auto mq925:pl-[25px] mq925:pr-[25px] mq925:box-border mq925:min-w-full mq1350:flex-1">
              <div className="w-[217.74%] h-[580.07%] absolute !!m-[0 important] top-[-240.03%] right-[-80.99%] bottom-[-240.03%] left-[-36.75%] max-w-full max-h-full mix-blend-screen z-[1] overflow-hidden flex items-center justify-center shrink-0">
                <Image
                  className="w-full h-full overflow-hidden mix-blend-screen z-[1] object-cover absolute left-[0px] top-[0px] [transform:scale(1)]"
                  width={1448}
                  height={3381.8}
                  sizes="100vw"
                  alt=""
                  src="/Rectangle-25131@2x.png"
                />
              </div>
              <div className="flex items-start justify-end py-0 pl-[108px] pr-[107px] shrink-0 mq925:pl-[54px] mq925:pr-[53px] mq925:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="h-[81px] shadow-[0px_2.8px_3.8px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(19px)] rounded-[10.7px] [background:rgba(255,_255,_255,_0.2)_padding-box,_linear-gradient(180deg,_rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0))_border-box] [border:0.6px_solid_transparent] box-border flex flex-col items-center justify-center py-[19px] px-[21px] mq925:h-auto">
                  <div className="flex items-center py-0 px-1 gap-[19.9px] shrink-0 mq925:flex-wrap">
                    <Image
                      className="w-[46.4px] relative max-h-full object-cover"
                      loading="lazy"
                      width={46.4}
                      height={46.4}
                      sizes="100vw"
                      alt=""
                      src="/WordPress-blue-logo-svg-1@2x.png"
                    />
                    <Image
                      className="h-[19.9px] w-[37px] relative"
                      loading="lazy"
                      width={37}
                      height={19.9}
                      sizes="100vw"
                      alt=""
                      src="/Group-8.svg"
                    />
                    <div className="rounded-md bg-text-inverse overflow-hidden flex items-center py-[8.8px] px-[11px] gap-[6.6px]">
                      <Image
                        className="h-[17.4px] w-[23.8px] relative"
                        loading="lazy"
                        width={23.8}
                        height={17.4}
                        sizes="100vw"
                        alt=""
                        src="/Group-5.svg"
                      />
                      <b className="relative">SugarPress AI</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[564.5px] h-[430.3px] rounded-[7.5px] bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.15)] border-solid border-[0.8px] box-border overflow-hidden shrink-0 flex flex-col items-start py-[3px] px-1 max-w-full z-[2] mt-[-33px] relative">
                <Image
                  className="self-stretch flex-1 relative rounded-[6.7px] max-w-full overflow-hidden max-h-full w-full h-auto object-cover"
                  width={555}
                  height={420.7}
                  sizes="100vw"
                  alt=""
                  src="/Frame-37@2x.png"
                />
              </div>
            </section>
            <FrameComponent
              backgroundImageOne="/Card-Icon-Two.svg"
              backgroundImageOneHeight="32px"
              sTARTFRESH="CONVERT YOUR SITE"
              buildingFromScratch="Already have WordPress?"
              tellSugarPressWhatYouNeedIn="Bring it over and convert it onto the AI compatible SugarPress theme. Do it yourself, or have Sugar Design Group do it. Once converted, you're fully autonomous."
            />
          </div>
        </div>
      </div>
      <section className="w-[1272px] flex flex-col items-center z-[2] text-center text-base text-text-muted font-['Google_Sans'] mq925:gap-[30px]">
        <div className="w-full flex flex-col items-center gap-[60px] max-w-full mq925:gap-[30px]">
          <div className="self-stretch relative tracking-[0.01em] leading-6">
            Built on infrastructure trusted by
          </div>
          <div className="self-stretch flex items-start justify-between gap-3 text-left text-[70px] text-red-red-500 mq1350:flex-wrap mq1350:justify-center">
            {statDisplayItems.map((item, index) => (
              <StatDisplay
                key={index}
                m={item.m}
                wordPressSitesBuilt={item.wordPressSitesBuilt}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Section1;
