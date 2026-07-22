import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";

export type LowFiRatingType = {
  className?: string;

  /** Variant props */
  size?: CSSProperties["size"];
};

const LowFiRating: NextPage<LowFiRatingType> = ({
  className = "",
  size = "Small",
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        className="h-[4.2px] w-[4.2px] relative"
        width={4.2}
        height={4.2}
        sizes="100vw"
        alt=""
        src="/Star-from-rating.svg"
      />
      <Image
        className="h-[4.2px] w-[4.2px] relative"
        width={4.2}
        height={4.2}
        sizes="100vw"
        alt=""
        src="/Star-from-rating.svg"
      />
      <Image
        className="h-[4.2px] w-[4.2px] relative"
        width={4.2}
        height={4.2}
        sizes="100vw"
        alt=""
        src="/Star-from-rating.svg"
      />
      <Image
        className="h-[4.2px] w-[4.2px] relative"
        width={4.2}
        height={4.2}
        sizes="100vw"
        alt=""
        src="/Star-from-rating.svg"
      />
      <Image
        className="h-[4.2px] w-[4.2px] relative"
        width={4.2}
        height={4.2}
        sizes="100vw"
        alt=""
        src="/Star-from-rating.svg"
      />
    </div>
  );
};

export default LowFiRating;
