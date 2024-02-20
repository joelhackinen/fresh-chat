import { useSignal } from "@preact/signals";
import Button from "../components/Button.tsx";
import Dialog from "../components/Dialog.tsx";
import FloatingLabelInput from "../components/FloatingLabelInput.tsx";
import IconDoorEnter from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/door-enter.tsx";
import IconPencilPlus from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/pencil-plus.tsx"


const Entry = () => {
  const joinDialog = useSignal(false);
  const createDialog = useSignal(false);

  return (
    <div class="flex flex-nowrap justify-center items-center gap-10">
      <Button
        class="font-semibold w-20 bg-white hover:bg-gray-100"
        onClick={() => joinDialog.value = true}
      >
        Join
      </Button>
      <Button
        class="font-semibold w-20 bg-white hover:bg-gray-100"
        onClick={() => createDialog.value = true}
      >
        Create
      </Button>
      <Dialog
        show={createDialog.value}
        icon={<IconPencilPlus />}
        title="Create a room"
        body={
          <div class="flex flex-col gap-4 w-full">
            <FloatingLabelInput label="Room name" />
            <FloatingLabelInput label="Password" />
            <FloatingLabelInput type="number" label="Room size" />
          </div>
        }
        footer={
          <div class="bg-gray-50 px-4 py-3 flex flex-col sm:flex-row sm:justify-end sm:px-6 gap-4">
            <Button
              class="bg-[#ee5454] hover:bg-[#f18b8b] text-sm font-semibold text-white"
              onClick={() => createDialog.value = false}
            >
              Cancel
            </Button>
            <Button class="bg-[#86efac] hover:bg-[#b4f0ca] text-sm font-semibold">
              Create
            </Button>
          </div>
        }
      />
      <Dialog
        show={joinDialog.value}
        icon={<IconDoorEnter />}
        title="Join a room"
        body={
          <div class="flex flex-col gap-4 w-full">
            <FloatingLabelInput label="Room name" />
            <FloatingLabelInput label="Password" />
          </div>
        }
        footer={
          <div class="bg-gray-50 px-4 py-3 flex flex-col sm:flex-row sm:justify-end sm:px-6 gap-4">
            <Button
              class="bg-[#ee5454] hover:bg-[#f18b8b] text-sm font-semibold text-white"
              onClick={() => joinDialog.value = false}
            >
              Cancel
            </Button>
            <Button class="bg-[#86efac] hover:bg-[#b4f0ca] text-sm font-semibold">
              Join
            </Button>
          </div>
        }
      />
    </div>
  );
};

export default Entry;