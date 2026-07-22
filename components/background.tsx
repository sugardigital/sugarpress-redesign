"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type BackgroundType = {
  className?: string;
  shapeBg: string;

  /** Variant props */
  rounded?: CSSProperties["rounded"];

  /** Style props */
  backgroundHeight?: CSSProperties["height"];
  backgroundBottom?: CSSProperties["bottom"];
  backgroundPadding?: CSSProperties["padding"];
  backgroundRight?: CSSProperties["right"];
  backgroundBackgroundColor?: CSSProperties["backgroundColor"];
  shapeBgIconHeight?: CSSProperties["height"];
};

const Background: NextPage<BackgroundType> = ({
  className = "",
  rounded = "on",
  backgroundHeight,
  backgroundBottom,
  backgroundPadding,
  backgroundRight,
  backgroundBackgroundColor,
  shapeBg,
  shapeBgIconHeight,
}) => {
  const backgroundStyle: CSSProperties = useMemo(() => {
    return {
      height: backgroundHeight,
      bottom: backgroundBottom,
      padding: backgroundPadding,
      right: backgroundRight,
      backgroundColor: backgroundBackgroundColor,
    };
  }, [
    backgroundHeight,
    backgroundBottom,
    backgroundPadding,
    backgroundRight,
    backgroundBackgroundColor,
  ]);

  const shapeBgIconStyle: CSSProperties = useMemo(() => {
    return {
      height: shapeBgIconHeight,
    };
  }, [shapeBgIconHeight]);

  return (
    <div
      className={`w-full h-[calc(100%_+_2.8px)] !!m-[0 important] absolute top-[0px] right-[0px] bottom-[-2.8px] left-[0px] flex items-start pt-0 px-0 pb-[0.4px] box-border z-[0] shrink-0 ${className}`}
      style={backgroundStyle}
    >
      <Image
        className="h-72 w-full relative"
        width={449}
        height={288}
        sizes="100vw"
        alt=""
        src={shapeBg}
        style={shapeBgIconStyle}
      />
    </div>
  );
};

export default Background;
