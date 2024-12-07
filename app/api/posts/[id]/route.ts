import { NextResponse } from "next/server";
import { db } from "../../../db";
import { postsTable } from "../../../db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  const post = await db.query.postsTable.findFirst({
    where: eq(postsTable.id, parseInt(id, 10)),
  });

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}
