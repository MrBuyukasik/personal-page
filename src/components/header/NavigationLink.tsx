import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { twMerge } from "tailwind-merge";
import Typography from "../Typography";
import { navigationRoutes } from "./Navigation";

const NavigationLink = ({ name, path }: typeof navigationRoutes[number]) => {
  const router = useRouter();
  const currentPath = router.asPath;
  const [isActive, setIsActive] = useState(currentPath.includes(path));

  const onDivMouseEnter = (_event: MouseEvent<HTMLDivElement>) => {
    setIsActive(true);
  };

  const onDivMouseLeave = (_event: MouseEvent<HTMLDivElement>) => {
    setIsActive(currentPath === path);
  };

  return (
    <div
      className={"flex h-7 items-center justify-center"}
      onMouseEnter={onDivMouseEnter}
      onMouseLeave={onDivMouseLeave}
    >
      <Link href={path}>
        <Typography
          className={twMerge(
            "all relative text-brand-white transition duration-300 ease-in-out",
            isActive && "text-brand-secondary-default"
          )}
        >
          {`navigation`}
          <div
            className={twMerge(
              "duration-600 absolute -left-4 -bottom-0.5 h-[8px] w-[8px] bg-brand-secondary-default transition-all ease-in-out",
              !isActive && "hidden"
            )}
          />
        </Typography>
      </Link>
    </div>
  );
};

export default NavigationLink;
