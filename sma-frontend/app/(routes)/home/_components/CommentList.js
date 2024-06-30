import { UserDetailsContext } from "@/app/_context/UserDetailContext";
import { MoreVertical, Trash } from "lucide-react";
import Image from "next/image";
import { useContext, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import GlobalApi from "@/app/_utils/GlobalApi";
import { toast } from "@/components/ui/use-toast";

export default function CommentList({ commentList, updatePostList }) {
  const { userDetails } = useContext(UserDetailsContext);
  const [commentData, setCommentData] = useState(commentList);
  const deleteComment = (comment) => {
    setCommentData(
      commentData?.filter((item, index) => item._id != comment._id)
    );
    GlobalApi.deleteComment(comment._id).then((resp) => {
      console.log(resp);
      if (resp) {
        toast({
          title: "Comment Deleted Successfully",
        });

        updatePostList();
      }
    });
  };

  return (
    <div>
      {commentData.map((item, index) => {
        return (
          <div
            key={index}
            className="flex justify-between w-full p-3 rounded-lg m-2 border items-center"
          >
            <div className="flex items-center gap-3 w-full">
              <Image
                src={item?.createdBy?.image}
                alt="user-image"
                width={30}
                height={30}
              />
              <h2 className="bg-slate-100 p-2 rounded-lg">
                {item.commentText}
              </h2>
            </div>

            {item?.createdBy?._id == userDetails?._id && (
              <Popover>
                <PopoverTrigger>
                  <MoreVertical className="h-5 w-5" />
                </PopoverTrigger>
                <PopoverContent>
                  <Button
                    onClick={() => deleteComment(item)}
                    className="w-full flex gap-2"
                    variant="outline"
                  >
                    <Trash /> Delete
                  </Button>
                </PopoverContent>
              </Popover>
            )}
          </div>
        );
      })}
    </div>
  );
}
