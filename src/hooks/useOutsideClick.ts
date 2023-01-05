import { RefObject, useEffect } from "react";

interface UseOutsideClickProps {
  ref: RefObject<HTMLDivElement>;
  onOutsideClick: () => void;
}
export function useOutsideClickListener({
  ref,
  onOutsideClick,
}: UseOutsideClickProps) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        (event.target as HTMLElement).getAttribute("data-id") ===
        "mobile-menu-button"
      ) {
        return;
      }

      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        onOutsideClick();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick, ref]);
}
