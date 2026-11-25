// One Line, One Chill — a single-sentence horror line, written to entry.txt.
// The entry is one fixed string: no randomness, no network, no clock, so
// every run produces byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a normal domestic sentence that turns on one wrong detail.
const ENTRY =
  "Every night my son waves goodnight from his bedroom window, but tonight the curtains were drawn and the waving hand had six fingers.";

// The competition gate: entry.txt must hold 1 to 200 characters and not be
// only whitespace.
const MAX_CHARS = 200;

if (
  ENTRY.length < 1 ||
  ENTRY.length > MAX_CHARS ||
  ENTRY.trim().length === 0
) {
  throw new Error(
    `entry is ${ENTRY.length} characters, but the gate allows 1-${MAX_CHARS} non-blank characters`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
