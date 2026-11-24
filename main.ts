// Developer Excuses — make.fun entry
// Writes one funny single-line excuse to /output/entry.txt.
// The excuse: the code read the requirements doc and chose to crash
// rather than do what was promised. Straight face, twist at the end.
import {
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The code didn't break in production \u2014 it finally read the 47-page requirements doc, realised what we'd actually promised the client, and crashed rather than do it.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`Entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be a single line");
  }
  if (text !== text.trim() || text.includes("  ")) {
    throw new Error("Entry must have no leading/trailing or double spaces");
  }
  // Confirm the text round-trips as valid UTF-8.
  const encoded = new TextEncoder().encode(text);
  const decoded = new TextDecoder("utf-8", { fatal: true }).decode(encoded);
  if (decoded !== text) {
    throw new Error("Entry is not valid UTF-8 text");
  }
}

validate(ENTRY);

// Prepare the output directory without ever removing the directory
// itself: /output is a mount point for the grader, so only its
// contents are cleared.
mkdirSync(OUTPUT_DIR, { recursive: true });
for (const name of readdirSync(OUTPUT_DIR)) {
  rmSync(join(OUTPUT_DIR, name), { recursive: true, force: true });
}

writeFileSync(OUTPUT_FILE, ENTRY, "utf8");

// Read the file back and re-validate it, so a truncated or mangled
// write is caught here instead of failing the sealed gate scorer.
const written = readFileSync(OUTPUT_FILE, "utf8");
validate(written);
if (written !== ENTRY) {
  throw new Error("Written entry does not match the validated entry");
}
const byteCount = new TextEncoder().encode(written).length;
console.log(
  `Wrote ${written.length} characters (${byteCount} bytes) to ${OUTPUT_FILE}`,
);
