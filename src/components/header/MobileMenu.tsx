import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Typography from "../Typography";
import { navigationRoutes } from "./Navigation";
import { useEffect, useRef } from "react";
import { useOutsideClickListener } from "../../hooks/useOutsideClick";

interface MobileMenuProps {
  menuOpen: boolean;
  onChangingMenuOpen: (_menuOpen: boolean) => void;
}

const MobileMenu = ({ menuOpen, onChangingMenuOpen }: MobileMenuProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  useOutsideClickListener({
    ref: divRef,
    onOutsideClick: () => onChangingMenuOpen(false),
  });

  return (
    <div className={twMerge("z-10 mt-[12px] w-full", menuOpen && "h-screen")}>
      <div
        className={twMerge(
          "flex h-0 flex-col items-center justify-evenly bg-brand-white shadow-md duration-300 ease-in-out",
          menuOpen && "h-[200px]"
        )}
        ref={divRef}
      >
        {navigationRoutes.map((route) => (
          <div
            className={twMerge(
              "flex hidden w-full flex-col items-center justify-center text-center transition-all duration-500",
              menuOpen && "block"
            )}
            key={route.name}
          >
            <Link onClick={() => onChangingMenuOpen(false)} href={route.path}>
              <Typography className={"mx-auto text-brand-gray-default"}>
                Test
              </Typography>
            </Link>
            <div
              className={
                "mx-auto h-[1px] w-[60%] bg-gradient-to-r from-brand-white via-brand-gray-light to-brand-white"
              }
            />
          </div>
        ))}
      </div>
      <div
        className={twMerge(
          "h-full bg-brand-black opacity-0 transition-all duration-500 ease-in-out",
          menuOpen && "opacity-90"
        )}
      />
    </div>
  );
};

export default MobileMenu;
