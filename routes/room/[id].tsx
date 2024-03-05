import { PageProps } from "$fresh/server.ts";
import MemberBox from "../../islands/MemberBox.tsx";
import ChatBox from "../../islands/ChatBox.tsx";

const RoomPage = (props: PageProps) => {
  const { id } = props.params;

  return (
    <div class="flex flex-col h-full mx-auto max-w-screen-xl p-4">
      <p>You joined room <span class="font-semibold">{id}</span>!</p>
      <div class="flex flex-col sm:flex-row h-full gap-4">
        <MemberBox />
        <ChatBox />
      </div>
    </div>
  );
};

export default RoomPage;  