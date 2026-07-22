import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";

export type PlaceholderFillType = {
  className?: string;

  /** Variant props */
  size?: CSSProperties["size"];
};

const PlaceholderFill: NextPage<PlaceholderFillType> = ({
  className = "",
  size = "Large",
}) => {
  return (
    <div
      className={`h-[7.4px] w-[7.4px] rounded-[7.7px] bg-[#ede5e9] flex items-center justify-center ${className}`}
    >
      <Image
        className="h-[3.7px] w-full relative"
        width={3.7}
        height={3.7}
        sizes="100vw"
        alt=""
        src="/placeholder-Fill.svg"
      />
    </div>
  );
};

export default PlaceholderFill;
