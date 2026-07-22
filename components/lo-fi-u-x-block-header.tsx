"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import LoFiText from "./lo-fi-text";

export type LoFiUXBlockHeaderType = {
  className?: string;
  supportingText?: boolean;
  uphead?: boolean;
  showLoFiUXBlockHeader?: boolean;
  textContainerCenter?: string | undefined;
  headerCenter?: string | undefined;
  paragraphCenter?: string | undefined;
  textContainerSize?: string | undefined;
  headerSize?: string | undefined;
  paragraphSize?: string | undefined;
  textContainerShowDiv?: boolean;
  headerShowDiv?: boolean;
  paragraphShowDiv?: boolean;
  textContainerShow?: boolean;
  headerShowText?: boolean;
  paragraphShowText?: boolean;
  textContainerDivWidth?: CSSProperties["width"];
  headerDivWidth?: CSSProperties["width"];
  paragraphDivWidth?: CSSProperties["width"];
  textContainerDivAlignSelf?: CSSProperties["alignSelf"];
  headerDivAlignSelf?: CSSProperties["alignSelf"];
  paragraphDivAlignSelf?: CSSProperties["alignSelf"];
  textContainerDivFlex?: CSSProperties["flex"];
  headerDivFlex?: CSSProperties["flex"];
  paragraphDivFlex?: CSSProperties["flex"];

  /** Variant props */
  breakpoint?: string | undefined;

  /** Style props */
  loFiUXBlockHeaderWidth?: CSSProperties["width"];
  loFiUXBlockHeaderPadding?: CSSProperties["padding"];
  textContainerWidth?: CSSProperties["width"];
};

const LoFiUXBlockHeader: NextPage<LoFiUXBlockHeaderType> = ({
  className = "",
  breakpoint = "Desktop",
  supportingText = true,
  uphead = false,
  showLoFiUXBlockHeader,
  loFiUXBlockHeaderWidth,
  loFiUXBlockHeaderPadding,
  textContainerWidth,
  textContainerCenter = "Off",
  headerCenter = "Off",
  paragraphCenter = "Off",
  textContainerSize = 14,
  headerSize = 14,
  paragraphSize = 14,
  textContainerShowDiv,
  headerShowDiv,
  paragraphShowDiv,
  textContainerShow,
  headerShowText,
  paragraphShowText,
  textContainerDivWidth,
  headerDivWidth,
  paragraphDivWidth,
  textContainerDivAlignSelf,
  headerDivAlignSelf,
  paragraphDivAlignSelf,
  textContainerDivFlex,
  headerDivFlex,
  paragraphDivFlex,
}) => {
  const loFiUXBlockHeaderStyle: CSSProperties = useMemo(() => {
    return {
      width: loFiUXBlockHeaderWidth,
      padding: loFiUXBlockHeaderPadding,
    };
  }, [loFiUXBlockHeaderWidth, loFiUXBlockHeaderPadding]);

  const textContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: textContainerWidth,
    };
  }, [textContainerWidth]);

  return (
    !!showLoFiUXBlockHeader && (
      <div
        className={`w-[197.9px] flex flex-col items-center justify-center py-0 px-[4.9px] box-border shrink-0 ${className}`}
        style={loFiUXBlockHeaderStyle}
      >
        <div
          className="w-[123.7px] flex flex-col items-center gap-[2.5px]"
          style={textContainerStyle}
        >
          <LoFiText
            center={textContainerCenter}
            size={textContainerSize}
            showDiv={textContainerShowDiv}
            divWidth={textContainerDivWidth}
            divAlignSelf={textContainerDivAlignSelf}
            divFlex={textContainerDivFlex}
            showText={textContainerShow}
          />
          <div className="w-full flex flex-col items-center gap-[2.8px] max-w-full">
            <LoFiText
              center={headerCenter}
              size={headerSize}
              showDiv={headerShowDiv}
              divWidth={headerDivWidth}
              divAlignSelf={headerDivAlignSelf}
              divFlex={headerDivFlex}
              showText={headerShowText}
            />
            <LoFiText
              center={paragraphCenter}
              size={paragraphSize}
              showDiv={paragraphShowDiv}
              divWidth={paragraphDivWidth}
              divAlignSelf={paragraphDivAlignSelf}
              divFlex={paragraphDivFlex}
              showText={paragraphShowText}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default LoFiUXBlockHeader;
