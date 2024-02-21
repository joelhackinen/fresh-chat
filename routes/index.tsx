import JoinDialog from "../islands/JoinDialog.tsx";
import CreateDialog from "../islands/CreateDialog.tsx";

const Home = () => {
  return (
    <div class="flex flex-col gap-y-10">
      <div class="flex flex-nowrap justify-center gap-10">
        <JoinDialog />
        <CreateDialog />
      </div>
    </div>
  );
};

export default Home;
