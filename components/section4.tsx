import type { NextPage } from "next";
import Image from "next/image";

export type Section4Type = {
  className?: string;
};

const Section4: NextPage<Section4Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center pt-[152px] px-5 pb-[70px] text-center text-xs text-red-red-500 font-['Google_Sans'] mq925:gap-[38px] mq925:pt-16 mq925:pb-[29px] mq925:box-border mq450:gap-[19px] mq1350:gap-[76px] mq1350:pt-[99px] mq1350:pb-[45px] mq1350:box-border ${className}`}
    >
      <div className="w-[1272px] flex flex-col items-center gap-[60px] mq925:gap-[30px]">
        <div className="self-stretch flex flex-col items-center gap-2">
          <div className="relative tracking-[-0.01em] font-medium">
            QUESTIONS
          </div>
          <h2 className="m-0 w-[678px] relative text-5xl tracking-[0.01em] leading-[120%] font-bold font-[inherit] text-text-default flex items-center justify-center mq925:text-[38px] mq925:leading-[46px] mq450:text-[29px] mq450:leading-[35px]">
            The honest answers.
          </h2>
        </div>
        <div className="w-[885px] flex flex-col items-start gap-5 text-left text-2xl text-text-default">
          <div className="self-stretch border-[rgba(0,0,0,0.08)] border-solid border-t-[1px] flex items-center justify-between pt-[18px] px-0 pb-0 gap-3.5">
            <h3 className="m-0 relative text-[length:inherit] tracking-[0.01em] leading-[150%] font-bold font-[inherit] mq450:text-[19px] mq450:leading-[29px]">
              What's the difference between SugarPress and other AI website
              builders?
            </h3>
            <Image
              className="h-3.5 w-[15px] relative"
              loading="lazy"
              width={15}
              height={14}
              sizes="100vw"
              alt=""
              src="/Answer-Placeholders.svg"
            />
          </div>
          <section className="self-stretch border-[rgba(0,0,0,0.08)] border-solid border-t-[1px] flex items-start justify-between flex-wrap content-start pt-[18px] px-0 pb-0 gap-0 [row-gap:20px] text-left text-2xl text-text-default font-['Google_Sans']">
            <div className="flex-1 flex flex-col items-start gap-2.5 min-w-[565px] mq925:min-w-full">
              <h3 className="m-0 self-stretch relative text-[length:inherit] tracking-[0.01em] leading-[150%] font-bold font-[inherit] mq450:text-[19px] mq450:leading-[29px]">
                Do I need to know WordPress?
              </h3>
              <h3 className="m-0 w-[720px] relative text-xl tracking-[0.01em] leading-[160%] font-normal font-[inherit] text-text-muted flex items-center mq450:text-base mq450:leading-[26px]">
                Nope. If you can describe your business in a sentence, you can
                build a SugarPress site. The AI handles thetechnical side. If
                you do know WordPress, you'll feel right at home — it's the same
                backend you've always used.
              </h3>
            </div>
            <Image
              className="h-[2.4px] w-[15px] relative"
              width={15}
              height={2.4}
              sizes="100vw"
              alt=""
              src="/Accordion-Icon.svg"
            />
          </section>
          <div className="self-stretch border-[rgba(0,0,0,0.08)] border-solid border-t-[1px] flex items-center justify-between pt-[18px] px-0 pb-0 gap-5">
            <h3 className="m-0 relative text-[length:inherit] tracking-[0.01em] leading-[150%] font-bold font-[inherit] mq450:text-[19px] mq450:leading-[29px]">
              What if my site looks too AI-generated?
            </h3>
            <Image
              className="h-3.5 w-[15px] relative"
              loading="lazy"
              width={15}
              height={14}
              sizes="100vw"
              alt=""
              src="/Answer-Placeholders.svg"
            />
          </div>
          <div className="self-stretch border-[rgba(0,0,0,0.08)] border-solid border-t-[1px] flex items-center justify-between pt-[18px] px-0 pb-0 gap-5">
            <h3 className="m-0 relative text-[length:inherit] tracking-[0.01em] leading-[150%] font-bold font-[inherit] mq450:text-[19px] mq450:leading-[29px]">
              Can I edit my site after the AI builds it?
            </h3>
            <Image
              className="h-3.5 w-[15px] relative"
              loading="lazy"
              width={15}
              height={14}
              sizes="100vw"
              alt=""
              src="/Answer-Placeholders.svg"
            />
          </div>
          <div className="self-stretch border-[rgba(0,0,0,0.08)] border-solid border-t-[1px] flex items-center justify-between pt-[18px] px-0 pb-0 gap-5">
            <h3 className="m-0 relative text-[length:inherit] tracking-[0.01em] leading-[150%] font-bold font-[inherit] mq450:text-[19px] mq450:leading-[29px]">
              I already have a WordPress site. Can I bring it over?
            </h3>
            <Image
              className="h-3.5 w-[15px] relative"
              width={15}
              height={14}
              sizes="100vw"
              alt=""
              src="/Answer-Placeholders.svg"
            />
          </div>
          <div className="self-stretch border-[rgba(0,0,0,0.08)] border-solid border-t-[1px] flex items-center justify-between pt-[18px] px-0 pb-0 gap-5">
            <h3 className="m-0 relative text-[length:inherit] tracking-[0.01em] leading-[150%] font-bold font-[inherit] mq450:text-[19px] mq450:leading-[29px]">
              What does it cost?
            </h3>
            <Image
              className="h-3.5 w-[15px] relative"
              width={15}
              height={14}
              sizes="100vw"
              alt=""
              src="/Answer-Placeholders.svg"
            />
          </div>
          <div className="self-stretch border-[rgba(0,0,0,0.08)] border-solid border-t-[1px] flex items-center justify-between pt-[18px] px-0 pb-0 gap-5">
            <h3 className="m-0 relative text-[length:inherit] tracking-[0.01em] leading-[150%] font-bold font-[inherit] mq450:text-[19px] mq450:leading-[29px]">
              Can I move my site somewhere else later?
            </h3>
            <Image
              className="h-3.5 w-[15px] relative"
              width={15}
              height={14}
              sizes="100vw"
              alt=""
              src="/Answer-Placeholders.svg"
            />
          </div>
          <div className="self-stretch border-[rgba(0,0,0,0.08)] border-solid border-t-[1px] flex items-center justify-between pt-[18px] px-0 pb-0 gap-5">
            <h3 className="m-0 relative text-[length:inherit] tracking-[0.01em] leading-[150%] font-bold font-[inherit] mq450:text-[19px] mq450:leading-[29px]">
              Do you offer a "build it for me" option?
            </h3>
            <Image
              className="h-3.5 w-[15px] relative"
              width={15}
              height={14}
              sizes="100vw"
              alt=""
              src="/Answer-Placeholders.svg"
            />
          </div>
          <div className="self-stretch border-[rgba(0,0,0,0.08)] border-solid border-t-[1px] border-b-[1px] flex items-center justify-between py-[18px] px-0 gap-5">
            <h3 className="m-0 relative text-[length:inherit] tracking-[0.01em] leading-[150%] font-bold font-[inherit] mq450:text-[19px] mq450:leading-[29px]">
              When does SugarPress launch?
            </h3>
            <Image
              className="h-3.5 w-[15px] relative"
              width={15}
              height={14}
              sizes="100vw"
              alt=""
              src="/Answer-Placeholders.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
