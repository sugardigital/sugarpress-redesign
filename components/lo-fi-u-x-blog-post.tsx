import type { NextPage } from "next";
import { type CSSProperties } from "react";
import LoFiUXBlockHeader from "./lo-fi-u-x-block-header";
import PhotoFill from "./photo-fill";
import PhotoFill1 from "./photo-fill1";
import LowFiLabel from "./low-fi-label";
import LoFiText from "./lo-fi-text";
import IconPlaceholderFill from "./icon-placeholder-fill";
import LoFiUXBlockFooter from "./lo-fi-u-x-block-footer";

export type LoFiUXBlogPostType = {
  className?: string;
  footer?: boolean;
  header?: boolean;

  /** Variant props */
  breakpoint?: string | undefined;
  variant?: string | number | undefined;
};

const LoFiUXBlogPost: NextPage<LoFiUXBlogPostType> = ({
  className = "",
  breakpoint = "Desktop",
  variant = 1,
  footer = false,
  header = true,
}) => {
  return (
    <div
      className={`w-[254.1px] bg-[#f9fbfd] flex flex-col items-center justify-center py-[11.3px] px-0 box-border gap-[11.3px] shrink-0 ${className}`}
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
      <div className="w-[225.8px] h-[96.7px] flex items-center justify-center py-0 px-[5.6px] box-border gap-[5.6px] shrink-0">
        <div className="flex-1 shadow-[0px_0.2px_0.4px_rgba(16,_24,_40,_0.05)] rounded-[1.8px] bg-[#f9fbfd] border-[#ede5e9] border-solid border-[0.2px] overflow-hidden flex flex-col items-start justify-center">
          <div className="self-stretch h-[43.8px] relative">
            <PhotoFill
              type="Image"
              photoFillWidth="calc(100% + 0.2px)"
              photoFillHeight="calc(100% + 3.6px)"
              photoFillBackgroundColor="#ede5e9"
              photoFillPosition="absolute"
              photoFillTop="-1.6px"
              photoFillRight="-0.2px"
              photoFillBottom="-2px"
              photoFillLeft="0px"
              showPhotoFillIcon
              photoFillIconHeight="7.1px"
            />
            <PhotoFill1
              size="Large"
              photoFillPosition="absolute"
              photoFillRight="5.4px"
              photoFillBottom="-4.5px"
            />
          </div>
          <div className="self-stretch flex flex-col items-start py-[4.2px] px-[5.6px] gap-[4.2px]">
            <div className="self-stretch flex flex-col items-start">
              <div className="self-stretch flex flex-col items-start gap-[3.5px]">
                <div className="self-stretch flex items-center gap-[2.8px]">
                  <LowFiLabel breakpoint="Desktop" variant={2} />
                  <LoFiText
                    center="Off"
                    size={14}
                    showDiv
                    divWidth="unset"
                    divAlignSelf="unset"
                    divFlex="1"
                    showText={false}
                  />
                </div>
                <div className="self-stretch flex flex-col items-start gap-[5.6px]">
                  <LoFiText
                    center="Off"
                    size={22}
                    showDiv
                    divWidth="56.5px"
                    divAlignSelf="unset"
                    divFlex="unset"
                    showText
                  />
                  <LoFiText
                    center="Off"
                    size={16}
                    showDiv
                    divWidth="56.5px"
                    divAlignSelf="unset"
                    divFlex="unset"
                    showText
                  />
                </div>
              </div>
            </div>
            <IconPlaceholderFill
              breakpoint="Desktop"
              variant={2}
              leadIcon={false}
              trilingIcon
            />
          </div>
        </div>
        <div className="flex-1 shadow-[0px_0.2px_0.4px_rgba(16,_24,_40,_0.05)] rounded-[1.8px] bg-[#f9fbfd] border-[#ede5e9] border-solid border-[0.2px] overflow-hidden flex flex-col items-start justify-center">
          <div className="self-stretch h-[43.8px] relative">
            <PhotoFill
              type="Image"
              photoFillWidth="calc(100% + 0.2px)"
              photoFillHeight="calc(100% + 3.6px)"
              photoFillBackgroundColor="#ede5e9"
              photoFillPosition="absolute"
              photoFillTop="-1.6px"
              photoFillRight="-0.2px"
              photoFillBottom="-2px"
              photoFillLeft="0px"
              showPhotoFillIcon
              photoFillIconHeight="7.1px"
            />
            <PhotoFill1
              size="Large"
              photoFillPosition="absolute"
              photoFillRight="5.4px"
              photoFillBottom="-4.5px"
            />
          </div>
          <div className="self-stretch flex flex-col items-start py-[4.2px] px-[5.6px] gap-[4.2px]">
            <div className="self-stretch flex flex-col items-start">
              <div className="self-stretch flex flex-col items-start gap-[3.5px]">
                <div className="self-stretch flex items-center gap-[2.8px]">
                  <LowFiLabel
                    breakpoint="Desktop"
                    variant={2}
                    lowFiLabelHeight="4.9px"
                    lowFiLabelBorderRadius="8.8px"
                    lowFiLabelJustifyContent="center"
                    lowFiLabelPadding="0.4px 1.1px"
                    labelTitlesHeight="1.4px"
                    labelTitlesWidth="1.4px"
                    labelTitlesBorderRadius="8.8px"
                    labelTitlesBackgroundColor="#ede5e9"
                    textHeight="2.3px"
                    textWidth="5.6px"
                    textBorderRadius="8.8px"
                    textBackgroundColor="#ede5e9"
                    iconPlaceholderHeight="2.1px"
                    iconPlaceholderWidth="2.1px"
                  />
                  <LoFiText
                    center="Off"
                    size={14}
                    showDiv
                    divWidth="unset"
                    divAlignSelf="unset"
                    divFlex="1"
                    showText={false}
                  />
                </div>
                <div className="self-stretch flex flex-col items-start gap-[5.6px]">
                  <LoFiText
                    center="Off"
                    size={22}
                    showDiv
                    divWidth="56.5px"
                    divAlignSelf="unset"
                    divFlex="unset"
                    showText
                  />
                  <LoFiText
                    center="Off"
                    size={16}
                    showDiv
                    divWidth="56.5px"
                    divAlignSelf="unset"
                    divFlex="unset"
                    showText
                  />
                </div>
              </div>
            </div>
            <IconPlaceholderFill
              breakpoint="Desktop"
              variant={2}
              leadIcon={false}
              trilingIcon
            />
          </div>
        </div>
        <div className="flex-1 shadow-[0px_0.2px_0.4px_rgba(16,_24,_40,_0.05)] rounded-[1.8px] bg-[#f9fbfd] border-[#ede5e9] border-solid border-[0.2px] overflow-hidden flex flex-col items-start justify-center">
          <div className="self-stretch h-[43.8px] relative">
            <PhotoFill
              type="Image"
              photoFillWidth="calc(100% + 0.2px)"
              photoFillHeight="calc(100% + 3.6px)"
              photoFillBackgroundColor="#ede5e9"
              photoFillPosition="absolute"
              photoFillTop="-1.6px"
              photoFillRight="-0.2px"
              photoFillBottom="-2px"
              photoFillLeft="0px"
              showPhotoFillIcon
              photoFillIconHeight="7.1px"
            />
            <PhotoFill1
              size="Large"
              photoFillPosition="absolute"
              photoFillRight="5.4px"
              photoFillBottom="-4.5px"
            />
          </div>
          <div className="self-stretch flex flex-col items-start py-[4.2px] px-[5.6px] gap-[4.2px]">
            <div className="self-stretch flex flex-col items-start">
              <div className="self-stretch flex flex-col items-start gap-[3.5px]">
                <div className="self-stretch flex items-center gap-[2.8px]">
                  <LowFiLabel
                    breakpoint="Desktop"
                    variant={2}
                    lowFiLabelHeight="4.9px"
                    lowFiLabelBorderRadius="8.8px"
                    lowFiLabelJustifyContent="center"
                    lowFiLabelPadding="0.4px 1.1px"
                    labelTitlesHeight="1.4px"
                    labelTitlesWidth="1.4px"
                    labelTitlesBorderRadius="8.8px"
                    labelTitlesBackgroundColor="#ede5e9"
                    textHeight="2.3px"
                    textWidth="5.6px"
                    textBorderRadius="8.8px"
                    textBackgroundColor="#ede5e9"
                    iconPlaceholderHeight="2.1px"
                    iconPlaceholderWidth="2.1px"
                  />
                  <LoFiText
                    center="Off"
                    size={14}
                    showDiv
                    divWidth="unset"
                    divAlignSelf="unset"
                    divFlex="1"
                    showText={false}
                  />
                </div>
                <div className="self-stretch flex flex-col items-start gap-[5.6px]">
                  <LoFiText
                    center="Off"
                    size={22}
                    showDiv
                    divWidth="56.5px"
                    divAlignSelf="unset"
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
            <IconPlaceholderFill
              breakpoint="Desktop"
              variant={2}
              leadIcon={false}
              trilingIcon
            />
          </div>
        </div>
      </div>
      {!!footer && (
        <LoFiUXBlockFooter
          breakpoint="Desktop"
          variant={2}
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
      )}
    </div>
  );
};

export default LoFiUXBlogPost;
