[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
Microburbs Research Whitepaper
# When Density Becomes Oversupply
Luke Metcalfe, Microburbs Research
June 2026
[Accessible summary →](https://www.microburbs.com.au/research/density-oversupply-blog)
## Abstract
We analysed 2.8 million property resales across 87 Australian markets from 2010 to 2026. This determined whether residential density at the microburb level predicts which properties underperform. The answer is conditional. In 11 high-risk markets (including 10 inner-city markets like [Parramatta (Sydney)](https://www.microburbs.com.au/suburb-reports/Parramatta-NSW-2150) and Melbourne's inner suburbs), properties in the densest microburbs underperformed their lower-density neighbours. They trailed by roughly 1 to 2 percentage points per year from 2018 to 2026. In 54 regional markets, the opposite held. Density was associated with better returns, not worse. A predictive model trained separately on each market achieved a 1.0 percentage point annual spread between its best and worst picks. This was positive in 15 of 17 test years from 2010 to 2026.
### Contents
  1. [Key Findings](https://www.microburbs.com.au/research/density-oversupply-whitepaper#key-findings)
  2. [Methodology](https://www.microburbs.com.au/research/density-oversupply-whitepaper#methodology)
  3. [Results](https://www.microburbs.com.au/research/density-oversupply-whitepaper#results)
  4. [Defence Against Criticism](https://www.microburbs.com.au/research/density-oversupply-whitepaper#defence)
  5. [Limitations](https://www.microburbs.com.au/research/density-oversupply-whitepaper#limitations)
  6. [Conclusion](https://www.microburbs.com.au/research/density-oversupply-whitepaper#conclusion)


## Key Findings
  * **Density is not universally bad.** Of 87 markets tested, density penalises returns in only 33. In the remaining 54, denser microburbs outperformed. The difference is how density manifests. It can reflect oversupply in inner-city apartment gluts. Alternatively, it can mean centrality and proximity to a regional town centre.
  * **11 markets carry high density risk.** Properties in the densest half of these markets underperformed the less-dense half. They trailed by 0.5% to 1.9% per year from 2010 to 2026. Ten are in Sydney, Melbourne, or Canberra. The eleventh is NT Outback, a small volatile market.
  * **The penalty intensified after 2018.** In [Parramatta (Sydney)](https://www.microburbs.com.au/suburb-reports/Parramatta-NSW-2150), the gap widened to +2.7% per year from 2018 to 2026. Before 2017, dense areas in the same market actually outperformed during the apartment construction boom.
  * **Street-level unit count matters more than area-level density.** The number of apartments on a single street is a stronger signal than dwellings per square kilometre. [Wentworth Point (Sydney)](https://www.microburbs.com.au/suburb-reports/Wentworth+Point-NSW-2127), where the median street has 494 units, underperformed its matched benchmark by more than 5 percentage points per year from 2018 to 2026.
  * **A predictive model achieves a +1.0% annual spread** between best and worst picks across all 87 markets. This was positive in 15 of 17 test years from 2010 to 2026. The model is more useful for ranking cohorts of properties than for confidently labelling any individual property as a loser.


## Methodology
The analysis used 2.8 million verified property resales across Australia. These were buy-then-sell pairs. Each property's annual return was benchmarked against properties held for a similar duration and sold in the same year. This produced a relative performance measure that strips out broad market cycles.
Properties were excluded if they showed signs of renovation or produced extreme returns. This cleaning removed roughly one in five transactions to prevent outliers from distorting results.
The analysis covered 87 geographic markets. A predictive model was trained separately for each. For each test year from 2010 to 2026, the model trained only on earlier resales and predicted outcomes for properties sold in the test year. No future data was available during training or model selection.
The model used measures of local crowding. It assessed dwelling counts per microburb, units per street, turnover frequency, and local demographics. It did not use price levels, forecasts, or any information derived from the resale event itself.
## Results
### Three density risk zones
We classified each market by whether high-density microburbs underperformed low-density ones within the same market. Every market falls into one of three zones.
Red Zone
-2%/yr
Dense streets trail by 1-3% per year since 2018. Inner Sydney and Melbourne.
Amber Zone
-0.5%/yr
Small drag from density. Brisbane, Adelaide, outer metro.
Green Zone
+0.5%/yr
Density helps here. Regional centres, Perth, most of Australia.
**Why the split?** One plausible explanation: in inner-city Sydney and Melbourne, high density correlates with large-scale apartment development where many units compete for the same pool of buyers. In regional centres, "high density" typically means "close to the main street," where proximity to amenity works in the property's favour. The data cannot prove causation, but the geographic pattern is consistent with an oversupply mechanism in capital city cores.
### The 11 high-risk markets  
| Market (SA4)  | SUA  | Density Gap (2010-2026)  | Post-2018 Gap  | Model Spread  |  
| --- | --- | --- | --- | --- |  
| [Sydney - Parramatta](https://www.microburbs.com.au/suburb-reports/Parramatta-NSW-2150)  | Sydney  | +1.9%/yr  | +2.7%/yr  | +3.4%/yr  |  
| [Sydney - Ryde](https://www.microburbs.com.au/suburb-reports/Ryde-NSW-2112)  | Sydney  | +1.9%/yr  | +3.2%/yr  | +1.0%/yr  |  
| [Melbourne - Inner East](https://www.microburbs.com.au/suburb-reports/Kew-VIC-3101)  | Melbourne  | +1.7%/yr  | +1.1%/yr  | +3.1%/yr  |  
| [Sydney - North Sydney and Hornsby](https://www.microburbs.com.au/suburb-reports/North+Sydney-NSW-2060)  | Sydney  | +1.2%/yr  | +2.4%/yr  | +2.4%/yr  |  
| [Melbourne - Inner South](https://www.microburbs.com.au/suburb-reports/Brighton-VIC-3186)  | Melbourne  | +1.2%/yr  | +1.5%/yr  | +1.1%/yr  |  
| [Australian Capital Territory](https://www.microburbs.com.au/suburb-reports/Canberra-ACT-2601)  | Canberra  | +1.0%/yr  | +1.2%/yr  | +1.8%/yr  |  
| [Sydney - Inner South West](https://www.microburbs.com.au/suburb-reports/Bankstown-NSW-2200)  | Sydney  | +0.9%/yr  | +2.1%/yr  | +2.1%/yr  |  
| [Sydney - Inner West](https://www.microburbs.com.au/suburb-reports/Marrickville-NSW-2204)  | Sydney  | +0.7%/yr  | +1.4%/yr  | +2.8%/yr  |  
| [Melbourne - North West](https://www.microburbs.com.au/suburb-reports/Essendon-VIC-3040)  | Melbourne  | +0.9%/yr  | +0.8%/yr  | -0.9%/yr  |  
| [Melbourne - Outer East](https://www.microburbs.com.au/suburb-reports/Ringwood-VIC-3134)  | Melbourne  | +0.6%/yr  | +1.2%/yr  | +0.1%/yr  |  
| [NT - Outback](https://www.microburbs.com.au/suburb-reports/Alice+Springs-NT-0870)  | Rest of NT  | +0.5%/yr  | +0.8%/yr  | +0.1%/yr  |  
_Density Gap: average annual return difference between low-density and high-density microburbs within the same market from 2010 to 2026. Positive values mean low-density outperformed. Model Spread: predictive model best vs worst picks spread from 2010 to 2026._
### Two suburbs, opposite outcomes
To illustrate, consider two suburbs on opposite sides of the density divide: one in a high-risk market, one where density helps.
[Wentworth Point (Sydney)](https://www.microburbs.com.au/suburb-reports/Wentworth+Point-NSW-2127) is one of the densest suburbs in Australia. Its median microburb contains over 38,000 dwellings per square kilometre. The median street has 494 apartments. Properties resold in Wentworth Point from 2018 to 2026 underperformed their matched benchmark by more than 5 percentage points per year. That gap compounds: a property bought for $600,000 that should have been worth $780,000 after five years of average growth was instead worth roughly $630,000.
Contrast that with [Ballarat Central (Vic)](https://www.microburbs.com.au/suburb-reports/Ballarat+Central-VIC-3350), a regional centre where density tells a different story. Ballarat Central sits at 2,400 dwellings per square kilometre. Properties resold from 2018 to 2026 outperformed their benchmark by more than 4 percentage points per year. Here, density means proximity to shops, train stations, and services. It reflects centrality, not oversupply.
### The 2018 regime shift
The density penalty was not always present. From 2010 to 2016, high-density microburbs in Sydney and Melbourne actually outperformed their lower-density neighbours. Capital flowed into apartment developments during the construction boom, and early buyers in dense areas benefited from rising valuations.
The pattern reversed around 2018. Three factors converged. Peak apartment completions flooded inner-city markets. The banking regulator tightened investor lending. High-profile building defects (most notably in [Sydney Olympic Park (Sydney)](https://www.microburbs.com.au/suburb-reports/Olympic+Park-NSW-2127) in late 2018) damaged confidence in new high-rise construction. Since 2018, the density penalty has been consistent: 8 of 8 years show low-density outperforming high-density in the affected markets.
### Model performance
The predictive model, trained separately for each market using only pre-test-year data, achieved the following results from 2010 to 2026:  
| Metric  | Result  |  
| --- | --- |  
| Annual spread (top vs bottom decile)  | +1.0% per year  |  
| Years with positive spread (of 17)  | 15  |  
| Bottom decile accuracy  | 56% had negative relative returns  |  
| Markets tested  | 87  |  
| Total test predictions  | 1.2 million  |  
The top features driving the model's predictions were microburb-level residential density, median hold period (how quickly properties resell), street-level turnover rates, and the number of apartments per street. These are all measures of how crowded a local property market is, not of price or location quality.
## Defence Against Criticism
### "Density is just another way of saying 'apartments', and apartments always underperform houses."
This is partly true at the national level but does not explain the geographic variation. The density penalty operates within property types: apartments in dense microburbs underperform apartments in less-dense microburbs within the same market. Across all 87 markets, the density gap for apartments alone has averaged 1.45% per year since 2018. In regional markets, denser apartments actually outperform. The signal is about local supply concentration, not about apartments as a category.
### "The 1.0% spread is too small to matter."
Over a typical 7-year hold, a 1.0% annual difference compounds to roughly 7% of the property's value. On a $700,000 investment, that is approximately $50,000 in forgone returns. The spread is also measured after removing broad market trends, so it represents genuine relative outperformance, not absolute returns. In the highest-risk markets (Parramatta, Ryde), the gap is closer to 2-3% per year, compounding to 15-20% over a hold period from 2018 to 2026.
### "The finding only works post-2018. It might reverse again."
This is the strongest criticism. The density penalty was absent from 2010 to 2016 and only became consistent from 2018 onward. If construction activity slows and apartment supply tightens, the penalty could weaken or reverse. We address this honestly in the limitations section. The model's 15 of 17 positive years suggests the signal is not purely regime-dependent, but the magnitude is clearly stronger in the current environment.
## Limitations
  * **The density penalty may be cyclical.** Before 2017, dense areas outperformed in several capital city markets. If apartment construction slows and population growth absorbs existing stock, the penalty could weaken. This analysis describes what has happened, not what must continue.
  * **Building quality is not measured.** Some of the density penalty may reflect poor construction quality in newer high-rise buildings rather than density per se. We cannot separate "too many apartments" from "badly built apartments" in this data.
  * **The model uses static features.** Microburb density and street-level counts are point-in-time snapshots. They do not capture whether an area is densifying (new approvals) or stable. A forward-looking supply pipeline would improve the analysis.
  * **Regional market results should be treated cautiously.** Some regional SA4s have fewer than 5,000 resales across the full study period. Results in these markets are less reliable than in Sydney or Melbourne.


## Conclusion
Residential density is not inherently good or bad for property returns. What matters is the local context. In the 11 high-risk markets (primarily Sydney and Melbourne), the densest microburbs have underperformed since 2018 by 1 to 2 percentage points per year relative to their less-dense neighbours. Building quality, investor concentration, and supply pipeline likely contribute alongside density itself.
For investors, the practical implication is geographic. Density risk is concentrated in specific capital city markets, not spread uniformly. A microburb-level density assessment before purchase can flag whether a property sits in a high-concentration area. In regional Australia and outer metro areas, density is typically a sign of centrality, not oversupply, and typically does not show a penalty.
The Microburbs density risk classification covers all 87 SA4 markets nationally and is available at the property level through our suburb and property reports.
**Microburbs Research** Independent property market research using 90 million Australian listings, backtested to 1990 at street level. Published at [microburbs.com.au/insights](https://www.microburbs.com.au/insights).
[Read the accessible summary →](https://www.microburbs.com.au/research/density-oversupply-blog)
**Cite this paper**
Metcalfe, L. (June 2026). When Density Becomes Oversupply. Microburbs Research.
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
