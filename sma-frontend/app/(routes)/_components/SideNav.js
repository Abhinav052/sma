"use client";
import MenuList from "@/app/_utils/MenuList";
import { Button } from "@/components/ui/button";

import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
function SideNav({ toggleSideBar }) {
  const { user } = useUser();
  return (
    <div className=" h-full p-5 ">
      <Image
        src="/applogo.png"
        alt="logo"
        width={280}
        height={200}
        className="border-2 border-blue-500"
      />

      <div className="flex flex-col mt-10">
        {MenuList.map((item, index) => (
          // <Link
          //   // href={item.path}
          //   href={"/home"}
          //   key={item.path}
          //   onClick={() => toggleSideBar(false)}
          // >
          <h2
            variant="ghost"
            className="group p-4 flex gap-5 items-center
                justify-start rounded-md cursor-pointer
                 hover:bg-slate-100 text-slate-500"
          >
            <item.icon className="group-hover:animate-bounce" />
            {item.name}
          </h2>
          // </Link>
        ))}
      </div>
      {/* <div className="flex flex-col mt-10 gap-2">
        {MenuList.map((item) => (
          <Link href={item.path}>
            <h2 className="group flex flex-row p-4 gap-5 items-center justify-start text-slate-500 rounded-md cursor-pointer hover:bg-slate-100">
              <item.icon className="group-hover:animate-bounce" />
              {item.name}
            </h2>
          </Link>
        ))}
      </div> */}
      <div className="absolute bottom-10 flex gap-3 items-center">
        {!user ? (
          <h2>
            <Link href={"/sign-in"}>
              <Button
                variant="ghost"
                className="flex gap-2 items-center cursor-pointer"
              >
                <LogIn />
                Sign In
              </Button>
            </Link>
          </h2>
        ) : (
          <div className="flex gap-4 items-center">
            <UserButton /> <div>Profile</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideNav;
