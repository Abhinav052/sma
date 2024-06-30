"use client";
import { UserDetailsContext } from "@/app/_context/UserDetailContext";
import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@clerk/nextjs";
import { Image, Send, Video } from "lucide-react";
import React, { useContext, useState } from "react";

function WritePost({ getAllPost }) {
  const { user } = useUser();
  const [userInputPost, setUserInputPost] = useState();
  const { userDetails } = useContext(UserDetailsContext);
  const { toast } = useToast();
  const onCreatePost = () => {
    const data = {
      postText: userInputPost,
      createdAt: Date.now().toString(),
      createdBy: userDetails?._id,
    };
    GlobalApi.createPost(data)
      .then((data) => {
        console.log(data);
        if (data) {
          getAllPost();
          toast({
            title: "Awesome! ",
            description: "Your post in successfully published",
            variant: "success",
          });
        }
        setUserInputPost("");
      })
      .catch((err) =>
        toast({
          title: "Something went wrong!",
          variant: "destructive",
        })
      );
  };

  return (
    <div>
      <h2 className="text-[30px] font-medium text-gray-600">
        Hello, {user.fullName}
      </h2>
      <h2 className="text-gray-400">
        What's New with you? Would you like to share something with community{" "}
      </h2>
      <div className="p-3 border rounded-lg top-2 mt-2 bg-slate-100">
        <h2>Create Post</h2>
        <div className="p-4 bg-white rounded mt-2">
          <textarea
            onChange={(event) => setUserInputPost(event.target.value)}
            value={userInputPost}
            placeholder="What's New"
            className="outline-none w-full"
          />
        </div>
        <div className=" mt-2 flex justify-between">
          <div className="flex gap-5 items-center">
            <h2 className="flex gap-2 items-center cursor-pointer hover:bg-slate-100 p-2 rounded-lg">
              <Image className="h-5 w-5" /> Image
            </h2>
            <h2 className="flex gap-2 items-center cursor-pointer hover:bg-slate-100 p-2 rounded-lg">
              <Video className="h-5 w-5" /> Video
            </h2>
          </div>
          <Button
            disabled={!userInputPost?.length}
            onClick={onCreatePost}
            className="bg-blue-500 rounded-xl gap-2 hover:bg-blue-300"
          >
            Publish <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WritePost;
