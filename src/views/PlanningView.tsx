import { Card } from "../components/Card";
import pokerCore from "../assets/poker-core.svg";
import { cardValuesList } from "../constants";

export const PlanningView = () => {
  return (
    <div className="relative flex flex-col size-full bg-[url('/deck.svg')] bg-no-repeat bg-cover">
      <div className="relative flex-1 z-10">
        <img
          src={pokerCore}
          alt="Poker Deck Core"
          className="size-[50%] absolute left-1/2 top-24 -translate-x-1/2 opacity-50"
        />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(80px,_max-content))] gap-4 justify-center px-12 pt-2 pb-8">
        {cardValuesList.map((value) => (
          <Card key={value} value={value} />
        ))}
      </div>
    </div>
  );
};
