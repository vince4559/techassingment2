import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const SharedLayout = () => {
  return (
    <>
    <Navigation />
      <Outlet />
     <Footer /> 
    </>  
  )
 
};

export default SharedLayout;
