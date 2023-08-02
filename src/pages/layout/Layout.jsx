import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import TopDirectMessage from "../../components/topDirectMessage/TopDirectMessage";

function Layout() {
  return (
    <div>
      <TopDirectMessage />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
