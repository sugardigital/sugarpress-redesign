import type { NextPage } from "next";
import Image from "next/image";
import Nav from "../components/nav";
import MainHeroContent from "../components/main-hero-content";
import SectionSection from "../components/section-section";
import Section from "../components/section";
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import Section3 from "../components/section3";
import Section4 from "../components/section4";
import Section5 from "../components/section5";

const Home: NextPage = () => {
  return (
    <div className="w-full relative bg-text-inverse overflow-hidden flex flex-col items-start leading-[normal] tracking-[normal]">
      <header className="self-stretch bg-red-red-500 flex items-center justify-end py-2 px-6 text-center text-sm text-text-inverse font-['Google_Sans']">
        <div className="w-[1191px] flex items-center justify-between gap-5">
          <div className="flex items-center gap-2 mq450:flex-wrap">
            <div className="relative tracking-[-0.01em] leading-4">{`Launch AI Websites under your brand with `}</div>
            <div className="flex items-start justify-center py-0 pl-0 pr-7 relative isolate">
              <div className="h-full w-full !!m-[0 important] absolute top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden flex flex-col items-end justify-center py-0.5 px-0 box-border z-[0] shrink-0">
                <Image
                  className="w-full h-5 relative object-cover shrink-0"
                  loading="lazy"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/arrow-white-right-svg@2x.png"
                />
              </div>
              <div className="relative [text-decoration:underline] tracking-[-0.01em] leading-4 z-[1] shrink-0">
                SugarPress AI
              </div>
            </div>
          </div>
          <div className="h-5 w-5 bg-red-red-500 overflow-hidden shrink-0 flex flex-col items-center justify-center">
            <Image
              className="w-full h-3.5 relative object-cover"
              loading="lazy"
              width={14}
              height={14}
              sizes="100vw"
              alt=""
              src="/notice-bar-close-icon-svg@2x.png"
            />
          </div>
        </div>
      </header>
      <section className="w-[1920px] h-[1319px] overflow-hidden shrink-0 flex flex-col items-center pt-0 px-0 pb-16 box-border relative isolate gap-20 max-w-full mq925:h-auto mq925:gap-5 mq925:pb-[27px] mq925:box-border mq1350:gap-10 mq1350:pb-[42px] mq1350:box-border">
        <Image
          className="w-[2521px] h-[2521px] absolute !!m-[0 important] top-[-231px] left-[-319px] object-cover z-[0] shrink-0"
          width={2521}
          height={2521}
          sizes="100vw"
          alt=""
          src="/Dots-8px@2x.png"
        />
        <div className="w-[2930.4px] h-[843px] absolute !!m-[0 important] top-[912px] left-[-515.7px] [filter:blur(500px)] rounded-[50%] [background:linear-gradient(23.05deg,_rgba(149,_42,_88,_0.8),_rgba(249,_210,_117,_0.8))] z-[1] shrink-0" />
        <div className="w-[1903.8px] h-[1339.9px] absolute !!m-[0 important] top-[151px] left-[-1067.8px] overflow-hidden flex items-center justify-center z-[2] shrink-0">
          <Image
            className="w-full h-full object-cover absolute left-[534px] top-[0px] [transform:scale(1)]"
            width={1903.8}
            height={1339.9}
            sizes="100vw"
            alt=""
            src="/Group-1@2x.png"
          />
        </div>
        <div className="w-[1903.8px] h-[1339.9px] absolute !!m-[0 important] top-[151px] left-[1068px] overflow-hidden flex items-center justify-center z-[3] shrink-0">
          <Image
            className="w-full h-full object-cover absolute left-[0px] top-[0px] [transform:scale(1)]"
            width={1903.8}
            height={1339.9}
            sizes="100vw"
            alt=""
            src="/Group-1@2x.png"
          />
        </div>
        <Nav />
        <MainHeroContent />
      </section>
      <SectionSection />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
};

export default Home;
