# Northgate · Agentic Trades

A static, agentified Edmonton plumbing website for Track 1 of the Open Agentic Web Challenge. Northgate is explicitly fictional. It turns service questions into a qualified, reviewable request draft without pretending to dispatch a plumber or confirm a booking.

## Run

```sh
python -m http.server 8080
# open http://localhost:8080
node --test tests/*.test.mjs
```

No install or build is required. Use a current browser. The browser fetches local manifests and ES modules, so opening index.html as file:// is not supported.

## Try it

1. Go to Assistant, open **AI model settings**, select a supported provider (or custom OpenAI-compatible endpoint), enter your own key and model, and apply. Direct provider access requires CORS. Missing keys stop inference; the host supplies no paid key or proxy. Provider accounts may incur charges.
2. Ask “Do you repair water heaters in St. Albert?” The concierge delegates to the service adviser and reads the published local catalogue.
3. Ask for a draft and supply service, city, symptoms, urgency and preferred window. Or use the no-key request builder. Review the visible draft and download it. Nothing is sent or booked.
4. In the runtime’s link settings, bind `trade_partner` to an exact published network URL, e.g. `https://publisher.example/path/network_name` (not just a JSON file). The runtime asks permission before fetching or invoking peers. A compatible peer must publish its own manifest and CORS-enabled definition.
5. Delete saved profiles in model settings when finished. Saving a profile stores credentials in origin-scoped localStorage; tab-only settings avoid persistent storage. Other JavaScript on this origin can access stored credentials. Do not enter sensitive personal information.

## Profile 0.3 requirements

| Requirement | Implementation |
|---|---|
| Portable resolved Neuro SAN graph | northgate.network.json: data-only JSON/HOCON, two agents, schemas, instructions, local delegation, max_steps=10 |
| Public manifest and links | agent-manifest.json names northgate, concierge and definition; links.json provides empty defaults for visitor-managed trade_partner |
| In-browser orchestration | Vendored reference runtime validates, loads, delegates, executes local actions and renders chat/trace without an agent server |
| Pluggable inference | Published default OpenRouter endpoint/model; explicit BYOK settings and supported custom endpoints; no publisher credential |
| Grounded capability | Registered read_services action shares the service catalogue; draft_request creates a visible local draft |
| Linked networks | Symbolic trade_partner slot, exact-name manifest resolution, browser-local overrides and per-contact consent |
| Credential boundary | Reference engine pins peers to caller inference configuration; keys go to selected provider, not peer fetches |
| Private context | Reference runtime filters sly_data by explicit destination rules; this network defines no forwarding permissions |
| Safety and limits | Reference validation, composition-cycle detection, 10-step agent budget, per-peer and whole-turn budgets, fail-closed errors and visible trace |
| User-owned writes | No irreversible action exists; drafts are local reversible writes, downloading is explicitly user-controlled |
| Static publication | HTML/CSS/JS/JSON, .nojekyll, relative URLs support GitHub Pages repository subpaths |
| CORS | GitHub Pages public files normally carry Access-Control-Allow-Origin: *; verify after deploy. python http.server is for same-origin checks only and does not add CORS |
| Optional MCP/code bundles | Not used. No public MCP facade and no peer code is declared |

## Deploy to GitHub Pages

Publish this root on the main branch of a public repository and select **Settings → Pages → Deploy from branch → main / root**. Expected URL: https://ray3242.github.io/agentic-trades/. No build pipeline, backend or secret is required. Check the manifest and definition response headers for CORS. GitHub Pages supplies HTTPS.

## Tests and limits

Node tests exercise the real runner with a scripted model, including internal delegation and a grounded site action, plus draft normal/empty/error paths, validation and router policy. They do not prove a paid provider’s model quality. Browser verification uses a mock completion path without a real key, separately from production settings. Live BYOK calls require a visitor account; free-tier availability is provider-dependent. Cross-origin peer execution, cycle/private-context/budget enforcement are inherited runtime features and must not be described as newly proven by the focused tests.

The existing website is the fictional plumber demonstration in ray3242/web-agency; services, area list and single-page request flow are retained, with a new visual system and agent layer. See NOTICE.md for attribution. Screenshots and design decisions are under docs/.

## Submission

SUBMISSION.md is the Devpost draft; DEMO_SCRIPT.md is a timed three-minute recording plan. The challenge deadline and prize are supplied by the project brief, not independently verified here. Before submitting: confirm official eligibility/rules, record and upload the video, supply the entrant/team identity, and submit through a Devpost account. Do not claim this demo is a licensed operating plumbing business.
