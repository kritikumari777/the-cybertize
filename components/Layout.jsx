import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className=" flex flex-row justify-start">
      <Sidebar />
      <div className="bg-[#F5F6FA] rounded-tl-[50px] flex-1 p-4 text-black">
          {children}
      </div>
    </div>
  );
};

export default Layout;
