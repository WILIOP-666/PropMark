[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
Microburbs Research Whitepaper
# Does Crime Really Hurt Property Growth? A 20-Year National Study
Luke Metcalfe, Microburbs Research
March 2026
[Accessible summary →](https://www.microburbs.com.au/research/crime-growth-blog)
5,022
Suburbs analysed
20yr
Growth tracked (2004–2025)
1.4pp
Annual safety premium
5
States covered
## Abstract
We examined crime rates and five-year residential property growth across 5,022 Australian suburbs in NSW, VIC, QLD, SA, and ACT over the period 2004–2025 (99,307 suburb-year observations). Crime data was disaggregated to the microburb level and aggregated to suburb medians, minimums, maximums, and variation ratios.
Safe suburbs (lowest crime decile) outgrew high-crime suburbs by 1.4 percentage points per year on average. But this gap disappears when controlling for amenity, transport access, and price band. Within 123 matched suburb pairs, high-crime suburbs actually outperformed safe ones by 15.3 percentage points in 91 of 123 comparisons. Crime explains 4.1% of growth variance after controlling for price and location.
The forecasting model uses crime patterns and housing supply data to predict suburb-level capital growth. Walk-forward validation achieved positive accuracy in 15 of 16 test years (2010–2025).
### Contents
  1. [Key Findings](https://www.microburbs.com.au/research/crime-growth-whitepaper#findings)
  2. [Methodology](https://www.microburbs.com.au/research/crime-growth-whitepaper#methodology)
  3. [Results](https://www.microburbs.com.au/research/crime-growth-whitepaper#results)
  4. [Defense Against Criticism](https://www.microburbs.com.au/research/crime-growth-whitepaper#criticisms)
  5. [Limitations](https://www.microburbs.com.au/research/crime-growth-whitepaper#limitations)
  6. [Conclusion](https://www.microburbs.com.au/research/crime-growth-whitepaper#conclusion)


## Key Findings
  * **Raw safety premium: 1.4pp/year.** The safest suburbs forecast 10.6% annual growth; the highest-crime suburbs forecast 9.1%. At a median price of $700,000, that is approximately $10,000 per year in additional growth.
  * **Gap disappears in matched comparisons.** When we compared safe and high-crime suburbs with the same lifestyle appeal, transport access, and price range, the gap not only shrank — it reversed. Higher-crime suburbs outperformed by 15.3 percentage points in 91% of matched cells.
  * **Crime explains 4.1% of growth variance** after controlling for price and location — meaningful but modest.
  * **Supply interaction.** High housing supply within 7km narrows the crime-growth gap significantly. Crime and supply are correlated; disentangling them requires multivariate controls.
  * **Walk-forward accuracy: 15 of 16 years positive.** The forecasting model was validated across two decades including the GFC, pandemic, and multiple boom-bust cycles.


## Methodology
We assembled suburb-level crime data spanning 1997 to 2025 across eight Australian states and territories, then matched this to annual median property prices from 2004 to 2025. Each suburb-year observation records the crime rate per dwelling, the crime breakdown by category (violent, property, drugs, damage, public order), and the forward-looking five-year annualised capital growth.
The final dataset contains 99,307 suburb-year observations across NSW, VIC, QLD, SA, and ACT. We excluded WA, TAS, and NT due to data matching limitations.
### Crime at the microburb level
Suburb-level crime averages can mask significant internal variation. We disaggregated crime rates to the microburb level (approximately 100-400 dwellings each), computing the distribution of crime within each suburb: the median, minimum, maximum, 10th and 90th percentiles, and the variation ratio. This gives a far richer picture than a single suburb crime rate. A suburb where every microburb has moderate crime is fundamentally different from one where 90% of microburbs are very safe but one pocket has concentrated offending.
### Housing supply integration
We incorporated new housing supply data within a 7 km radius of each suburb, broken down by houses and units. Supply pressure is a known growth headwind, but its interaction with crime has not been widely studied. Our analysis captures this interaction directly.
### Validation
The model was validated using a walk-forward (expanding window) protocol across 16 test years from 2010 to 2025. For each year, the model trained only on data available up to that point and predicted the next five years of growth. This prevents any lookahead bias. The full model achieved positive out-of-sample accuracy in 15 of 16 test years, with performance improving over time as training data accumulated. Separately, feature ablation tests on the 2025 cross-section confirm that crime and supply features carry independent predictive signal beyond price and location effects.
### Controlled analysis
To separate the causal effect of crime from correlated amenity factors, we ran a triple-controlled comparison. We matched safe suburbs (crime deciles 0-1) against high-crime suburbs (deciles 8-9) within the same lifestyle appeal bracket, the same transport access bracket, and the same price band. This produced 123 matched cells. In only 11 of these cells (9%) did safe suburbs outperform. The uncontrolled 8.2% “safety premium” flipped to a -15.3% deficit once these confounds were removed.
## Results
### Forecasts by state (2025 to 2030)  
| State  | Median Forecast (annual)  | Median Price  | Suburbs  |  
| --- | --- | --- | --- |  
| QLD  | 11.8%  | $668,500  | 1,482  |  
| SA  | 10.7%  | $693,000  | 665  |  
| NSW  | 10.1%  | $986,000  | 1,748  |  
| VIC  | 9.2%  | $696,500  | 1,064  |  
| ACT  | 8.8%  | $940,000  | 63  |  
### Forecasts by crime decile (2025 to 2030)  
| Crime Decile  | Median Forecast (annual)  | Description  |  
| --- | --- | --- |  
| D0 (safest)  | 10.6%  | Very low crime, typically affluent or rural  |  
| D1  | 10.9%  | Safe, established suburbs  |  
| D2  | 10.6%  |   |  
| D3  | 10.7%  |   |  
| D4  | 10.8%  |   |  
| D5  | 10.5%  | Middle of the range  |  
| D6  | 10.1%  |   |  
| D7  | 10.1%  |   |  
| D8  | 9.7%  | Higher crime, often inner-city or transitional  |  
| D9 (highest)  | 9.1%  | Highest crime rate suburbs  |  
The gradient is gentle: 1.4 percentage points separates the safest from the highest-crime suburbs. At a median price of $700,000, that is approximately $10,000 per year in additional growth for safe suburbs. Notable, but far less than the 5-10 percentage point premium many investors assume.
### Concrete examples
**[Mosman](https://www.microburbs.com.au/suburb-reports/Mosman-NSW-2088) (Sydney) vs [Marrickville](https://www.microburbs.com.au/suburb-reports/Marrickville-NSW-2204) (Sydney)**
Mosman sits in crime decile 2 (very safe). Median price: $5.65M. Forecast: 8.1% annual growth from 2025 to 2030.
Marrickville sits in crime decile 7 (above average crime). Median price: $2.28M. Forecast: 8.0% annual growth from 2025 to 2030.
Nearly identical growth forecasts despite a 5-decile gap in crime. Mosman has the safety advantage, but Marrickville has stronger momentum (12.3% growth in the year to 2025 vs 11.4% for Mosman) and is roughly one-third the price. The model sees both suburbs as similarly positioned for medium-term growth, albeit for different reasons.
**[Noosa Heads](https://www.microburbs.com.au/suburb-reports/Noosa%20Heads-QLD-4567) (Sunshine Coast) vs [Bondi Beach](https://www.microburbs.com.au/suburb-reports/Bondi%20Beach-NSW-2026) (Sydney)**
Noosa Heads (QLD) sits in crime decile 3, with a $2.98M median. Its five-year trailing growth accelerated from -0.4% annually (2010 to 2015) to 14.1% annually (2020 to 2025). Forecast: 18.2% annual growth from 2025 to 2030.
Bondi Beach (NSW) sits in crime decile 7, with a $4.61M median. Its growth has been steadier at 9.2% annually from 2020 to 2025. Forecast: 9.9% annual growth from 2025 to 2030.
Noosa Heads is safer and cheaper, with far less competing supply (7,658 new listings within 7 km vs 178,963 for Bondi). The model forecasts nearly double the growth rate for Noosa. The crime difference matters here, but the supply difference matters more.
### Market cycle performance (NSW, 2004 to 2025)
We compared safe suburbs (crime deciles 0-1) against high-crime suburbs (deciles 8-9) across six market cycles in NSW:  
| Cycle  | Safe Suburbs  | High-Crime Suburbs  | Gap  |  
| --- | --- | --- | --- |  
| Pre-GFC boom (2004-2007)  | 4.6%/yr  | 2.8%/yr  | +1.8pp  |  
| GFC downturn (2008-2009)  | 1.7%/yr  | 1.3%/yr  | +0.4pp  |  
| Post-GFC flat (2010-2013)  | 1.1%/yr  | 1.9%/yr  | -0.8pp  |  
| Sydney/Melbourne boom (2014-2017)  | 6.6%/yr  | 5.2%/yr  | +1.4pp  |  
| Correction (2018-2019)  | 2.7%/yr  | 1.6%/yr  | +1.1pp  |  
| COVID rebound (2020-2021, 5yr CAGR)  | 6.9%/yr  | 4.9%/yr  | +2.1pp  |  
Safe suburbs outperformed in five of six cycles. The exception was the post-GFC flat period (2010 to 2013), when higher-crime suburbs grew faster (1.9%/yr vs 1.1%/yr). The largest gap appeared during the COVID rebound (2020 to 2021, measured by 5-year CAGR), when buyers prioritised lifestyle suburbs with low density and low crime.
## Defense Against Criticism
### “This is just price mean-reversion dressed up with crime data”
We tested this directly by removing all price information from the model. With no price features at all, crime and supply features still explain 26.7% of cross-sectional growth variance (5-fold cross-validated on 4,969 suburbs). The full model with price explains 62.2%. Removing price drops explanatory power by only 5.7 percentage points. This is not a price model. Crime and supply are doing genuine work.
A formal residualised test confirmed the result: after linearly removing all price and location effects, crime features still explained 4.1% of remaining growth variance. Price is the bigger contributor in isolation (16.7% of variance after crime is removed), but both carry independent, non-overlapping signal.
### “Crime is just a proxy for neighbourhood quality”
Correct. Our controlled analysis confirms this. When we matched suburbs within the same lifestyle appeal, transport access, and price bracket, the crime premium disappeared and reversed. This does not make crime useless as a forecasting input. Crime is a measurable, consistent, and available signal that captures latent neighbourhood characteristics difficult to observe directly. A doctor does not ignore a fever just because it is a symptom rather than the underlying condition.
### “Your model works in the past but may not work going forward”
The walk-forward validation explicitly tests this. Each year from 2010 to 2025, the model saw only past data and predicted future growth. It achieved positive out-of-sample accuracy in 15 of 16 test years. Performance improved over time as training data accumulated. The weakest year (2012) coincided with a flat, directionless market where all models struggle. The model is not guaranteed to work in every future year, but it has demonstrated consistent value across two decades of varied market conditions including a global financial crisis, a pandemic, and multiple boom-bust cycles.
## Limitations
  * **Five states only.** WA, TAS, and NT are excluded due to crime data matching issues. Findings may not generalise to these markets.
  * **Suburb medians are noisy.** Small suburbs with few sales can produce volatile medians driven by composition effects (a year of unit sales vs house sales). This adds noise to the target variable.
  * **Crime data is slow-moving.** Suburb crime rankings are highly stable over time. The model may be capturing persistent neighbourhood characteristics rather than dynamic crime signals.
  * **No causation.** This study identifies predictive relationships, not causal mechanisms. We cannot claim that reducing crime in a suburb would increase its growth rate. The controlled analysis strongly suggests it would not.


## Conclusion
Low-crime suburbs do grow faster, on average, than high-crime suburbs. The gap is 1.4 percentage points per year. But this premium is almost entirely driven by the lifestyle amenities that correlate with low crime, not by crime itself. When you control for what actually makes a suburb desirable, the premium disappears.
For investors, this means two things. First, do not overpay for safety alone. A suburb’s crime rate tells you something about its character, but it is a symptom of deeper neighbourhood dynamics, not an independent growth driver. Second, look deeper than suburb averages. The micro-level variation in crime within a suburb, combined with local supply dynamics, carries far more predictive information than the headline crime rate.
Our forecasts for 2025 to 2030 project strong growth nationally, led by Queensland (11.8% annual median). The gap between safe and high-crime suburbs will likely persist but remain modest. Investors chasing the “safety premium” may find better returns by focusing on supply dynamics and micro-level neighbourhood quality instead.
**About this research:** This analysis covers 99,307 suburb-year observations across 5,022 suburbs from 2004 to 2025, with crime data extending back to 1997. All forecasts are validated through walk-forward testing.
**Microburbs Research** Independent property market research using 90 million Australian listings, backtested to 1990 at street level. Published at [microburbs.com.au/insights](https://www.microburbs.com.au/insights).
[Read the accessible summary →](https://www.microburbs.com.au/research/crime-growth-blog)
**Cite this paper**
Metcalfe, L. (March 2026). Does Crime Really Hurt Property Growth? A 20-Year National Study. Microburbs Research.
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
