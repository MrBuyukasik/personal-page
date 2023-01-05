import Image, { ImageProps } from "next/image";
import { iconMap } from "./icons";

interface SvgIconProps extends Omit<ImageProps, "src" | "alt"> {
  iconName?: keyof typeof iconMap;
  url?: string;
  alt?: string;
}

const SvgIcon = ({ iconName, url, alt, ...rest }: SvgIconProps) => {
  const imageSource = (iconName && iconMap[iconName].src) || url;
  const imageAlt = (iconName && iconMap[iconName].alt) || alt;

  return <Image src={imageSource} alt={imageAlt || ""} {...rest} />;
};

export default SvgIcon;
