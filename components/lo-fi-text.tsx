"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type LoFiTextType = {
  className?: string;
  showDiv?: boolean;
  showText?: boolean;

  /** Variant props */
  center?: string | undefined;
  size?: string | number | undefined;

  /** Style props */
  divWidth?: CSSProperties["width"];
  divAlignSelf?: CSSProperties["alignSelf"];
  divFlex?: CSSProperties["flex"];
};

const getContainerStyle = (styleKey: string) => {
  switch (styleKey) {
    case "On-52":
      return "[&]:items-center [&]:gap-[5.5px]";
    case "On-18":
      return "[&]:items-center [&]:gap-[4.1px]";
    case "On-16":
    case "Off-16":
      return "[&]:gap-[1.2px]";
    case "Off-22":
      return "[&]:gap-[1.5px]";
  }
};
const getTextContainerStyle = (styleKey: string) => {
  switch (styleKey) {
    case "On-52":
      return "[&]:h-[10.3px]";
    case "On-18":
      return "[&]:h-[4.4px]";
    case "On-32":
      return "[&]:[align-self:unset] [&]:w-[81px] [&]:hidden [&]:shrink-0";
    case "On-16":
    case "Off-16":
      return "[&]:h-[1.9px] [&]:shrink-0";
    case "Off-22":
      return "[&]:[align-self:unset] [&]:h-[2.5px] [&]:w-[81px] [&]:hidden [&]:shrink-0";
  }
};
const getTextStyle = (styleKey: string) => {
  switch (styleKey) {
    case "On-32":
    case "Off-22":
      return "[&]:rounded-[7.7px] [&]:bg-neutral-900";
    case "On-16":
    case "Off-16":
    case "Off-32":
      return "[&]:rounded-[7.7px]";
  }
};
const getTextContainer1Style = (styleKey: string) => {
  switch (styleKey) {
    case "On-52":
      return "[&]:[align-self:unset] [&]:h-[10.3px] [&]:w-[179.3px] [&]:hidden";
    case "On-18":
      return "[&]:h-[4.4px]";
    case "On-32":
      return "[&]:shrink-0";
    case "On-16":
    case "Off-16":
      return "[&]:h-[1.9px] [&]:shrink-0";
    case "Off-22":
      return "[&]:[align-self:unset] [&]:h-[2.5px] [&]:w-[81px] [&]:hidden [&]:shrink-0";
  }
};
const getTextStyle1 = (styleKey: string) => {
  switch (styleKey) {
    case "On-52":
      return "[&]:w-[84.94%] [&]:right-[7.64%] [&]:left-[7.42%] [&]:bg-neutral-900 [&]:[display:unset]";
    case "On-18":
      return "[&]:w-[84.93%] [&]:right-[7.63%] [&]:left-[7.44%] [&]:bg-[#ede5e9] [&]:[display:unset]";
    case "On-32":
    case "On-16":
      return "[&]:w-[84.88%] [&]:right-[7.68%] [&]:left-[7.44%] [&]:rounded-[7.7px] [&]:bg-[#ede5e9] [&]:[display:unset]";
    case "Off-22":
      return "[&]:w-[84.94%] [&]:right-[15.06%] [&]:rounded-[7.7px] [&]:bg-neutral-900 [&]:[display:unset]";
    case "Off-16":
      return "[&]:w-[84.92%] [&]:right-[15.08%] [&]:rounded-[7.7px] [&]:bg-[#ede5e9] [&]:[display:unset]";
    case "Off-32":
      return "[&]:w-[84.84%] [&]:right-[15.16%] [&]:rounded-[7.7px] [&]:bg-[#ede5e9] [&]:[display:unset]";
  }
};
const getTextContainer2Style = (styleKey: string) => {
  switch (styleKey) {
    case "On-52":
      return "[&]:h-[10.3px]";
    case "On-18":
      return "[&]:h-[4.4px]";
    case "On-32":
      return "[&]:[align-self:unset] [&]:w-[81px] [&]:hidden [&]:shrink-0";
    case "On-16":
    case "Off-16":
      return "[&]:[align-self:unset] [&]:h-[1.9px] [&]:w-[81px] [&]:hidden [&]:shrink-0";
    case "Off-22":
      return "[&]:h-[2.5px] [&]:shrink-0";
  }
};
const getTextStyle2 = (styleKey: string) => {
  switch (styleKey) {
    case "On-52":
    case "On-18":
      return "[&]:w-[43.52%] [&]:right-[28.22%] [&]:left-[28.26%] [&]:bg-[#ede5e9] [&]:[display:unset]";
    case "On-32":
      return "[&]:w-[43.46%] [&]:right-[28.27%] [&]:left-[28.27%] [&]:rounded-[7.7px] [&]:bg-neutral-900 [&]:[display:unset]";
    case "On-16":
      return "[&]:w-[43.46%] [&]:right-[28.27%] [&]:left-[28.27%] [&]:rounded-[7.7px] [&]:[display:unset]";
    case "Off-22":
      return "[&]:w-[43.57%] [&]:right-[56.43%] [&]:rounded-[7.7px] [&]:bg-[#ede5e9] [&]:[display:unset]";
    case "Off-16":
      return "[&]:w-[43.46%] [&]:right-[56.54%] [&]:rounded-[7.7px] [&]:[display:unset]";
    case "Off-32":
      return "[&]:w-[43.48%] [&]:right-[56.52%] [&]:rounded-[7.7px] [&]:bg-[#ede5e9] [&]:[display:unset]";
  }
};

const LoFiText: NextPage<LoFiTextType> = ({
  className = "",
  center = "Off",
  size = 52,
  showDiv,
  divWidth,
  divAlignSelf,
  divFlex,
  showText,
}) => {
  const variantKey = [center, size].join("-");

  const divStyle: CSSProperties = useMemo(() => {
    return {
      width: divWidth,
      alignSelf: divAlignSelf,
      flex: divFlex,
    };
  }, [divWidth, divAlignSelf, divFlex]);

  return (
    !!showDiv && (
      <div
        className={`w-[41.1px] flex flex-col items-start gap-[2.1px] ${getContainerStyle(variantKey)} ${className}`}
        style={divStyle}
      >
        <div
          className={`self-stretch h-[3.4px] relative ${getTextContainerStyle(variantKey)}`}
        >
          {!!showText && (
            <div
              className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[17.1px] bg-[#ede5e9] ${getTextStyle(variantKey)}`}
            />
          )}
        </div>
        <div
          className={`self-stretch h-[3.4px] relative ${getTextContainer1Style(variantKey)}`}
        >
          <div
            className={`absolute h-full w-[84.91%] top-[0%] right-[15.09%] bottom-[0%] left-[0%] rounded-[17.1px] bg-neutral-700 hidden ${getTextStyle1(variantKey)}`}
          />
        </div>
        <div
          className={`self-stretch h-[3.4px] relative ${getTextContainer2Style(variantKey)}`}
        >
          <div
            className={`absolute h-full w-[43.55%] top-[0%] right-[56.45%] bottom-[0%] left-[0%] rounded-[17.1px] bg-neutral-700 hidden ${getTextStyle2(variantKey)}`}
          />
        </div>
      </div>
    )
  );
};

export default LoFiText;
