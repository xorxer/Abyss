import path from "node:path";
import { defineConfig } from "prisma/config";
import { config } from 'dotenv';

// Load environment variables
config();

export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),
  migrations: {
    path: path.join("db", "migrations"),
    seed: "tsx prisma/seed.ts"
  }
});