import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Button } from "./Button";

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function ConfirmationDialog({
  open,
  onConfirm,
  onClose,
}: Props) {
  return (
    <Dialog
      open={open}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={close}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <DialogTitle as="h3" className="text-base/7 font-medium text-white">
              Are you sure?
            </DialogTitle>

            <div className="flex flex-col gap-6">
              <p className="mt-2 text-sm/6 text-white/50">
                Creating a new username will replace your current one and the
                saved name will be lost. Do you want to continue?
              </p>

              <div className="flex gap-4">
                <Button onClick={onConfirm} size="small" variant="primary">
                  Confirm
                </Button>
                <Button onClick={onClose} size="small" variant="secondary">
                  Close
                </Button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
