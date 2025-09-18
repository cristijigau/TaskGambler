import cn from "classnames";
import { cardPropsMap, type CardValue } from "../constants";

type Props = {
  value: CardValue;
  isSelected: boolean;
  handlePickCard: (value: CardValue) => void;
};
export const Card = ({ value, isSelected, handlePickCard }: Props) => {
  return (
    <div
      onClick={() => {
        handlePickCard(value);
      }}
      className={cn(
        `shadow-lg w-[80px] h-[120px] rounded-xl p-2 flex items-center justify-center cursor-pointer transition-all duration-150 hover:-translate-y-2 ${cardPropsMap[value].color}`,
        { "ring-2 ring-blue-500": isSelected }
      )}
    >
      <h3 className="text-5xl/6 text-neutral-50 font-bold select-none">
        {value}
      </h3>
    </div>
  );
};
