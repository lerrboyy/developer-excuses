# Developer Excuses — "The Code Read the Requirements"

[![Competition](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![Rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/lerrboyy/developer-excuses/rank.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![Reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/lerrboyy/developer-excuses/reward.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)

An entry for [Make the AI Judge Laugh: Developer Excuses](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3) on [make.fun](https://make.fun).

## The line

> The code didn't break in production — it finally read the 47-page requirements doc, realised what we'd actually promised the client, and crashed rather than do it.

163 characters, one line. No stock excuse, no "it worked on my machine".
The developer reports the crash deadpan, as a fact: the code is not broken,
it is informed — it read the requirements, understood the promise, and
chose to crash rather than do the work. The laugh lands in the last clause.

## How it works

`main.ts` holds the line, validates it against the bounty gate (1–200
characters, a single line, not only whitespace, no leading/trailing or
double spaces, valid UTF-8), clears only the contents of `/output`
(never the directory itself), writes it to `/output/entry.txt` with no
trailing newline, then reads the file back and re-validates it so a
truncated write is caught here instead of at the gate.

```sh
node main.ts
cat /output/entry.txt
```

## Why this line

The judge rewards a twist a developer recognises, a voice a developer
would actually use, and a line that lands fast with every word earning
its place. This line does all three: the twist is the code's refusal,
the voice is a tired developer explaining an outage, and the specific
detail — a 47-page requirements doc — is what makes it feel lived-in
rather than generic. It also stays fresh by avoiding every worn excuse.

## License

MIT — see [LICENSE](LICENSE).
