import { SQL } from "bun";

const DATABASE_URL = process.env.DATABASE_URL || "";

export const db = new SQL(DATABASE_URL);

try {
  await db`SELECT 1`;
  console.log("✓ Database connected");
} catch (error) {
  console.error("✗ Database connection failed:", error);
  process.exit(1);
}
