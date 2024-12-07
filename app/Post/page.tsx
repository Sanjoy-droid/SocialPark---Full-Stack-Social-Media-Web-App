"use client";
import React, { useEffect, useState, useRef } from "react";
import { db } from "../db";
import { postsTable } from "../db/schema";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ImageUpload from "../Components/ImageUpload";
import { ImageUp } from "lucide-react";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  content: string;
  likes: number;
  comments: number;
  userId: number;
  createdAt: string;
  updateAt: Date | null;
};
const Page = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await db.query.postsTable.findMany();
      setPosts(postsData);
    };

    fetchPosts(); // Call the function to fetch posts
  }, []);

  return (
    <>
      <h1 className="text-2xl text-gray-400 font-bold">Recent Posts</h1>

      <div className="my-6">
        <ul className="flex flex-wrap gap-8">
          {posts.map((post: Post) => (
            <li key={post.id} className="flex-shrink-0 w-[350px]">
              <Link href={`/post/${post.id}`}>
                <Card className="w-full h-[22rem] bg-slate-800 border-black text-white">
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-violet-900">Edit Post</Button>
                      </DialogTrigger>

                      <div className="">
                        <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white border-gray-700">
                          <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                              Make changes to your post here. Click save when
                              you're done.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className=" items-center gap-4">
                              <Label htmlFor="title" className="">
                                Title
                              </Label>
                              <Input
                                id="title"
                                // defaultValue="Pedro Duarte"
                                className="col-span-3"
                              />
                            </div>
                          </div>

                          {/* image upload ui */}

                          <ImageUpload />

                          <DialogFooter>
                            <Button type="submit">Save changes</Button>
                          </DialogFooter>
                        </DialogContent>
                      </div>
                    </Dialog>
                  </CardContent>
                  <CardFooter>
                    <CardDescription>Posted By: {post.userId}</CardDescription>
                  </CardFooter>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Page;
