import { Outlet } from "react-router-dom";
import Header from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
