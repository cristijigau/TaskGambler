import cardsHandsIcon from "../assets/cards-hands.svg";

export const AppPromo = () => (
  <div className="flex flex-col gap-16 max-w-[680px]">
    <div className="flex flex-col gap-4">
      <h1 className="text-7xl font-medium text-neutral-50">Hello</h1>
      <div className="flex gap-4 items-center relative">
        <h1 className="text-7xl font-medium text-neutral-50">TaskGambler!</h1>
        <img
          src={cardsHandsIcon}
          alt="Poker Cards Hands"
          className="size-32 absolute right-28 top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
    <p className="text-xl text-neutral-50">
      Plan your sprints with a winning hand. Task Gambler turns estimation into
      a collaborative game, giving every voice a card and every team a clear
      path forward.
    </p>
  </div>
);
