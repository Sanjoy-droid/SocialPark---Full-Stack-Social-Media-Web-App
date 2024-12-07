"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

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

const PostPage = () => {
  const [postData, setPostData] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    if (!params?.id) return;

    const fetchPostData = async () => {
      try {
        const res = await fetch(`/api/posts/${params.id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch post data");
        }
        const data = await res.json();
        setPostData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Set loading state to false after fetching
      }
    };

    fetchPostData();
  }, [params?.id]);

  useEffect(() => {
    if (!isLoading && !postData) {
      // Wait for the fetch to complete before redirecting to 404
      router.push("/404");
    }
  }, [isLoading, postData, router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!postData) {
    return null; // Prevent showing anything before redirect
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">{postData.title}</h1>
      <p className="text-gray-500">{postData.content}</p>
      <p className="mt-4">Posted by: User {postData.userId}</p>
      <p>Likes: {postData.likes}</p>
      <p>Comments: {postData.comments}</p>
    </div>
  );
};

export default PostPage;
