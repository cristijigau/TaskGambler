import { Description, Field, Input, Label } from "@headlessui/react";
import { useState } from "react";
import cn from "classnames";
import { validateUsername } from "../utils/validateUsername";
import { Button } from "./Button";
import { useLocalStorageSlice } from "../hooks/useLocalStorageSlice";
import ConfirmationDialog from "./ConfirmationDialog";

type Props = {
  setIsLoggedIn: (value: boolean) => void;
};

export const LoginForm = ({ setIsLoggedIn }: Props) => {
  const { state: savedUsername, saveState: saveUsername } =
    useLocalStorageSlice<string>("userName");

  const [username, setUsername] = useState("");
  const [validationError, setValidationError] = useState<string>("");
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const handleSaveName = () => {
    const validation = validateUsername(username);

    if (!validation.isValid) {
      setValidationError(validation.error);
      return;
    }

    setValidationError("");

    const trimmedUsername = username.trim();
    saveUsername(trimmedUsername);
    setIsLoggedIn(true);
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (validationError) {
      setValidationError("");
    }

    setUsername(newValue);
  };

  const resetSavedUsername = () => {
    saveUsername("");
    setIsOpenDialog(false);
  };

  return (
    <div className="flex flex-col gap-4 size-full justify-center">
      <h3 className="text-xl font-medium text-neutral-800 dark:text-neutral-100">
        Nice to see you {savedUsername && ` again, ${savedUsername}!`}
      </h3>
      {!savedUsername && (
        <div className="w-full max-w-md">
          <Field>
            <Label className="text-sm/6 text-neutral-800 dark:text-neutral-100">
              Name
            </Label>
            <Description className="text-sm/6 text-neutral-400 font-light dark:text-neutral-100">
              Use your real name so people will recognize you.
            </Description>
            <Input
              value={username}
              onChange={handleUserNameChange}
              // Will use cn throughout the app to breakdown class names into multiple lines for readability
              className={cn(
                "mt-3 block w-full rounded-sm border-none bg-gray-200 px-3 py-3 text-sm/6",
                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2",
                {
                  "data-focus:outline-red-500/50": validationError,
                  "data-focus:outline-sky-500/50": !validationError,
                }
              )}
            />
            {validationError && (
              <p className="mt-2 text-sm text-red-600">{validationError}</p>
            )}
          </Field>
        </div>
      )}
      {savedUsername ? (
        <div className="flex flex-col gap-24">
          <div className="-ml-4">
            <Button
              variant="link"
              onClick={() => {
                setIsOpenDialog(true);
              }}
              size="small"
            >
              Create new user
            </Button>
          </div>
          <Button
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Start
          </Button>
        </div>
      ) : (
        <Button onClick={handleSaveName}>Save</Button>
      )}
      <ConfirmationDialog
        open={isOpenDialog}
        onConfirm={resetSavedUsername}
        onClose={() => {
          setIsOpenDialog(false);
        }}
      />
    </div>
  );
};
