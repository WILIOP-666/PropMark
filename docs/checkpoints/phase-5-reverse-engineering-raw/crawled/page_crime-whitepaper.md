[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
Microburbs Research Whitepaper
# Hyperlocal Crime Variation in Australian Suburbs
Luke Metcalfe, Microburbs Research
22 March 2026
[Accessible summary →](https://www.microburbs.com.au/research/crime-blog)
368K
Microburbs mapped nationally
8
Crime categories standardised
8.2%
Price gap: safe vs risky
286x
Within-suburb range
## Abstract
We compiled crime data from five Australian state police agencies, standardised 100+ raw offence categories into eight comparable groups, and mapped crime at the microburb level (roughly 20 households) for 368,255 microburbs nationally.
The central finding: crime variation within a single suburb is often larger than the difference between suburbs. In Chatswood (NSW), the quietest microburb has a rate of 88 per 100,000. The busiest: 25,245 per 100,000. A 286x range within one suburb, one postcode.
An 8.2% uncontrolled price gap exists between safe and risky microburbs in the same suburb. But this gap reverses when controlled for convenience and lifestyle character. The "safety premium" is a location premium in disguise.
### Contents
  1. [The Problem with Suburb Averages](https://www.microburbs.com.au/research/crime-whitepaper#problem)
  2. [What We Built](https://www.microburbs.com.au/research/crime-whitepaper#method)
  3. [Within-Suburb Variation](https://www.microburbs.com.au/research/crime-whitepaper#variation)
  4. [The Price Premium](https://www.microburbs.com.au/research/crime-whitepaper#price)
  5. [The Safety-Vibrancy Paradox](https://www.microburbs.com.au/research/crime-whitepaper#paradox)
  6. [Hotspot Analysis](https://www.microburbs.com.au/research/crime-whitepaper#hotspots)
  7. [How It Works](https://www.microburbs.com.au/research/crime-whitepaper#model)
  8. [Limitations](https://www.microburbs.com.au/research/crime-whitepaper#limitations)


## 1. The Problem with Suburb Averages
Every property portal, every buyers' agent report, and every suburb profile shows one crime number per suburb. This number is a suburb average. It treats all streets within a suburb as identical.
They are not identical. In [Parramatta](https://www.microburbs.com.au/suburb-reports/Parramatta-NSW-2150), the quietest microburb has a rate of 1,084 per 100,000. The commercial strip near the station: 68,768 per 100,000. They are 63x apart. Both are "Parramatta." Both share the same postcode. A buyer looking up the suburb crime rate gets a single number that describes neither of them.
This is not a niche problem. It applies to every suburb in Australia with a commercial strip, a pub, a train station, or a shopping centre. Which is most of them.
* * *
## 2. What We Built
We sourced crime data from multiple state police agencies and standardised 100+ raw offence categories into eight comparable groups: violent, sexual, property, drugs, property damage, public order, traffic, and other.
Crime data at this resolution is not published for most states. We built a synthetic model using proprietary data and techniques to estimate microburb-level crime rates nationally across eight categories for 368,255 microburbs.
* * *
## 3. Within-Suburb Variation
The headline finding. Crime varies more within suburbs than between them. Here are five suburbs to make the pattern concrete.  
| Suburb  | SUA  | Crime Rate  | vs National  | Microburb Range  | MBs  |  
| --- | --- | --- | --- | --- | --- |  
| [Mosman](https://www.microburbs.com.au/suburb-reports/Mosman-NSW-2088)  | Sydney  | 2,127/100k  | 24% lower  | 0 to 25,447 (25,447x)  | 441  |  
| [Cronulla](https://www.microburbs.com.au/suburb-reports/Cronulla-NSW-2230)  | Sydney  | 1,205/100k  | 57% lower  | 78 to 14,192 (182x)  | 335  |  
| [Cottesloe](https://www.microburbs.com.au/suburb-reports/Cottesloe-WA-6011)  | Perth  | 5,635/100k  | 102% higher  | 496 to 78,336 (158x)  | 107  |  
| [South Yarra](https://www.microburbs.com.au/suburb-reports/South+Yarra-VIC-3141)  | Melbourne  | 6,983/100k  | 151% higher  | 2,251 to 58,112 (26x)  | 395  |  
| [Fortitude Valley](https://www.microburbs.com.au/suburb-reports/Fortitude+Valley-QLD-4006)  | Brisbane  | 5,669/100k  | 103% higher  | 536 to 32,858 (61x)  | 105  |  
| [Noosa Heads](https://www.microburbs.com.au/suburb-reports/Noosa+Heads-QLD-4567)  | Sunshine Coast  | 1,946/100k  | 30% lower  | 462 to 16,072 (35x)  | 145  |  
| [Bondi](https://www.microburbs.com.au/suburb-reports/Bondi-NSW-2026)  | Sydney  | 3,084/100k  | 11% higher  | 1,058 to 18,512 (17x, tight)  | 146  |  
| [Fremantle](https://www.microburbs.com.au/suburb-reports/Fremantle-WA-6160)  | Perth  | 45,663/100k  | 1,538% higher  | 13,307 to 184,814 (14x, uniformly high)  | 176  |  
National median across all categories: 2,788 per 100,000.
**The pattern holds across every capital city.** Suburbs with a commercial strip, train station, or nightlife precinct show wide within-suburb ranges. Mosman is one of Australia's wealthiest suburbs and still has a 25,447x range. Cottesloe in Perth, South Yarra in Melbourne, Fortitude Valley in Brisbane. The only exception is Bondi, where high density and tourism push rates up evenly, producing a tight 17x range.
* * *
## 4. The Price Premium
### 4.1 Uncontrolled: 8.2% gap
Without controlling for anything, the safest microburbs (D1 crime decile) sell for 1.028x their suburb median. The riskiest (D10) sell for 0.946x. That is an 8.2% gap. On a $600,000 property, $49,000.
This finding is intuitive. Buyers pay more for safe streets. The quieter the block, the higher the price relative to the suburb median.
### 4.2 Controlled: the gap reverses
When we compared microburbs with the same convenience score, lifestyle character, and price band, the relationship flipped. Safe microburbs sell for less, not more. The controlled gap is -19.9%. Safe microburbs sell lower in 91% of matched comparisons.  
| Comparison  | Price Gap (safe minus risky)  | Safe sells higher?  |  
| --- | --- | --- |  
| Uncontrolled (raw)  | **+8.2%**  | Yes  |  
| Controlled (same convenience + lifestyle + price band)  | **-19.9%**  | No (9% of cells)  |  
**The "safety premium" is a location premium.** Safe microburbs tend to be in better locations: more convenient, better amenities, more affluent. Strip out the location quality and crime alone does not create a price premium. The vibrant, bustling microburbs command higher prices when matched on amenity.
### 4.3 By crime type (controlled)  
| Crime Type  | Controlled Gap  | Interpretation  |  
| --- | --- | --- |  
| Violent  | -12.3%  | Higher violent crime areas sell higher (nightlife premium)  |  
| Property  | -17.1%  | Higher property crime = more foot traffic = higher price  |  
| Property Damage  | -13.3%  | Tracks with commercial activity  |  
| Drugs  | -11.0%  | Higher drug crime = more urban = higher price  |  
Every crime type shows the same pattern. Controlled for convenience, higher crime goes with higher prices. This is because crime is a proxy for activity, density, and foot traffic. All things buyers pay for.
* * *
## 5. The Safety-Vibrancy Paradox
This is the finding that matters most for investors.
We expected safe streets to cost more. They do, on the surface. But that is because safe streets tend to be in quieter, more residential, less connected locations. The microburbs near the shops, cafes, and station have more crime. They also cost more.
Think of it this way. In [Chatswood](https://www.microburbs.com.au/suburb-reports/Chatswood-NSW-2067), you can buy on a quiet residential street at 88 per 100,000. Or you can buy near the Westfield at 25,245 per 100,000. The apartment near Westfield costs more. Not because buyers want crime. Because they want walkability.
Crime is a signal for vibrancy, not danger. At least in the price data.
**For investors.** Crime data is a lifestyle indicator. "How safe is this specific microburb?" is a legitimate buyer question. "Is this microburb underpriced because of crime?" is not supported by the price data.
* * *
## 6. Hotspot Analysis
The top 1% of microburbs by total crime rate have rates above 44,438 per 100,000. These are commercial centres, transit hubs, and entertainment districts.
### Where are the hotspots?  
| Suburb  | SUA  | Top 1% Microburbs  | % of Suburb  | Mean Rate  |  
| --- | --- | --- | --- | --- |  
| [Fremantle](https://www.microburbs.com.au/suburb-reports/Fremantle-WA-6160)  | Perth  | 92  | 52%  | 72,564/100k  |  
| [Launceston](https://www.microburbs.com.au/suburb-reports/Launceston-TAS-7250)  | Hobart  | 86  | 73%  | 87,406/100k  |  
| [Hobart](https://www.microburbs.com.au/suburb-reports/Hobart-TAS-7000)  | Hobart  | 66  | 69%  | 92,917/100k  |  
| [Midland](https://www.microburbs.com.au/suburb-reports/Midland-WA-6056)  | Perth  | 65  | 63%  | 68,817/100k  |  
| [Cannington](https://www.microburbs.com.au/suburb-reports/Cannington-WA-6107)  | Perth  | 52  | 47%  | 59,782/100k  |  
| [Melbourne CBD](https://www.microburbs.com.au/suburb-reports/Melbourne-VIC-3000)  | Melbourne  | 25  | 6%  | 57,989/100k  |  
### The contrast within normal suburbs  
| Suburb  | SUA  | Total MBs  | In Top 1%  | In Top 5%  | Crime Range  |  
| --- | --- | --- | --- | --- | --- |  
| [Chatswood](https://www.microburbs.com.au/suburb-reports/Chatswood-NSW-2067)  | Sydney  | 284  | 0 (0%)  | 1 (0%)  | 88 to 25,245  |  
| [Parramatta](https://www.microburbs.com.au/suburb-reports/Parramatta-NSW-2150)  | Sydney  | 308  | 6 (2%)  | 42 (14%)  | 1,084 to 68,768  |  
| [Fremantle](https://www.microburbs.com.au/suburb-reports/Fremantle-WA-6160)  | Perth  | 176  | 92 (52%)  | 164 (93%)  | 13,307 to 184,814  |  
Chatswood has zero top-1% hotspots despite a 286x internal range. Parramatta has 6. Fremantle is 52% hotspot microburbs. Three very different profiles, all labelled "high crime" or "mixed" by suburb-level data.
* * *
## 7. How It Works
Crime data at microburb resolution is not publicly available for most of Australia. We built a synthetic model using proprietary data and techniques to estimate street-level crime rates nationally.
The estimates are useful for broad categorisation: identifying which microburbs within a suburb are safe, moderate, or high-crime. They are not precise enough for individual property valuations.
**Dwelling density is the dominant factor.** The more tightly packed the buildings, the higher the crime. This holds across every category. The method is partly measuring urbanisation, which is the biggest driver of crime variation at the micro level.
* * *
## 8. Limitations
We are transparent about what this research cannot do.  
| Limitation  | Impact  |  
| --- | --- |  
| Observational, not causal  | Crime tracks with socioeconomic factors. We cannot separate the effect of crime from income, education, or housing quality.  |  
| Per-capita inflation  | Microburbs with few residents but many visitors (universities, hospitals, shopping centres) show inflated rates. A single assault in a microburb with 10 residents produces 10,000/100k.  |  
| Snapshot, not trend  | The model captures a point in time. "Is crime rising or falling in this microburb?" is a better question but requires data we do not yet have at this resolution for most states.  |  
| Some state data excluded  | One state's police dataset contains data quality issues. It is excluded from the analysis.  |  
**What this research does well:** It shows that suburb-level crime averages are deeply misleading. It identifies which microburbs within a suburb are safe and which are not. It quantifies the relationship between crime, price, and location amenity.
**What it does not do:** It does not prove that crime causes lower prices. It does not predict future crime trends. And it is not precise enough for individual property valuations.
**Microburbs Research** Independent property market research using 90 million Australian listings, backtested to 1990 at street level. Published at [microburbs.com.au/insights](https://www.microburbs.com.au/insights).
[Read the accessible summary →](https://www.microburbs.com.au/research/crime-blog)
**Cite this paper**
Metcalfe, L. (22 March 2026). Hyperlocal Crime Variation in Australian Suburbs. Microburbs Research.
[microburbs.com.au](https://www.microburbs.com.au/)
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
