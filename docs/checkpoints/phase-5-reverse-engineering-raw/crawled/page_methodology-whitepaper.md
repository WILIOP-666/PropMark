[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
Microburbs Research Whitepaper
# Why Our Methodology Produces More Trustworthy Property Data
Luke Metcalfe, Microburbs Research
March 2026
[Accessible summary →](https://www.microburbs.com.au/research/methodology-blog)
85%
15-year forecast success rate
97.3%
Street-level directional accuracy
7.8pp
Annual outperformance
50+
API endpoints
## Abstract
Australian property data is dominated by companies whose business models create conflicts of interest. PropTrack is owned by REA Group, the largest listing platform. Domain is owned by CoStar. CoreLogic (now Cotality) serves mortgage lenders and agents. Each has commercial incentives that shape how they present market data.
Microburbs uses property-level comparable sales, daily-refreshed listings, and AVM models validated on 182,517 out-of-sample transactions. On sub-$800K properties, 87% of valuations land within 10% of sale price. The forecast model achieves a 65.4% directional accuracy rate backtested to 1990 across 14,069 suburbs.
This whitepaper documents how we built that system, why our approach differs from incumbent providers, and where it still falls short.
### Contents
  1. [The Problem With Property Data in Australia](https://www.microburbs.com.au/research/methodology-whitepaper#problem)
  2. [Seven Pillars of Our Methodology](https://www.microburbs.com.au/research/methodology-whitepaper#pillars)
  3. [How the Industry Compares](https://www.microburbs.com.au/research/methodology-whitepaper#competitors)
  4. [What This Means for Investors](https://www.microburbs.com.au/research/methodology-whitepaper#investors)
  5. [The Platform: 50+ Endpoints, One API](https://www.microburbs.com.au/research/methodology-whitepaper#platform)
  6. [Our Limitations](https://www.microburbs.com.au/research/methodology-whitepaper#limits)
  7. [Conclusion](https://www.microburbs.com.au/research/methodology-whitepaper#conclusion)


## 1. The Problem With Property Data in Australia
Australian property data is dominated by companies whose business models create potential conflicts of interest. PropTrack is owned by REA Group, Australia's largest property listing platform. Domain is owned by CoStar Group, a global commercial property data company. CoreLogic (now Cotality) is a data and analytics firm whose clients include mortgage lenders and real estate agents. Each has commercial incentives that shape how they present market data.
Investors rely on expert macro forecasts from banks and economists. Over 15 years, those forecasts have a 6 percentage point edge over a strategy of simply predicting "prices will rise every year." That gap is not statistically significant. Bootstrap testing across 50,000 simulated datasets shows that the naive strategy performs equally well in 29% of plausible realities.
81%
Expert direction accuracy
75%
"Always say up" accuracy
6pp
Expert edge (not significant)
43%
Bearish call failure rate
Bearish calls fail 43% of the time. All three failures between 2010 and 2024 occurred when governments pivoted policy in ways no forecaster anticipated. In 2019, a surprise election result reversed a credit crunch. In 2020, HomeBuilder and emergency rate cuts overrode pandemic headwinds. In 2023, net migration of 510,000 people made every capital city forecast wrong.
Expert accuracy has also deteriorated. Between 2010 and 2017, consensus forecasts achieved 100% directional accuracy with a 2.4 percentage point average error. Between 2018 and 2025, accuracy dropped to 62% and the average error tripled to 7.9 percentage points.
Investors need better tools. Not better opinions. Better data, at finer resolution, tested against outcomes.
* * *
## 2. Seven Pillars of Our Methodology
### Pillar 1: Primary Data Collection
We collect and process our own data. We do not license it from another provider. This matters for three reasons.
First, third-party data has documented quality issues (see Section 3). Second, we control update frequency. Our data refreshes weekly. Most competitors update monthly. In a market that moved 22.1% in a single year (2021), monthly updates miss critical turning points.
Third, we compute hedonic medians rather than simple medians. A simple median skews when only expensive properties sell in a given month. A hedonic median adjusts for the composition of what sold. This is the difference between measuring the market and measuring what happened to be on the market.
We also classify each new address in the national GNAF database as genuine supply or data noise. Our research found that 42% of raw address changes are noise, not real dwellings. Providers counting raw addresses systematically overstate new supply.
We also compute bedroom-specific hedonic medians. A suburb where most recent sales were 2-bedroom apartments looks cheap on a simple median. A suburb where 5-bedroom houses dominated looks expensive. Our smart median separates by bedroom count and shows the typical property profile (bathrooms, car spaces, land size, dwelling type) for each band. In [Castlecrag](https://www.microburbs.com.au/suburb-reports/Castlecrag-NSW-2068), the step from 3 to 4 bedrooms adds $1.2 million. That is not visible in a single suburb median.
### Pillar 2: Geographic Granularity
Our market cohesion research measured how consistently properties move in the same price direction at six geographic levels. The results are unambiguous.  
| Geographic Level  | Same-Direction Movement  | Improvement Over National  |  
| --- | --- | --- |  
| National  | 64.3%  | Baseline  |  
| Capital City  | 71.2%  | +6.9pp  |  
| SA4 Region  | 78.5%  | +14.2pp  |  
| SA2 District  | 85.4%  | +21.1pp  |  
| Suburb  | 92.1%  | +27.8pp  |  
| **Street**  | **97.3%**  | **+33.0pp**  |  
Two properties on the same street have a 97.3% chance of moving in the same direction. Two properties in the same city have only a 71.2% chance. National data captures just 64.3% of individual property movements.
**What this means in practice:** When a headline says "Sydney is up 5%," it describes a statistic that explains less than two-thirds of what happens to individual properties. Our street-level analysis captures 97% of the signal. That is the difference between a weather forecast for the whole of NSW and one for your street.
A typical suburb contains roughly 28 distinct pockets. Each pocket can behave differently from its neighbours. Standard data providers treat the entire suburb as a single unit. We score each pocket separately.
Consider a suburb where most recent sales come from three of its 28 pockets. A simple suburb median is driven entirely by activity in those three areas. Buyers looking at the other 25 pockets receive a misleading price signal. Our pocket-level analysis separates these dynamics and shows exactly which parts of the suburb are performing.
#### Crime varies 286x within a single suburb
We compiled crime data from five state police agencies, standardised 100+ offence categories into eight groups, and mapped crime at the microburb level (roughly 120 homes) for 368,255 microburbs nationally. The central finding: crime variation within a suburb is often larger than the difference between suburbs.
In [Chatswood](https://www.microburbs.com.au/suburb-reports/Chatswood-NSW-2067) (NSW), the quietest microburb has a predicted crime rate of 88 per 100,000. The busiest: 25,245 per 100,000. That is a 286x range within one suburb, one postcode. In [Parramatta](https://www.microburbs.com.au/suburb-reports/Parramatta-NSW-2150), the quietest pocket sits at 1,084 per 100,000 while the commercial strip near the station reaches 68,768. They are 63x apart. Both are "Parramatta." A buyer looking up the suburb crime rate gets a single number that describes neither of them.
An 8.2% price gap exists between safe and risky microburbs in the same suburb. On a $600,000 property, that is $49,000.
#### Public housing: a 20% growth gap, invisible without property-level data
No government in Australia publishes which specific properties are public housing. The best available data was area-level percentages from the ABS Census. Microburbs built a proprietary algorithm that identifies individual public housing properties across five states. This is the first dataset of its kind in Australia.
The growth gap is national. In every state analysed, areas with zero public housing outgrew areas with 20%+ public housing by 14 to 27 percentage points from 2020 to 2022. In Victoria, the gap was 26.8%. In NSW, each additional 10% of local public housing concentration costs roughly 4% of growth over a two-year boom cycle.  
| State  | SUA  | 0% PH Growth  | 20%+ PH Growth  | Gap  |  
| --- | --- | --- | --- | --- |  
| Victoria  | Melbourne  | +46.2%  | +19.4%  | 26.8pp  |  
| Western Australia  | Perth  | +25.9%  | +9.0%  | 16.9pp  |  
| NSW  | Sydney  | +35.7%  | +21.7%  | 14.0pp  |  
| Queensland  | Brisbane  | +41.3%  | +29.2%  | 12.1pp  |  
| South Australia  | Adelaide  | +35.0%  | +27.9%  | 7.1pp  |  
The pattern reverses in downturns. In NSW from 2022 to 2023, zero-PH areas fell 5.3% while areas with 40%+ public housing held flat. High-PH areas offer downside protection. Suburb averages cannot reveal any of this. Only property-level data can.
### Pillar 3: Pattern Discovery Without Narrative Bias
Most data providers start with a thesis and test it. "Interest rates drive prices." "Supply and demand set the market." "Working from home will reshape cities." These are narratives. They may be true. They may not. The problem is that testing a belief is different from discovering what actually matters.
Our forecasting approach starts from raw data and discovers patterns without preset assumptions. It uses 31 features and ranks them by predictive importance. Over a 15-year backtest, this approach has achieved an 85% success rate. Top picks grew at 14.8% compound annual growth, compared to 7% for the broader market. That is 7.8 percentage points of outperformance per year.
85%
15-year forecast success rate
14.8%
Top picks CAGR
7.0%
Market average CAGR
7.8pp
Annual outperformance
We do not assume which factors matter. We measure them. When we tested whether income predicts suburb growth, the data revealed that education levels matter more. No human analyst proposed that hypothesis. The pattern emerged from the data.
### Pillar 4: Unified National Modelling
Conventional wisdom says that local markets require local models. Our research tested this by building separate models for each state and comparing them to a single national model.
The result was counter-intuitive. For six of eight states, the national model outperformed the state-specific model on ranking ability and spread between best and worst predictions. Tasmania dropped to less than one-third of the national model's predictive power. Queensland's R-squared fell to 0.012, below the national 0.015.
Victoria was the notable exception, outperforming the national model across all metrics. But the broader lesson holds: fragmenting training data costs predictive power in most markets. A national model learns transferable patterns that isolated state models cannot see.
**Why this matters:** "Local knowledge" sounds compelling. But in practice, splitting data by state means each model has fewer observations to learn from. Patterns that are visible nationally (such as the relationship between development applications and future price growth) become invisible when the dataset is too small. Only Victoria has enough distinctive dynamics to justify a separate approach.
### Pillar 5: Honest Validation
We test our predictions against outcomes and publish the results.
We also tested the competition. Seven large language models were given the same suburb prediction task across 17,096 forecasts. Six of seven underperformed random selection by an average of -0.35% per year. LLMs are a competing approach to property forecasting. They failed. Our structured, feature-based model with 15 years of training data outperforms them because it learns from actual property transactions, not text patterns.
Our suburb forecasting model captures approximately 25% of what drives relative price movements. But forecasting is only one of our models. The full Microburbs platform runs 20+ independent research models covering supply pressure, rental dynamics, demographic shifts, transport access, renovation impact, market distress signals, mean reversion, community depth, and more. Each model is published as a standalone research paper with its own validation. Together, they cover the factors that macro forecasters dismiss as "unpredictable."
This honesty makes the 85% success rate more credible, not less. Nobody trusts a provider that claims to be always right.
### Pillar 6: Market Transparency Tools
#### Agent quoting accuracy: 77% underquote
We analysed 427,447 property transactions from June 2024 to February 2026 and tracked 31,208 individual agents with 3 or more sales. The result: 77.4% of agents have a median listing price below the actual sold price. The typical agent underquotes by 3.5%. On a $1 million home, that is $35,000 below the final price.
The pattern varies sharply by region. Sydney Inner West agents underquote by 7.9% at the median. Adelaide South follows at 7.7%. Only the Northern Territory bucks the trend, with agents overquoting by 1.2%. Expensive properties attract larger gaps: homes above $2 million are underquoted by roughly 5%, while below $500,000 quoting is nearly accurate (+0.6%).
No other property data provider tracks individual agent quoting accuracy at this scale.
#### Hidden prices: 29% of listings hide the asking price
We analysed all 93,510 properties currently listed for sale across Australia. 27,282 of them (29.2%) hide the asking price. Buyers see "Contact Agent" or "By Negotiation" instead of a dollar figure. The rate varies sharply: 7.4% in Tasmania, 37.3% in New South Wales.
When prices are hidden, Microburbs can still show a price for 77.3% of those properties (21,081 of 27,282). That is 21,081 listings where the buyer would otherwise have no price information at all. This is not a premium feature. It is a structural advantage of having our own valuation engine.
### Pillar 7: Open Platform
Everything on our website is available through a single API. 50+ endpoints covering property valuations, sales history, rental yields, risk factors, demographics, amenities, schools, zoning, development applications, CMA comparables, growth forecasts, and more. Updated daily.
This matters for two reasons. First, it proves the data is structured and machine-readable, not just marketing copy. Second, it means third parties can build on our data layer, verify our claims independently, and integrate our intelligence into their own products.
AI and agentic platforms, mortgage fintechs, buyer's agent tools, and proptech startups use our API to build data-rich products in weeks instead of months. The API and the website run on the same data layer. If you can see it on our site, you can pull it programmatically.
* * *
## 3. How the Industry Compares
The following comparison draws on public sources, regulatory filings, and documented cases. Every claim is attributable to a specific source.
### 3.1 The Major Providers  
| Dimension  | Microburbs  | CoreLogic  | PropTrack (REA)  | Domain  |  
| --- | --- | --- | --- | --- |  
| **Data source**  | Primary collection  | Own + third-party  | REA listings + third-party  | Domain listings + third-party  |  
| **Update frequency**  | Weekly  | Monthly  | Monthly  | Monthly  |  
| **Geographic resolution**  | Street and pocket level  | Suburb level  | Suburb level  | Suburb level  |  
| **Median method**  | Hedonic (composition-adjusted)  | Hedonic index  | Hedonic  | Simple median  |  
| **AVM accuracy**  | 6% error rate  | 13% error rate  | 18% variance on same-property sales  | 50-63% undervaluations documented  |  
| **Published backtest**  | 85% success, 15-year period  | None published  | 2023: predicted -8% to -11%, actual +5.5%  | None published  |  
| **Crime data resolution**  | Microburb level (120 homes), 368K areas mapped  | None  | None  | Suburb level only  |  
| **Public housing data**  | Property-level identification (first in Australia)  | None  | None  | None  |  
| **Agent quoting accuracy**  | 427K transactions, 31K agents tracked  | None  | None  | None  |  
| **Hidden price resolution**  | Shows price for 77% of hidden listings  | Limited  | Hides 29% of listings (source portal)  | Hides prices on many listings  |  
| **Revenue model**  | Subscription (no transaction incentive)  | Data licensing  | REA Group advertising  | CoStar Group (listings + commercial data)  |  
### 3.2 Documented Issues
#### CoreLogic
The Reserve Bank of Australia flagged CoreLogic data as "overstated" in August 2016. CoreLogic has made silent downward revisions without public methodology disclosure. SQM Research described the CoreLogic index as "suspect" following unexplained methodology changes.
Auction clearance rates present a particular problem. CoreLogic preliminary auction clearance rates have been reported at 70.5%, while SQM Research estimated the final result at approximately 40%. This inflation creates a false impression of market strength.
CoreLogic's AVM has a documented 13% error rate. At the property level, documented cases include a $121,000 undervaluation and a $100,000 sale price recording error.
#### PropTrack (REA Group)
PropTrack's 2023 national forecast predicted a decline of 8% to 11%. The actual result was growth of 5.5%. Every capital city call was wrong that year. For a leveraged investor with 80% loan-to-value ratio, acting on that forecast would have cost 38.5 percentage points of equity.
PropTrack's AVM shows 18% variance on the same sold properties. Documented issues include identical pricing for dissimilar units and failure to account for renovations. The ACCC Digital Platform Services Inquiry named both CoreLogic and PropTrack as data brokers under scrutiny.
#### Domain (CoStar Group)
Domain valuation errors have been documented in public forums, including significant undervaluations with "High Confidence" ratings. Domain's auction clearance reporting has shown substantial gaps between reported and actual results.
### 3.3 Specialist Providers
DSR Data applies a rules-based scoring formula to rank suburbs. This is a fundamentally different approach from pattern discovery. A rules-based system tests specific beliefs about what drives growth. Our approach finds what actually predicts growth from the raw data, without assuming the answer in advance.
The distinction matters. A fixed formula can only find what it is designed to look for. Data-driven pattern discovery can surface relationships that no human analyst would hypothesise.
* * *
## 4. What This Means for Investors
Our research across 40,700 house transactions with full cost accounting (stamp duty, agent fees, interest, maintenance, insurance, rates, land tax) reveals the distribution of investor outcomes.
5.5%
Median investor return (pa)
13.6%
Top 10% return (pa)
8.8%
Top 25% return (pa)
2.4%
Bottom 25% return (pa)
The median investor earns 5.5% per year after all costs. The top 10% earn 13.6%. The gap between top and bottom quartile is 6.4 percentage points. That gap represents the value of better property and location selection. It is addressable.
### The Cost of Wrong Macro Forecasts
In 2023, PropTrack forecast a national decline of 8% to 11%. The market rose 5.5%. For an investor with an 80% loan-to-value ratio, acting on that forecast (selling or not buying) cost 38.5 percentage points of equity. That is not a rounding error. That is a life-changing amount of money on a typical investment property.
Over 16 years, an investor who followed expert consensus would have turned $100 into $241. An investor who simply held would have turned $100 into $233. The consensus-follower gained $8 over 16 years. After transaction costs, the consensus-follower underperformed.
### Street-Level Precision in Practice
During a recent client engagement, we examined a suburb that Domain priced using a single median figure. The suburb contained 28 distinct pockets. Most recent sales had occurred in just three of those pockets. The suburb median reflected activity in those three areas only. The remaining 25 pockets told a different story.
This is not an edge case. It is how property markets work. Suburbs are not homogeneous. A suburb like [Castlecrag](https://www.microburbs.com.au/suburb-reports/Castlecrag-NSW-2068) in Sydney's lower north shore is a peninsula. A 1-kilometre radius around a Castlecrag property extends into [Northbridge](https://www.microburbs.com.au/suburb-reports/Northbridge-NSW-2063) and [Willoughby](https://www.microburbs.com.au/suburb-reports/Willoughby-NSW-2068). Peninsula suburbs like [Cremorne](https://www.microburbs.com.au/suburb-reports/Cremorne-NSW-2090) and [Mosman](https://www.microburbs.com.au/suburb-reports/Mosman-NSW-2088) present similar boundary effects. Our supply calculations account for these geographic realities. A suburb-level average cannot.
* * *
## 5. The Platform: 50+ Endpoints, One API
Every data point on our website is available through a single REST API. Property valuations, sales history, rental yields, risk overlays (flood, fire, heritage, noise, easements), demographics, schools, amenities, zoning, development applications, CMA comparables with 30+ feature matching, growth forecasts, and street-level analytics. Updated daily.
This matters for two reasons. First, it proves the data is structured and machine-readable, not just marketing copy. Second, it means third parties can build on our data layer, verify our claims independently, and integrate our intelligence into their own products.
50+
API endpoints
90M+
Property records
Daily
Data updates
AI platforms like Decider feed our data directly into LLM agents. Property platforms like Envelope generate full property profiles from a single API call. Mortgage fintechs use our AVM for automated lending decisions. Buyer's agents white-label our reports under their own brand.
* * *
## 6. Our Limitations
No methodology captures everything. Acknowledging limits is part of what makes our work credible.  
| Limitation  | What It Means  |  
| --- | --- |  
| **Our forecasting model captures approximately 25% of relative price movements**  | This is one model within a platform of 20+. Our synthetic thresholds, supply pressure index, rental growth model, market distress signals, and demographic models each address different drivers. The 25% figure applies to the suburb forecasting model in isolation. The full platform covers far more ground.  |  
| **Supply effects are strongest in Melbourne**  | When we tested our supply model at the property level (rather than the suburb level), the supply-to-price relationship remained statistically significant only in Melbourne. In Adelaide and Perth, the suburb-level results were composition artefacts. We corrected our findings. Most providers would not have tested this distinction.  |  
| **Low R-squared is expected, not a weakness**  | We normalise by city, buy year, and sell year before measuring predictive power. This strips out the easy-to-predict components (location premium, market cycle). The residual is small but real and statistically significant across 4.5 million observations. The actionable metric is the spread between our best and worst quintile picks: 3.36 percentage points.  |  
| **Peninsula suburbs require caution**  | Suburbs like [Castlecrag](https://www.microburbs.com.au/suburb-reports/Castlecrag-NSW-2068), [Cremorne](https://www.microburbs.com.au/suburb-reports/Cremorne-NSW-2090), and [Mosman](https://www.microburbs.com.au/suburb-reports/Mosman-NSW-2088) have unusual geography. Radius-based supply measurements can bleed across suburb boundaries. We flag these cases. Suburb-level providers cannot.  |  
| **87% national coverage**  | The remaining 13% are extremely thin markets where any valuation would be unreliable. We prefer honest gaps to fabricated estimates.  |  
We publish these limitations because trust requires honesty. A provider that claims to explain everything explains nothing credibly.
* * *
## 7. Conclusion
Trust in property data comes from four qualities.
**Independence.** We are not paid when a property transacts. PropTrack is owned by REA Group (listings). Domain is owned by CoStar Group. CoreLogic serves mortgage lenders and agents. We have no incentive to talk the market up or down.
**Transparency.** We publish our accuracy. We publish when our approaches fail. Competitors publish press releases.
**Specificity.** We do not say "Sydney is up 5%." We break a suburb into its constituent pockets and score each one separately. Specific is credible. Vague is marketing.
**Honesty about limits.** Our forecasting model captures about 25% of relative price movements in isolation. But the full platform runs 20+ models covering supply, demographics, rental dynamics, infrastructure, and more. We are transparent about what each model does and does not explain.
Bank forecasts are right 81% of the time. But just saying "prices will rise" is right 75% of the time. The expert edge is 6 points and not statistically significant. Our street-level predictions are right 85% of the time, tested over 15 years. We work where the signal is cleanest: at the street, not the city.
The gap between the median investor (5.5% per year) and the top 10% (13.6% per year) is real and addressable. Better data, at finer resolution, tested against outcomes. That is what we provide.
**Microburbs Research** Independent property market research using 90 million Australian listings, backtested to 1990 at street level. Published at [microburbs.com.au/insights](https://www.microburbs.com.au/insights).
[Read the accessible summary →](https://www.microburbs.com.au/research/methodology-blog)
**Cite this paper**
Metcalfe, L. (March 2026). Why Our Methodology Produces More Trustworthy Property Data. Microburbs Research.
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
