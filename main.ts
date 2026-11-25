import fs from "node:fs";
const TEXT = "fix(prod): broke production at 3am, fixed it by breaking it differently. tests pass. do not ask questions.";
const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (TEXT.length < 1 || TEXT.length > 200) { console.error("entry out of range"); process.exit(1); }
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(out + "/entry.txt", TEXT, "utf8");
