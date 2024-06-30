"use client";
import React, { useContext, useEffect, useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import GlobalApi from "../_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import { UserDetailsContext } from "../_context/UserDetailContext";

function layout({ children }) {
  const [toggleSideBar, setToggleSideBar] = useState(true);
  const { user } = useUser();
  const userDetails = useContext(UserDetailsContext);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const getUserDetails = async (email) => {
    GlobalApi.getUserByEmail(email).then((resp) => {
      userDetails.setUserDetails(resp.data);
    });
  };

  useEffect(() => {
    user && getUserDetails(user.primaryEmailAddress.emailAddress);
  }, [user]);

  return (
    <div>
      {/* This side bar used when screen size is medium or larger  */}
      <div className=" hidden md:w-64 md:block h-screen fixed">
        <SideNav />
      </div>
      {/* This side bar used when screen size is smaller/mobile  */}
      {toggleSideBar && (
        <div
          className="bg-white absolute md:w-64 md:hidden h-screen 
        animate-in duration-700"
        >
          <SideNav toggleSideBar={() => setToggleSideBar(false)} />
        </div>
      )}

      <div className="md:ml-64">
        {/* Header  */}
        <Header toggleSideBar={() => setToggleSideBar(true)} />
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* user used render page route  */}
          <div className="md:col-span-2">{children}</div>
          {/* Right Most Section of page */}
          <div className="p-5"></div>
        </div>
      </div>
    </div>
  );
}

export default layout;
