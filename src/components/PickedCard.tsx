import { cardPropsMap, type CardValue } from "../constants";
import cn from "classnames";

type Props = {
  value: CardValue | null;
  isRevealed: boolean;
  setIsRevealed: (value: boolean) => void;
};

export const PickedCard = ({ value, isRevealed, setIsRevealed }: Props) => {
  return (
    <div
      className="w-[120px] h-[180px] relative cursor-pointer perspective-distant"
      onClick={() => setIsRevealed(true)}
    >
      <div
        className={cn(
          "size-full transform-3d transition-all duration-700 relative opacity-0",
          {
            "rotate-y-180": isRevealed,
            "opacity-100": !!value,
          }
        )}
      >
        <div
          className={`absolute inset-0 size-full shadow-lg rounded-xl p-2 flex items-center justify-center backface-hidden rotate-y-180  ${
            value ? cardPropsMap[value].color : ""
          }`}
        >
          <h3 className="text-5xl text-white font-bold select-none">{value}</h3>
        </div>

        <div className="absolute inset-0 size-full shadow-lg rounded-xl p-2 bg-green-500 backface-hidden">
          <div className="relative size-full flex items-center justify-center flex-col">
            <h3 className="text-5xl text-white font-bold select-none">?</h3>
            <h3 className="text-lg text-white font-bold select-none absolute bottom-2">
              Reveal
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
