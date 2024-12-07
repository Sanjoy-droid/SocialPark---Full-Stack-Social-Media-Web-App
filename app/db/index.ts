import { config } from "dotenv";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

config({ path: ".env" }); // or .env.local

export const db = drizzle({
  connection: {
    url: process.env.NEXT_PUBLIC_TURSO_CONNECTION_URL!,

    authToken: process.env.NEXT_PUBLIC_TURSO_AUTH_TOKEN!,
  },
  schema,
});
