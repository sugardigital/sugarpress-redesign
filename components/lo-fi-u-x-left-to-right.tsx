import type { NextPage } from "next";
import { type CSSProperties } from "react";
import LoFiUXBlockHeader from "./lo-fi-u-x-block-header";
import PlaceholderFill from "./placeholder-fill";
import LoFiText from "./lo-fi-text";
import IconPlaceholderFill from "./icon-placeholder-fill";
import PhotoFill from "./photo-fill";
import LoFiUXBlockFooter from "./lo-fi-u-x-block-footer";

export type LoFiUXLeftToRightType = {
  className?: string;
  footer?: boolean;
  header?: boolean;
  lowFiIconPlaceholderSize?: string | undefined;
  lowFiIconPlaceholderSize1?: string | undefined;
  lowFiIconPlaceholderSize2?: string | undefined;

  /** Variant props */
  breakpoint?: string | undefined;
  orientation?: string | boolean | undefined;
  variant?: string | number | undefined;
};

const LoFiUXLeftToRight: NextPage<LoFiUXLeftToRightType> = ({
  className = "",
  breakpoint = "Desktop",
  orientation = false,
  variant = 1,
  footer = false,
  header = true,
  lowFiIconPlaceholderSize,
  lowFiIconPlaceholderSize1,
  lowFiIconPlaceholderSize2,
}) => {
  return (
    <div
      className={`w-[222.6px] bg-text-inverse flex flex-col items-center justify-center py-[9.9px] px-0 box-border gap-[9.9px] ${className}`}
    >
      <LoFiUXBlockHeader
        breakpoint="Desktop"
        supportingText
        uphead={false}
        showLoFiUXBlockHeader
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
      <div className="w-[197.9px] flex items-center py-0 px-[4.9px] box-border gap-[19.2px] shrink-0">
        <div className="flex-1 flex flex-col items-start">
          <div className="self-stretch flex flex-col items-start gap-[4.9px]">
            <div className="self-stretch flex items-start gap-[2.5px]">
              <PlaceholderFill size={lowFiIconPlaceholderSize} />
              <div className="flex-1 flex flex-col items-start gap-[1.9px]">
                <div className="self-stretch flex flex-col items-start gap-[2.5px]">
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
                <IconPlaceholderFill
                  breakpoint="Desktop"
                  orientation={false}
                  variant={5}
                  leadIcon={false}
                  trilingIcon
                />
              </div>
            </div>
            <div className="self-stretch flex items-start gap-[2.5px]">
              <PlaceholderFill size={lowFiIconPlaceholderSize1} />
              <div className="flex-1 flex flex-col items-start gap-[1.9px]">
                <div className="self-stretch flex flex-col items-start gap-[2.5px]">
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
                <IconPlaceholderFill
                  breakpoint="Desktop"
                  orientation={false}
                  variant={5}
                  leadIcon={false}
                  trilingIcon
                />
              </div>
            </div>
            <div className="self-stretch flex items-start gap-[2.5px]">
              <PlaceholderFill size={lowFiIconPlaceholderSize2} />
              <div className="flex-1 flex flex-col items-start gap-[1.9px]">
                <div className="self-stretch flex flex-col items-start gap-[2.5px]">
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
                <IconPlaceholderFill
                  breakpoint="Desktop"
                  orientation={false}
                  variant={5}
                  leadIcon={false}
                  trilingIcon
                />
              </div>
            </div>
          </div>
        </div>
        <PhotoFill
          type="Image"
          photoFillWidth="86.6px"
          photoFillHeight="86.6px"
          photoFillBackgroundColor="#e7e7e7"
          photoFillPosition="unset"
          photoFillTop="unset"
          photoFillRight="unset"
          photoFillBottom="unset"
          photoFillLeft="unset"
          showPhotoFillIcon
          photoFillIconHeight="6.2px"
        />
      </div>
      {!!footer && (
        <LoFiUXBlockFooter
          breakpoint="Desktop"
          orientation={false}
          variant={5}
          secondaryButton
          hierachy="Primary"
          size="Large"
          type="Default"
          firstIcon={false}
          trilingIcon={false}
          iconPlaceholderBorderRadius="1.9px"
          iconPlaceholderBackgroundColor="#437ef7"
          iconPlaceholderPadding="1.2px 4.9px"
        />
      )}
    </div>
  );
};

export default LoFiUXLeftToRight;
