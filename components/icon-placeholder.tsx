"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type IconPlaceholderType = {
  className?: string;
  firstIcon?: boolean;
  trilingIcon?: boolean;

  /** Variant props */
  hierachy?: string | undefined;
  size?: string | number | undefined;
  type?: string | undefined;

  /** Style props */
  iconPlaceholderBorderRadius?: CSSProperties["borderRadius"];
  iconPlaceholderBackgroundColor?: CSSProperties["backgroundColor"];
  iconPlaceholderPadding?: CSSProperties["padding"];
};

const IconPlaceholder: NextPage<IconPlaceholderType> = ({
  className = "",
  hierachy = "Primary",
  size = "Large",
  type = "Default",
  firstIcon = false,
  trilingIcon = false,
  iconPlaceholderBorderRadius,
  iconPlaceholderBackgroundColor,
  iconPlaceholderPadding,
}) => {
  const iconPlaceholderStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: iconPlaceholderBorderRadius,
      backgroundColor: iconPlaceholderBackgroundColor,
      padding: iconPlaceholderPadding,
    };
  }, [
    iconPlaceholderBorderRadius,
    iconPlaceholderBackgroundColor,
    iconPlaceholderPadding,
  ]);

  return (
    <div
      className={`h-[7.1px] rounded-[1.9px] bg-[#ede5e9] flex items-center justify-center py-[1.2px] px-[4.9px] box-border gap-[0.9px] ${className}`}
      style={iconPlaceholderStyle}
    >
      <Image
        className="h-[3.1px] w-[3.1px] relative hidden shrink-0"
        width={3.1}
        height={3.1}
        sizes="100vw"
        alt=""
        src="/Icon-Placeholder.svg"
      />
      {!!firstIcon && (
        <Image
          className="h-[3.1px] w-[3.1px] relative shrink-0"
          width={3.1}
          height={3.1}
          sizes="100vw"
          alt=""
          src="/placeholder-Fill.svg"
        />
      )}
      <div className="h-[2.5px] w-[7.6px] relative rounded-[7.7px] bg-text-inverse shrink-0" />
      {!!trilingIcon && (
        <Image
          className="h-[3.1px] w-[3.1px] relative shrink-0"
          width={3.1}
          height={3.1}
          sizes="100vw"
          alt=""
          src="/placeholder-Fill.svg"
        />
      )}
    </div>
  );
};

export default IconPlaceholder;
