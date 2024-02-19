import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Button } from "../components/Button.tsx";

const Home = () => {
  return (
    <div class="flex flex-nowrap justify-center items-center gap-10">
      <Button class="font-semibold w-20">
        Create
      </Button>
      <Button class="font-semibold w-20">
        Join
      </Button>
    </div>
  );
};

export default Home;
