import type { NextPage } from "next";
import Image from "next/image";

export type MainHeroContentType = {
  className?: string;
};

const MainHeroContent: NextPage<MainHeroContentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[1193px] flex flex-col items-center gap-10 max-w-full z-[5] shrink-0 mq925:h-auto mq925:gap-5 ${className}`}
    >
      <div className="w-[768px] flex flex-col items-center gap-10 max-w-full shrink-0 mq450:gap-5">
        <section className="flex flex-col items-center gap-4 text-center text-sm text-text-muted font-['Google_Sans']">
          <div className="flex flex-col items-center gap-2">
            <div className="h-[29px] rounded-[100px] bg-red-red-50 overflow-x-auto shrink-0 flex items-center py-1.5 px-3 box-border gap-1.5">
              <Image
                className="h-[7px] w-[6.9px] relative shrink-0"
                width={6.9}
                height={7}
                sizes="100vw"
                alt=""
                src="/.svg"
              />
              <div className="flex flex-col items-center shrink-0">
                <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                  PRODUCT LAUNCH · COMING SOON
                </div>
              </div>
              <Image
                className="h-[7px] w-[6.9px] relative shrink-0"
                width={6.9}
                height={7}
                sizes="100vw"
                alt=""
                src="/.svg"
              />
            </div>
            <h1 className="m-0 relative text-[70px] tracking-[0.01em] leading-[120%] font-bold font-[inherit] text-text-default mq925:text-[56px] mq925:leading-[67px] mq450:text-[42px] mq450:leading-[50px]">
              <span className="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#952a58,_#ff9fc8)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] leading-[120%]">
                AI for WordPress
                <br />
              </span>
              <span className="leading-[120%]">is Here. Start Free.</span>
            </h1>
          </div>
          <h3 className="m-0 relative text-xl tracking-[0.01em] leading-[160%] font-normal font-[inherit] mq450:text-base mq450:leading-[26px]">
            Describe your business. SugarPress builds your WordPress
            <br />
            site. Edit by chat. No code required.
          </h3>
        </section>
        <section className="self-stretch flex flex-col items-center gap-5 max-w-full text-left text-base text-text-muted font-['Google_Sans']">
          <div className="w-[768px] shadow-[0px_6px_15px_rgba(0,_0,_0,_0.12)] rounded-xl bg-[rgba(255,255,255,0.4)] border-text-inverse border-solid border-[1px] box-border overflow-hidden flex flex-col items-start py-1 px-[5px] relative isolate gap-2.5 max-w-full">
            <div className="w-[768px] h-[67px] absolute !!m-[0 important] top-[223px] left-[0px] [filter:blur(50px)] [background:linear-gradient(90deg,_#db005e_1.44%,_#f9d275_38.46%,_#ffcde3_84.13%)] z-[0] shrink-0" />
            <div className="self-stretch h-[273px] shadow-[0px_1px_3px_rgba(149,_42,_88,_0.04),_0px_8px_24px_rgba(149,_42,_88,_0.06)] rounded-[10px] bg-text-inverse flex flex-col items-start justify-between p-[21px] box-border gap-3 max-w-full z-[1] shrink-0 mq925:h-auto mq925:gap-3">
              <div className="self-stretch flex flex-col items-start pt-0 px-0 pb-[0.6px]">
                <div className="self-stretch relative tracking-[0.01em] leading-6">
                  A handmade jewelry studio, modern and minimal, with an online
                  shop and
                  <br />
                  bookings for studio visits.
                </div>
              </div>
              <div className="self-stretch border-[rgba(0,0,0,0.15)] border-solid border-t-[1px] box-border flex items-end justify-between pt-3 px-0 pb-0 gap-5 max-w-full text-sm mq925:flex-wrap mq925:gap-5">
                <div className="flex items-center gap-1.5 max-w-full mq450:flex-wrap">
                  <div className="h-[25px] rounded-[100px] border-[rgba(0,0,0,0.08)] border-solid border-[1px] box-border flex items-center py-0.5 px-2.5 gap-1.5">
                    <Image
                      className="h-3 w-3 relative"
                      width={12}
                      height={12}
                      sizes="100vw"
                      alt=""
                      src="/Option-Glyphs.svg"
                    />
                    <div className="relative tracking-[-0.01em] leading-4">
                      Upload reference
                    </div>
                  </div>
                  <div className="h-[25px] rounded-[100px] border-[rgba(0,0,0,0.08)] border-solid border-[1px] box-border flex items-center py-0.5 px-2.5 gap-1.5">
                    <Image
                      className="h-3.5 w-3.5 relative"
                      loading="lazy"
                      width={14}
                      height={14}
                      sizes="100vw"
                      alt=""
                      src="/Vector-Stroke.svg"
                    />
                    <div className="relative tracking-[-0.01em] leading-4">
                      Start fresh
                    </div>
                  </div>
                  <div className="h-[25px] rounded-[100px] border-[rgba(0,0,0,0.08)] border-solid border-[1px] box-border flex items-center py-0.5 px-2.5 gap-1.5">
                    <Image
                      className="h-3 w-[15px] relative"
                      loading="lazy"
                      width={15}
                      height={12}
                      sizes="100vw"
                      alt=""
                      src="/Vector-Stroke1.svg"
                    />
                    <div className="relative tracking-[-0.01em] leading-4">
                      Migrate site
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] py-2 px-4 bg-red-red-500 rounded-[100px] flex items-center">
                  <div className="relative text-sm tracking-[-0.01em] leading-[150%] font-medium font-['Google_Sans'] text-text-inverse text-center">
                    Generate site
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[702px] flex items-center justify-between gap-5 text-sm">
            <div className="flex items-start gap-2">
              <Image
                className="h-5 w-5 relative"
                loading="lazy"
                width={20}
                height={20}
                sizes="100vw"
                alt=""
                src="/Vector.svg"
              />
              <div className="relative tracking-[-0.01em] leading-4">
                Consistently rated 5 stars on
                <br />
                Google
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Image
                className="h-5 w-5 relative"
                loading="lazy"
                width={20}
                height={20}
                sizes="100vw"
                alt=""
                src="/Vector.svg"
              />
              <div className="relative tracking-[-0.01em] leading-4">
                Over a decade of WordPress
                <br />
                builds
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Image
                className="h-5 w-5 relative"
                loading="lazy"
                width={20}
                height={20}
                sizes="100vw"
                alt=""
                src="/Vector.svg"
              />
              <div className="relative tracking-[-0.01em] leading-4">
                Real WordPress
                <br />
                backend
              </div>
            </div>
          </div>
        </section>
        <div className="flex items-start justify-center gap-3">
          <button className="cursor-pointer [border:none] pt-[14.5px] px-7 pb-[15.5px] bg-text-default rounded-[100px] overflow-hidden flex items-center justify-center gap-2.5">
            <div className="relative text-sm tracking-[-0.01em] leading-[150%] font-medium font-['Google_Sans'] text-text-inverse text-center">
              Join the Waitlist
            </div>
            <div className="flex flex-col items-center">
              <div className="relative text-sm tracking-[-0.01em] leading-[150%] font-medium font-['Google_Sans'] text-text-inverse text-center">
                →
              </div>
            </div>
          </button>
          <button className="cursor-pointer border-[rgba(0,0,0,0.08)] border-solid border-[1px] py-3.5 px-7 bg-[rgba(255,255,255,0.1)] rounded-[100px] flex items-center justify-center">
            <div className="relative text-sm tracking-[-0.01em] leading-[150%] font-medium font-['Google_Sans'] text-text-default text-center">
              See how it works
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex items-center justify-center gap-10 max-w-full shrink-0 mq925:gap-5 mq925:grid-cols-[minmax(576px,_1fr)] mq1825:flex-wrap mq1825:justify-center mq1825:grid-cols-[repeat(2,_minmax(576px,_999px))]">
        <div className="h-[466px] w-[768.1px] rounded-[20px] flex flex-col items-start justify-center max-w-full shrink-0">
          <Image
            className="self-stretch flex-1 rounded-[20px] max-w-full overflow-hidden max-h-full w-full h-auto object-cover"
            width={768.1}
            height={466}
            sizes="100vw"
            alt=""
            src="/Container@2x.png"
          />
        </div>
        <Image
          className="h-[466px] w-[768.1px] relative object-cover max-w-full shrink-0 mq925:w-full"
          width={768.1}
          height={466}
          sizes="100vw"
          alt=""
          src="/AI-builder-example-OLS@2x.png"
        />
        <Image
          className="w-[768.1px] relative max-h-full object-cover max-w-full shrink-0 mq925:w-full"
          loading="lazy"
          width={768.1}
          height={466}
          sizes="100vw"
          alt=""
          src="/Example-Website@2x.png"
        />
      </div>
    </div>
  );
};

export default MainHeroContent;
