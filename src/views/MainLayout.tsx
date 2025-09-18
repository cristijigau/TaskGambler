import { LoginView } from "./LoginView";
import { PlanningView } from "./PlanningView";
import { ThemeToggle } from "../components/ThemeToggle";
import { ThemeProvider } from "../contexts/ThemeProvider";

export const MainLayout = () => {
  return (
    <ThemeProvider>
      <div className="relative size-full dark">
        <LoginView />
        <PlanningView />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};
