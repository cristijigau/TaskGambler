import { Button, Description, Field, Input, Label } from "@headlessui/react";

type Props = {
  setIsLoggedIn: (value: boolean) => void;
};

export const LoginForm = ({ setIsLoggedIn }: Props) => {
  const handleSaveName = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="flex flex-col gap-4 size-full justify-center">
      <h3 className="text-xl font-medium text-neutral-800">
        Nice to see you again
      </h3>
      <div className="w-full max-w-md">
        <Field>
          <Label className="text-sm/6 text-neutral-800">Name</Label>
          <Description className="text-sm/6 text-neutral-400 font-light">
            Use your real name so people will recognize you.
          </Description>
          <Input
            className={[
              "mt-3 block w-full rounded-sm border-none bg-gray-200 px-3 py-3 text-sm/6",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-sky-500/50",
            ].join(" ")}
          />
        </Field>
      </div>
      <Button
        onClick={handleSaveName}
        className="flex items-center justify-center rounded-sm bg-gray-700 px-3 py-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 transition-bg duration-150 data-hover:cursor-pointer transition-transform active:scale-[0.98]"
      >
        Save
      </Button>
    </div>
  );
};
