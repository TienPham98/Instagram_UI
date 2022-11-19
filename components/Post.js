import Image from "next/image";
import React from "react";
import dots from "../assets/dots.png";
import hearth from "../assets/hearth.png";
import comment from "../assets/comment.png";
import message from "../assets/message.png";
import save from "../assets/save.png";
import emojy from "../assets/emojy.png";

const Post = ({ username, profilePic, postPhoto, caption }) => {
  const comments = [
    { 
      username: "lisa",
      comment: "U r so cute",
    },
    {
      username: "jisoo",
      comment: "<3",
    },
    {
      username: "jennie",
      comment: "from VN with love",
    },
  ];

  return (
    <div>
      {/*Header*/}
      <div className="border rounded-lg my-3">
        <div className="flex items-center p-3">
          <div className="flex items-center w-full">
            <div className="h-8 w-8 mr-3">
              <img src={profilePic.src} className="rounded-full" />
            </div>
            <div className="">
              <p className="font-semibold text-sm">{username}</p>
              <p className="text-sm">Original Audio</p>
            </div>
          </div>
          <div className="h-6 w-6">
            <Image src={dots} alt="dots" />
          </div>
        </div>
        {/*photo*/}
        <div>
          <img src={postPhoto.src} alt="photo" />
        </div>

        <div className="m-3">
          {/*button*/}
          <div>
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <div className="Btn">
                  <Image src={hearth} alt="hearth" />
                </div>
                <div className="Btn">
                  <Image src={comment} alt="comment" />
                </div>
                <div className="Btn">
                  <Image src={message} alt="message" />
                </div>
              </div>

              <div className="Btn">
                <Image src={save} alt="save" />
              </div>
            </div>
            <div className="mt-2 customfont ">
              <p>2,000,0000 likes</p>
            </div>
          </div>
          {/*caption*/}
          <div className="flex items-center mt-2">
            <p className="customfont mr-2 whitespace-nowrap">{username}</p>
            <p className="truncate">{caption}</p>
          </div>
          {/* {views all comment} */}
          <p className="text-sm text-gray-500 mt-1 my-2">
            View all 2,000 comments
          </p>
          {/*comments*/}
          <div className="">
            {comments.map((comment) => (
              // eslint-disable-next-line react/jsx-key
              <div className="max-w-24 overflow-y-auto flex justify-between">
                <div className="flex items-center truncate">
                  <p className="customfont mr-2">{comment.username}</p>
                  <p className="truncate mr-2">{comment.comment}</p>
                </div>
                <div className="h-3 w-3 shrink-0">
                  <Image src={hearth} alt="hearth" />
                </div>
              </div>
            ))}
          </div>
          {/* timeStamp */}
          <p className="text-gray-400 text-xs my-2">4 minutes ago</p>

          {/* boder */}
          <div className="border-t -mx-3 my-3"> </div>

          {/*input*/}
          <div className="flex justify-between p-1">
            <div className="flex">
              <div className="Btn mr-4">
                <Image src={emojy} alt="emoji" />
              </div>

              <input
                type="text"
                placeholder="Add a comment..."
                className="outline-0"
              />
            </div>
            <button className="font-bold text-sm text-[#0095f6]">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
