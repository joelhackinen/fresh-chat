import ButtonIsland from "../islands/ButtonIsland.tsx";

const Home = () => {
  return (
    <div class="flex flex-col gap-y-10">
      <div class="flex flex-nowrap justify-center items-center gap-10">
        <ButtonIsland class="font-semibold w-20">
          Join
        </ButtonIsland>
        <ButtonIsland class="font-semibold w-20">
          Create
        </ButtonIsland>
      </div>
    </div>
  );
};

export default Home;
