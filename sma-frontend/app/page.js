"use client";
import Image from "next/image";
import { useEffect } from "react";
import GlobalApi from "./_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { user } = useUser();

  const createUserProfile = () => {
    if (!localStorage.getItem("isLogin")) {
      const data = {
        name: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
        image: user.imageUrl,
      };
      GlobalApi.createUser(data).then((res) => {
        console.log(res.data);
        localStorage.setItem("isLogin", true);
        redirect("/home");
      });
    }
  };

  useEffect(() => {
    if (user) {
      createUserProfile();
    }
    if (!user) {
      redirect("/home");
    }
  }, [user]);

  return <div></div>;
}
