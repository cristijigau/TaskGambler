import { Button as HeadlessButton } from "@headlessui/react";
import cn from "classnames";
import type { PropsWithChildren } from "react";

// Normally I would use tailwind variants (https://www.tailwind-variants.org/)
// I'm avoiding it for now to keep the dependencies low
const primaryButtonClasses = cn(
  "font-semibold bg-gray-700 text-white data-focus:outline-white",
  "data-hover:bg-gray-600 data-open:bg-gray-700",
  "shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline",
  "transition-bg duration-150 data-hover:cursor-pointer"
);
const secondaryButtonClasses = cn(
  "data-hover:cursor-pointer font-semibold text-white"
);
const linkButtonClasses = cn(
  "text-blue-500 cursor-pointer data-hover:text-blue-400 transition-[color] duration-150"
);
const defaultSizeClasses = "px-6 py-3 text-sm/6 rounded-sm";
const smallSizeClasses = "text-sm/5 px-4 py-2 rounded-sm";

type Props = {
  size?: "small" | "default";
  variant?: "primary" | "link" | "secondary";
  onClick: () => void;
};

export const Button = ({
  children,
  size = "default",
  variant = "primary",
  onClick,
}: PropsWithChildren<Props>) => (
  <HeadlessButton
    onClick={onClick}
    className={cn(
      "flex items-center justify-center transition-transform active:scale-[0.98]",
      {
        [primaryButtonClasses]: variant === "primary",
        [linkButtonClasses]: variant === "link",
        [defaultSizeClasses]: size === "default",
        [smallSizeClasses]: size === "small",
        [secondaryButtonClasses]: variant === "secondary",
      }
    )}
  >
    {children}
  </HeadlessButton>
);
