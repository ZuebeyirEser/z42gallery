import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "@vercel/postgres";

export const db = drizzle(sql, { schema });
