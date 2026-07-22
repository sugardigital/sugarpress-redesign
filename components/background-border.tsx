import type { NextPage } from "next";
import Image from "next/image";

export type BackgroundBorderType = {
  className?: string;
  clientAvatar: string;
};

const BackgroundBorder: NextPage<BackgroundBorderType> = ({
  className = "",
  clientAvatar,
}) => {
  return (
    <div
      className={`flex-1 shadow-[0px_0px_3px_rgba(0,_0,_0,_0.17)] rounded-[20.1px] bg-text-inverse flex flex-col items-start py-[30.1px] px-[30px] box-border min-w-[310px] text-left text-2xl text-text-default font-['Google_Sans'] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start gap-[20.1px]">
        <div className="self-stretch flex flex-col items-start pt-0 px-0 pb-px">
          <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-[0.01em] leading-[150%] font-normal font-[inherit] mq450:text-[19px] mq450:leading-[29px]">
            "Leah and her team are exceptional. Built me a website that actually
            drove leads. Hands-down the best agency I've worked with."
          </h2>
        </div>
        <div className="self-stretch border-[rgba(0,0,0,0.08)] border-solid border-t-[1.3px] flex items-center pt-[13px] px-0 pb-0 gap-[7px] text-lg text-text-muted mq450:flex-wrap">
          <Image
            className="h-10 w-10 relative rounded-[50%] object-cover"
            loading="lazy"
            width={40}
            height={40}
            sizes="100vw"
            alt=""
            src={clientAvatar}
          />
          <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
            Recent client, ★★★★★
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundBorder;
