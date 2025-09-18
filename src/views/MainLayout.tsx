import { LoginView } from "./LoginView";
import { PlanningView } from "./PlanningView";
import { ThemeToggle } from "../components/ThemeToggle";
import { useThemeContext } from "../hooks/useThemeContext";
import cn from "classnames";

export const MainLayout = () => {
  const { isDark } = useThemeContext();
  return (
    <div
      className={cn("relative size-full", {
        dark: isDark,
      })}
    >
      <LoginView />
      <PlanningView />
      <ThemeToggle />
    </div>
  );
};
