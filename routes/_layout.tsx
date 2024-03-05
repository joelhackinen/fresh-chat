import { PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";

const Layout = ({ Component, state }: PageProps) => {

  return (
    <div class="flex flex-col h-dvh">
      <div class="h-full bg-[#86efac]">
        <Component />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;