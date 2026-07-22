"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type LowFiLabelType = {
  className?: string;

  /** Variant props */
  breakpoint?: string | undefined;
  variant?: string | number | undefined;

  /** Style props */
  lowFiLabelHeight?: CSSProperties["height"];
  lowFiLabelBorderRadius?: CSSProperties["borderRadius"];
  lowFiLabelJustifyContent?: CSSProperties["justifyContent"];
  lowFiLabelPadding?: CSSProperties["padding"];
  labelTitlesHeight?: CSSProperties["height"];
  labelTitlesWidth?: CSSProperties["width"];
  labelTitlesBorderRadius?: CSSProperties["borderRadius"];
  labelTitlesBackgroundColor?: CSSProperties["backgroundColor"];
  textHeight?: CSSProperties["height"];
  textWidth?: CSSProperties["width"];
  textBorderRadius?: CSSProperties["borderRadius"];
  textBackgroundColor?: CSSProperties["backgroundColor"];
  iconPlaceholderHeight?: CSSProperties["height"];
  iconPlaceholderWidth?: CSSProperties["width"];
};

const LowFiLabel: NextPage<LowFiLabelType> = ({
  className = "",
  breakpoint = "Desktop",
  variant = 1,
  lowFiLabelHeight,
  lowFiLabelBorderRadius,
  lowFiLabelJustifyContent,
  lowFiLabelPadding,
  labelTitlesHeight,
  labelTitlesWidth,
  labelTitlesBorderRadius,
  labelTitlesBackgroundColor,
  textHeight,
  textWidth,
  textBorderRadius,
  textBackgroundColor,
  iconPlaceholderHeight,
  iconPlaceholderWidth,
}) => {
  const lowFiLabelStyle: CSSProperties = useMemo(() => {
    return {
      height: lowFiLabelHeight,
      borderRadius: lowFiLabelBorderRadius,
      justifyContent: lowFiLabelJustifyContent,
      padding: lowFiLabelPadding,
    };
  }, [
    lowFiLabelHeight,
    lowFiLabelBorderRadius,
    lowFiLabelJustifyContent,
    lowFiLabelPadding,
  ]);

  const labelTitlesStyle: CSSProperties = useMemo(() => {
    return {
      height: labelTitlesHeight,
      width: labelTitlesWidth,
      borderRadius: labelTitlesBorderRadius,
      backgroundColor: labelTitlesBackgroundColor,
    };
  }, [
    labelTitlesHeight,
    labelTitlesWidth,
    labelTitlesBorderRadius,
    labelTitlesBackgroundColor,
  ]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      height: textHeight,
      width: textWidth,
      borderRadius: textBorderRadius,
      backgroundColor: textBackgroundColor,
    };
  }, [textHeight, textWidth, textBorderRadius, textBackgroundColor]);

  const iconPlaceholder1Style: CSSProperties = useMemo(() => {
    return {
      height: iconPlaceholderHeight,
      width: iconPlaceholderWidth,
    };
  }, [iconPlaceholderHeight, iconPlaceholderWidth]);

  return (
    <div
      className={`h-[4.9px] rounded-[8.8px] bg-[#ede5e9] flex items-center justify-center py-[0.4px] px-[1.1px] box-border gap-[1.1px] ${className}`}
      style={lowFiLabelStyle}
    >
      <div
        className="h-[1.4px] w-[1.4px] relative rounded-[8.8px] bg-[#ede5e9] overflow-hidden shrink-0"
        style={labelTitlesStyle}
      />
      <div
        className="h-[2.3px] w-[5.6px] relative rounded-[8.8px] bg-[#ede5e9] shrink-0"
        style={text1Style}
      />
      <Image
        className="h-[2.1px] w-[2.1px] relative hidden shrink-0"
        width={2.1}
        height={2.1}
        sizes="100vw"
        alt=""
        src="/Icon-Placeholder.svg"
        style={iconPlaceholder1Style}
      />
    </div>
  );
};

export default LowFiLabel;
