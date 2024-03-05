import { useSignal } from "@preact/signals";
import { JSX } from "preact";
import IconSend from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/send.tsx"
import TextArea from "../components/TextArea.tsx";

type Message = {
  sender: string;
  timestamp: string;
  message: string;
}

const messages: Array<Message> = [
  {
    sender: "John Doe",
    timestamp: "10:15 AM",
    message: "Hello! How are you doing today?"
  },
  {
    sender: "You",
    timestamp: "10:16 AM",
    message: "I'm doing great! Thanks for asking."
  },
  {
    sender: "John Doe",
    timestamp: "10:17 AM",
    message: "That's good to hear! Let's catch up soon."
  },
  {
    sender: "John Doe",
    timestamp: "10:15 AM",
    message: "Hello! How are you doing today?"
  },
  {
    sender: "You",
    timestamp: "10:16 AM",
    message: "I'm doing great!"
  },
  {
    sender: "John Doe",
    timestamp: "10:15 AM",
    message: "Hello! How are you doing today?"
  },
  {
    sender: "You",
    timestamp: "10:16 AM",
    message: "I'm doing great! Thanks for asking."
  },
  {
    sender: "John Doe",
    timestamp: "10:17 AM",
    message: "That's good to hear! Let's catch up soon."
  },
  
];

const ChatBox = () => {
  const msg = useSignal("");
  const msgs = useSignal(messages);

  const sendMessage = (event: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    event.preventDefault();
    msgs.value = [...msgs.value, { sender: "You", message: msg.value, timestamp: "12:04 AM" }];
    msg.value = "";
  };

  return (
    <div class="flex flex-col flex-1 border border-black rounded-lg bg-white">
      <div class="flex flex-col flex-1 justify-end rounded-lg overflow-y-auto p-4 space-y-4">
        {msgs.value.map((m)  => (
          <div class="flex flex-col gap-1">
            <div class="flex gap-x-2 items-center">
              <div class="text-sm font-medium">{m.sender}</div>
              <div class="text-xs text-gray-500">{m.timestamp}</div>
            </div>
            <div class="w-fit px-4 py-2 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl bg-[#FFE600]">
              {m.message}
            </div>
          </div>
        ))}
      </div>
      <form class="flex justify-between items-center my-2 mx-4 gap-x-4" onSubmit={sendMessage} >
        <TextArea class="flex-1" signal={msg} />
        <button
          class="rounded-lg bg-[#FFE600] p-1 active:bg-yellow-200 hover:shadow-lg"
          type="submit"
        >
          <IconSend size={25} />
        </button>
      </form>
    </div>
  );
};

export default ChatBox;

/*
<div class="flex flex-col gap-1">
          <div class="flex gap-x-2 items-center">
            <div class="text-sm font-medium">You</div>
            <div class="text-xs text-gray-500">10:16 AM</div>
          </div>
          <div class="w-fit px-4 py-2 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl bg-[#86efac]">
            I'm doing great! Thanks for asking.
          </div>
        </div>
        {msgs.value.map((m)  => (
          <div class="flex flex-col gap-1">
            <div class="flex gap-x-2 items-center">
              <div class="text-sm font-medium">{m.sender}</div>
              <div class="text-xs text-gray-500">{m.timestamp}</div>
            </div>
            <div class="w-fit px-4 py-2 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl bg-[#FFE600]">
              {m.message}
            </div>
          </div>
        ))}


*/