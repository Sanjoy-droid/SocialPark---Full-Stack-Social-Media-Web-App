import React from "react";
import { usersTable, postsTable } from "../db/schema";
import { db } from "../db";

const page = async () => {
  const post = await db.query.postsTable.findMany();

  return (
    <>
      <h1>Form</h1>

      <form
        action={async () => {
          "use server";
          // await db.insert(usersTable).values({
          //   id: 2,
          //   name: "sanjoy",
          //   age: 24,
          //   email: "user2@gmail.com",
          // });

          //   await Promise.all(
          //     demoPost.map(async (post) => {
          //       await db.insert(postsTable).values(post);
          //     }),
          //   );
          console.log("clicked");
        }}
      >
        <button>Submit</button>
      </form>
      {post.map((post) => (
        <li key={post.id}>
          <p>{post.title}</p>
          <p>{post.content}</p>
        </li>
      ))}
    </>
  );
};

export default page;
