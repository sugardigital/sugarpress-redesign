"use client";
import type { NextPage } from "next";
import { useState, type CSSProperties } from "react";
import Lookscout from "./lookscout";
import IconPlaceholderFill from "./icon-placeholder-fill";
import IconPlaceholder from "./icon-placeholder";

export type LowFiPageHeaderType = {
  className?: string;

  /** Variant props */
  breakpoint?: CSSProperties["breakpoint"];
  dropdown?: CSSProperties["dropdown"];
  variant?: CSSProperties["variant"];
};

const LowFiPageHeader: NextPage<LowFiPageHeaderType> = ({
  className = "",
  breakpoint = "Desktop",
  dropdown = "Off",
  variant = 1,
}) => {
  const [iconPlaceholderFillItems] = useState([
    {
      breakpoint: "Desktop" as const,
      dropdown: "Off" as const,
      orientation: false,
      variant: 1,
      leadIcon: false,
      trilingIcon: false,
    },
    {
      breakpoint: "Desktop" as const,
      dropdown: "Off" as const,
      orientation: false,
      variant: 1,
      leadIcon: false,
      trilingIcon: false,
    },
    {
      breakpoint: "Desktop" as const,
      dropdown: "Off" as const,
      orientation: false,
      variant: 1,
      leadIcon: false,
      trilingIcon: false,
    },
    {
      breakpoint: "Desktop" as const,
      dropdown: "Off" as const,
      orientation: false,
      variant: 1,
      leadIcon: false,
      trilingIcon: false,
    },
  ]);
  return (
    <div
      className={`w-[222.6px] rounded-[50px] flex items-center justify-center py-[3.1px] px-[24.7px] box-border z-[3] shrink-0 ${className}`}
    >
      <div className="w-[197.9px] flex items-center justify-between py-0 px-[4.9px] box-border gap-5 shrink-0">
        <div className="flex items-center gap-[9.9px]">
          <Lookscout
            type="Lookscout"
            lookscoutHeight="4.9px"
            lookscoutWidth="19.8px"
            lookscoutIconHeight="71.43%"
            lookscoutIconTop="14.29%"
            lookscoutIconRight="3.54%"
            lookscoutIconBottom="14.29%"
            lookscoutIconLeft="3.03%"
          />
          <div className="flex items-center gap-[4.9px]">
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
        <div className="flex items-center justify-end gap-[3.7px]">
          <IconPlaceholderFill
            breakpoint="Desktop"
            dropdown="Off"
            variant={1}
            leadIcon={false}
            trilingIcon={false}
          />
          <IconPlaceholder
            hierachy="Primary"
            size="Large"
            type="Default"
            firstIcon={false}
            trilingIcon={false}
          />
        </div>
      </div>
    </div>
  );
};

export default LowFiPageHeader;
