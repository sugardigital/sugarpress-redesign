import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import LoFiUXBlockHeader from "./lo-fi-u-x-block-header";
import PhotoFill1 from "./photo-fill1";
import LoFiText from "./lo-fi-text";
import LoFiUXBlockFooter from "./lo-fi-u-x-block-footer";

export type LoFiUXFeaturesType = {
  className?: string;
  footer?: boolean;
  header?: boolean;

  /** Variant props */
  breakpoint?: string | undefined;
  variant?: string | number | undefined;
};

const LoFiUXFeatures: NextPage<LoFiUXFeaturesType> = ({
  className = "",
  breakpoint = "Desktop",
  variant = 1,
  footer = true,
  header = true,
}) => {
  return (
    <div
      className={`w-[254.1px] bg-text-inverse flex flex-col items-center justify-center py-[11.3px] px-0 box-border gap-[11.3px] ${className}`}
    >
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
      <div className="w-[225.8px] flex flex-col items-start py-0 px-[5.6px] box-border gap-[5.6px]">
        <div className="self-stretch flex items-start gap-[5.6px] shrink-0">
          <div className="flex-1 shadow-[0px_0.2px_0.4px_rgba(16,_24,_40,_0.05)] rounded-[0.9px] bg-text-inverse border-[#ede5e9] border-solid border-[0.2px] flex flex-col items-start py-[4.2px] px-[5.6px] gap-[4.2px]">
            <div className="self-stretch flex items-center justify-between gap-5">
              <PhotoFill1 size="Large" />
              <div className="h-[8.1px] rounded-[2.1px] bg-[#ede5e9] flex items-center justify-center py-[1.4px] px-[5.6px] box-border gap-[1.1px]">
                <Image
                  className="h-[3.5px] w-[3.5px] relative hidden shrink-0"
                  width={3.5}
                  height={3.5}
                  sizes="100vw"
                  alt=""
                  src="/placeholder-Fill.svg"
                />
                <div className="h-[2.8px] w-[8.6px] relative rounded-[8.8px] bg-[#ede5e9] shrink-0" />
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
            <div className="self-stretch flex flex-col items-start gap-[1.4px]">
              <LoFiText
                center="Off"
                size={22}
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
          <div className="flex-1 shadow-[0px_0.2px_0.4px_rgba(16,_24,_40,_0.05)] rounded-[0.9px] bg-text-inverse border-[#ede5e9] border-solid border-[0.2px] flex flex-col items-start py-[4.2px] px-[5.6px] gap-[4.2px]">
            <div className="self-stretch flex items-center justify-between gap-5">
              <PhotoFill1
                size="Large"
                photoFillPosition="unset"
                photoFillRight="unset"
                photoFillBottom="unset"
              />
              <div className="h-[8.1px] rounded-[2.1px] bg-[#ede5e9] flex items-center justify-center py-[1.4px] px-[5.6px] box-border gap-[1.1px]">
                <Image
                  className="h-[3.5px] w-[3.5px] relative hidden shrink-0"
                  width={3.5}
                  height={3.5}
                  sizes="100vw"
                  alt=""
                  src="/placeholder-Fill.svg"
                />
                <div className="h-[2.8px] w-[8.6px] relative rounded-[8.8px] bg-[#ede5e9] shrink-0" />
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
            <div className="self-stretch flex flex-col items-start gap-[1.4px]">
              <LoFiText
                center="Off"
                size={22}
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
          <div className="flex-1 shadow-[0px_0.2px_0.4px_rgba(16,_24,_40,_0.05)] rounded-[0.9px] bg-text-inverse border-[#ede5e9] border-solid border-[0.2px] flex flex-col items-start py-[4.2px] px-[5.6px] gap-[4.2px]">
            <div className="self-stretch flex items-center justify-between gap-5">
              <PhotoFill1
                size="Large"
                photoFillPosition="unset"
                photoFillRight="unset"
                photoFillBottom="unset"
              />
              <div className="h-[8.1px] rounded-[2.1px] bg-[#ede5e9] flex items-center justify-center py-[1.4px] px-[5.6px] box-border gap-[1.1px]">
                <Image
                  className="h-[3.5px] w-[3.5px] relative hidden shrink-0"
                  width={3.5}
                  height={3.5}
                  sizes="100vw"
                  alt=""
                  src="/placeholder-Fill.svg"
                />
                <div className="h-[2.8px] w-[8.6px] relative rounded-[8.8px] bg-[#ede5e9] shrink-0" />
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
            <div className="self-stretch flex flex-col items-start gap-[1.4px]">
              <LoFiText
                center="Off"
                size={22}
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
        </div>
        <div className="w-[214.6px] hidden items-start gap-[5.6px] shrink-0">
          <div className="flex-1 shadow-[0px_0.2px_0.4px_rgba(16,_24,_40,_0.05)] rounded-[0.9px] bg-text-inverse border-[#ede5e9] border-solid border-[0.2px] flex flex-col items-start py-[4.2px] px-[5.6px] gap-[4.2px]">
            <div className="self-stretch flex items-center justify-between gap-5">
              <PhotoFill1
                size="Large"
                photoFillPosition="unset"
                photoFillRight="unset"
                photoFillBottom="unset"
              />
              <div className="h-[8.1px] rounded-[2.1px] bg-[#ede5e9] flex items-center justify-center py-[1.4px] px-[5.6px] box-border gap-[1.1px]">
                <Image
                  className="h-[3.5px] w-[3.5px] relative hidden shrink-0"
                  width={3.5}
                  height={3.5}
                  sizes="100vw"
                  alt=""
                  src="/placeholder-Fill.svg"
                />
                <div className="h-[2.8px] w-[8.6px] relative rounded-[8.8px] bg-[#ede5e9] shrink-0" />
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
            <div className="self-stretch flex flex-col items-start gap-[1.4px]">
              <LoFiText
                center="Off"
                size={22}
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
          <div className="flex-1 shadow-[0px_0.2px_0.4px_rgba(16,_24,_40,_0.05)] rounded-[0.9px] bg-text-inverse border-[#ede5e9] border-solid border-[0.2px] flex flex-col items-start py-[4.2px] px-[5.6px] gap-[4.2px]">
            <div className="self-stretch flex items-center justify-between gap-5">
              <PhotoFill1
                size="Large"
                photoFillPosition="unset"
                photoFillRight="unset"
                photoFillBottom="unset"
              />
              <div className="h-[8.1px] rounded-[2.1px] bg-[#ede5e9] flex items-center justify-center py-[1.4px] px-[5.6px] box-border gap-[1.1px]">
                <Image
                  className="h-[3.5px] w-[3.5px] relative hidden shrink-0"
                  width={3.5}
                  height={3.5}
                  sizes="100vw"
                  alt=""
                  src="/placeholder-Fill.svg"
                />
                <div className="h-[2.8px] w-[8.6px] relative rounded-[8.8px] bg-[#ede5e9] shrink-0" />
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
            <div className="self-stretch flex flex-col items-start gap-[1.4px]">
              <LoFiText
                center="Off"
                size={22}
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
          <div className="flex-1 shadow-[0px_0.2px_0.4px_rgba(16,_24,_40,_0.05)] rounded-[0.9px] bg-text-inverse border-[#ede5e9] border-solid border-[0.2px] flex flex-col items-start py-[4.2px] px-[5.6px] gap-[4.2px]">
            <div className="self-stretch flex items-center justify-between gap-5">
              <PhotoFill1
                size="Large"
                photoFillPosition="unset"
                photoFillRight="unset"
                photoFillBottom="unset"
              />
              <div className="h-[8.1px] rounded-[2.1px] bg-[#ede5e9] flex items-center justify-center py-[1.4px] px-[5.6px] box-border gap-[1.1px]">
                <Image
                  className="h-[3.5px] w-[3.5px] relative hidden shrink-0"
                  width={3.5}
                  height={3.5}
                  sizes="100vw"
                  alt=""
                  src="/placeholder-Fill.svg"
                />
                <div className="h-[2.8px] w-[8.6px] relative rounded-[8.8px] bg-[#ede5e9] shrink-0" />
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
            <div className="self-stretch bg-text-inverse flex flex-col items-start gap-[1.4px]">
              <LoFiText
                center="Off"
                size={22}
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
        </div>
      </div>
      {!!footer && (
        <LoFiUXBlockFooter
          breakpoint="Desktop"
          variant={2}
          secondaryButton
          loFiUXBlockFooterWidth="unset"
          loFiUXBlockFooterAlignSelf="stretch"
          placeholderFillBorderRadius="10px"
          placeholderFillBackgroundColor="#ede5e9"
          placeholderFillPadding="1.4px 5.6px"
          textBackgroundColor="#fff"
          hierachy="Primary"
          size="Large"
          type="Default"
          firstIcon={false}
          trilingIcon={false}
          iconPlaceholderBorderRadius="10px"
          iconPlaceholderBackgroundColor="#952a58"
          iconPlaceholderPadding="1.4px 5.6px"
        />
      )}
    </div>
  );
};

export default LoFiUXFeatures;
