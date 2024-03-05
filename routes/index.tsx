import JoinDialog from "../islands/JoinDialog.tsx";
import CreateDialog from "../islands/CreateDialog.tsx";

const Home = () => {
  return (
    <div class="flex flex-col gap-y-10 mx-auto">
      <div class="flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold text-center">
          Deno chat, made with Fresh
        </h1>
      </div>
      <div class="flex flex-nowrap justify-center gap-10">
        <JoinDialog />
        <CreateDialog />
      </div>
    </div>
  );
};

export default Home;
