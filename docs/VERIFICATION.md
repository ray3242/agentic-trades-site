# Verification record

Node 24: 4 tests passed, 0 failed. Actual reference runner performed internal delegation and read a grounded local capability with a scripted model. Draft normal, empty, overlong and outside-area inputs checked.

Local Python HTTP server: public JSON and runtime loaded. Browser reported “Network ready · 2 agents · runs in your browser”. Model/key UI applied a fake key with a stubbed provider model catalogue; no real credential used. A deterministic mock model exercised a full browser chat turn. This is not a live provider quality evaluation.

Taste gate output (first run):

```
GATE: ERROR (consistency.mjs gave no report (exit 1: Error: No Chrome, Edge or Chromium found; set CHROME_PATH.); check.mjs could not run (exit 2: no Chrome found (set CHROME_PATH)))
```

The skill expressly says not to rerun after GATE: ERROR. Chrome was subsequently located at /home/ubuntu/.local/bin/google-chrome; standalone screenshot, consistency, layout and perf scripts ran with CHROME_PATH. The gate is **not passed**.

Standalone consistency surfaced real image failures (the kit-generated WebP files could not be decoded in Chrome), assistant settings overflow, and a narrow nav overflow. Images were converted to JPEG with ffmpeg, settings gained scroll bounds and nonshrinking layout, nav was adjusted. Other design checks remain open: literal one-or-two-screen rhythm, column-edge heuristics, styles/labels/contrast within the unmodified reference runtime. Shader-lint mistakenly treats runtime CSS template literals as GLSL; no shader is used. No waivers were filed and no all-clear is claimed.

Standalone layout checked 1440, 1024, 768 and 390. It reported edge alignment and assistant section-height findings; not a passing gate. Perf after image repair:

```
SUMMARY index.html: 0 FAIL, 2 WARN  -> WARN
```

Warnings: oversized source photographs at some viewports. Total transfer: 469.8 KiB desktop / 411.7 KiB mobile; zero broken requests; no WebGL; zero measured blocking time. Screenshots: desktop.png and mobile.png, with focused layout tiles under layout/.

Full cross-origin execution, private-context forwarding, cycle detection and request-budget rejection are inherited from the vendored runtime, not independently demonstrated end to end in this entry. A compatible consented second-origin peer and live visitor-owned provider are required for that final interoperability rehearsal.

Browser mock result:
```
BROWSER MOCK FULL TURN: Yes. St. Albert is in our service area. Pricing requires inspection and a written quote. remaining 0
```
This used a scripted replacement of the engine's LLM chat method, not a paid endpoint. Applying provider/key settings was separately checked through the real settings UI with a stubbed provider model catalogue. Manual form returned “Your draft is ready to review. Nothing has been sent.” and enabled the download button. Loaded image natural widths were 1920 and 1280 after JPEG repair.

Publication: initial push to main was rejected because the supposedly empty remote acquired a README commit. No force push or unrelated-history merge was performed. The entry is published on devin/initial-entry for the owner/lead to integrate. Pages was not configured against README-only main; its settings GET returned HTTP 404.
