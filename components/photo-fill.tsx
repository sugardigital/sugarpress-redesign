"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type PhotoFillType = {
  className?: string;
  showPhotoFillIcon?: boolean;

  /** Variant props */
  type?: string | undefined;

  /** Style props */
  photoFillWidth?: CSSProperties["width"];
  photoFillHeight?: CSSProperties["height"];
  photoFillBackgroundColor?: CSSProperties["backgroundColor"];
  photoFillPosition?: CSSProperties["position"];
  photoFillTop?: CSSProperties["top"];
  photoFillRight?: CSSProperties["right"];
  photoFillBottom?: CSSProperties["bottom"];
  photoFillLeft?: CSSProperties["left"];
  photoFillIconHeight?: CSSProperties["height"];
};

const PhotoFill: NextPage<PhotoFillType> = ({
  className = "",
  type = "Image",
  photoFillWidth,
  photoFillHeight,
  photoFillBackgroundColor,
  photoFillPosition,
  photoFillTop,
  photoFillRight,
  photoFillBottom,
  photoFillLeft,
  showPhotoFillIcon,
  photoFillIconHeight,
}) => {
  const photoFillStyle: CSSProperties = useMemo(() => {
    return {
      width: photoFillWidth,
      height: photoFillHeight,
      backgroundColor: photoFillBackgroundColor,
      position: photoFillPosition,
      top: photoFillTop,
      right: photoFillRight,
      bottom: photoFillBottom,
      left: photoFillLeft,
    };
  }, [
    photoFillWidth,
    photoFillHeight,
    photoFillBackgroundColor,
    photoFillPosition,
    photoFillTop,
    photoFillRight,
    photoFillBottom,
    photoFillLeft,
  ]);

  const photoFillIconStyle: CSSProperties = useMemo(() => {
    return {
      height: photoFillIconHeight,
    };
  }, [photoFillIconHeight]);

  return (
    <div
      className={`w-[376.4px] h-[107.8px] rounded-[3.4px] bg-[#ede5e9] flex items-center justify-center shrink-0 z-[1] ${className}`}
      style={photoFillStyle}
    >
      {!!showPhotoFillIcon && (
        <Image
          className="h-[13.7px] w-full relative"
          width={13.7}
          height={13.7}
          sizes="100vw"
          alt=""
          src="/photo-Fill.svg"
          style={photoFillIconStyle}
        />
      )}
    </div>
  );
};

export default PhotoFill;
