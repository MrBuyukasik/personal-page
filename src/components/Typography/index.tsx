import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { FontSize, FontWeight } from "../../../styles/theme/font";
import * as S from "./index.styles";
import { titilliumWeb } from "./titillium-font";

export interface TypographyProps extends ComponentPropsWithoutRef<"p"> {
  size?: FontSize;
  variant?: FontWeight;
  customSize?: number;
  color?: string;
  align?: "left" | "center" | "right";
  inline?: boolean;
}

const Typography = ({
  size,
  variant,
  color,
  customSize,
  align,
  className,
  inline,
  ...restProps
}: TypographyProps) => {
  return (
    <S.Typography
      className={twMerge(className)}
      inline={inline}
      align={align}
      size={size}
      variant={variant}
      color={color || "inherit"}
      customSize={customSize}
      {...restProps}
    />
  );
};

export default Typography;
