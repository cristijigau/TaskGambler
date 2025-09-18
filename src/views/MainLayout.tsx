import { LoginView } from "./LoginView";
import { PlanningView } from "./PlanningView";

export const MainLayout = () => {
  return (
    <div className="relative size-full">
      <LoginView />
      <PlanningView />
    </div>
  );
};
