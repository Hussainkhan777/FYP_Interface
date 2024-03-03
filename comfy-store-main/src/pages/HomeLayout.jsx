import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar, Loading } from "../components";
const HomeLayout = () => {
  const loading = useNavigation();
  const isLoading = loading.state === "loading";
  return (
    <diV className="bg-cyan-300">
      <Header />
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <section className="align-elements">
          <Outlet />
        </section>
      )}
    </diV>
  );
};
export default HomeLayout;
