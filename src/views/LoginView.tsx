import { AppPromo } from "../components/AppPromo";
import { AppLogo } from "../components/AppLogo";
import { LoginForm } from "../components/LoginForm";
import { useState } from "react";
import cn from "classnames";
import { useThemeContext } from "../hooks/useThemeContext";

export const LoginView = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isDark } = useThemeContext();

  const slideRightAnimationClasses = cn("transition-translate duration-500", {
    "translate-x-full": isLoggedIn,
  });
  const slideLeftAnimationClasses = cn("transform-translate duration-500", {
    "-translate-x-full": isLoggedIn,
  });

  return (
    <div
      className={cn("size-full flex absolute top-0 left-0 z-20", {
        "pointer-events-none": isLoggedIn,
      })}
    >
      <div
        className={cn(
          `w-[70%] flex items-center justify-center transform-translate duration-500 bg-repeat-round ${slideLeftAnimationClasses}`,
          {
            "bg-[url('/dragon-scales.svg')]": !isDark,
            "bg-[url('/dragon-scales-dark.svg')]": isDark,
          }
        )}
      >
        <AppPromo />
      </div>
      <div
        className={cn(
          `bg-gray-50 flex-1 p-12 transition-translate duration-500 dark:bg-slate-800 ${slideRightAnimationClasses}`
        )}
      >
        <div className="flex flex-col size-full">
          <AppLogo />
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        </div>
      </div>
    </div>
  );
};
