"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type PhotoFill1Type = {
  className?: string;

  /** Variant props */
  size?: CSSProperties["size"];

  /** Style props */
  photoFillPosition?: CSSProperties["position"];
  photoFillRight?: CSSProperties["right"];
  photoFillBottom?: CSSProperties["bottom"];
};

const PhotoFill1: NextPage<PhotoFill1Type> = ({
  className = "",
  size = "xLarge",
  photoFillPosition,
  photoFillRight,
  photoFillBottom,
}) => {
  const photoFill1Style: CSSProperties = useMemo(() => {
    return {
      position: photoFillPosition,
      right: photoFillRight,
      bottom: photoFillBottom,
    };
  }, [photoFillPosition, photoFillRight, photoFillBottom]);

  return (
    <div
      className={`h-[8.5px] w-[8.5px] rounded-[8.8px] bg-[#ede5e9] flex items-center justify-center ${className}`}
      style={photoFill1Style}
    >
      <Image
        className="h-[3.5px] w-full relative"
        width={3.5}
        height={3.5}
        sizes="100vw"
        alt=""
        src="/photo-Fill.svg"
      />
    </div>
  );
};

export default PhotoFill1;
