[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
Microburbs Research
# The 2026 Census boundaries, as an API
Three requests, specified and being built, that will resolve any Australian address to its 2021 and 2026 Census areas, show what every old area became with the Bureau's own weights, and say what Census data exists today.
![Luke Metcalfe](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Fluke-headshot-circle.png&w=128&q=75)By Luke Metcalfe, Founder & Chief Data Scientist, 15+ years in property data analytics · September 2026
14.95M
addresses resolved to 2026 areas
1 in 25
addresses whose area changed
375k
old-to-new links, ABS weighted
3
requests, being built
The 2026 Census uses new boundaries. Every Census figure your product holds today is on the 2021 ones. These three requests are the join between them, for every address in Australia. **They are specified and being built, not live yet.** The data behind all three is complete. The [Microburbs API](https://www.microburbs.com.au/report_generator/api/docs) already resolves any address to its mesh block today, and the three below will sit beside that. Access and plans are on the [API access page](https://www.microburbs.com.au/api-access).
## 1. Which Census area is this address in, in both editions (coming)

```
GET /v1/census/resolve?gnaf_pid=GAVIC720355173

```

```
{
  "gnaf_pid": "GAVIC720355173",
  "census_2021": {"mesh_block": "21327400000", "sa1": "21203155636"},
  "census_2026": {"mesh_block": "21367530000", "sa1": "21207166717"},
  "changed": true,
  "resolved_by": "point_in_polygon",
  "source": {"boundaries": "ABS ASGS Edition 4, July 2026", "addresses": "GNAF, May 2026"}
}

```

Pass `address=` instead of the address id and it is geocoded first, the same way `/v1/geocode/address` works. 96% of addresses resolve by lookup because their 2021 area maps to exactly one 2026 area in the Bureau's own correspondence. The 4% inside areas that split are placed inside the actual 2026 polygon. 644 addresses nationally cannot be placed and come back with `census_2026: null` rather than a guess.
## 2. What an old area became, with the Bureau's own weights (coming)

```
GET /v1/census/lineage?mesh_block_2021=21327400000

```

```
{
  "mesh_block_2021": "21327400000",
  "count": 43,
  "successors": [
    {"mesh_block_2026": "21367380000", "share": 0.4, "quality": "Good"},
    {"mesh_block_2026": "21367390000", "share": 0.2769, "quality": "Good"},
    "… 41 more"
  ],
  "weighting": "population, modelled to residential addresses, by the ABS",
  "source": "ABS ASGS Edition 4 correspondence"
}

```

That block is the Clyde North paddock in [the film](https://www.microburbs.com.au/research/census-2026-clyde-north). Shares sum to one. Ask with `mesh_block_2026=` for the reverse direction, or at SA1 level with `sa1_2021=` and `sa1_2026=`. 366,266 of the 368,287 old areas return a single row with a share of 1.0; 2,021 return more, the widest 81.
## 3. What Census data exists today (coming)

```
GET /v1/census/releases

```

```
{
  "census_night": "2026-08-11",
  "releases": [
    {"when": "2027-04", "name": "Product preview", "status": "pending"},
    {"when": "2027-06", "name": "First release", "status": "pending"},
    {"when": "2027-10", "name": "Second release", "status": "pending"},
    {"when": "2028-H1", "name": "Third release", "status": "pending"}
  ],
  "data_available_now": ["census_2021_values", "census_2026_boundaries", "lineage"],
  "data_available_later": ["census_2026_values"]
}

```

Nothing in the API will ever label a 2021 value as 2026. When the first release lands in June 2027, values arrive under their own edition and this request says so.
## What you will be able to build with it before June 2027
  * Keep five years of 2021 Census data working under the new boundaries, for every address you hold, in one pass.
  * Show a buyer which of 43 new areas their house is in, instead of a suburb average that describes a paddock.
  * Flag every record in your system whose Census area changed, which is about one in twenty-five nationally.


[Read the full API documentation](https://www.microburbs.com.au/report_generator/api/docs) · [Get API access](https://www.microburbs.com.au/api-access)
Census 2026 on Microburbs: [Where the Census is up to](https://www.microburbs.com.au/research/census-2026) · [The places that changed most](https://www.microburbs.com.au/research/census-2026-changed-places) · [Clyde North](https://www.microburbs.com.au/research/census-2026-clyde-north) · [Melonba](https://www.microburbs.com.au/research/census-2026-melonba) · [Tarneit](https://www.microburbs.com.au/research/census-2026-tarneit) · [Donnybrook](https://www.microburbs.com.au/research/census-2026-donnybrook) · [Will my 2021 analysis still work?](https://www.microburbs.com.au/research/census-2026-will-my-analysis-still-work) · **For developers**
### Get API access
Every Microburbs data point through one API. The 2026 Census join for every address in the country is built and on its way.
[API documentation](https://www.microburbs.com.au/report_generator/api/docs)[Plans and access](https://www.microburbs.com.au/api-access)
Microburbs Research, 17 September 2026.
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
