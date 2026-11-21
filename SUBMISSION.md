# Northgate: a trades website that helps you ask

**Tagline:** From a plumbing question to a request you can review — in your browser, on your model.

**Track:** 1 — Agentify an existing website

## Description

A trade-business website usually gives visitors a service list and a blank form. Northgate adds a portable two-agent network that explains services, checks the service area, asks for the missing details, and creates a useful request draft. The existing website is a fictional Edmonton plumber sample from an Alberta web-agency project. We retained its services and regional focus while rebuilding the experience around a grounded assistant.

The concierge delegates service questions to a specialist. Registered website actions provide the source of truth and create the same draft the manual builder creates. Visitors remain in control: there are no invented prices, live booking claims or pretend form submissions. A downloaded draft is not a dispatched job.

The network is public JSON using the Neuro SAN model, discovered through agent-manifest.json and executed by the reference browser runtime. Visitors bring their own inference provider and credentials; the host pays no inference bill. An optional network link lets them consult another published network by URL after consent, without giving that peer their router key.

## How we built it

Static HTML, CSS, JavaScript and JSON; the Cognizant agentic-web reference runtime; registered browser-local actions; the supplied taste-skill design system, a dealt hero and a word-highlight moment. A mobile-responsive layout, keyboard labels and reduced-motion fallbacks keep the original website useful even without an LLM. Node tests use the real agent runner with a scripted model, plus browser verification and screenshots.

## Challenges

Keeping a model grounded in a small business’s actual offer; distinguishing a request draft from a booking; keeping private credentials away from peer networks; making direct BYOK compatible with browser CORS; preserving GitHub Pages subpath resolution. The solution keeps business facts in one capability, lets the browser own permissions, and states the limits plainly.

## What’s next

Pilot with a consenting real trade business, replace stand-in photographs, connect a confirmed quote-request action to an authenticated CRM, add a consented cross-origin trade partner, and run the full interoperability/security suite. Real submissions and dispatch would require reviewed irreversible actions, receipts and service-side controls.

## Submission links

- Source: https://github.com/ray3242/agentic-trades-site
- Demo: https://ray3242.github.io/agentic-trades-site/
- Video: record DEMO_SCRIPT.md and attach the resulting public video URL in Devpost.

Entrant identity, team details, video upload and final submission require the owner’s accounts. The published demo is fictional, not an operating emergency service.
