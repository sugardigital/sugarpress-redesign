import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";

export type IconPlaceholderFillType = {
  className?: string;
  leadIcon?: boolean;
  trilingIcon?: boolean;

  /** Variant props */
  breakpoint?: CSSProperties["breakpoint"];
  dropdown?: CSSProperties["dropdown"];
  orientation?: CSSProperties["orientation"];
  variant?: CSSProperties["variant"];
};

const getIconPlaceholderFillStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Desktop-false-5":
    case "Desktop-2":
      return "[&]:[flex-shrink:unset] [&]:hidden";
  }
};
const getLinkBackgroundRectStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Desktop-false-5":
      return "[&]:[flex-shrink:unset]";
    case "Desktop-2":
      return "[&]:w-[9.5px] [&]:rounded-[8.8px] [&]:bg-red-red-500 [&]:[flex-shrink:unset]";
  }
};
const getPlaceholderFillIconStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Desktop-false-5":
      return "[&]:[filter:brightness(0)_saturate(100%)_invert(98%)_sepia(2%)_saturate(1334%)_hue-rotate(286deg)_brightness(94%)_contrast(97%)] [&]:[flex-shrink:unset]";
    case "Desktop-2":
      return "[&]:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(86%)_saturate(1878%)_hue-rotate(310deg)_brightness(93%)_contrast(85%)] [&]:[flex-shrink:unset]";
  }
};

const IconPlaceholderFill: NextPage<IconPlaceholderFillType> = ({
  className = "",
  breakpoint = "Desktop",
  dropdown = "Off",
  orientation = false,
  variant = 1,
  leadIcon = false,
  trilingIcon = false,
}) => {
  const variantKey = [breakpoint, orientation, variant].join("-");

  return (
    <div className={`flex items-start gap-[0.9px] ${className}`}>
      {!!leadIcon && (
        <Image
          className={`h-[2.5px] w-[2.5px] relative shrink-0 ${getIconPlaceholderFillStyle(variantKey)}`}
          width={2.5}
          height={2.5}
          sizes="100vw"
          alt=""
          src="/placeholder-Fill.svg"
        />
      )}
      <div
        className={`h-[2.5px] w-[8.3px] relative rounded-[7.7px] bg-[#ede5e9] shrink-0 ${getLinkBackgroundRectStyle(variantKey)}`}
      />
      {!!trilingIcon && (
        <Image
          className={`h-[2.5px] w-[2.5px] relative shrink-0 ${getPlaceholderFillIconStyle(variantKey)}`}
          width={2.5}
          height={2.5}
          sizes="100vw"
          alt=""
          src="/placeholder-Fill.svg"
        />
      )}
    </div>
  );
};

export default IconPlaceholderFill;
