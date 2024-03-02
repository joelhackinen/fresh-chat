import IconSend from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/send.tsx"
import TextArea from "../components/TextArea.tsx";

const ChatBox = () => {
  return (
    <div class="flex flex-col border border-black rounded-lg flex-1">
      <div class="border border-black rounded-lg flex-1 m-2">
        <span class="font-semibold">Chat area</span>
      </div>
      <div class="flex justify-between items-center my-2 mx-4 gap-x-4">
        <TextArea class="rounded-xl flex-1" />
        <button
          class="rounded-lg bg-yellow-100 p-1 active:bg-yellow-200 hover:shadow-lg"
          onClick={() => console.log("message")}
        >
          <IconSend size={30}/>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;