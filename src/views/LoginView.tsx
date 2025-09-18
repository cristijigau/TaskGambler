import { AppPromo } from "../components/AppPromo";
import { AppLogo } from "../components/AppLogo";
import { LoginForm } from "../components/LoginForm";
import { useState } from "react";
import cn from "classnames";

export const LoginView = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div
      className={cn("size-full flex absolute top-0 left-0", {
        "pointer-events-none": isLoggedIn,
      })}
    >
      <div
        className={cn(
          "w-[70%] flex items-center justify-center bg-[url('/dragon-scales.svg')] transform-translate duration-500 bg-repeat-round",
          {
            "-translate-x-full": isLoggedIn,
          }
        )}
      >
        <AppPromo />
      </div>
      <div
        className={cn(
          "bg-gray-50 flex-1 p-12 transition-translate duration-500",
          {
            "translate-x-full": isLoggedIn,
          }
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
