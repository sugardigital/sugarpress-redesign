"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type LookscoutType = {
  className?: string;

  /** Variant props */
  type?: CSSProperties["type"];

  /** Style props */
  lookscoutHeight?: CSSProperties["height"];
  lookscoutWidth?: CSSProperties["width"];
  lookscoutIconHeight?: CSSProperties["height"];
  lookscoutIconTop?: CSSProperties["top"];
  lookscoutIconRight?: CSSProperties["right"];
  lookscoutIconBottom?: CSSProperties["bottom"];
  lookscoutIconLeft?: CSSProperties["left"];
};

const Lookscout: NextPage<LookscoutType> = ({
  className = "",
  type = "Lookscout",
  lookscoutHeight,
  lookscoutWidth,
  lookscoutIconHeight,
  lookscoutIconTop,
  lookscoutIconRight,
  lookscoutIconBottom,
  lookscoutIconLeft,
}) => {
  const lookscoutStyle: CSSProperties = useMemo(() => {
    return {
      height: lookscoutHeight,
      width: lookscoutWidth,
    };
  }, [lookscoutHeight, lookscoutWidth]);

  const lookscoutIconStyle: CSSProperties = useMemo(() => {
    return {
      height: lookscoutIconHeight,
      top: lookscoutIconTop,
      right: lookscoutIconRight,
      bottom: lookscoutIconBottom,
      left: lookscoutIconLeft,
    };
  }, [
    lookscoutIconHeight,
    lookscoutIconTop,
    lookscoutIconRight,
    lookscoutIconBottom,
    lookscoutIconLeft,
  ]);

  return (
    <div
      className={`h-[11px] w-[43.8px] relative ${className}`}
      style={lookscoutStyle}
    >
      <Image
        className="absolute h-[70%] w-full top-[14.55%] right-[2.97%] bottom-[15.45%] left-[3.2%] max-w-full overflow-hidden max-h-full"
        loading="lazy"
        width={41.1}
        height={7.7}
        sizes="100vw"
        alt=""
        src="/Lookscout.svg"
        style={lookscoutIconStyle}
      />
    </div>
  );
};

export default Lookscout;
