import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="text-2xl text-teal-700 font-mono font-bold">this is home section</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;