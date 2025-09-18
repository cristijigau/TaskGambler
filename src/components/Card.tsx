import { useState } from "react";
import cn from "classnames";
import type { cardValuesList } from "../constants";

type CardValue = (typeof cardValuesList)[number];
type CardProps = {
  color: string;
};
const cardPropsMap: Record<CardValue, CardProps> = {
  "0": { color: "bg-lime-800 hover:bg-lime-900" },
  "1": { color: "bg-green-800 hover:bg-green-900" },
  "2": { color: "bg-emerald-800 hover:bg-emerald-900" },
  "3": { color: "bg-teal-800 hover:bg-teal-900" },
  "5": { color: "bg-cyan-800 hover:bg-cyan-900" },
  "8": { color: "bg-sky-800 hover:bg-sky-900" },
  "13": { color: "bg-blue-800 hover:bg-blue-900" },
  "21": { color: "bg-indigo-800 hover:bg-indigo-900" },
  "34": { color: "bg-teal-800 hover:bg-teal-900" },
  "55": { color: "bg-violet-800 hover:bg-violet-900" },
  "89": { color: "bg-purple-800 hover:bg-purple-900" },
  "?": { color: "bg-fuchsia-800 hover:bg-fuchsia-900" },
  "☕️": { color: "bg-pink-800 hover:bg-pink-900" },
};

type Props = {
  value: CardValue;
};
export const Card = ({ value }: Props) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelect = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div
      onClick={toggleSelect}
      className={cn(
        `shadow-lg w-[80px] h-[120px] rounded-xl p-2 flex items-center justify-center cursor-pointer transition-all duration-150 ${cardPropsMap[value].color}`,
        { "ring-2 ring-blue-500": isSelected }
      )}
    >
      <h3 className="text-5xl/6 text-neutral-50 font-bold select-none">
        {value}
      </h3>
    </div>
  );
};
