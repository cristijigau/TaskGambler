import cardsIcon from "../assets/cards.svg";

export const AppLogo = () => (
  <div className="flex gap-4 items-center">
    <div className="bg-linear-65 from-purple-500 to-pink-500 rounded-full size-10 flex relative">
      <img
        src={cardsIcon}
        alt="Planning Poker Cards"
        className="size-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
    <h4 className="text-lg font-medium text-neutral-800 dark:text-neutral-100">
      TaskGambler
    </h4>
  </div>
);
