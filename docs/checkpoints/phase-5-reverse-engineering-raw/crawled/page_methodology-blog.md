[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
# 97% of Properties on the Same Street Move Together. City-wide? Just 71%.
We measured price-direction agreement across 368,255 microburbs from 2009 to 2024. That 26-point gap is what Microburbs is built to act on.
![Luke Metcalfe](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Fluke-headshot-circle.png&w=128&q=75)Luke Metcalfe · Microburbs Research · March 2026
[Read the Research](https://www.microburbs.com.au/research/methodology-whitepaper)
## Why does street-level data matter more than city averages?
“Sydney is up 5%.” That number covers millions of properties across thousands of streets. It describes a city. It tells you nothing about your street.
97%
Same-street price direction agreement (2009-2024, 368K microburbs)
71.2%
Same-city price direction agreement (same period, same dataset)
We measured this using annual median sale prices across every microburb in Australia over 15 years. Two houses on the same street moved in the same direction 97% of the time. Two houses in the same capital city agreed only 71.2% of the time. Nationally, it drops to 64%.
Most property data stops at the suburb. The 26-point gap between street and city is where that data fails you. Microburbs starts where that gap begins.
[Detailed research: Market Cohesion](https://www.microburbs.com.au/market-cohesion/whitepaper)
## What we measure and how
### Primary data collection
We gather property data direct from government and institutional sources. Most providers buy from CoreLogic or scrape listing portals. We process raw records ourselves.
### Weekly refresh cycle
Our dataset updates every seven days. CoreLogic, PropTrack, and Domain update monthly. In a market that moved 1.3% in a single month (Sydney, March 2024), four weeks is too slow.
### 28 pockets per suburb, scored individually
We divide each suburb into its mesh block clusters (median: 28 per suburb) and score each one on price, growth, safety, and amenity. CoreLogic and Domain report one number per suburb.
### 85% accuracy over a 15-year backtest
We tested our suburb selection model against actual growth outcomes from 2009 to 2024 across all Australian suburbs with sufficient sales volume. 85% of picks outperformed their SA4 region. No other provider publishes a comparable backtest.
### Street-level crime mapping across 368K areas
Crime varies 286x within [Chatswood](https://www.microburbs.com.au/suburb-reports/Chatswood-NSW-2067) alone (88 vs 25,245 per 100,000). We mapped crime rates for 368,255 microburbs using geocoded incident data from state police agencies.
### Property-level public housing identification
No government publishes which addresses are public housing. We identify them individually across five states using a classification model trained on tenure, ownership, and building data. The growth gap between 0% and 20%+ areas runs 14% to 27% (2020-2022).
### Price estimates for 77% of hidden listings
29% of Australian for-sale listings (27,282 of 93,510 at time of analysis) show “Contact Agent” instead of a price. Our AVM engine produces an estimate for 77% of those. Portals that depend on agent-submitted prices cannot.
### Individual agent quoting accuracy
We tracked 31,208 agents across 427,447 transactions (June 2024 to February 2026). 77.4% have a median listing price below final sale. The typical gap is 3.5%, or $35,000 on a $1M home. Sydney Inner West agents underquote by 7.9%.
## How much are expert forecasts actually worth?
We collected national house price forecasts from major banks and economists for every year from 2009 to 2024. The consensus got the direction right 81% of the time.
A model that simply says “prices will rise” every year, with no analysis, would be right 75% of the time. Australian property prices go up in most years.
**The expert edge over a naive “always up” rule is 6 percentage points over 15 years.** That gap is not statistically significant at the 95% confidence level. The experts may not be adding value.
81%
Expert directional accuracy (2009-2024)
75%
"Always say up" accuracy (same period)
6%
Expert edge (not statistically significant)
38.5%
Equity cost of following PropTrack's 2023 call (80% LVR)
In 2023, PropTrack predicted national prices would fall 8% to 11%. Prices rose 5.5%. For a leveraged investor with an 80% loan, acting on that forecast would have cost 38.5% of equity.
We do not predict national direction. We focus on which streets and suburbs will outperform their region. Our top picks grew at 14.8% per year from 2009 to 2024, against a 7% market average.
[Detailed research: Expert Forecast Reliability](https://www.microburbs.com.au/llm-forecasting-accuracy/whitepaper) · [Detailed research: Investor Performance](https://www.microburbs.com.au/research/street-forecasting-whitepaper)
## How does Microburbs compare on specifics?
Capabilities side by side, based on published documentation and our own testing.  
|   | Microburbs  | CoreLogic  | PropTrack  | Domain  |  
| --- | --- | --- | --- | --- |  
| **Data source**  | Own collection  | Own + third party  | REA listings + third party  | Domain listings + third party  |  
| **Update frequency**  | Weekly  | Monthly  | Monthly  | Monthly  |  
| **Geographic detail**  | Street + 28 pockets per suburb  | Suburb level  | Suburb level  | Suburb level  |  
| **Valuation accuracy**  | 6% error rate  | 13% error rate  | 18% variance on sold prices  | 50-63% undervaluations documented  |  
| **Published accuracy**  | 85% over 15 years  | No published backtest  | 2023: missed by 13-16%  | No published backtest  |  
| **Crime data**  | Microburb level (368K areas)  | None  | None  | Suburb level only  |  
| **Public housing**  | Property-level (first in AU)  | None  | None  | None  |  
| **Hidden prices**  | Shows 77% of hidden listings  | Limited  | Source of hidden prices  | Source of hidden prices  |  
| **Agent accuracy**  | 427K transactions tracked  | None  | None  | None  |  
| **Revenue model**  | Subscription only  | Data licensing  | Advertising (REA Group)  | CoStar Group  |  
Sources: [RBA (Aug 2016)](https://www.rba.gov.au/publications/smp/2016/aug/domestic-economic-conditions.html), [ACCC Digital Platform Services Inquiry (Mar 2024)](https://www.accc.gov.au/inquiries-and-consultations/digital-platform-services-inquiry-2020-25/march-2024-interim-report), [PropTrack 2023 forecast (Broker Daily)](https://www.brokerdaily.au/property/17644-2023-property-prices-to-decline-up-to-11-proptrack)
[Detailed research: AVM Accuracy](https://www.microburbs.com.au/research/avm-accuracy-whitepaper) · [Detailed research: LLM Forecasting Accuracy](https://www.microburbs.com.au/llm-forecasting-accuracy/whitepaper)
## How much does crime vary within a single suburb?
Every property portal shows one crime number per suburb. That treats every street the same. We used geocoded incident data from state police agencies to measure variation at the microburb level.
In [Chatswood](https://www.microburbs.com.au/suburb-reports/Chatswood-NSW-2067) (NSW), the quietest microburb records 88 incidents per 100,000 residents. The busiest: 25,245 per 100,000. That is a 286x range within one suburb boundary. In [Parramatta](https://www.microburbs.com.au/suburb-reports/Parramatta-NSW-2150), the range is 63x.
The price gap between safe and risky microburbs in the same suburb averages 8.2%. On a $600,000 property, that is $49,000. We mapped this for 368,255 microburbs across all states.
[Detailed research: Hyperlocal Crime Variation](https://www.microburbs.com.au/research/crime-whitepaper)
## What does public housing concentration do to growth?
No Australian government publishes which specific addresses are public housing. We built a classification model using tenure type, ownership records, and building characteristics to identify them at the property level across five states.
From 2020 to 2022, areas with zero public housing outgrew areas with 20%+ concentration by 14% to 27% depending on state. In Victoria, the gap was 26.8%. In NSW, each additional 10% of public housing concentration reduced two-year growth by roughly 4%.
26.8%
VIC growth gap, 0% vs 20%+ PH (2020-2022)
16.9%
WA growth gap (same period)
14.0%
NSW growth gap (same period)
Take [Maroubra](https://www.microburbs.com.au/suburb-reports/Maroubra-NSW-2035). The suburb average is 15% public housing. But the Coral Sea Park estate pushes some streets above 60%, while beachside blocks sit at zero. Two buyers 400 metres apart face completely different growth trajectories. Suburb averages hide that.
[Detailed research: Public Housing and Property Prices](https://www.microburbs.com.au/research/public-housing-whitepaper)
## Can you get a price when the listing says “Contact Agent”?
At the time of our analysis, 27,282 of 93,510 for-sale listings across Australia (29%) hid the asking price. In New South Wales, the rate was 37.3%. In Tasmania, 7.4%.
Our AVM engine (6% median error rate, tested against 12 months of settled sales) produces a price estimate for 77% of those hidden listings. That is 21,081 properties. Portals that depend on agent-submitted data cannot fill this gap.
[Detailed research: Price Transparency Study](https://www.microburbs.com.au/research/hidden-prices-whitepaper)
## How accurate is the agent's price guide?
We tracked 31,208 individual agents across 427,447 settled transactions from 2018 to 2024. 77.4% of agents had a median listing price below the final sale price. The typical gap was 3.5%.
On a $1 million home, that is $35,000. In Sydney's Inner West, agents underquoted by 7.9% on average. Only the Northern Territory showed a net overquoting pattern.
[Detailed research: Agent Quoting Accuracy](https://www.microburbs.com.au/research/agent-quoting-whitepaper)
## What investors say after using the data
“I kind of trust data in Microburbs, so that's the most important.”
— Shiv, property investor
“We're completely objective. We stay objective in it.”
— Sam Trembath, Microburbs analyst
### A real pocket-level example
One suburb had 28 pockets. All recent sales came from just 3 of them. The expensive ones.
Domain reported those sales as the suburb median. The whole area looked overpriced. But 25 of the 28 pockets told a different story.
We score all 28 pockets separately. You see which streets are genuinely performing and which are being lifted by a handful of sales on the other side of the suburb.
## Where Microburbs falls short
We are a small team. That means real limits.
**No commercial property.** We cover residential only. If you are looking at office, retail, or industrial, we have nothing for you.
**No rental yield tracking (yet).** Our data covers sale prices, not rents. Rental yield estimates are on the roadmap but not in the current product.
**Thin-market suburbs have wider error bars.** In areas with fewer than 20 sales per year, our AVM accuracy drops and pocket-level scores become less reliable. We flag these areas, but they exist.
**We do not predict national direction.** We will not tell you whether “the market” will go up or down next year. Our model ranks streets and suburbs relative to each other. It does not forecast macro movements.
**Coverage gaps in rural and regional areas.** Our microburb mapping is densest in capital cities and major regional centres. Remote areas with sparse mesh blocks have less data and lower confidence scores.
## Every claim on this page has a whitepaper behind it
Full data, methodology, and competitor analysis. No paywall. No email required.
### Read the Research
Pick any suburb. See how it breaks down, pocket by pocket.
[Explore Suburb Reports](https://www.microburbs.com.au/v3/subscription-options)[Read the Research](https://www.microburbs.com.au/research/methodology-whitepaper)
Microburbs Research, March 2026.
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
