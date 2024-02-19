import { PageProps } from "$fresh/server.ts";

const Layout = ({ Component, state }: PageProps) => {

  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="flex flex-col items-center justify-center max-w-screen-md mx-auto mb-8">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Deno chat, made with Fresh</h1>
      </div>
      <Component />
    </div>
  );
};

export default Layout;