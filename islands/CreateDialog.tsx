import { useSignal } from "@preact/signals";
import Button from "../components/Button.tsx";
import Dialog from "../components/Dialog.tsx";
import FloatingLabelInput from "../components/FloatingLabelInput.tsx";
import IconPencilPlus from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/pencil-plus.tsx"


const CreateDialog = () => {
  const createDialogSignal = useSignal(false);

  return (
    <>
      <Button
        class="w-20 bg-white hover:bg-gray-100"
        onClick={() => createDialogSignal.value = true}
      >
        Create
      </Button>
      <Dialog
        show={createDialogSignal.value}
        icon={<IconPencilPlus />}
        title="Create a room"
        body={
          <form id="create-form" action="/create" method="POST">
            <div class="flex flex-col gap-4 w-full">
              <FloatingLabelInput name="roomName">Room name</FloatingLabelInput>
              <FloatingLabelInput name="password">Password</FloatingLabelInput>
              <FloatingLabelInput name="roomSize" type="number">Room size</FloatingLabelInput>
            </div>
          </form>
        }
        footer={
          <div class="bg-gray-50 px-4 py-3 flex flex-col sm:flex-row sm:justify-end sm:px-6 gap-4">
            <Button
              class="bg-[#ee5454] hover:bg-[#f18b8b] text-sm text-white"
              onClick={() => createDialogSignal.value = false}
            >
              Cancel
            </Button>
            <Button class="bg-[#86efac] hover:bg-[#b4f0ca] text-sm" form="create-form" type="submit">
              Create
            </Button>
          </div>
        }
      />
    </>
  );
};

export default CreateDialog;