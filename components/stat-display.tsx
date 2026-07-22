import type { NextPage } from "next";

export type StatDisplayType = {
  className?: string;
  m?: string;
  wordPressSitesBuilt?: string;
};

const StatDisplay: NextPage<StatDisplayType> = ({
  className = "",
  m,
  wordPressSitesBuilt,
}) => {
  return (
    <div
      className={`h-[248px] w-[309px] [backdrop-filter:blur(20px)] [background:linear-gradient(180deg,_rgba(149,_42,_88,_0),_#952a58_51.44%,_rgba(149,_42,_88,_0))_border-box] [border-left:1px_solid_transparent] box-border overflow-hidden shrink-0 flex flex-col items-start pt-4 pb-0 pl-[29px] pr-[15px] text-left text-[70px] text-red-red-500 font-['Google_Sans'] ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-col items-start justify-end gap-1.5">
        <h1 className="m-0 self-stretch relative text-[length:inherit] tracking-[0.01em] leading-[120%] font-bold font-[inherit] mq925:text-[56px] mq925:leading-[67px] mq450:text-[42px] mq450:leading-[50px]">
          {m}
        </h1>
        <h3 className="m-0 relative text-xl tracking-[0.01em] leading-[160%] font-normal font-[inherit] text-text-muted mq450:text-base mq450:leading-[26px]">
          {wordPressSitesBuilt}
        </h3>
      </div>
    </div>
  );
};

export default StatDisplay;
