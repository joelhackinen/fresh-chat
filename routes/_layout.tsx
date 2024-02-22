import { PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";

const Layout = ({ Component, state }: PageProps) => {

  return (
    <div class="flex flex-col min-h-screen">
      <div class="flex flex-1 px-4 py-8 mx-auto bg-[#86efac] w-full">
        <Component />
      </div>
      <Footer class="mt-auto" />
    </div>
  );
};

export default Layout;