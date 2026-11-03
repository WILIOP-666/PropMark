[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
Microburbs Research
# Will my 2021 Census analysis still work in 2026?
Not on its own. 10.2% of 2021 SA1 codes do not exist in the 2026 Census. Here is what happens to each one, and how to carry your work across with the Bureau's own weights.
![Luke Metcalfe](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Fluke-headshot-circle.png&w=128&q=75)By Luke Metcalfe, Founder & Chief Data Scientist, 15+ years in property data analytics · September 2026
10.2%
of 2021 SA1 codes gone in 2026
5,598
same area, new code
719
split, up to 29 ways
1 in 25
addresses in a different area
## Will my 2021 Census analysis still work when the 2026 results come out?
**Not on its own.** The 2026 Census uses a new set of boundaries. Of the **61,846** SA1 areas in the 2021 Census, **6,317** , or **10.2%** , have a code that does not exist in 2026. If your analysis joins on the SA1 code, one row in ten silently drops out the day the new data lands, and nothing warns you.  
| What happened to the 2021 SA1  | How many  | Share  | What it does to your join  |  
| --- | --- | --- | --- |  
| Same code, same area  | 55,529  | 89.8%  | Joins cleanly  |  
| Same area, new code  | 5,598  | 9.1%  | Drops out of the join. The place did not change, the number did  |  
| Split into two or more new areas  | 719  | 1.2%  | Drops out, and there is no single right answer. The widest split is 29 ways  |  
Those are the Bureau of Statistics' own figures, from the correspondence it publishes with the new boundaries. The weights are the Bureau's too, based on where people actually live, not on area.
## What does a split SA1 look like?
One SA1 in [Clyde North](https://www.microburbs.com.au/suburb-reports/Clyde%20North), on Melbourne's south-eastern edge, covered a paddock at the 2021 Census. It is now **12 SA1s**. If you hold one number for it, the Bureau says this is how that number should be shared out:  
| 2026 SA1  | Share of the 2021 area's people  |  
| --- | --- |  
| `21207166711`  | 68.2%  |  
| `21207166717`  | 24.3%  |  
| `21207166708`  | 3.0%  |  
| `21207166707`  | 1.5%  |  
| and 8 more  | under 1% each  |  
Two of the twelve hold 92% of the people. A join on code returns nothing for any of them.
## How do I make a 2021 analysis carry to 2026?
You do not redo it. You carry it across with the same weights the Bureau uses, once, for every area you hold. Send an old code, get back every new code it became and the share of it that went there. The data to answer that is built for every SA1, every mesh block and every address in Australia, so a property, a street or a portfolio can be placed in both editions at once. Three Census requests on [the Microburbs API](https://www.microburbs.com.au/report_generator/api/docs) are specified and being built to serve it; they are not live yet. The API already resolves any address to its mesh block today.
  * **An SA1 or mesh block you already hold:** one request will return its successors and their shares.
  * **An address:** one request will return its 2021 area and its 2026 area, and whether they differ. About one address in twenty-five nationally is in a different area.
  * **A whole file:** the same two requests, run down the list, will give you a 2026 version of a 2021 dataset with nothing dropped and nothing double-counted.


**What this is not.** None of this is 2026 Census data. No 2026 Census figure exists anywhere until the Bureau publishes in June 2027. This is the map between the two editions, which is what you need in place before that day, not after it.
**Tell me what the 2026 Census says about my suburb, the day it comes out** First results land in June 2027. We will email you when yours is in.
Tell me
Unsubscribe in one click.
## For developers: the same answer as a request
Everything on this page comes from data built for the [Microburbs API](https://www.microburbs.com.au/report_generator/api/docs). The API already resolves any address and returns its mesh block today. Three Census requests are specified and being built on top of it; they are not live yet, and this page will say so until they are. Access and plans are on the [API access page](https://www.microburbs.com.au/api-access).  
| Request, coming  | What it will answer  |  
| --- | --- |  
| `GET /v1/census/resolve?gnaf_pid=GAVIC720355173`  | Which Census area this address is in, for 2021 and for 2026, and whether it changed.  |  
| `GET /v1/census/lineage?mesh_block_2021=21327400000`  | What an old area became, with the ABS's own population-weighted shares. This one returns 43 rows.  |  
| `GET /v1/census/releases`  | Which Census data exists today and which is still to come, with dates.  |  
[Read the API documentation](https://www.microburbs.com.au/report_generator/api/docs) for what is live today, or [see worked examples of the three Census requests](https://www.microburbs.com.au/insights/census-2026-api) as they will answer.
Sources: Bureau of Statistics ASGS Edition 4 correspondences, SA1 2021 to SA1 2026 and Mesh Block 2021 to Mesh Block 2026, read 8 September 2026. The Clyde North SA1 is 21203155636.
Census 2026 on Microburbs: [Where the Census is up to](https://www.microburbs.com.au/research/census-2026) · [The places that changed most](https://www.microburbs.com.au/research/census-2026-changed-places) · [Clyde North](https://www.microburbs.com.au/research/census-2026-clyde-north) · [Melonba](https://www.microburbs.com.au/research/census-2026-melonba) · [Tarneit](https://www.microburbs.com.au/research/census-2026-tarneit) · [Donnybrook](https://www.microburbs.com.au/research/census-2026-donnybrook) · **Will my 2021 analysis still work?** · [For developers](https://www.microburbs.com.au/insights/census-2026-api)
### Carry your Census data across
Every SA1, mesh block and address in Australia, in both editions. Built, and coming to the API.
[API documentation](https://www.microburbs.com.au/report_generator/api/docs)[Plans and access](https://www.microburbs.com.au/api-access)
Microburbs Research, 3 September 2026.
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
