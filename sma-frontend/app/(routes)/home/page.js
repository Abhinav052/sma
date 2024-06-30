"use client";
import React, { useState, useEffect } from "react";
import Banner from "./_components/Banner";
import GlobalApi from "@/app/_utils/GlobalApi";
import { UserButton, useUser } from "@clerk/nextjs";
import WritePost from "./_components/WritePost";
import PostList from "./_components/PostList";
function Home() {
  const { user } = useUser();
  const [postList, setPostList] = useState(null);
  const getAllPost = () => {
    GlobalApi.getAllPost().then((resp) => {
      console.log("cakked");
      setPostList(resp.data);
    });
  };

  useEffect(() => {
    getAllPost();
  }, []);
  return (
    <div className="p-5 px-10">
      {!user ? <Banner /> : <WritePost getAllPost={getAllPost} />}
      <PostList postList={postList} updatePostList={getAllPost} />
    </div>
  );
}

export default Home;
