import { Button } from "@/components/ui/button";
import { useDialogStore } from "../../state_management/-DialogStates";

type DialogButtonsProps = {
  variant: string;
};

export default function DialogButtons({ variant }: DialogButtonsProps) {
  const dialogbutton = useDialogStore((state) => state.toggleShow);
  const setVariant = useDialogStore((state) => state.setVariant);

  return (
    <div className="flex justify-center w-full gap-20 py-6 bg-gray-200">
      {variant === "confirmation" ? (
        <>
          <Button
            onClick={dialogbutton}
            className="w-48 text-base rounded-sm lg:text-lg lg:w-52 py-7 bg-main_secondary text-main_primary hover:bg-main_secondary"
          >
            Cancel
          </Button>
          <Button
            onClick={() => setVariant("success")}
            className="w-48 text-base text-white rounded-sm lg:text-lg lg:w-52 py-7 bg-main_primary hover:bg-main_primary"
          >
            Continue
          </Button>
        </>
      ) : variant === "success" ? (
        <>
          <Button
            onClick={() => {
              dialogbutton();
            }}
            className="w-48 text-base text-white rounded-sm lg:text-lg lg:w-52 py-7 bg-main_primary hover:bg-main_primary"
          >
            Okay
          </Button>
        </>
      ) : (
        <Button
          onClick={dialogbutton}
          className="w-48 text-base text-white rounded-sm lg:text-lg lg:w-52 py-7 bg-main_primary hover:bg-main_primary"
        >
          Try Again
        </Button>
      )}
    </div>
  );
}
