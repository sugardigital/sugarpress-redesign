"use client";
import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import Lookscout from "./lookscout";
import IconPlaceholderFill from "./icon-placeholder-fill";
import LoFiText from "./lo-fi-text";
import PhotoFill from "./photo-fill";
import Background from "./background";
import LowFiPageHeader from "./low-fi-page-header";
import IconPlaceholder from "./icon-placeholder";
import LoFiUXLeftToRight from "./lo-fi-u-x-left-to-right";
import LoFiUXBlockHeader from "./lo-fi-u-x-block-header";
import LoFiUXBlockFooter from "./lo-fi-u-x-block-footer";
import LowFiRating from "./low-fi-rating";
import LoFiUXFeatures from "./lo-fi-u-x-features";
import LoFiUXBlogPost from "./lo-fi-u-x-blog-post";
import LowFiLabel from "./low-fi-label";

export type SectionSectionType = {
  className?: string;
};

const SectionSection: NextPage<SectionSectionType> = ({ className = "" }) => {
  const [iconPlaceholderFillItems] = useState([
    {
      breakpoint: undefined,
      dropdown: undefined,
      orientation: false,
      variant: undefined,
      leadIcon: false,
      trilingIcon: false,
    },
    {
      breakpoint: undefined,
      dropdown: undefined,
      orientation: false,
      variant: undefined,
      leadIcon: false,
      trilingIcon: false,
    },
    {
      breakpoint: undefined,
      dropdown: undefined,
      orientation: false,
      variant: undefined,
      leadIcon: false,
      trilingIcon: false,
    },
    {
      breakpoint: undefined,
      dropdown: undefined,
      orientation: false,
      variant: undefined,
      leadIcon: false,
      trilingIcon: false,
    },
  ]);
  const [iconPlaceholderFillItems1] = useState([
    {
      breakpoint: undefined,
      dropdown: undefined,
      orientation: false,
      variant: undefined,
      leadIcon: false,
      trilingIcon: false,
    },
    {
      breakpoint: undefined,
      dropdown: undefined,
      orientation: false,
      variant: undefined,
      leadIcon: false,
      trilingIcon: false,
    },
    {
      breakpoint: undefined,
      dropdown: undefined,
      orientation: false,
      variant: undefined,
      leadIcon: false,
      trilingIcon: false,
    },
    {
      breakpoint: undefined,
      dropdown: undefined,
      orientation: false,
      variant: undefined,
      leadIcon: false,
      trilingIcon: false,
    },
  ]);
  const [iconPlaceholderFillItems2] = useState([
    {
      breakpoint: undefined,
      dropdown: undefined,
      orientation: false,
      variant: undefined,
      leadIcon: false,
      trilingIcon: false,
    },
    {
      breakpoint: undefined,
      dropdown: undefined,
      orientation: false,
      variant: undefined,
      leadIcon: false,
      trilingIcon: false,
    },
    {
      breakpoint: undefined,
      dropdown: undefined,
      orientation: false,
      variant: undefined,
      leadIcon: false,
      trilingIcon: false,
    },
    {
      breakpoint: undefined,
      dropdown: undefined,
      orientation: false,
      variant: undefined,
      leadIcon: false,
      trilingIcon: false,
    },
  ]);
  return (
    <main
      className={`overflow-hidden flex flex-col items-start py-[152px] px-[324px] box-border max-w-full mq925:py-[42px] mq925:px-[81px] mq925:box-border mq1350:py-16 mq1350:px-[162px] mq1350:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start gap-5 max-w-full">
        <div className="self-stretch flex flex-col items-center justify-center gap-8 mq925:gap-4">
          <section className="self-stretch flex flex-col items-center gap-4 text-center text-sm text-red-red-500 font-['Google_Sans']">
            <div className="self-stretch flex flex-col items-center gap-2">
              <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                THE FUTURE OF WORDPRESS
              </div>
              <div className="self-stretch flex flex-col items-center text-5xl text-text-default">
                <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-[0.01em] leading-[120%] font-bold font-[inherit] mq925:text-[38px] mq925:leading-[46px] mq450:text-[29px] mq450:leading-[35px]">
                  Everything you need. Nothing you don't.
                </h2>
              </div>
            </div>
            <h3 className="m-0 w-[620px] relative text-xl tracking-[0.01em] leading-[160%] font-normal font-[inherit] text-text-muted flex items-center justify-center mq450:text-base mq450:leading-[26px]">
              AI-powered toolkit designed to take your ideas from a blank canvas
              to a fully functional website in minutes.
            </h3>
          </section>
          <div className="self-stretch h-[545px] relative rounded-[15px] [background:linear-gradient(238.31deg,_#37010c,_#952a58_51.76%,_#f9d275)] overflow-hidden shrink-0">
            <div className="absolute h-[481.14%] w-full top-[-204.68%] right-[0%] bottom-[-176.46%] left-[0%] max-w-full max-h-full mix-blend-screen overflow-hidden flex items-center justify-center shrink-0">
              <Image
                className="h-full w-full overflow-hidden mix-blend-screen object-cover absolute left-[0px] top-[77px] [transform:scale(1)]"
                width={1272}
                height={2622.2}
                sizes="100vw"
                alt=""
                src="/Rectangle-2513@2x.png"
              />
            </div>
            <Image
              className="absolute w-[89.97%] top-[131.1px] right-[5.02%] left-[5.02%] max-w-full overflow-hidden h-[593.6px] object-cover z-[1] shrink-0"
              width={1144.4}
              height={593.6}
              sizes="100vw"
              alt=""
              src="/Untitled-June-11-2026-at-19-45-03-1@2x.png"
            />
          </div>
        </div>
        <div className="w-[1272px] flex flex-col items-start relative isolate gap-3 max-w-full">
          <div className="w-[3063.4px] h-[2185.4px] absolute !!m-[0 important] top-[-785.9px] left-[-865.4px] [filter:blur(600px)] overflow-hidden flex items-center justify-center z-[0] shrink-0">
            <Image
              className="w-full h-full [filter:blur(600px)] object-cover absolute left-[0px] top-[0px] [transform:scale(1)]"
              width={3063.4}
              height={2185.4}
              sizes="100vw"
              alt=""
              src="/Vector-4.svg"
            />
          </div>
          <section className="self-stretch flex items-start gap-3 max-w-full z-[1] shrink-0 text-left text-2xl text-text-default font-['Google_Sans'] mq1825:flex-wrap">
            <div className="h-[367px] flex-1 rounded-2xl bg-text-inverse overflow-hidden flex flex-col items-start justify-end p-7 box-border relative isolate min-w-[327px]">
              <div className="self-stretch flex flex-col items-start gap-2.5 z-[0] shrink-0">
                <h3 className="m-0 self-stretch relative text-[length:inherit] tracking-[0.01em] leading-[150%] font-bold font-[inherit] mq450:text-[19px] mq450:leading-[29px]">
                  Edit your site by chat.
                </h3>
                <div className="self-stretch relative text-base tracking-[0.01em] leading-6 text-text-muted">
                  Want to change a section, swap an image, rewrite the homepage?
                </div>
              </div>
              <div className="w-[404px] h-[247.7px] !!m-[0 important] absolute top-[-24px] left-[28px] flex items-start z-[1] shrink-0 text-[7.1px] text-text-inverse">
                <div className="w-[404px] flex items-start pt-[35.8px] px-1 pb-0 box-border gap-[131.7px]">
                  <div className="flex items-start gap-[10.4px] shrink-0 z-[3]">
                    <div className="h-[212.1px] w-[0.2px] relative border-[#e8e9ea] border-solid border-r-[0.2px] box-border shrink-0 z-[2]" />
                    <div className="flex flex-col items-start pt-[76.2px] px-0 pb-0 z-[1]">
                      <div className="h-[18.9px] rounded-tl-[9px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[1.18px] bg-red-red-500 flex items-start justify-center py-[2.4px] px-[5px] box-border shrink-0 whitespace-nowrap">
                        <div className="relative tracking-[-0.01em] capitalize">
                          live editing indicators
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start relative isolate shrink-0 z-[2] text-[7.2px] text-text-default font-[Inter]">
                    <div className="h-[11px] w-[205.6px] absolute !!m-[0 important] top-[27px] left-[4.4px] leading-[10.8px] flex items-center shrink-0 z-[0]">
                      SugarPress Editor
                    </div>
                    <div className="flex flex-col items-start pt-[43.8px] px-0 pb-0 z-[1] text-[9px] text-[#04000b]">
                      <div className="flex flex-col items-start gap-[11.8px] shrink-0">
                        <div className="flex items-start py-0 px-1">
                          <div className="flex flex-col items-start gap-[7.7px]">
                            <div className="rounded-tl-[13.76px] rounded-tr-[67.65px] rounded-br-[67.65px] rounded-bl-[2.29px] bg-[#e7e7e7] flex items-center justify-center py-[6.6px] px-[7px] gap-[4.1px] shrink-0">
                              <div className="h-[13.8px] w-[13.8px] rounded-[7.6px] bg-red-red-500 flex flex-col items-center justify-center">
                                <Image
                                  className="w-full h-[5.1px] relative"
                                  width={7}
                                  height={5.1}
                                  sizes="100vw"
                                  alt=""
                                  src="/Group-11.svg"
                                />
                              </div>
                              <div className="h-[13.8px] w-[170.8px] relative leading-[10.5px] flex items-center shrink-0">{`Make the hero headline shorter and add `}</div>
                            </div>
                            <div className="rounded-tl-[13.76px] rounded-tr-[67.65px] rounded-br-[67.65px] rounded-bl-[2.29px] bg-[#e7e7e7] flex items-center justify-center py-[6.6px] px-[7px] gap-[4.1px] shrink-0">
                              <div className="h-[13.8px] w-[13.8px] rounded-[7.6px] bg-red-red-500 flex flex-col items-center justify-center">
                                <Image
                                  className="w-full h-[5.1px] relative"
                                  width={7}
                                  height={5.1}
                                  sizes="100vw"
                                  alt=""
                                  src="/Group-11.svg"
                                />
                              </div>
                              <div className="relative leading-[10.5px]">
                                Update hero section and CTA
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start relative isolate text-text-inverse">
                          <div className="w-[353.4px] !!m-[0 important] absolute bottom-[-66.8px] left-[-210.8px] rounded-[3.5px] bg-text-inverse border-red-red-500 border-dashed border-[0.8px] box-border flex flex-col items-start py-3.5 pl-3 pr-2.5 z-[0] shrink-0">
                            <div className="self-stretch flex flex-col items-start gap-[9.4px]">
                              <div className="self-stretch flex flex-col items-start gap-[9.9px]">
                                <div className="w-[264px] flex flex-col items-start gap-[7px]">
                                  <div className="w-[191.3px] h-2.5 relative rounded-[35px] bg-[#ede5e9]" />
                                  <div className="w-[169.5px] h-2.5 relative rounded-[35px] bg-[#ede5e9]" />
                                </div>
                                <div className="w-[117px] flex flex-col items-start gap-1">
                                  <div className="self-stretch h-1.5 relative rounded-[35px] bg-[#ede5e9]" />
                                  <div className="w-[98.1px] h-1.5 relative rounded-[35px] bg-[#ede5e9]" />
                                  <div className="w-[117px] h-1.5 relative rounded-[35px] bg-[#ede5e9]" />
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="h-[15.7px] rounded-[341.9px] bg-[#ede5e9] flex items-center justify-center py-[2.7px] px-2.5 box-border gap-[2.1px]">
                                  <Image
                                    className="h-[6.8px] w-[6.8px] relative hidden shrink-0"
                                    width={6.8}
                                    height={6.8}
                                    sizes="100vw"
                                    alt=""
                                    src="/Icon-Placeholder.svg"
                                  />
                                  <Image
                                    className="h-[6.8px] w-[6.8px] relative hidden shrink-0"
                                    width={6.8}
                                    height={6.8}
                                    sizes="100vw"
                                    alt=""
                                    src="/placeholder-Fill.svg"
                                  />
                                  <div className="h-[5.5px] w-[16.8px] relative rounded-[17.1px] bg-text-inverse shrink-0" />
                                  <Image
                                    className="h-[6.8px] w-[6.8px] relative hidden shrink-0"
                                    width={6.8}
                                    height={6.8}
                                    sizes="100vw"
                                    alt=""
                                    src="/placeholder-Fill.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="rounded-[1145.4px] bg-red-red-500 flex items-center justify-center py-[6.6px] px-[7px] gap-[4.1px] z-[1] shrink-0">
                            <Image
                              className="h-[11.5px] w-[14.9px] relative"
                              loading="lazy"
                              width={14.9}
                              height={11.5}
                              sizes="100vw"
                              alt=""
                              src="/Group-14.svg"
                            />
                            <div className="relative leading-[10.5px]">
                              Hero section updated and CTA button added.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[367px] w-[757px] rounded-2xl bg-text-inverse overflow-hidden shrink-0 flex items-center p-7 box-border relative isolate gap-[10.8px] max-w-full mq1825:flex-1 mq1825:min-w-full mq450:h-auto">
              <div className="w-[257px] flex flex-col items-start gap-2.5 z-[0] shrink-0">
                <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-[0.01em] leading-[150%] font-bold font-[inherit] mq450:text-[19px] mq450:leading-[29px]">
                  Designed in Figma? Import directly.
                </h2>
                <div className="w-[231px] relative text-base tracking-[0.01em] leading-6 text-text-muted flex items-center">
                  Turn your designs into responsive, editable WordPress pages.
                </div>
              </div>
              <div className="h-[285.6px] w-[449px] !!m-[0 important] absolute top-[137.7px] left-[325px] flex items-start z-[1] shrink-0 mq450:h-auto">
                <div className="h-[285.6px] w-[449px] rounded-[20px] border-[#d0d0d0] border-solid border-[0.5px] box-border overflow-hidden shrink-0 flex flex-col items-center relative isolate mq450:h-auto">
                  <div className="w-[492.8px] bg-text-inverse flex items-center justify-center py-[6.8px] px-[27px] box-border z-[3] shrink-0">
                    <div className="w-[438px] flex items-center justify-between py-0 px-2.5 box-border gap-5">
                      <div className="flex items-center gap-[21.9px] mq450:flex-wrap">
                        <Lookscout type="Lookscout" />
                        <div className="flex items-center justify-center gap-[11px] mq450:flex-wrap">
                          {iconPlaceholderFillItems.map((item, index) => (
                            <IconPlaceholderFill
                              key={index}
                              breakpoint={item.breakpoint}
                              dropdown={item.dropdown}
                              orientation={item.orientation}
                              variant={item.variant}
                              leadIcon={item.leadIcon}
                              trilingIcon={item.trilingIcon}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-end gap-[8.2px]">
                        <IconPlaceholderFill
                          leadIcon={false}
                          trilingIcon={false}
                        />
                        <div className="flex items-start">
                          <div className="h-[15.7px] rounded-[341.9px] bg-[#ede5e9] flex items-center justify-center py-[2.7px] px-2.5 box-border gap-[2.1px]">
                            <Image
                              className="h-[6.8px] w-[6.8px] relative hidden shrink-0"
                              width={6.8}
                              height={6.8}
                              sizes="100vw"
                              alt=""
                              src="/Icon-Placeholder.svg"
                            />
                            <Image
                              className="h-[6.8px] w-[6.8px] relative hidden shrink-0"
                              width={6.8}
                              height={6.8}
                              sizes="100vw"
                              alt=""
                              src="/placeholder-Fill.svg"
                            />
                            <div className="h-[5.5px] w-[16.8px] relative rounded-[17.1px] bg-text-inverse shrink-0" />
                            <Image
                              className="h-[6.8px] w-[6.8px] relative hidden shrink-0"
                              width={6.8}
                              height={6.8}
                              sizes="100vw"
                              alt=""
                              src="/placeholder-Fill.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[219px] flex flex-col items-center py-[27.4px] px-0 box-border shrink-0 z-[2]">
                    <div className="w-full flex flex-col items-center gap-[12.3px] max-w-full">
                      <div className="flex flex-col items-center gap-[4.1px]">
                        <LoFiText center="Off" size={14} showDiv showText />
                        <div className="w-[219px] flex flex-col items-center gap-[8.2px]">
                          <LoFiText
                            center="On"
                            size={52}
                            showDiv
                            divWidth="219px"
                            divAlignSelf="unset"
                            divFlex="unset"
                            showText
                          />
                          <LoFiText
                            center="On"
                            size={18}
                            showDiv
                            divWidth="219px"
                            divAlignSelf="unset"
                            divFlex="unset"
                            showText
                          />
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="h-[15.7px] rounded-[341.9px] bg-[#ede5e9] flex items-center justify-center py-[2.7px] px-2.5 box-border gap-[2.1px]">
                          <Image
                            className="h-[6.8px] w-[6.8px] relative hidden shrink-0"
                            width={6.8}
                            height={6.8}
                            sizes="100vw"
                            alt=""
                            src="/Icon-Placeholder.svg"
                          />
                          <Image
                            className="h-[6.8px] w-[6.8px] relative hidden shrink-0"
                            width={6.8}
                            height={6.8}
                            sizes="100vw"
                            alt=""
                            src="/placeholder-Fill.svg"
                          />
                          <div className="h-[5.5px] w-[16.8px] relative rounded-[17.1px] bg-text-inverse shrink-0" />
                          <Image
                            className="h-[6.8px] w-[6.8px] relative hidden shrink-0"
                            width={6.8}
                            height={6.8}
                            sizes="100vw"
                            alt=""
                            src="/placeholder-Fill.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <PhotoFill type="Image" showPhotoFillIcon={false} />
                  <Background rounded="on" shapeBg="/Shape-Bg4.svg" />
                </div>
              </div>
              <div className="h-[131.2px] w-80 !!m-[0 important] absolute top-[43.9px] left-[290.3px] flex flex-col items-end z-[2] shrink-0 text-[9px] text-text-inverse font-[Inter]">
                <Image
                  className="w-80 h-[131.2px] relative object-cover shrink-0 z-[1]"
                  width={320}
                  height={131.2}
                  sizes="100vw"
                  alt=""
                  src="/Untitled-June-10-2026-at-17-13-51-2@2x.png"
                />
                <div className="flex items-start justify-end py-0 px-[17px] z-[2] mt-[-49.6px] relative">
                  <div className="h-10 rounded-md bg-text-inverse flex flex-col items-start py-2.5 px-1 box-border shrink-0">
                    <div className="self-stretch rounded-[1145.4px] bg-red-red-500 flex items-center justify-center py-[6.6px] px-[7px] shrink-0">
                      <div className="relative leading-[10.5px]">
                        Generate Website
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="self-stretch flex items-start gap-3 z-[2] shrink-0 text-left text-2xl text-text-default font-['Google_Sans'] mq925:grid-cols-[minmax(312px,_1fr)] mq1825:flex-wrap mq1825:justify-center mq1825:grid-cols-[repeat(2,_minmax(312px,_541px))]">
            <div className="h-[367px] flex-[1.0389] rounded-2xl bg-text-inverse overflow-hidden flex flex-col items-start justify-end py-7 px-[21px] box-border relative isolate min-w-[312px] min-h-[260px]">
              <div className="self-stretch flex flex-col items-start gap-2.5 z-[0] shrink-0">
                <h3 className="m-0 self-stretch relative text-[length:inherit] tracking-[0.01em] leading-[150%] font-bold font-[inherit] mq450:text-[19px] mq450:leading-[29px]">
                  Built to rank. Built to load fast.
                </h3>
                <div className="self-stretch relative text-base tracking-[0.01em] leading-6 text-text-muted">
                  AI-generated meta tags, schema markup, and Core Web Vitals
                  optimization out of the box.
                </div>
              </div>
              <Image
                className="w-[104.57%] h-[83.65%] absolute !!m-[0 important] top-[-4.36%] right-[-2.4%] bottom-[20.71%] left-[-2.16%] max-w-full overflow-hidden max-h-full z-[1] shrink-0"
                width={435}
                height={307}
                sizes="100vw"
                alt=""
                src="/Graph.svg"
              />
              <div className="w-[11.1px] h-[11.1px] absolute !!m-[0 important] top-[124px] left-[34px] rounded-[50%] bg-text-inverse border-red-red-500 border-solid border-[0px] box-border z-[2] shrink-0" />
              <div className="w-[11.1px] h-[11.1px] absolute !!m-[0 important] top-[153px] left-[170px] rounded-[50%] bg-text-inverse border-red-red-500 border-solid border-[0px] box-border z-[3] shrink-0" />
              <div className="w-[11.1px] h-[11.1px] absolute !!m-[0 important] top-[37.4px] left-[324.4px] rounded-[50%] bg-text-inverse border-red-red-500 border-solid border-[0px] box-border z-[4] shrink-0" />
              <div className="w-[11.1px] h-[11.1px] absolute !!m-[0 important] top-[100.2px] left-[244.3px] rounded-[50%] bg-text-inverse border-red-red-500 border-solid border-[0px] box-border z-[5] shrink-0" />
            </div>
            <div className="h-[367px] flex-1 rounded-2xl bg-text-inverse flex flex-col items-start justify-end p-7 box-border relative isolate min-w-[312px]">
              <div className="self-stretch flex flex-col items-start gap-2.5 z-[0] shrink-0">
                <h3 className="m-0 self-stretch relative text-[length:inherit] tracking-[0.01em] leading-[150%] font-bold font-[inherit] mq450:text-[19px] mq450:leading-[29px]">
                  Clone any site by URL.
                </h3>
                <div className="self-stretch relative text-base tracking-[0.01em] leading-6 text-text-muted">
                  Drop a URL. SugarPress recreates it as an editable WordPress
                  site you own.
                </div>
              </div>
              <div className="w-[306.5px] h-[208.8px] !!m-[0 important] absolute top-[21.7px] left-[54.8px] flex flex-col items-start gap-[15.7px] z-[1] shrink-0 text-[11.8px] text-text-inverse">
                <div className="flex items-start py-0 pl-[31px] pr-8">
                  <div className="h-[31.3px] w-[243px] rounded-[69.5px] border-red-red-50 border-solid border-[0.7px] box-border flex items-center py-[7px] pl-2 pr-[7px] gap-[7px]">
                    <div className="flex items-center w-[px] h-[px]">
                      <Image
                        className="h-[10.4px] w-full relative"
                        loading="lazy"
                        width={10.4}
                        height={10.4}
                        sizes="100vw"
                        alt=""
                        src="/Vector-Stroke2.svg"
                      />
                    </div>
                    <div className="h-[9px] flex-1 relative rounded-[69.5px] bg-[#ede5e9] overflow-hidden" />
                  </div>
                </div>
                <div className="flex items-start py-0 pl-[19px] pr-5">
                  <div className="h-[5px] w-[267px] rounded-[69.5px] bg-[#ede5e9] overflow-hidden shrink-0 flex flex-col items-start">
                    <div className="w-[99.1px] flex-1 relative rounded-[69.5px] bg-red-red-500 overflow-hidden" />
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-[141.1px] w-[306.5px] rounded-[10px] border-[#d0d0d0] border-solid border-[0.5px] box-border overflow-hidden shrink-0 flex flex-col items-start py-0 pl-[13px] pr-3 relative isolate">
                    <div className="!!m-[0 important] absolute top-[60.3px] left-[102.5px] rounded-[875.6px] bg-red-red-500 flex items-center justify-center py-[3.4px] px-2 gap-[5px] z-[3] shrink-0">
                      <Image
                        className="h-[13.1px] w-[13.1px] relative"
                        loading="lazy"
                        width={13.1}
                        height={13.1}
                        sizes="100vw"
                        alt=""
                        src="/Hero-Graphic-One.svg"
                      />
                      <div className="relative tracking-[0.01em] leading-[150%]">
                        Tranforming
                      </div>
                    </div>
                    <div className="self-stretch bg-text-inverse flex items-center justify-between py-[4.7px] px-0 gap-5 z-[2] shrink-0">
                      <div className="flex items-center justify-center gap-[7.8px]">
                        <div className="flex items-center gap-[1.3px]">
                          <Image
                            className="h-[5.2px] w-[5.2px] relative"
                            width={5.2}
                            height={5.2}
                            sizes="100vw"
                            alt=""
                            src="/Logo-Shape-One.svg"
                          />
                          <Image
                            className="h-[3.4px] w-[12.7px] relative"
                            width={12.7}
                            height={3.4}
                            sizes="100vw"
                            alt=""
                            src="/Petals.svg"
                          />
                        </div>
                        <div className="flex items-center gap-[7.5px]">
                          {iconPlaceholderFillItems1.map((item, index) => (
                            <IconPlaceholderFill
                              key={index}
                              breakpoint={item.breakpoint}
                              dropdown={item.dropdown}
                              orientation={item.orientation}
                              variant={item.variant}
                              leadIcon={item.leadIcon}
                              trilingIcon={item.trilingIcon}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-end">
                        <div className="flex items-start">
                          <div className="h-[10.7px] rounded-[233.3px] bg-[#ede5e9] flex items-center justify-center py-[1.9px] px-[7px] box-border gap-[1.4px]">
                            <Image
                              className="h-[4.7px] w-[4.7px] relative hidden shrink-0"
                              width={4.7}
                              height={4.7}
                              sizes="100vw"
                              alt=""
                              src="/Icon-Placeholder.svg"
                            />
                            <Image
                              className="h-[4.7px] w-[4.7px] relative hidden shrink-0"
                              width={4.7}
                              height={4.7}
                              sizes="100vw"
                              alt=""
                              src="/placeholder-Fill.svg"
                            />
                            <div className="h-[3.7px] w-[11.4px] relative rounded-[11.7px] bg-text-inverse shrink-0" />
                            <Image
                              className="h-[4.7px] w-[4.7px] relative hidden shrink-0"
                              width={4.7}
                              height={4.7}
                              sizes="100vw"
                              alt=""
                              src="/placeholder-Fill.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[280.8px] h-[113.6px] flex items-start justify-between gap-5 z-[1] shrink-0">
                      <div className="w-[122.8px] flex flex-col items-start py-[18.7px] px-0 box-border">
                        <div className="self-stretch flex flex-col items-start gap-[8.4px]">
                          <div className="self-stretch flex flex-col items-start gap-[2.8px]">
                            <LoFiText
                              center="Off"
                              size={14}
                              showDiv
                              divWidth="28px"
                              divAlignSelf="unset"
                              divFlex="unset"
                              showText
                            />
                            <div className="self-stretch flex flex-col items-start gap-[5.6px]">
                              <div className="self-stretch flex flex-col items-start gap-[3.7px]">
                                <div className="self-stretch h-[7px] relative">
                                  <div className="absolute h-full w-full top-[4.29%] right-[0.24%] bottom-[-4.29%] left-[-0.24%] rounded-[11.7px] bg-[#ede5e9]" />
                                </div>
                                <div className="w-[122.4px] h-[7px] relative hidden">
                                  <div className="absolute h-full w-[84.89%] top-[4.29%] right-[7.92%] bottom-[-4.29%] left-[7.19%] rounded-[11.7px] bg-neutral-900" />
                                </div>
                                <div className="w-[65px] h-[7px] relative rounded-[11.7px] bg-[#ede5e9]" />
                              </div>
                              <div className="self-stretch flex flex-col items-start gap-[2.8px]">
                                <div className="self-stretch h-[3px] relative">
                                  <div className="absolute h-full w-full top-[10%] right-[0.24%] bottom-[-10%] left-[-0.24%] rounded-[11.7px] bg-[#ede5e9]" />
                                </div>
                                <div className="w-[104.5px] h-[2.6px] relative rounded-[11.7px] bg-[#ede5e9]" />
                                <div className="w-[65px] h-[3px] relative rounded-[11.7px] bg-[#ede5e9]" />
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="h-[10.7px] rounded-[233.3px] bg-[#ede5e9] flex items-center justify-center py-[1.9px] px-[7px] box-border gap-[1.4px]">
                              <Image
                                className="h-[4.7px] w-[4.7px] relative hidden shrink-0"
                                width={4.7}
                                height={4.7}
                                sizes="100vw"
                                alt=""
                                src="/Icon-Placeholder.svg"
                              />
                              <Image
                                className="h-[4.7px] w-[4.7px] relative hidden shrink-0"
                                width={4.7}
                                height={4.7}
                                sizes="100vw"
                                alt=""
                                src="/placeholder-Fill.svg"
                              />
                              <div className="h-[3.7px] w-[11.4px] relative rounded-[11.7px] bg-text-inverse shrink-0" />
                              <Image
                                className="h-[4.7px] w-[4.7px] relative hidden shrink-0"
                                width={4.7}
                                height={4.7}
                                sizes="100vw"
                                alt=""
                                src="/placeholder-Fill.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[113.6px] w-[131.9px] rounded-[13.1px] bg-[#e7e7e7] flex items-center justify-center relative isolate">
                        <Image
                          className="h-[15.7px] w-full absolute !!m-[0 important] top-[calc(50%_-_7.8px)] left-[calc(50%_-_7.85px)] z-[0]"
                          loading="lazy"
                          width={15.7}
                          height={15.7}
                          sizes="100vw"
                          alt=""
                          src="/photo-Fill.svg"
                        />
                      </div>
                    </div>
                    <Background
                      rounded="on"
                      backgroundHeight="calc(100% + 55.7px)"
                      backgroundBottom="-55.7px"
                      backgroundPadding="0px 0px 0px"
                      backgroundRight="0px"
                      backgroundBackgroundColor="unset"
                      shapeBg="/Shape-Bg3.svg"
                      shapeBgIconHeight="197px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[367px] flex-1 rounded-2xl bg-text-inverse flex flex-col items-start justify-end p-7 box-border relative isolate min-w-[312px]">
              <Image
                className="w-[212.9px] h-[91.9px] !!m-[0 important] absolute top-[145.8px] left-[73.5px] rounded-[10.4px] object-contain z-[0] shrink-0"
                width={212.9}
                height={91.9}
                sizes="100vw"
                alt=""
                src="/Card-Top-Element@2x.png"
              />
              <div className="self-stretch flex flex-col items-start gap-2.5 z-[1] shrink-0">
                <h3 className="m-0 self-stretch relative text-[length:inherit] tracking-[0.01em] leading-[150%] font-bold font-[inherit] mq450:text-[19px] mq450:leading-[29px]">
                  Real features, added by AI.
                </h3>
                <div className="self-stretch relative text-base tracking-[0.01em] leading-6 text-text-muted">
                  Forms, bookings, calendars, member areas, added when you ask.
                </div>
              </div>
              <Image
                className="w-[calc(100%_-_205.9px)] h-[126.8px] !!m-[0 important] absolute top-[12.9px] right-[177.9px] left-[28px] rounded-[11.3px] max-w-full overflow-hidden shrink-0 object-contain z-[2]"
                width={210.1}
                height={126.8}
                sizes="100vw"
                alt=""
                src="/Card-Middle-Element@2x.png"
              />
              <Image
                className="w-[234.5px] h-[110.3px] !!m-[0 important] absolute top-[68.2px] left-[157px] rounded-[11.3px] object-contain z-[3] shrink-0"
                loading="lazy"
                width={234.5}
                height={110.3}
                sizes="100vw"
                alt=""
                src="/Card-Bottom-Element@2x.png"
              />
            </div>
          </section>
          <div className="self-stretch flex items-start gap-3 max-w-full z-[3] shrink-0 mq1825:flex-wrap">
            <section className="h-[403px] w-[757px] rounded-2xl bg-text-inverse overflow-hidden shrink-0 flex items-center p-7 box-border relative isolate gap-[10.8px] max-w-full text-left text-base text-text-muted font-['Google_Sans'] mq1825:flex-1 mq1825:min-w-full mq450:pt-5 mq450:pb-5 mq450:box-border">
              <div className="!!m-[0 important] absolute top-[216px] left-[548.9px] rounded-lg bg-text-inverse border-[#d0d0d0] border-solid border-[0.5px] flex flex-col items-start z-[0] shrink-0">
                <div className="w-[222.6px] rounded-[18px] bg-text-inverse overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-[0.3px] box-border relative isolate">
                  <LowFiPageHeader
                    breakpoint="Desktop"
                    dropdown="Off"
                    variant={1}
                  />
                  <div className="w-[197.9px] bg-text-inverse flex flex-col items-center justify-center pt-[12.4px] px-1 pb-[14.2px] box-border z-[2] shrink-0">
                    <div className="w-[98.9px] flex flex-col items-center">
                      <div className="w-full flex flex-col items-center gap-[5.6px] max-w-full">
                        <div className="flex flex-col items-center gap-[1.9px]">
                          <LoFiText
                            center="Off"
                            size={14}
                            showDiv
                            divWidth="18.5px"
                            divAlignSelf="unset"
                            divFlex="unset"
                            showText
                          />
                          <div className="w-[98.9px] flex flex-col items-center gap-[3.7px]">
                            <LoFiText
                              center="On"
                              size={52}
                              showDiv
                              divWidth="98.9px"
                              divAlignSelf="unset"
                              divFlex="unset"
                              showText
                            />
                            <LoFiText
                              center="On"
                              size={18}
                              showDiv
                              divWidth="98.9px"
                              divAlignSelf="unset"
                              divFlex="unset"
                              showText
                            />
                          </div>
                        </div>
                        <div className="flex items-start gap-[2.5px]">
                          <IconPlaceholder
                            hierachy="Primary"
                            size="Large"
                            type="Default"
                            firstIcon={false}
                            trilingIcon={false}
                            iconPlaceholderBorderRadius="1.9px"
                            iconPlaceholderBackgroundColor="#ede5e9"
                            iconPlaceholderPadding="1.2px 4.9px"
                          />
                          <div className="h-[7.1px] rounded-[1.9px] bg-[#ede5e9] flex items-center justify-center py-[1.2px] px-[4.9px] box-border gap-[0.9px]">
                            <Image
                              className="h-[3.1px] w-[3.1px] relative hidden shrink-0"
                              width={3.1}
                              height={3.1}
                              sizes="100vw"
                              alt=""
                              src="/placeholder-Fill.svg"
                            />
                            <div className="h-[2.5px] w-[7.6px] relative rounded-[7.7px] bg-[#ede5e9] shrink-0" />
                            <Image
                              className="h-[3.1px] w-[3.1px] relative hidden shrink-0"
                              width={3.1}
                              height={3.1}
                              sizes="100vw"
                              alt=""
                              src="/placeholder-Fill.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Background
                    rounded="on"
                    backgroundHeight="calc(100% + 472.6px)"
                    backgroundBottom="-472.6px"
                    backgroundPadding="unset"
                    backgroundRight="-1217.3px"
                    backgroundBackgroundColor="#fff"
                    shapeBg="/Shape-Bg1.svg"
                    shapeBgIconHeight="559px"
                  />
                  <Background
                    rounded="on"
                    backgroundHeight="calc(100% + 472.6px)"
                    backgroundBottom="-472.6px"
                    backgroundPadding="unset"
                    backgroundRight="-1217.3px"
                    backgroundBackgroundColor="unset"
                    shapeBg="/Shape-Bg2.svg"
                    shapeBgIconHeight="559px"
                  />
                </div>
                <LoFiUXLeftToRight
                  breakpoint="Desktop"
                  orientation={false}
                  variant={5}
                  footer={false}
                  header
                  lowFiIconPlaceholderSize="Large"
                  lowFiIconPlaceholderSize1="Large"
                  lowFiIconPlaceholderSize2="Large"
                />
                <div className="w-[222.6px] bg-[#f9fbfd] flex flex-col items-center justify-center py-[9.9px] px-0 box-border gap-[9.9px]">
                  <LoFiUXBlockHeader
                    breakpoint="Desktop"
                    supportingText
                    uphead={false}
                    showLoFiUXBlockHeader={false}
                    loFiUXBlockHeaderWidth="197.9px"
                    loFiUXBlockHeaderPadding="0px 4.9px"
                    textContainerWidth="123.7px"
                    textContainerCenter="Off"
                    headerCenter="On"
                    paragraphCenter="On"
                    textContainerSize="14"
                    headerSize="32"
                    paragraphSize="16"
                    textContainerShowDiv={false}
                    headerShowDiv
                    paragraphShowDiv
                    textContainerShow={false}
                    headerShowText
                    paragraphShowText
                    textContainerDivWidth="123.7px"
                    headerDivWidth="unset"
                    paragraphDivWidth="unset"
                    textContainerDivAlignSelf="unset"
                    headerDivAlignSelf="stretch"
                    paragraphDivAlignSelf="stretch"
                    textContainerDivFlex="unset"
                    headerDivFlex="unset"
                    paragraphDivFlex="unset"
                  />
                  <div className="w-[197.9px] flex items-center py-0 px-[4.9px] box-border gap-[21.6px] shrink-0">
                    <PhotoFill
                      type="Image"
                      photoFillWidth="86.6px"
                      photoFillHeight="86.6px"
                      photoFillBackgroundColor="#ede5e9"
                      photoFillPosition="unset"
                      photoFillTop="unset"
                      photoFillRight="unset"
                      photoFillBottom="unset"
                      photoFillLeft="unset"
                      showPhotoFillIcon
                      photoFillIconHeight="6.2px"
                    />
                    <div className="flex-1 flex flex-col items-start gap-[6.2px]">
                      <div className="self-stretch flex flex-col items-start gap-[1.2px]">
                        <LoFiText
                          center="Off"
                          size={14}
                          showDiv
                          divWidth="81px"
                          divAlignSelf="unset"
                          divFlex="unset"
                          showText
                        />
                        <div className="self-stretch flex flex-col items-start gap-[2.5px] shrink-0">
                          <LoFiText
                            center="Off"
                            size={32}
                            showDiv
                            divWidth="unset"
                            divAlignSelf="stretch"
                            divFlex="unset"
                            showText
                          />
                          <LoFiText
                            center="Off"
                            size={16}
                            showDiv
                            divWidth="unset"
                            divAlignSelf="stretch"
                            divFlex="unset"
                            showText
                          />
                        </div>
                      </div>
                      <IconPlaceholder
                        hierachy="Primary"
                        size="Large"
                        type="Default"
                        firstIcon={false}
                        trilingIcon={false}
                        iconPlaceholderBorderRadius="1.9px"
                        iconPlaceholderBackgroundColor="#ede5e9"
                        iconPlaceholderPadding="1.2px 4.9px"
                      />
                    </div>
                  </div>
                  <LoFiUXBlockFooter
                    breakpoint="Desktop"
                    orientation
                    variant={3}
                    secondaryButton
                    loFiUXBlockFooterWidth="222.6px"
                    loFiUXBlockFooterAlignSelf="unset"
                    placeholderFillBorderRadius="1.9px"
                    placeholderFillBackgroundColor="#e6e9ec"
                    placeholderFillPadding="1.2px 4.9px"
                    textBackgroundColor="#7c8b9d"
                    hierachy="Primary"
                    size="Large"
                    type="Default"
                    firstIcon={false}
                    trilingIcon={false}
                    iconPlaceholderBorderRadius="1.9px"
                    iconPlaceholderBackgroundColor="#437ef7"
                    iconPlaceholderPadding="1.2px 4.9px"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-[11px] z-[1] shrink-0">
                <div className="w-[298px] flex flex-col items-start">
                  <div className="self-stretch flex flex-col items-start gap-2.5">
                    <div className="self-stretch flex flex-col items-start pt-px px-0 pb-0 text-2xl text-text-default">
                      <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-[0.01em] leading-[150%] font-bold font-[inherit] mq450:text-[19px] mq450:leading-[29px]">
                        AI can be generic. Real designers aren't.
                      </h2>
                    </div>
                    <div className="self-stretch relative tracking-[0.01em] leading-6">
                      Want a homepage that doesn't look AI-built? Work with a
                      Sugar Design Group designer to craft a custom homepage by
                      hand.
                    </div>
                    <div className="self-stretch relative tracking-[0.01em] leading-6">
                      The AI learns your style and applies it across every page
                      you generate after — so you start from a designed
                      foundation, not from AI defaults.
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] pt-[14.5px] px-7 pb-[15.5px] bg-text-default rounded-[100px] overflow-hidden flex items-center justify-center">
                  <div className="relative text-sm tracking-[-0.01em] leading-[150%] font-medium font-['Google_Sans'] text-text-inverse whitespace-pre-wrap text-center">
                    Talk to a designer →
                  </div>
                </button>
              </div>
              <div className="!!m-[0 important] absolute top-[81.4px] left-[377.6px] rounded-lg bg-text-inverse border-[#d0d0d0] border-solid border-[0.5px] flex flex-col items-start z-[2] shrink-0">
                <div className="w-[254.1px] h-[147.3px] rounded-[21px] bg-text-inverse overflow-hidden shrink-0 flex flex-col items-center relative isolate">
                  <div className="w-[254.1px] rounded-[78px] bg-text-inverse flex items-center justify-center py-[3.5px] px-3.5 box-border z-[3] shrink-0">
                    <div className="w-[225.8px] flex items-center justify-between py-0 px-[5px] box-border gap-5">
                      <div className="flex items-center gap-[11.3px]">
                        <Lookscout
                          type="Lookscout"
                          lookscoutHeight="5.6px"
                          lookscoutWidth="22.6px"
                          lookscoutIconHeight="71.43%"
                          lookscoutIconTop="14.29%"
                          lookscoutIconRight="3.1%"
                          lookscoutIconBottom="14.29%"
                          lookscoutIconLeft="3.1%"
                        />
                        <div className="flex items-center gap-[5.6px]">
                          {iconPlaceholderFillItems2.map((item, index) => (
                            <IconPlaceholderFill
                              key={index}
                              breakpoint={item.breakpoint}
                              dropdown={item.dropdown}
                              orientation={item.orientation}
                              variant={item.variant}
                              leadIcon={item.leadIcon}
                              trilingIcon={item.trilingIcon}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-end gap-[4.2px]">
                        <IconPlaceholderFill
                          leadIcon={false}
                          trilingIcon={false}
                        />
                        <IconPlaceholder
                          hierachy="Primary"
                          size="Large"
                          type="Default"
                          firstIcon={false}
                          trilingIcon={false}
                          iconPlaceholderBorderRadius="10px"
                          iconPlaceholderBackgroundColor="#952a58"
                          iconPlaceholderPadding="1.4px 5.6px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[112.9px] flex flex-col items-center py-[14.1px] px-0 box-border shrink-0 z-[2]">
                    <div className="w-[112.9px] flex flex-col items-center gap-[4.2px]">
                      <LowFiRating size="Medium" />
                      <div className="self-stretch flex flex-col items-center gap-[8.5px]">
                        <div className="flex flex-col items-center gap-[2.1px]">
                          <LoFiText
                            center="Off"
                            size={14}
                            showDiv
                            divWidth="21.2px"
                            divAlignSelf="unset"
                            divFlex="unset"
                            showText={false}
                          />
                          <div className="w-[112.9px] flex flex-col items-center gap-[4.2px]">
                            <LoFiText
                              center="On"
                              size={52}
                              showDiv
                              divWidth="112.9px"
                              divAlignSelf="unset"
                              divFlex="unset"
                              showText
                            />
                            <LoFiText
                              center="On"
                              size={18}
                              showDiv
                              divWidth="112.9px"
                              divAlignSelf="unset"
                              divFlex="unset"
                              showText
                            />
                          </div>
                        </div>
                        <div className="flex items-start gap-[2.8px]">
                          <IconPlaceholder
                            hierachy="Primary"
                            size="Large"
                            type="Default"
                            firstIcon={false}
                            trilingIcon={false}
                            iconPlaceholderBorderRadius="10px"
                            iconPlaceholderBackgroundColor="#952a58"
                            iconPlaceholderPadding="1.4px 5.6px"
                          />
                          <div className="h-[8.1px] rounded-[10px] bg-[#ede5e9] flex items-center justify-center py-[1.4px] px-[5.6px] box-border gap-[1.1px]">
                            <Image
                              className="h-[3.5px] w-[3.5px] relative hidden shrink-0"
                              width={3.5}
                              height={3.5}
                              sizes="100vw"
                              alt=""
                              src="/placeholder-Fill.svg"
                            />
                            <div className="h-[2.8px] w-[8.6px] relative rounded-[8.8px] bg-text-inverse shrink-0" />
                            <Image
                              className="h-[3.5px] w-[3.5px] relative hidden shrink-0"
                              width={3.5}
                              height={3.5}
                              sizes="100vw"
                              alt=""
                              src="/placeholder-Fill.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[194.1px] h-[55.6px] rounded-[1.8px] bg-[#ede5e9] flex items-center justify-center relative isolate shrink-0 z-[1]">
                    <Image
                      className="h-[9.7px] w-full absolute !!m-[0 important] top-[calc(50%_-_9.7px)] left-[calc(50%_-_4.85px)] z-[0]"
                      loading="lazy"
                      width={9.7}
                      height={9.7}
                      sizes="100vw"
                      alt=""
                      src="/photo-Fill.svg"
                    />
                  </div>
                  <Background
                    rounded="on"
                    backgroundHeight="calc(100% + 1.4px)"
                    backgroundBottom="-1.4px"
                    backgroundPadding="0px 0px 0px"
                    backgroundRight="0px"
                    backgroundBackgroundColor="#fff"
                    shapeBg="/Shape-Bg.svg"
                    shapeBgIconHeight="149px"
                  />
                </div>
                <LoFiUXFeatures
                  breakpoint="Desktop"
                  variant={2}
                  footer
                  header
                />
                <div className="w-[254.1px] bg-text-inverse flex flex-col items-center justify-center py-[11.3px] px-0 box-border gap-[11.3px]">
                  <LoFiUXBlockHeader
                    breakpoint="Desktop"
                    supportingText
                    uphead={false}
                    showLoFiUXBlockHeader
                    loFiUXBlockHeaderWidth="225.8px"
                    loFiUXBlockHeaderPadding="0px 5.6px"
                    textContainerWidth="141.2px"
                    textContainerCenter="Off"
                    headerCenter="On"
                    paragraphCenter="On"
                    textContainerSize="14"
                    headerSize="32"
                    paragraphSize="16"
                    textContainerShowDiv={false}
                    headerShowDiv
                    paragraphShowDiv
                    textContainerShow={false}
                    headerShowText
                    paragraphShowText
                    textContainerDivWidth="141.2px"
                    headerDivWidth="unset"
                    paragraphDivWidth="unset"
                    textContainerDivAlignSelf="unset"
                    headerDivAlignSelf="stretch"
                    paragraphDivAlignSelf="stretch"
                    textContainerDivFlex="unset"
                    headerDivFlex="unset"
                    paragraphDivFlex="unset"
                  />
                  <div className="w-[225.8px] flex items-center py-0 px-[5.6px] box-border gap-[24.7px] shrink-0">
                    <div className="flex-1 flex flex-col items-start gap-[7.1px]">
                      <div className="self-stretch flex flex-col items-start gap-[1.4px]">
                        <LoFiText
                          center="Off"
                          size={14}
                          showDiv
                          divWidth="92.5px"
                          divAlignSelf="unset"
                          divFlex="unset"
                          showText
                        />
                        <div className="self-stretch flex flex-col items-start gap-[2.8px] shrink-0">
                          <LoFiText
                            center="Off"
                            size={32}
                            showDiv
                            divWidth="unset"
                            divAlignSelf="stretch"
                            divFlex="unset"
                            showText
                          />
                          <LoFiText
                            center="Off"
                            size={16}
                            showDiv
                            divWidth="unset"
                            divAlignSelf="stretch"
                            divFlex="unset"
                            showText
                          />
                        </div>
                      </div>
                      <IconPlaceholder
                        hierachy="Primary"
                        size="Large"
                        type="Default"
                        firstIcon={false}
                        trilingIcon={false}
                        iconPlaceholderBorderRadius="2.1px"
                        iconPlaceholderBackgroundColor="#952a58"
                        iconPlaceholderPadding="1.4px 5.6px"
                      />
                    </div>
                    <PhotoFill
                      type="Image"
                      photoFillWidth="98.8px"
                      photoFillHeight="98.8px"
                      photoFillBackgroundColor="#ede5e9"
                      photoFillPosition="unset"
                      photoFillTop="unset"
                      photoFillRight="unset"
                      photoFillBottom="unset"
                      photoFillLeft="unset"
                      showPhotoFillIcon
                      photoFillIconHeight="7.1px"
                    />
                  </div>
                  <LoFiUXBlockFooter
                    breakpoint="Desktop"
                    orientation={false}
                    variant={3}
                    secondaryButton
                    loFiUXBlockFooterWidth="254.1px"
                    loFiUXBlockFooterAlignSelf="unset"
                    placeholderFillBorderRadius="2.1px"
                    placeholderFillBackgroundColor="#e6e9ec"
                    placeholderFillPadding="1.4px 5.6px"
                    textBackgroundColor="#7c8b9d"
                    hierachy="Primary"
                    size="Large"
                    type="Default"
                    firstIcon={false}
                    trilingIcon={false}
                    iconPlaceholderBorderRadius="2.1px"
                    iconPlaceholderBackgroundColor="#437ef7"
                    iconPlaceholderPadding="1.4px 5.6px"
                  />
                </div>
                <LoFiUXBlogPost
                  breakpoint="Desktop"
                  variant={2}
                  footer={false}
                  header
                />
                <div className="w-[254.1px] bg-[#f9fbfd] flex flex-col items-center justify-center py-[11.3px] px-0 box-border gap-[11.3px] shrink-0">
                  <LoFiUXBlockHeader
                    breakpoint="Desktop"
                    supportingText
                    uphead={false}
                    showLoFiUXBlockHeader={false}
                    loFiUXBlockHeaderWidth="225.8px"
                    loFiUXBlockHeaderPadding="0px 5.6px"
                    textContainerWidth="141.2px"
                    textContainerCenter="Off"
                    headerCenter="On"
                    paragraphCenter="On"
                    textContainerSize="14"
                    headerSize="32"
                    paragraphSize="16"
                    textContainerShowDiv={false}
                    headerShowDiv
                    paragraphShowDiv
                    textContainerShow={false}
                    headerShowText
                    paragraphShowText
                    textContainerDivWidth="141.2px"
                    headerDivWidth="unset"
                    paragraphDivWidth="unset"
                    textContainerDivAlignSelf="unset"
                    headerDivAlignSelf="stretch"
                    paragraphDivAlignSelf="stretch"
                    textContainerDivFlex="unset"
                    headerDivFlex="unset"
                    paragraphDivFlex="unset"
                  />
                  <div className="w-[225.8px] flex items-center py-0 px-[5.6px] box-border gap-[24.7px] shrink-0">
                    <PhotoFill
                      type="Image"
                      photoFillWidth="98.8px"
                      photoFillHeight="98.8px"
                      photoFillBackgroundColor="#ede5e9"
                      photoFillPosition="unset"
                      photoFillTop="unset"
                      photoFillRight="unset"
                      photoFillBottom="unset"
                      photoFillLeft="unset"
                      showPhotoFillIcon
                      photoFillIconHeight="7.1px"
                    />
                    <div className="flex-1 flex flex-col items-start gap-[7.1px]">
                      <div className="self-stretch flex flex-col items-start gap-[1.4px]">
                        <LoFiText
                          center="Off"
                          size={14}
                          showDiv
                          divWidth="92.5px"
                          divAlignSelf="unset"
                          divFlex="unset"
                          showText
                        />
                        <div className="self-stretch flex flex-col items-start gap-[2.8px] shrink-0">
                          <LoFiText
                            center="Off"
                            size={32}
                            showDiv
                            divWidth="unset"
                            divAlignSelf="stretch"
                            divFlex="unset"
                            showText
                          />
                          <LoFiText
                            center="Off"
                            size={16}
                            showDiv
                            divWidth="unset"
                            divAlignSelf="stretch"
                            divFlex="unset"
                            showText
                          />
                        </div>
                      </div>
                      <IconPlaceholder
                        hierachy="Primary"
                        size="Large"
                        type="Default"
                        firstIcon={false}
                        trilingIcon={false}
                        iconPlaceholderBorderRadius="2.1px"
                        iconPlaceholderBackgroundColor="#952a58"
                        iconPlaceholderPadding="1.4px 5.6px"
                      />
                    </div>
                  </div>
                  <LoFiUXBlockFooter
                    breakpoint="Desktop"
                    orientation
                    variant={3}
                    secondaryButton
                    loFiUXBlockFooterWidth="254.1px"
                    loFiUXBlockFooterAlignSelf="unset"
                    placeholderFillBorderRadius="2.1px"
                    placeholderFillBackgroundColor="#e6e9ec"
                    placeholderFillPadding="1.4px 5.6px"
                    textBackgroundColor="#7c8b9d"
                    hierachy="Primary"
                    size="Large"
                    type="Default"
                    firstIcon={false}
                    trilingIcon={false}
                    iconPlaceholderBorderRadius="2.1px"
                    iconPlaceholderBackgroundColor="#437ef7"
                    iconPlaceholderPadding="1.4px 5.6px"
                  />
                </div>
              </div>
              <Image
                className="h-[29.5px] w-[70.4px] !!m-[0 important] absolute top-[58.3px] left-[347.7px] rounded-[875.6px] object-contain z-[3] shrink-0"
                width={70.4}
                height={29.5}
                sizes="100vw"
                alt=""
                src="/Background1@2x.png"
              />
              <Image
                className="h-[27.1px] w-[58.9px] !!m-[0 important] absolute top-[195.6px] left-[658.1px] rounded-[99px] object-contain z-[4] shrink-0"
                loading="lazy"
                width={58.9}
                height={27.1}
                sizes="100vw"
                alt=""
                src="/Background@2x.png"
              />
            </section>
            <section className="self-stretch flex-1 rounded-2xl bg-text-inverse flex flex-col items-start justify-between pt-[27px] px-7 pb-7 box-border gap-0 min-w-[327px] text-left text-[9px] text-text-inverse font-[Inter] mq450:gap-0 mq450:pt-5 mq450:pb-5 mq450:box-border">
              <div className="w-[447px] flex flex-col items-start">
                <div className="self-stretch flex items-center [row-gap:20px] shrink-0 mq925:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-center py-[12.7px] px-0 box-border min-w-[266px]">
                    <div className="rounded-[1145.4px] bg-red-red-500 flex items-center justify-center py-[6.6px] px-[7px] gap-[4.1px]">
                      <Image
                        className="h-[11.5px] w-[14.9px] relative"
                        loading="lazy"
                        width={14.9}
                        height={11.5}
                        sizes="100vw"
                        alt=""
                        src="/Group-14.svg"
                      />
                      <div className="relative leading-[10.5px]">
                        Add a new product to my catalog
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex items-center py-[10.2px] px-0">
                    <LowFiLabel
                      lowFiLabelHeight="17.8px"
                      lowFiLabelBorderRadius="31.7px"
                      lowFiLabelJustifyContent="unset"
                      lowFiLabelPadding="1.3px 3.8px"
                      labelTitlesHeight="5.1px"
                      labelTitlesWidth="5.1px"
                      labelTitlesBorderRadius="31.7px"
                      labelTitlesBackgroundColor="#fff"
                      textHeight="8.3px"
                      textWidth="20.3px"
                      textBorderRadius="31.7px"
                      textBackgroundColor="#fff"
                      iconPlaceholderHeight="7.6px"
                      iconPlaceholderWidth="7.6px"
                    />
                  </div>
                </div>
                <Image
                  className="w-[449.3px] max-w-[449.3px] h-[142.4px] shadow-[0px_0.6px_1.3px_rgba(16,_24,_40,_0.05)] rounded-[3.2px] overflow-hidden shrink-0 object-contain"
                  loading="lazy"
                  width={449.3}
                  height={142.4}
                  sizes="100vw"
                  alt=""
                  src="/Tabel@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-start gap-2.5 text-2xl text-text-default font-['Google_Sans']">
                <h3 className="m-0 self-stretch relative text-[length:inherit] tracking-[0.01em] leading-[150%] font-bold font-[inherit] mq450:text-[19px] mq450:leading-[29px]">
                  Sell from day one.
                </h3>
                <div className="self-stretch relative text-base tracking-[0.01em] leading-6 text-text-muted">
                  WooCommerce pre-configured. Manage products, payments,
                  inventory, and shipping, all from your WordPress dashboard.
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SectionSection;
