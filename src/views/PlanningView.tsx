import { Card } from "../components/Card";
import pokerCore from "../assets/poker-core.svg";
import { cardValuesList, type CardValue } from "../constants";
import { useState } from "react";
import { PickedCard } from "../components/PickedCard";
import { Button } from "../components/Button";
import cn from "classnames";
import { useThemeContext } from "../hooks/useThemeContext";

export const PlanningView = () => {
  const [pickedCard, setPickedCard] = useState<CardValue | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const { isDark } = useThemeContext();

  const handlePickCard = (value: CardValue) => {
    if (isRevealed) {
      return;
    }

    setPickedCard(value);
  };

  const resetPickedCard = () => {
    setPickedCard(null);
    setIsRevealed(false);
  };

  return (
    <div
      className={cn("relative flex flex-col size-full bg-no-repeat bg-cover", {
        "bg-[url('/deck.svg')]": !isDark,
        "bg-[url('/deck-dark.svg')]": isDark,
      })}
    >
      <div className="relative flex-1 z-10">
        <img
          src={pokerCore}
          alt="Poker Deck Core"
          className="size-[50%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <PickedCard
            value={pickedCard}
            isRevealed={isRevealed}
            setIsRevealed={setIsRevealed}
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-xl font-medium text-neutral-50">
          {!pickedCard && "Please pick your card 👇🏼"}
          {!!pickedCard && !isRevealed && "Click on the card to reveal it"}
          {!!pickedCard && isRevealed && `You picked: ${pickedCard}`}
        </h3>

        <div
          className={cn("opacity-0 transition-opacity duration-150", {
            "opacity-100": !!pickedCard && isRevealed,
          })}
        >
          <Button onClick={resetPickedCard} variant="secondary">
            Start new voting
          </Button>
        </div>

        <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(80px,_max-content))] gap-4 justify-center px-12 pt-2 pb-8">
          {cardValuesList.map((value) => (
            <Card
              key={value}
              value={value}
              isSelected={pickedCard === value}
              handlePickCard={handlePickCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
