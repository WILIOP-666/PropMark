[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
LoginSignup
[Home](https://www.microburbs.com.au/)[Blog](https://www.microburbs.com.au/blog)Australian Property Data MCP Server: Connect Claude, Free [2026]
Guides
# Australian Property Data MCP Server: Connect Claude, Free [2026]
![David Bailey](https://www.microburbs.com.au/images/david-bailey.png)
David BaileySeptember 2, 2026
![Australian Property Data MCP Server: Connect Claude, Free \[2026\]](https://www.microburbs.com.au/images/blog/blog-ai-tech.jpg)
## In this article
  1. [01What is an MCP server, and why does property data need one?](https://www.microburbs.com.au/blog/connect-claude-to-australian-property-data-mcp#what-is-an-mcp-server-and-why-does-property-data-need-one)
  2. [02What can Claude do with Australian property data?](https://www.microburbs.com.au/blog/connect-claude-to-australian-property-data-mcp#what-can-claude-do-with-australian-property-data)
  3. [03How to connect Claude to Australian property data](https://www.microburbs.com.au/blog/connect-claude-to-australian-property-data-mcp#how-to-connect-claude-to-australian-property-data)
  4. [04Is the Microburbs MCP server free?](https://www.microburbs.com.au/blog/connect-claude-to-australian-property-data-mcp#is-the-microburbs-mcp-server-free)
  5. [05Cursor, VS Code, Claude Code and Codex setup](https://www.microburbs.com.au/blog/connect-claude-to-australian-property-data-mcp#cursor-vs-code-claude-code-and-codex-setup)
  6. [06Why we built it](https://www.microburbs.com.au/blog/connect-claude-to-australian-property-data-mcp#why-we-built-it)
  7. [07Frequently Asked Questions](https://www.microburbs.com.au/blog/connect-claude-to-australian-property-data-mcp#frequently-asked-questions)


Ask Claude or ChatGPT about a suburb today and you will get a confident answer built from whatever was on the internet when the model was trained. Sometimes that is fine. For a median price, a rental yield or a flood overlay, it is worse than useless — it sounds right and it is out of date.
Microburbs now publishes an **MCP server** , which fixes exactly that. Connect it once and your assistant stops guessing about Australian property and starts reading our data instead.
## What is an MCP server, and why does property data need one?
MCP — the Model Context Protocol — is a standard way for an AI assistant to use an outside service. Think of it as giving Claude a set of tools it can pick up when it needs them. Before MCP, every assistant needed a bespoke integration for every service. Now there is one standard, and Anthropic, OpenAI, Google and most of the coding tools have adopted it.
In practice it means this: you paste one address into a settings screen, and from then on your assistant can look up real Australian property data mid-conversation, without you leaving the chat.
## What can Claude do with Australian property data?
The server exposes **174 tools** , generated directly from our API, so anything the API can answer your assistant can answer:
  * **Valuations** — an automated estimate for a specific address, with a confidence range rather than a single number pretending to be certain
  * **Sale and rent history** — what a property last sold for, what it rented for, and when
  * **Comparable sales** — recent nearby sales for pricing a listing or checking an agent's quote
  * **Suburb metrics** — median prices, growth, yields, days on market, vacancy rates, stock on market
  * **Demographics** — income, age, tenure, occupations, ancestry, right down to mesh-block level
  * **Risk overlays** — flood, bushfire, landslide, heritage, high-voltage powerlines, noise
  * **Zoning and development** — what can be built, plus development applications in the area
  * **Schools** — catchments, rankings and what is nearby
  * **Suburb Finder** — rank and shortlist suburbs on numeric criteria, rather than fetching them one at a time


A buyer's agent can ask "compare Zetland and Alexandria on yield, vacancy and new supply, and tell me which has more apartments coming" and get an answer grounded in the same data behind our reports.
## How to connect Claude to Australian property data
This is the part people expect to be hard. It is four steps and no code.
  1. In Claude, go to **Settings → Connectors → Add custom connector** .
  2. Name it **Microburbs** and paste this address: `https://api.microburbs.com.au/mcp`
  3. Under **Authentication** , choose **None** .
  4. Click **Add** . Claude will list the Microburbs tools once it connects.


Step 3 is the one that trips people up. The dialog leads with three sign-in options, so it looks like you are supposed to pick one. You are not — we do not use OAuth. Choose **None**. Claude will warn you that anyone with the address can use the connector; that warning is about servers with no security at all, and it is not describing us.
> If the tools do not appear straight away, open the connector and choose **Refresh tools list**. The connection is fine; it just has not fetched them yet.
## Is the Microburbs MCP server free?
You do not need to sign up, and you do not need a credit card, to see whether this is useful. In step 4, put `Bearer test` in as the header value instead of your own key and you get our **free sandbox** — full, real data, never billed, for nine sample suburbs and one sample property in each state and territory:
**Bondi** , **Belmont North** , **St Kilda (Vic.)** , **Fortitude Valley** , **Subiaco** , **Unley** , **Sandy Bay** , **Kambah** and **Nightcliff**. Those are ABS Suburb and Locality names, so the state suffix matters where there is one — `St Kilda (Vic.)` resolves, `St Kilda` does not.
Ask about any of those nine and every suburb and property field works exactly as it would on a paid plan. Two things are held back, and both range over the whole country by definition: the Suburb Finder, which ranks every locality, and address lookup, which turns “12 Smith St” into the id a property call needs. So on the free sandbox you ask for a property by its sample id rather than by street address. Both open up with your own key.
To cover the whole country you add an API key, and calls are billed per request in cents. A median price, a yield or a zoning code is around 10c; a property valuation is also 10c. The dearest calls are the ones that do the most work — a full school catchment with geometry is $2.05, a whole market bundle $1.08. Eight endpoints cost nothing at all, so discovery is free. The [full rate card is published](https://www.microburbs.com.au/developers/api-docs/pricing), and every response tells you what it just cost.
## Cursor, VS Code, Claude Code and Codex setup
**Claude Code** — one command:
`claude mcp add --transport http microburbs https://api.microburbs.com.au/mcp --header "Authorization: Bearer YOUR_KEY"`
**Cursor, VS Code and Codex** all take the same address in their MCP settings, with the key as an `Authorization: Bearer` header. Anything that speaks MCP over Streamable HTTP should work; there is nothing Microburbs-specific to install.
**ChatGPT** is the exception at the time of writing. Its custom connectors only sign in through OAuth, and there is nowhere to enter an API key, so our server cannot be connected there yet. We will update this post when that changes.
## Why we built it
Our customers were already pasting our reports into Claude to ask follow-up questions. That works, but it is a screenshot of a moment — the assistant cannot go and check the next suburb, or re-run the comparison with different criteria, or look at the street the property is on.
Connecting the data directly removes that ceiling. The assistant does the fetching, you do the thinking, and the numbers come from the same place our reports do.
[Read the full setup guide, with screenshots for every client](https://www.microburbs.com.au/developers/api-docs/mcp), or [create an API key](https://www.microburbs.com.au/api-access) when you are ready for national coverage.
## Frequently Asked Questions
### What is an MCP server?
MCP — the Model Context Protocol — is a standard way for an AI assistant to use an outside service. Instead of a bespoke integration per assistant, there is one standard that Anthropic, OpenAI, Google and most coding tools have adopted. In practice, you paste one address into a settings screen and your assistant can then look things up mid-conversation.
### Which AI assistants can connect to Microburbs?
Claude (web and desktop), Claude Code, Cursor, VS Code and Codex all connect today. Anything that speaks MCP over HTTP will work — there is nothing Microburbs-specific to install.
### Does ChatGPT work with it?
Not yet. ChatGPT's custom connectors sign in through OAuth only and offer no field for an API key, so our server cannot be connected there. This is a limitation on ChatGPT's side rather than ours, and we will update this page when it changes.
### Is it free to use?
It is free to try with no account. Put `Bearer test` in as the header value and you get the public sandbox: full, real data for nine sample suburbs — Bondi, Belmont North, St Kilda (Vic.), Fortitude Valley, Subiaco, Unley, Sandy Bay, Kambah and Nightcliff — plus one sample property per state. Anything outside that list needs an API key, billed per call.
### Do I need to be a developer?
No. Connecting in Claude is four steps in a settings screen with no code at all. The only thing to watch is the Authentication step, where you should choose **None** rather than one of the OAuth options.
### What can I ask once it is connected?
Anything the data covers: a valuation for a specific address, what a property last sold for, recent comparable sales, a suburb's median price, growth, yield or vacancy rate, flood and bushfire risk, zoning and development activity, school catchments, or a ranked shortlist of suburbs matching numeric criteria.
![David Bailey](https://www.microburbs.com.au/images/david-bailey.png)
Written by
### David Bailey
Providing data-driven insights into Australian property markets. Explore more articles and suburb data at Microburbs.
[](https://www.linkedin.com/company/microburbs)[](https://twitter.com/microburbs)
[Back to all articles](https://www.microburbs.com.au/blog)
## Related Articles
[![Property Data Granularity: Suburb, Street and Address](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Fblog%2Fblog-sydney-aerial.jpg&w=3840&q=75) GuidesSeptember 15, 2026 Property Data Granularity: Suburb, Street and Address Understand what suburb, street and property data can tell you, how ABS boundaries fit together, and where finer detail adds uncertainty. ![David Bailey](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Fdavid-bailey.png&w=48&q=75)David Bailey Read more ](https://www.microburbs.com.au/blog/property-data-granularity-suburb-street-address)[![What Is an MCP Server? How AI Reads Live Australian Property Data](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Fblog%2Fblog-globe-data.jpg&w=3840&q=75) GuidesSeptember 11, 2026 What Is an MCP Server? How AI Reads Live Australian Property Data MCP lets an AI assistant query live property data instead of guessing. What a tool list is, why its size matters, and how to connect. ![David Bailey](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Fdavid-bailey.png&w=48&q=75)David Bailey Read more ](https://www.microburbs.com.au/blog/what-is-an-mcp-server-australian-property-data)[![Australian Property AI Chatbot: Ask Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fcdn%2Fblog-ai-chat-v1.jpg&w=3840&q=75) GuidesSeptember 6, 2026 Australian Property AI Chatbot: Ask Microburbs Ask Microburbs AI Chat about Australian suburbs and properties, with data behind the answers. Free with an account, within usage limits. ![David Bailey](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Fdavid-bailey.png&w=48&q=75)David Bailey Read more ](https://www.microburbs.com.au/blog/australian-property-ai-chatbot)
[Microburbs](https://www.microburbs.com.au/)
Australia's most comprehensive property data platform.
[](https://www.linkedin.com/company/microburbs)[](https://twitter.com/microburbs)[](https://www.youtube.com/@microburbsau)[](https://www.instagram.com/microburbs_au)
### Explore
  * [Suburb Reports](https://www.microburbs.com.au/suburb-reports)
  * [Region Reports](https://www.microburbs.com.au/region-reports)
  * [Property Reports](https://www.microburbs.com.au/property-reports)
  * [Property Finder](https://www.microburbs.com.au/property-finder-intro)
  * [Suburb Finder](https://www.microburbs.com.au/suburb-finder)


### Resources
  * [Insights](https://www.microburbs.com.au/insights)
  * [Guides](https://www.microburbs.com.au/p/guides)
  * [Blog](https://www.microburbs.com.au/blog)
  * [Academy](https://www.microburbs.com.au/academy)
  * [Podcast](https://www.microburbs.com.au/podcast)
  * [Data Definitions](https://www.microburbs.com.au/definitions)
  * [FAQ](https://www.microburbs.com.au/faqs)


### About
  * [About Microburbs](https://www.microburbs.com.au/about)
  * [Testimonials](https://www.microburbs.com.au/testimonials)
  * [Contact Us](https://www.microburbs.com.au/contact)
  * [Careers](https://www.microburbs.com.au/blog/jobpost)
  * [Brand assets](https://www.microburbs.com.au/brand)


### Legal
  * [Terms of Use](https://www.microburbs.com.au/terms)
  * [Privacy Policy](https://www.microburbs.com.au/privacy)
  * [Disclaimer](https://www.microburbs.com.au/disclaimer)


© 2026 Microburbs. All rights reserved.
Back to Top
✦Ask Mic
