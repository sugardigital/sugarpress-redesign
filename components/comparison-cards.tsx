"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type ComparisonCardsType = {
  className?: string;
  dEVSHOP?: string;
  k50K?: string;
  durationIcons: string;
  weeksToMonths?: string;
  payForEveryChange?: string;
  platformIcons: string;
  realWordPress?: string;
  supportIcons: string;
  realHumans?: string;

  /** Style props */
  comparisonCardsPadding?: CSSProperties["padding"];
  comparisonCardsAlignSelf?: CSSProperties["alignSelf"];
  comparisonCardsJustifyContent?: CSSProperties["justifyContent"];
  devShopCardPadding?: CSSProperties["padding"];
  devShopCardFlex?: CSSProperties["flex"];
  cardComponentsGap?: CSSProperties["gap"];
  cardComponentsFlex?: CSSProperties["flex"];
  cardComponentsJustifyContent?: CSSProperties["justifyContent"];
};

const ComparisonCards: NextPage<ComparisonCardsType> = ({
  className = "",
  comparisonCardsPadding,
  comparisonCardsAlignSelf,
  comparisonCardsJustifyContent,
  devShopCardPadding,
  devShopCardFlex,
  cardComponentsGap,
  cardComponentsFlex,
  cardComponentsJustifyContent,
  dEVSHOP,
  k50K,
  durationIcons,
  weeksToMonths,
  payForEveryChange,
  platformIcons,
  realWordPress,
  supportIcons,
  realHumans,
}) => {
  const comparisonCardsStyle: CSSProperties = useMemo(() => {
    return {
      padding: comparisonCardsPadding,
      alignSelf: comparisonCardsAlignSelf,
      justifyContent: comparisonCardsJustifyContent,
    };
  }, [
    comparisonCardsPadding,
    comparisonCardsAlignSelf,
    comparisonCardsJustifyContent,
  ]);

  const devShopCardStyle: CSSProperties = useMemo(() => {
    return {
      padding: devShopCardPadding,
      flex: devShopCardFlex,
    };
  }, [devShopCardPadding, devShopCardFlex]);

  const cardComponentsStyle: CSSProperties = useMemo(() => {
    return {
      gap: cardComponentsGap,
      flex: cardComponentsFlex,
      justifyContent: cardComponentsJustifyContent,
    };
  }, [cardComponentsGap, cardComponentsFlex, cardComponentsJustifyContent]);

  return (
    <section
      className={`flex-1 rounded-[7.5px] bg-[rgba(255,255,255,0.4)] border-[rgba(255,255,255,0.4)] border-solid border-[0.8px] box-border overflow-hidden flex flex-col items-start py-[7px] pl-2 pr-1.5 min-w-[312px] text-left text-base text-red-red-500 font-['Google_Sans'] ${className}`}
      style={comparisonCardsStyle}
    >
      <div
        className="self-stretch shadow-[0px_0px_3px_rgba(0,_0,_0,_0.15)] rounded-[10px] bg-text-inverse overflow-hidden flex flex-col items-start pt-[25px] px-4 pb-4 mq925:pt-5 mq925:pb-5 mq925:box-border"
        style={devShopCardStyle}
      >
        <div
          className="self-stretch flex flex-col items-start gap-[115px] mq450:gap-[57px]"
          style={cardComponentsStyle}
        >
          <div className="self-stretch flex flex-col items-start gap-[18px]">
            <div className="self-stretch relative tracking-[-0.01em] leading-[150%] font-medium">
              {dEVSHOP}
            </div>
            <h2 className="m-0 self-stretch relative text-4xl tracking-[-0.01em] leading-[130%] font-bold font-[inherit] text-text-default mq925:text-[29px] mq925:leading-[37px] mq450:text-[22px] mq450:leading-7">
              {k50K}
            </h2>
          </div>
          <div className="self-stretch rounded-[10px] bg-[#f5f5f5] flex flex-col items-start pt-6 px-0 pb-[30px] gap-3.5 text-text-muted">
            <div className="self-stretch border-[rgba(0,0,0,0.08)] border-solid border-b-[1px] flex items-center pt-0 pb-3 pl-6 pr-0 gap-2">
              <Image
                className="h-4 w-4 relative"
                loading="lazy"
                width={16}
                height={16}
                sizes="100vw"
                alt=""
                src={durationIcons}
              />
              <div className="relative tracking-[0.01em] leading-6">
                {weeksToMonths}
              </div>
            </div>
            <div className="self-stretch border-[rgba(0,0,0,0.08)] border-solid border-b-[1px] flex items-center pt-0 pb-3 pl-6 pr-0 gap-[7px]">
              <Image
                className="h-4 w-4 relative"
                loading="lazy"
                width={16}
                height={16}
                sizes="100vw"
                alt=""
                src="/Duration-Icons.svg"
              />
              <div className="relative tracking-[0.01em] leading-6">
                {payForEveryChange}
              </div>
            </div>
            <div className="self-stretch border-[rgba(0,0,0,0.08)] border-solid border-b-[1px] flex items-center pt-0 pb-3 pl-6 pr-0 gap-2">
              <Image
                className="h-4 w-4 relative"
                loading="lazy"
                width={16}
                height={16}
                sizes="100vw"
                alt=""
                src={platformIcons}
              />
              <div className="relative tracking-[0.01em] leading-6">
                {realWordPress}
              </div>
            </div>
            <div className="self-stretch flex items-center py-0 pl-6 pr-0 gap-2">
              <Image
                className="h-4 w-4 relative"
                loading="lazy"
                width={16}
                height={16}
                sizes="100vw"
                alt=""
                src={supportIcons}
              />
              <div className="relative tracking-[0.01em] leading-6">
                {realHumans}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonCards;
