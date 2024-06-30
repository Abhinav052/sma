"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useEffect, useState } from "react";
import PostItem from "./PostItem";

export default function PostList({ postList, updatePostList }) {
  console.log(postList == true);
  return (
    <div>
      {postList != null ? (
        postList?.map((item, index) => {
          return (
            <PostItem key={index} post={item} updatePostList={updatePostList} />
          );
        })
      ) : (
        <div>
          {[1, 1, 1, 1, 1, 1].map((item, index) => {
            return (
              <div
                className="h-[200px] w-full bg-slate-200 animate-pulse my-5 rounded-lg"
                key={index}
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
}
