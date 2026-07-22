import type { NextPage } from "next";

export type SectionType = {
  className?: string;
};

const Section: NextPage<SectionType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center pt-[152px] px-5 pb-[100px] text-center text-sm text-red-red-500 font-['Google_Sans'] mq925:pt-[99px] mq925:pb-[65px] mq925:box-border ${className}`}
    >
      <div className="w-[1272px] flex flex-col items-center gap-[60px] mq925:gap-[30px]">
        <div className="self-stretch flex flex-col items-center gap-2">
          <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
            HOW IT WORKS
          </div>
          <h1 className="m-0 w-[528px] relative text-5xl tracking-[0.01em] leading-[120%] font-bold font-[inherit] text-text-default flex items-center justify-center mq925:text-[38px] mq925:leading-[46px] mq450:text-[29px] mq450:leading-[35px]">
            From idea to live website in four steps.
          </h1>
        </div>
        <section className="self-stretch flex flex-col items-center gap-[60px] text-center text-4xl text-red-red-500 font-['Google_Sans'] mq925:gap-[30px]">
          <div className="self-stretch h-[19px] rounded-[100px] [background:linear-gradient(90deg,_rgba(149,_42,_88,_0.05),_#952a58)] flex flex-col items-center justify-center py-[9px] px-[60px] box-border mq1350:pl-[30px] mq1350:pr-[30px] mq1350:box-border">
            <div className="w-[970px] overflow-x-auto flex items-center justify-between gap-5 shrink-0">
              <div className="h-[62px] w-[62px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-[37.5px] bg-text-inverse shrink-0 flex flex-col items-center justify-center">
                <h2 className="m-0 relative text-[length:inherit] tracking-[-0.01em] leading-[130%] font-bold font-[inherit] mq925:text-[29px] mq925:leading-[37px] mq450:text-[22px] mq450:leading-7">
                  1
                </h2>
              </div>
              <div className="h-[62px] w-[62px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-[37.5px] bg-text-inverse shrink-0 flex flex-col items-center justify-center">
                <h2 className="m-0 relative text-[length:inherit] tracking-[-0.01em] leading-[130%] font-bold font-[inherit] mq925:text-[29px] mq925:leading-[37px] mq450:text-[22px] mq450:leading-7">
                  2
                </h2>
              </div>
              <div className="h-[62px] w-[62px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-[37.5px] bg-text-inverse shrink-0 flex flex-col items-center justify-center">
                <h2 className="m-0 relative text-[length:inherit] tracking-[-0.01em] leading-[130%] font-bold font-[inherit] mq925:text-[29px] mq925:leading-[37px] mq450:text-[22px] mq450:leading-7">
                  3
                </h2>
              </div>
              <div className="h-[62px] w-[62px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-[37.5px] bg-text-inverse shrink-0 flex flex-col items-center justify-center">
                <h2 className="m-0 relative text-[length:inherit] tracking-[-0.01em] leading-[130%] font-bold font-[inherit] mq925:text-[29px] mq925:leading-[37px] mq450:text-[22px] mq450:leading-7">
                  4
                </h2>
              </div>
            </div>
          </div>
          <div className="w-[1128px] flex items-start justify-between gap-5 text-xl text-text-default">
            <div className="w-56 flex flex-col items-center gap-2.5">
              <h3 className="m-0 relative text-[length:inherit] tracking-[0.01em] leading-[140%] font-bold font-[inherit] shrink-0 mq450:text-base mq450:leading-[22px]">
                Tell SugarPress about you
              </h3>
              <div className="self-stretch relative text-base tracking-[0.01em] leading-6 text-text-muted shrink-0">
                A brief sentence about who you are and what you do.
              </div>
            </div>
            <div className="w-56 flex flex-col items-center gap-2.5">
              <h3 className="m-0 relative text-[length:inherit] tracking-[0.01em] leading-[140%] font-bold font-[inherit] shrink-0 mq450:text-base mq450:leading-[22px]">
                Describe what you need
              </h3>
              <div className="self-stretch relative text-base tracking-[0.01em] leading-6 text-text-muted shrink-0">
                A few lines about what it does, what it looks like. Upload
                reference screenshots.
              </div>
            </div>
            <div className="w-56 flex flex-col items-center gap-2.5">
              <h3 className="m-0 relative text-[length:inherit] tracking-[0.01em] leading-[140%] font-bold font-[inherit] mq450:text-base mq450:leading-[22px]">
                Let AI do the rest
              </h3>
              <div className="self-stretch relative text-base tracking-[0.01em] leading-6 text-text-muted">
                SugarPress generates your full
                <br />
                WordPress site. Vibe code your way to perfection.
              </div>
            </div>
            <div className="w-56 flex flex-col items-center gap-2.5">
              <h3 className="m-0 relative text-[length:inherit] tracking-[0.01em] leading-[140%] font-bold font-[inherit] mq450:text-base mq450:leading-[22px]">
                Publish
              </h3>
              <div className="self-stretch relative text-base tracking-[0.01em] leading-6 text-text-muted">
                Connect your domain. SSL, hosting, backups, speed — all
                included.
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Section;
