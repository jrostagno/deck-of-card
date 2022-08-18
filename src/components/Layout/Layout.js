import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-green-300 to-grenn-600 min-h-screen">
      <NavBar></NavBar>
      <main className="mx-auto  flex-grow">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
