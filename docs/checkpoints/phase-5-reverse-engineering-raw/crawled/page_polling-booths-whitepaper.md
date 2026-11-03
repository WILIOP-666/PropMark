[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
Microburbs Research Whitepaper
# How your neighbours will vote, every street in Australia: a 2025 baseline and 2026 projection
Luke Metcalfe, Microburbs Research
April 2026
A first-preference voting estimate for every mesh block in Australia, anchored to the actual 2025 federal booth count and forward-projected to April 2026 polling. We document the South Australian House of Assembly result of 21 March 2026 in detail, where One Nation won four lower house seats, the first wins by the party in any lower house outside Queensland. We explain what the street-level political composition reveals about who your neighbours are and where local cohorts are heading.
### Contents
  1. [The question this paper answers](https://www.microburbs.com.au/research/polling-booths-whitepaper#introduction)
  2. [What we built](https://www.microburbs.com.au/research/polling-booths-whitepaper#what-we-built)
  3. [What the analysis shows](https://www.microburbs.com.au/research/polling-booths-whitepaper#findings)
  4. [Worked example: Castlecrag (Sydney) and the teal corridor](https://www.microburbs.com.au/research/polling-booths-whitepaper#castlecrag)
  5. [Worked example: Tamworth (NSW regional) and the One Nation surge](https://www.microburbs.com.au/research/polling-booths-whitepaper#tamworth)
  6. [Worked example: South Australia, 21 March 2026, the One Nation breakthrough outside Queensland](https://www.microburbs.com.au/research/polling-booths-whitepaper#south-australia)
  7. [What this tells a property buyer or investor](https://www.microburbs.com.au/research/polling-booths-whitepaper#investor-implications)
  8. [Direct capital growth claim: what we can and cannot say](https://www.microburbs.com.au/research/polling-booths-whitepaper#capital-growth)
  9. [Limitations](https://www.microburbs.com.au/research/polling-booths-whitepaper#limitations)
  10. [About this research](https://www.microburbs.com.au/research/polling-booths-whitepaper#about)


## The question this paper answers
Suburb-level vote counts have been published since federation. What has been missing is a fine-grained estimate of who voted how within a suburb. A median Sydney suburb is six square kilometres and contains 12,000 to 25,000 people. The political composition of a single street can differ from the composition of the rest of that suburb by 10 to 20 points on any given party.
This research closes that gap. We produce a first-preference voting estimate for every Microburb in Australia, anchored to the actual 2025 federal booth-by-booth count and projected forward to match the latest April 2026 polling. The result is a political-composition layer that joins the rest of the demographic, lifestyle, and risk layers used by the Microburbs platform.
The paper is organised around two questions a buyer or investor would ask. First, _who lives next door politically_ , and second, _what does that tell me about the cohort and direction of the area_. The answer to the second question, on capital growth specifically, is more cautious than the marketing of typical political-data products. We say what we have measured and what we have not.
## What we built
The work takes the 2025 federal House of Representatives first-preference count published by the Australian Electoral Commission, joins each polling place to its containing Statistical Area Level 1 (SA1), and finds the relationship between the SA1’s voting profile and its 834 Census-2016 demographic inputs. It then predicts the voting profile for every SA1 in Australia, including those without an in-suburb booth, and aggregates back down to mesh-block level via the standard ABS mapping.
For the April 2026 forecast we apply the latest YouGov state-by-state poll (taken between 31 March and 7 April 2026, via the Wikipedia opinion-polling tracker), with One Nation receiving an additional inner-metro versus outer-metro versus regional uplift drawn from [Antony Green’s published analysis](https://antonygreen.com.au/sa2026-where-one-nation-will-poll-strongest/). Each Microburb’s projected share is its 2025 booth-derived starting point lifted or cooled to fit the state-level target.
We treat 12 party buckets: Liberal, Labor, Greens, Teal Independents (an explicit named-candidate allowlist of eight federal seats), Nationals, One Nation, other Independents, Liberal Democrats or Libertarians, Shooters Fishers and Farmers, the Christian-conservative cluster, the United Australia Party (deregistered in 2024 and recorded at zero from 2025), and an Other bucket for everything else.
## What the analysis shows
Three findings carry most of the investor-relevant signal.
### Finding 1: Voting clusters are smaller than suburbs
Within any major-city suburb of more than 8 square kilometres, the data shows at least two adjacent SA1s whose first-preference share for any given party differs by more than 10 percentage points. Across the 1,184 metropolitan suburbs that contained more than one labelled booth in 2025, the median intra-suburb spread on Liberal first-preferences alone was 14 percentage points. In Sydney’s Bradfield electorate, predicted Liberal share at the SA1 level ranges from 22% to 49% across the seat. Suburb-average vote totals understate local variation by roughly that 14-point span.
A buyer using suburb-level voting data is reading a number that has been averaged across 14 percentage points of variation. The Microburb-level estimate restores that detail.
### Finding 2: Income predicts Liberal more reliably than it predicts Teal
Across the 6,833 SA1s containing a 2025 polling booth, Liberal first-preference share rises monotonically with median household income, from 21% in the lowest income decile to 31.6% in the highest. Teal share also rises with income but only inside the eight Teal-allowlisted electorates. Nationally Teal averages 1.9% because Teal candidates only appeared on 8 of 151 ballots. Within the Teal seats, Teal share rises from 25% (lowest local income decile) to 33% (highest), but never overtakes Liberal on first preferences. Teal seats are won on two-candidate-preferred after preferences flow.
The non-monotone relationship is the key finding. Income alone pushes Teal up, but the analysis finds that _per-capita personal salary above $104k_ actually pushes Teal down at the very top of the distribution, because the SA1s with the highest individual salaries nationally include regional resource towns and agricultural-heir districts, which are firmly non-Teal. The Teal signature is housing-cost-rich (high rent, high mortgage, finance and professional industries), not necessarily salary-rich.
### Finding 3: One Nation is geographically concentrated, not nationally diffuse
One Nation polled 6.2% nationally in 2025 and is projected at 13% for April 2026. That national average hides a 15-fold gradient. At Castlecrag’s polling booth, One Nation got 0.4% of the first-preference vote. At Tamworth’s pre-poll voting centre, One Nation got 9.7% with a +6.35 percentage point swing from 2022. At smaller country booths in New England (the federal seat held by the Nationals leader), One Nation reaches 14% to 19%.
The cleanest read on this gradient is the South Australian House of Assembly election held on 21 March 2026. South Australia became the first state outside Queensland to elect One Nation members to a lower house. The party won four of 47 House seats: Hammond, MacKillop, Narungga, and Ngadjuri, all regional. Across the 47 districts One Nation polled an average of 22%, ranging from 9% in Bragg (Adelaide leafy-east) to 37.5% in Narungga (Yorke Peninsula). Section 5 covers the SA result in full.
The April 2026 projection inherits this geography. The NSW state target we used is One Nation 26%, taken from the YouGov state poll dated 31 March to 7 April 2026 (sourced via the Wikipedia federal opinion-polling tracker, which republishes YouGov’s released results). Suburbs in inner-metro Sydney project to between 6% and 9%. Suburbs in outer-metro Sydney project to between 11% and 17%. Regional NSW projects to between 22% and 32%. The variation is the design, not noise.
## Worked example: Castlecrag (Sydney) and the teal corridor
Castlecrag is a bayside enclave in Sydney’s Lower North Shore, in the federal electorate of [Bradfield (NSW)](https://www.microburbs.com.au/suburb-reports/Castlecrag). The actual 2025 first-preference result at the Castlecrag polling booth was Liberal 35.5%, Teal Independent (Boele) 35.1%, Labor 17.6%, Greens 5.6%. Liberal beat Teal by three votes out of 905. The whole Bradfield electorate was a knife edge on two-candidate-preferred and Boele eventually won the seat by 26 votes.
Our predictions average 39.8% Liberal and 25.0% Teal across the 49 mesh blocks that make up Castlecrag. The Liberal call matches the booth winner. The Teal share is light by about 10 percentage points. The reason, as Finding 2 sets out, is that Castlecrag’s census signature combines Liberal-positive inputs (long professional working hours, high mortgage, manager and Mandarin-speaker density) with Teal-positive inputs (high rent over $850 per week, finance and professional-services industry density). The Liberal part of the analysis adds those signals cleanly. The Teal part adds the housing-cost signals but partially cancels them with the per-capita-$104k-plus-salary signal it has learned discounts Teal at the very top.
For investors, the Castlecrag finding is that suburb voting hides candidate dynamics. Castlecrag was 60% Liberal in 2016, halved its Liberal share in 2022 when the Teal wave hit, and held flat between 2022 and 2025. The 2025 Liberal drift went mostly to Labor and to minor parties (Libertarians at 1.55%, three times national rate), not back to Teal. The voting pattern is a reasonable proxy for “old-money owner-occupier with high-salary professional household and adult children”.
## Worked example: Tamworth (NSW regional) and the One Nation surge
Tamworth is the regional centre of the federal seat of [New England (NSW)](https://www.microburbs.com.au/suburb-reports/Tamworth), held by Barnaby Joyce of the Nationals. The 2025 first-preference result at Tamworth’s pre-poll voting centre was Nationals 52.8%, Labor 19.3%, One Nation 9.7%, Greens 5.6%, with smaller shares to Independents, Family First, and Trumpet of Patriots. No Liberal candidate stood. The Coalition runs a single ticket in NSW regional seats.
Our predictions have the Coalition aggregate (Liberal plus Nationals) at 42% across the 9 SA1s in Tamworth’s booth catchment, against Joyce’s 52.8% local result. The 11-point shortfall in the Coalition aggregate is within the typical per-party miss. The split inside that aggregate is structurally mis-allocated, with Liberal predicted at 7% and Nationals at 35%, because this work was trained on the national booth file where Liberal and Nationals are separate party labels. It cannot tell, from census inputs alone, that Liberal didn’t put up a candidate in this seat.
The One Nation result at Tamworth is our most accurate per-party call at the booth. Predicted 9.6% versus actual 9.7%. The pattern this work has learned for One Nation is the combination of agriculture and forestry industry density, manufacturing, labourer and machinery-operator occupations, three-bedroom houses, low overseas-born-parent share, low postgraduate density, and Catholic religious affiliation. That signature is statistically distinctive and the regional-NSW training set is rich enough to learn it cleanly.
## Worked example: South Australia, 21 March 2026, the One Nation breakthrough outside Queensland
The South Australian House of Assembly election held on 21 March 2026 produced the most significant minor-party result in modern Australian politics. Labor under Peter Malinauskas won 34 of 47 seats. Liberal collapsed to five seats, the worst result in the party’s history. **One Nation won four lower house seats: Hammond, MacKillop, Narungga, and Ngadjuri.** Until 2026 One Nation had never won a lower house seat anywhere in Australia outside Queensland. David Paton’s win in Ngadjuri makes him the first One Nation MP elected to any state lower house outside Queensland.
The four seats share a common shape. One Nation polled the largest primary share, between 27% and 38% on first preferences. Liberal sat at 22% to 25% in each, well below the level needed to win on preferences. Labor finished second or third in each, although close to One Nation in Hammond and Ngadjuri. Greens, Independents and minor candidates scattered the remainder. After preferences flowed, One Nation took all four seats on the two-candidate-preferred count.  
| District  | Region  | One Nation primary  | Liberal primary  | Labor primary  |  
| --- | --- | --- | --- | --- |  
| Narungga  | Yorke Peninsula and Mid North coast  | 37.5%  | 22.5%  | 15.6%  |  
| MacKillop  | Limestone Coast (southeast)  | 35.3%  | 23.6%  | 15.6%  |  
| Ngadjuri  | Mid North inland  | 34.9%  | 25.3%  | 29.5%  |  
| Hammond  | Murraylands and Riverland  | 27.4%  | 22.3%  | 27.0%  |  
Across the full 47-district House election the One Nation share runs from 9.2% in Bragg (inner-east Adelaide, Liberal hold) to 37.5% in Narungga, a four-fold range inside one state. Inner-leafy Adelaide returned the lowest One Nation primaries in the state. Bragg, Unley, Adelaide proper, Dunstan, Croydon and the inner-Adelaide Liberal-versus-Labor contests all came in under 13%. The graduate-heavy professional cohort underneath these inner seats does not generate One Nation support at meaningful scale. Outer-blue-collar Labor heartland districts (Port Adelaide, Cheltenham, Florey) sat higher, around 20%, even where Labor easily held the seat. The cohort matters more than the geography.
SA is unusually clean as a single-state read on the One Nation cohort because it lacks NSW’s teal corridor and Hunter coal-country contest, QLD’s LNP single-ticket structure, VIC’s inner-Melbourne Greens distortion, and WA’s FIFO-mining metropolitan overlay. The 2026 SA House election is the closest thing to a controlled experiment on where One Nation actually lives and under what conditions it converts polling support into a lower house seat.
The demographic signature behind the four winning seats is consistent. Education completion well below state median. Trade qualifications above state median. Agriculture, forestry or fishing industry presence above state median. Where all three appear together, the One Nation primary tops 30%. Where Liberal also collapses, that primary converts to a seat. Where Liberal holds (or where Labor’s own primary stays strong, as in metropolitan-anchored seats like Elizabeth, Playford and King), One Nation can poll 30%-plus and still lose the two-candidate-preferred count.
The investor read for South Australia is direct. Any SA suburb on the outer-metro or regional side of this gradient should expect its political mix to shift further toward One Nation through the 2026-2028 cycle. Inner-Adelaide cohorts will not. The gradient holds, and the slope steepens.
## What this tells a property buyer or investor
The political composition of a Microburb is a useful read on three things property buyers care about. The platform surfaces these as part of every suburb and property report.
### Cohort fit
Knowing your Microburb’s voting tilt tells you who your neighbours are likely to be in lifestyle terms. A Microburb that polls 35% Teal, 35% Liberal, and 18% Labor (Castlecrag’s signature) describes an owner-occupier inner-Sydney professional cohort with progressive social leanings and economic conservatism. A Microburb that polls 50%-plus Nationals plus 10% One Nation describes a regional family-business cohort. The political signal compresses several lifestyle, age, and household-structure signals into one read.
### Cohort direction
Where the political composition is moving from one election to the next is one signal of demographic change in the area. A Microburb where Liberal share has fallen 5 points and Teal share has risen 8 points across two elections is gentrifying toward an inner-city professional cohort. A Microburb where One Nation has surged 6 points and Liberal has held is consolidating a working-class regional identity. These cohort movements often appear before visible demographic and house-price changes, but this paper does not estimate the lag.
### Local political risk and infrastructure alignment
The political composition of an area tells you which party’s policy program is most likely to be implemented at federal and state level for that constituency. That gives a property potential exposure to different infrastructure-spending, zoning, and tax priorities. A Microburb in a marginal Liberal-Teal electorate tends to attract different infrastructure announcements over a five-year hold than a Microburb in a safe Nationals seat. Buyers and buyers’ agents using the political layer alongside the planning layer in Microburbs reports get a fuller picture of policy exposure.
## Direct capital growth claim: what we can and cannot say
This research does not include a validated direct link between voting composition and capital growth. We have not produced a number that says “a one-percentage-point shift to Teal corresponds to N percent extra annual growth”. Other Microburbs research projects (livability, infrastructure, demographic shift) test the components of cohort movement against capital growth directly. The political layer is best read as input to those projects, not as a standalone growth predictor.
**No measured effect on capital growth in this paper.** A reader who needs a growth-attributed political signal should treat the voting predictions here as an input to a downstream growth analysis, not as the prediction itself.
What we can say is that the cohort and direction signals above (lifestyle fit, demographic momentum, policy exposure) are real and measurable. The political tilt is one useful proxy for the underlying demographic mix, particularly in places where census data is coarse or has aged. We do not put a number on its capital-growth correlation in this paper.
## Limitations
**Census data is from 2016.** ABS Census 2016 is the dataset that has the deepest stable coverage at SA1 level (834 columns of demographic, employment, religion, ancestry, dwelling and commute data, with consistent suppression rules across all 57,470 SA1s). The 2021 release was used as a sanity check but not as the training base because some columns were re-coded between releases in ways that break the year-on-year comparison. The 2026 census is not yet published. Demographic drift from 2016 to 2026 is the principal source of error in suburbs that have changed character quickly. The Castlecrag Teal undershoot of about 10 points is partly attributable to this drift, because the 2022 Teal cohort had not yet formed in the underlying demographics when the 2016 census was taken. The next refresh of this work will rebuild on Census 2026 inputs as soon as the SA1-level release is available.
**Liberal and Nationals are not always separable.** In NSW regional seats where the Coalition runs a single Nationals candidate (or a single Liberal candidate) the per-party split inside the Coalition aggregate is structurally mis-allocated. Treat Liberal-plus-Nationals as the meaningful Coalition number in those seats.
**Teal is undershot at the high-rent end.** This work has only 357 SA1s in the 8 Teal electorates as observed examples. It learns that high rent over $850 per week is the strongest Teal-positive input (20% of weight) and underweights bayside-enclave Teal voters who own outright in detached houses. The Castlecrag-style enclave voter looks under-counted by about 10 points in the Teal estimate.
**Forward projection is a forecast, not a fact.** No federal election in April 2026 is scheduled. The forward numbers are what would happen _if_ an election were held against the latest YouGov polling. Polling carries its own error bars. Treat the April 2026 numbers as a directional read, not a precise count.
**Per-party error.** Tested on suburbs this work was not trained on, the typical miss for each party in percentage points is approximately Liberal 9, Labor 7, Greens 4, Teal 2, Nationals 7, One Nation 2.
## About this research
Author: Luke Metcalfe, founder of Microburbs Research. Production: April 2026, Sydney. Data sources are the AEC House of Representatives first-preference counts (2016, 2019, 2022, 2025) and polling-place coordinates, the ABS 2016 Statistical Area boundaries and the Census 2016 SA1-level demographic inputs, the YouGov April 2026 state-level polling via the Wikipedia opinion-polling tracker, and [Antony Green’s geographic uplift analysis](https://antonygreen.com.au/sa2026-where-one-nation-will-poll-strongest/) for One Nation. Code, intermediate tables, and per-mesh-block predictions are available on request for institutional partners.
This paper is a research output. It is not financial advice. Property purchase decisions should be made with reference to a buyer’s agent, a financial adviser, and the full Microburbs suburb and property reports.
**Microburbs Research** Independent property market research using 90 million Australian listings, backtested to 1990 at street level. Published at [microburbs.com.au/insights](https://www.microburbs.com.au/insights).
**Cite this paper**
Metcalfe, L. (April 2026). How your neighbours will vote, every street in Australia: a 2025 baseline and 2026 projection. Microburbs Research.
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
