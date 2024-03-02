import { PageProps } from "$fresh/server.ts";
import MemberBox from "../../islands/MemberBox.tsx";
import ChatBox from "../../islands/ChatBox.tsx";

const RoomPage = (props: PageProps) => {
  const { id } = props.params;

  return (
    <div class="flex flex-col flex-1 mx-auto max-w-screen-lg">
      <p>You joined room <span class="font-semibold">{id}</span>!</p>
      <div class="flex-1 flex flex-col sm:flex-row gap-4">
        <MemberBox />
        <ChatBox />
      </div>
    </div>
  );
};

export default RoomPage;  