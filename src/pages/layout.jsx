import { Outlet } from "react-router-dom";
import Footer from "../comps/footer/footer";
import Navbar from "../comps/navbar/navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
