import { PageProps } from "$fresh/server.ts";
import Input from "../../components/Input.tsx";

const RoomPage = (props: PageProps) => {
  const { id } = props.params;
  return (
    <div class="flex flex-col flex-1 mx-auto max-w-screen-lg">
      <p>You joined room <span class="font-semibold underline-offset-1">{id}</span>!</p>
      <div class="flex-1 flex flex-col sm:flex-row gap-4">
        <div class="flex flex-col border border-black rounded-lg sm:w-[200px] h-fit">
          <span class="font-semibold">Members</span>
          <span class="font-semibold">Members</span>
          <span class="font-semibold">Members</span>
          <span class="font-semibold">Members</span>
        </div>
        <div class="flex flex-col border border-black rounded-lg flex-1">
          <div class="border border-black rounded-lg flex-1 m-2">
            <span class="font-semibold">Chat area</span>
          </div>
          <div class="mt-auto m-2">
            <Input class="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;  