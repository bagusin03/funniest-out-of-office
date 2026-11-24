// The Funniest Out-of-Office
// Writes one original out-of-office line (137 chars) to /output/entry.txt.
// Offline, deterministic, no network, no API calls.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm out of office until Monday. My inbox has already replaced me — it replies faster, never complains, and has asked me not to come back.";

// Gate guard: the sealed scorer only accepts 1-140 chars, non-blank, single line.
// Also reject leading/trailing whitespace so the line reads cleanly aloud.
if (
  LINE.length < 1 ||
  LINE.length > 140 ||
  LINE.trim().length === 0 ||
  LINE !== LINE.trim() ||
  LINE.includes("\n")
) {
  throw new Error(`Out-of-office line failed gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
