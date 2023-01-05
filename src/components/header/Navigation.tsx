import Link from "next/link";
import SvgIcon from "../ui-elements/SvgIcon";
import NavigationLink from "./NavigationLink";
import { ComponentPropsWithoutRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import MobileMenu from "./MobileMenu";

export const navigationRoutes = [
  {
    path: "/our-services",
    name: "our-services",
    display: "Our Services",
  },
  {
    path: "/our-approach",
    name: "our-approach",
    display: "Our Approach",
  },
  {
    path: "/our-project",
    name: "our-project",
    display: "Our References",
  },
  {
    path: "/about-us",
    name: "about-us",
    display: "About Us",
  },
  {
    path: "/careers",
    name: "careers",
    display: "Careers",
  },
] as const;

const Navigation = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<"div">) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={twMerge(
        "fixed top-0 z-50 h-12 w-full lg:h-16",
        " bg-[#1B2129]",
        className
      )}
      {...rest}
    >
      <div className="mx-auto mt-4 flex max-w-screen-desktop flex-row items-center justify-between">
        <Link href={"/"}>
          <div
            className={
              "ml-2 flex h-[18px] justify-center lg:h-[31px] lg:w-[129px]"
            }
          >
            <div className={"relative h-4 w-6 lg:h-7 lg:w-10"}>
              <SvgIcon fill className={"object-cover"} iconName={"ArrowIcon"} />
            </div>
            <SvgIcon
              iconName={"ArrowIcon"}
              className={"ml-1 h-full w-full object-contain lg:ml-2"}
            />
          </div>
        </Link>
        <div className={"z-20 hidden items-center gap-16 lg:flex"}>
          {navigationRoutes.map((route) => (
            <NavigationLink key={route.name} {...route} />
          ))}
        </div>
        <button
          data-id={"mobile-menu-button"}
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          className={"relative mr-4 h-4 w-4 lg:hidden"}
        >
          <SvgIcon data-id={"mobile-menu-button"} fill iconName={"ArrowIcon"} />
        </button>
      </div>
      <MobileMenu menuOpen={menuOpen} onChangingMenuOpen={setMenuOpen} />
    </div>
  );
};

export default Navigation;
