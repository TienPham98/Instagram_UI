import React from "react";
import profile from "../assets/profile.png";
import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      id: "123",
      username: "Jane",
      profilePic: profile,
      postPhoto: profile,
      caption: "Hello bro",
    },
    {
      id: "124",
      username: "Kata",
      profilePic: profile,
      postPhoto: profile,
      caption: "Hello bro",
    },
    {
      id: "234",
      username: "Jan",
      profilePic: profile,
      postPhoto: profile,
      caption: "Hello bro",
    },
    {
      id: "323",
      username: "Lane",
      profilePic: profile,
      postPhoto: profile,
      caption: "Hello bro",
    },
    {
      id: "523",
      username: "Kane",
      profilePic: profile,
      postPhoto: profile,
      caption: "Hello bro",
    },
  ];
  return (
    <div className="mt-1 mx-1">
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          profilePic={post.profilePic}
          postPhoto={post.postPhoto}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
