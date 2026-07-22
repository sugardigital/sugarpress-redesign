"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import IconPlaceholder from "./icon-placeholder";

export type LoFiUXBlockFooterType = {
  className?: string;
  secondaryButton?: boolean;
  hierachy?: CSSProperties["hierachy"];
  size?: CSSProperties["size"];
  type?: CSSProperties["type"];
  firstIcon?: boolean;
  trilingIcon?: boolean;
  iconPlaceholderBorderRadius?: CSSProperties["borderRadius"];
  iconPlaceholderBackgroundColor?: CSSProperties["backgroundColor"];
  iconPlaceholderPadding?: CSSProperties["padding"];

  /** Variant props */
  breakpoint?: CSSProperties["breakpoint"];
  orientation?: CSSProperties["orientation"];
  variant?: CSSProperties["variant"];

  /** Style props */
  loFiUXBlockFooterWidth?: CSSProperties["width"];
  loFiUXBlockFooterAlignSelf?: CSSProperties["alignSelf"];
  placeholderFillBorderRadius?: CSSProperties["borderRadius"];
  placeholderFillBackgroundColor?: CSSProperties["backgroundColor"];
  placeholderFillPadding?: CSSProperties["padding"];
  textBackgroundColor?: CSSProperties["backgroundColor"];
};

const getLoFiUXBlockFooterStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Desktop-2":
      return "[&]:flex [&]:py-0 [&]:px-[5.6px] [&]:[box-sizing:unset] [&]:[flex-shrink:unset]";
    case "Desktop-false-3":
      return "[&]:py-0 [&]:px-[5.6px]";
  }
};

const LoFiUXBlockFooter: NextPage<LoFiUXBlockFooterType> = ({
  className = "",
  breakpoint = "Desktop",
  orientation = false,
  variant = 1,
  secondaryButton = true,
  loFiUXBlockFooterWidth,
  loFiUXBlockFooterAlignSelf,
  placeholderFillBorderRadius,
  placeholderFillBackgroundColor,
  placeholderFillPadding,
  textBackgroundColor,
  hierachy,
  size,
  type,
  firstIcon,
  trilingIcon,
  iconPlaceholderBorderRadius,
  iconPlaceholderBackgroundColor,
  iconPlaceholderPadding,
}) => {
  const variantKey = [breakpoint, variant].join("-");

  const loFiUXBlockFooterStyle: CSSProperties = useMemo(() => {
    return {
      width: loFiUXBlockFooterWidth,
      alignSelf: loFiUXBlockFooterAlignSelf,
    };
  }, [loFiUXBlockFooterWidth, loFiUXBlockFooterAlignSelf]);

  const placeholderFillStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: placeholderFillBorderRadius,
      backgroundColor: placeholderFillBackgroundColor,
      padding: placeholderFillPadding,
    };
  }, [
    placeholderFillBorderRadius,
    placeholderFillBackgroundColor,
    placeholderFillPadding,
  ]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: textBackgroundColor,
    };
  }, [textBackgroundColor]);

  return (
    <div
      className={`w-[222.6px] bg-text-inverse hidden items-center justify-center py-0 px-[4.9px] box-border gap-[2.5px] shrink-0 ${getLoFiUXBlockFooterStyle(variantKey)} ${className}`}
      style={loFiUXBlockFooterStyle}
    >
      {!!secondaryButton && (
        <div
          className="h-[7.1px] rounded-[1.9px] bg-neutral-600 flex items-center justify-center py-[1.2px] px-[4.9px] box-border gap-[0.9px]"
          style={placeholderFillStyle}
        >
          <Image
            className="h-[3.1px] w-[3.1px] relative hidden shrink-0"
            width={3.1}
            height={3.1}
            sizes="100vw"
            alt=""
            src="/placeholder-Fill.svg"
          />
          <div
            className="h-[2.5px] w-[7.6px] relative rounded-[7.7px] bg-neutral-900 shrink-0"
            style={textStyle}
          />
          <Image
            className="h-[3.1px] w-[3.1px] relative hidden shrink-0"
            width={3.1}
            height={3.1}
            sizes="100vw"
            alt=""
            src="/placeholder-Fill.svg"
          />
        </div>
      )}
      <IconPlaceholder
        hierachy={hierachy}
        size={size}
        type={type}
        firstIcon={firstIcon}
        trilingIcon={trilingIcon}
        iconPlaceholderBorderRadius={iconPlaceholderBorderRadius}
        iconPlaceholderBackgroundColor={iconPlaceholderBackgroundColor}
        iconPlaceholderPadding={iconPlaceholderPadding}
      />
    </div>
  );
};

export default LoFiUXBlockFooter;
