import { Outlet } from "react-router-dom";
import Footer from "../comps/footer/footer";
import Navbar from "../comps/navbar/navbar";
import ScrollToTop from "../utils/ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop>
        <Navbar />
        <Outlet />
        <Footer />
      </ScrollToTop>
    </>
  );
};

export default Layout;
