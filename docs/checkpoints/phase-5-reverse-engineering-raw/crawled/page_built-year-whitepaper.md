[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
Microburbs whitepaper · April 2026
# Built year for every Australian home
Luke Metcalfe, Microburbs Research
April 2026
## Abstract
Build year drives valuation. It tells investors what was likely built versus rebuilt, what the maintenance bill looks like, and where capital growth has compounded over the past decade. The public record carries a build year for only a small minority of Australian homes. Microburbs reads one for every property, with an 80% probability range and a calibrated per-home confidence score so the rest of the platform knows how much to trust each call.
16.0M
Properties scored
98.7%
Of homes scored where the public record was silent
80%
Of homes scored within a tight era band
82.9%
Mean confidence
**Value created:** Before this layer existed, valuation models, comparable-sales filters and rent benchmarks were treating a 1968 brick veneer and a 2018 rebuild on the same street as the same property. Comparing 675,377 cleaned repeat sales (1990–2026 hold window) and matching homes that share the same neighbourhood, lot size and footprint, homes built 2010–2019 outperform older stock by roughly **2.4 percentage points per year** faster capital growth. Without a build year for both sides of the comparison, that read is impossible.
## Renovation detection
A “1968 brick” home our reading dates to 2014 is almost certainly a knockdown-rebuild. The publicly stated year describes the original structure, which leaves AVMs and rent benchmarks comparing apples to oranges. Where our reading is significantly later than the publicly stated year, treat it as a renovation flag. Where it sits inside the same era, the public record is corroborated.
Two cohorts where the gap matters most for investors:
  * **Knockdown-rebuilds in established suburbs** — 2010–2019 lots interspersed with 1960–1980 stock on the same street. Visible most clearly in the cadastre maps below (e.g. eastern North Kellyville (Sydney), scattered patches across Toorak (Melbourne)).
  * **Pre-1980 stock with genuine renovation premium** — the build year is correct but the kitchen/bathroom finish supports a higher rent and a steeper price band. Not yet captured in the build-year layer (build year is the floor, not the renovation history). A renovation-recency signal is a separate phase of work.


## Confidence distribution
Each prediction carries a per-home confidence score that reflects how much corroborating evidence the reading is backed by. Most predictions fall in the high-confidence tier. The long tail of low-confidence cases sits in remote regions and on properties with sparse market activity and no nearby corroboration.  
| Confidence  | Share of homes  |  
| --- | --- |  
| ≥90%  | 45.9%  |  
| 70-90%  | 34.8%  |  
| 50-70%  | 15.0%  |  
| 30-50%  | 3.7%  |  
| <30%  | 0.5%  |  
Per-home confidence (n = 16,039,721, April 2026). Median 88.8%, mean 82.9%. Properties below 50% confidence (4.2%) are surfaced with a wider band rather than a single year.
**How we use confidence in reports.** When a property’s confidence is ≥ 70% (80.7% of homes), reports show a single predicted year. Below 70% (19.3%) reports show an era band rather than a single year. Below 30% (0.5%) the prediction is suppressed entirely.
## Confidence by state
Confidence is highest where market activity is dense and post-2000 builds dominate. Western Australia, Queensland, and the ACT lead. Tasmania trails because of older stock and sparser corroboration.  
| State  | Mean confidence  |  
| --- | --- |  
| ACT  | 88.6%  |  
| NT  | 86.9%  |  
| WA  | 86.6%  |  
| QLD  | 86.0%  |  
| NSW  | 82.0%  |  
| VIC  | 81.0%  |  
| SA  | 80.7%  |  
| TAS  | 76.9%  |  
Mean per-home confidence by state, April 2026. The 12-point gap between ACT and Tasmania reflects sales density and dwelling-age mix, not model quality.
### Top regions by confidence
The most confident predictions are in fast-growing Australian fringe regions, where market activity is dense and most stock is post-2000.  
| SA4 region  | Homes  | Mean confidence  |  
| --- | --- | --- |  
| Mandurah (WA)  | 73,925  | 90.5%  |  
| Moreton Bay - South (QLD)  | 105,819  | 90.4%  |  
| Perth - North West (WA)  | 301,084  | 90.2%  |  
| Logan - Beaudesert (QLD)  | 218,965  | 89.8%  |  
| Moreton Bay - North (QLD)  | 164,342  | 89.6%  |  
| Gold Coast (QLD)  | 428,935  | 88.9%  |  
| Australian Capital Territory  | 256,635  | 88.6%  |  
| Perth - South West (WA)  | 247,685  | 88.5%  |  
| Darwin (NT)  | 78,707  | 88.5%  |  
## Era distribution by state
The model’s era breakdown matches the long-run picture an investor would expect: Victoria’s pre-1950 share is the highest of the mainland states (21%); Queensland and Western Australia are dominated by post-1980 stock (~63% and ~72% respectively); the ACT is essentially a 1950+ jurisdiction (98%). Cells shaded blue are the dominant era for that state; intensity scales with share.  
| State  | Pre-1900  | 1900-19  | 1920-49  | 1950-79  | 1980-99  | 2000-09  | 2010-19  | 2020+  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| NSW  | 2.8%  | 1.2%  | 7.2%  | 7.1%  | 26.6%  | 10.7%  | 37.6%  | 6.8%  |  
| VIC  | 4.2%  | 2.6%  | 14.5%  | 12.4%  | 18.5%  | 7.6%  | 30.4%  | 9.8%  |  
| QLD  | 0.2%  | 0.3%  | 2.7%  | 6.8%  | 28.5%  | 18.9%  | 33.4%  | 9.2%  |  
| WA  | 0.1%  | 0.4%  | 3.5%  | 16.7%  | 30.3%  | 19.1%  | 24.7%  | 5.2%  |  
| SA  | 1.9%  | 1.9%  | 8.2%  | 22.0%  | 22.1%  | 11.5%  | 27.3%  | 5.0%  |  
| TAS  | 4.3%  | 3.0%  | 11.7%  | 27.0%  | 20.0%  | 6.6%  | 21.3%  | 6.2%  |  
| ACT  | 0.0%  | 0.0%  | 1.0%  | 19.7%  | 26.4%  | 12.5%  | 28.6%  | 11.8%  |  
| NT  | 0.0%  | 0.0%  | 0.2%  | 5.2%  | 45.4%  | 20.2%  | 25.7%  | 3.4%  |  
Era share by state. Bar intensity in each cell scales with the cell’s percentage. Blue cell is the dominant era for that state.
## Where the model is most confident
Confidence concentrates in suburbs where most homes were built recently and most have a recent listing. These are visible as solid blue cores in the cadastre maps below. Older stock and remote regions get faded colours.
## Validation
The reading is validated against more than 200,000 properties where the build year is independently verifiable. On a strictly held-out evaluation that prevents any neighbour leakage between training and test, the typical reading lands within seven years of the verifiable truth. Roughly four in five predictions land within ten years, and roughly four in five era calls match the verifiable era.
## What this enables
For investors and buyers’ agents, the build-year signal sits beneath several things they actually care about: heritage flags, capital-growth bands, renovation upside, and rental yield expectations. Comparing 675,377 cleaned repeat sales (1990–2026 hold window) and matching homes that share the same neighbourhood, lot size and footprint, homes built 2010–2019 outperform older stock by roughly 2.4 percentage points per year faster capital growth. The build-year signal is what makes that comparison possible.
**What the signal cannot do.** It cannot replace a building inspection, contract sighting, or council record check. Decade-boundary calls (1979 vs 1981) will sometimes flip. The predicted era band carries the right uncertainty. The single-year point estimate is convenient but should never be treated as exact.
Microburbs · April 2026. Confidence and era figures rounded to one decimal. Validation metrics computed on a held-out evaluation set with strict spatial separation.
**Microburbs Research** Independent property market research using 90 million Australian listings, backtested to 1990 at street level. Published at [microburbs.com.au/insights](https://www.microburbs.com.au/insights).
**Cite this paper**
Metcalfe, L. (April 2026). Built year for every Australian home. Microburbs Research.
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
