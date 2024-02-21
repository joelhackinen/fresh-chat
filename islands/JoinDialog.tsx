import { useSignal } from "@preact/signals";
import Button from "../components/Button.tsx";
import Dialog from "../components/Dialog.tsx";
import FloatingLabelInput from "../components/FloatingLabelInput.tsx";
import IconDoorEnter from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/door-enter.tsx";


const JoinDialog = () => {
  const joinDialogSignal = useSignal(false);

  return (
    <>
      <Button
        class="w-20 bg-white hover:bg-gray-100"
        onClick={() => joinDialogSignal.value = true}
      >
        Join
      </Button>
      <Dialog
        show={joinDialogSignal.value}
        icon={<IconDoorEnter />}
        title="Join a room"
        body={
          <div class="flex flex-col gap-4 w-full">
            <FloatingLabelInput>Room name</FloatingLabelInput>
            <FloatingLabelInput>Password</FloatingLabelInput>
          </div>
        }
        footer={
          <div class="bg-gray-50 px-4 py-3 flex flex-col sm:flex-row sm:justify-end sm:px-6 gap-4">
            <Button
              class="bg-[#ee5454] hover:bg-[#f18b8b] text-sm text-white"
              onClick={() => joinDialogSignal.value = false}
            >
              Cancel
            </Button>
            <Button class="bg-[#86efac] hover:bg-[#b4f0ca] text-sm">
              Join
            </Button>
          </div>
        }
      />
    </>
  );
};

export default JoinDialog;