// The 3 AM Commit Message — writes one commit message to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
const entry = "fix(prod): broke production at 3am, fixed it by breaking it differently. tests pass. do not ask questions.";
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (entry.length < 1 || entry.length > 200) throw new Error("entry out of range");
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", entry);
