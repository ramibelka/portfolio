import { cp, rm, access } from "node:fs/promises";
import { constants as fsConstants } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const sourceDir = path.join(rootDir, "dist", "client");
const targetDir = path.join(rootDir, "build");

try {
  await access(sourceDir, fsConstants.F_OK);
} catch {
  throw new Error(`Expected build output at ${sourceDir}, but it does not exist.`);
}

await rm(targetDir, { recursive: true, force: true });
await cp(sourceDir, targetDir, { recursive: true });
