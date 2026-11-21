# Three-minute demo

Prepare a visitor-owned provider profile with a tool-capable model. Never show the actual key. If recording with a scripted mock instead, label it on screen and do not describe it as a live model.

**0:00–0:25 · The existing website**
Show the Northgate hero and services. “This started as an existing fictional Edmonton plumber website: services, local coverage and a request form. We added an agent layer without turning it into a backend application.”

**0:25–0:50 · Portable, public network**
Open agent-manifest.json and northgate.network.json. “Two agents: a concierge and service adviser. Their graph, instructions and invocation schemas are public, data-only JSON. The runtime loads and validates them in an ordinary browser.”

**0:50–1:10 · Visitor-owned inference**
Open AI model settings, with key field masked. “The visitor selects a provider and their own key. The static host pays nothing for inference. Profiles can be removed. The provider receives chat content; this is not a promise of local model privacy.”

**1:10–1:40 · Grounded answer**
Ask “Do you repair water heaters in St. Albert? What does it cost?” Show the agent execution view. “The concierge calls the service adviser, which reads the website’s registered catalogue action. There is no made-up price: inspection and a written quote are required.”

**1:40–2:15 · Qualified request**
Ask “Draft a request for leak repair in Edmonton. The kitchen sink drips beneath the cabinet, it is safely contained, and I prefer Tuesday afternoon.” Show the resulting visible draft. Download it. “This is a draft, not a booked visit. The same validated action powers the manual builder. We don’t need contact details in the model conversation.”

**2:15–2:40 · Another agentic website**
Show the trade_partner link setting and bind a consented compatible peer prepared before recording. Trigger one general, non-personal question and show the destination consent. “The caller loads the exact named peer network locally. The peer contributes public instructions, not a new inference endpoint; it never receives the visitor’s model key.” If no compatible second origin has been verified, show the link/consent UI only and explicitly say execution remains to be demonstrated.

**2:40–3:00 · Limits and close**
Show tests and mobile screenshot. “No server agent, no hidden provider bill, no pretend dispatch. Validation, consent and runtime limits govern execution. Next is a consenting real business and a reviewed CRM action. This is an existing trades website made agentic.”
