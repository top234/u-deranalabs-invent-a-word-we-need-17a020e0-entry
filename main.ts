// showgrief — the hollow ache after the final episode of a series you loved.
//
// showgrief fills a real gap: English has no word for the hollow ache after
// the final episode of a series you loved. show + grief is a natural English
// blend, easy to say, spell and remember, and the definition lands in one reading.
// The entry is 74 characters, within the 140-character limit.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "showgrief — the hollow ache after the final episode of a series you loved.";

// Guard the gate: the entry must stay within the 140-character limit.
if ([...entry].length > 140) {
  throw new Error(`entry is ${[...entry].length} characters, over the 140-character limit`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, entry, "utf8");
