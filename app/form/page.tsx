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
          await db.insert(usersTable).values({
            id: 1,
            name: "sanjoy",
            age: 24,
            email: "user@gmail.com",
          });

          await db.insert(postsTable).values({
            title: "inserting data",
            content: "make it in",
            userId: 1,
          });
        }}
      >
        <button>Submit</button>
      </form>

      {post.map((e) => (
        <p>{e.title}</p>
      ))}
    </>
  );
};

export default page;
