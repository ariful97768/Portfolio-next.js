import ServerCompWrapper from "@/components/client-wrapper";
import Main from "@/components/Main";
import { Toaster } from "sonner";

const Home = () => {
  return (
    <>
      <ServerCompWrapper>
      <Main />
      <Toaster/>
      </ServerCompWrapper>
    </>
  );
};

export default Home;
