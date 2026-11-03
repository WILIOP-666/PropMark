[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
Microburbs Research Whitepaper
# Street-Level Price Forecasting Across 353,295 Australian Streets
Luke Metcalfe, Microburbs Research
March 2026
[Accessible summary →](https://www.microburbs.com.au/research/street-forecasting-blog)
17.4M
House sales analysed (2005–2025)
353K
Streets covered nationally
+3.0pp
Top 10% annual outperformance
$265K
Equity gap: top vs bottom picks (4yr)
## Abstract
We built a street-level forecasting system covering 353,295 streets across 14,069 Australian suburbs, trained on 17.4 million house sales from 2005 to 2025. The system forecasts relative performance within suburbs — whether a specific street will grow faster or slower than its suburb median — over 2–4 year horizons.
Backtested using rolling quarterly walk-forward validation from 2015 to 2023, the top 10% of street picks outperformed the national market by 3.0 percentage points per year. The top 1% outperformed by 6.8pp/year. The bottom decile underperformed by 2.9pp/year. On a $1M property held for four years, the difference between a top-decile and bottom-decile pick was $265,000.
High-confidence forecasts had actual errors 3 to 10 times lower than low-confidence ones. The system performs best at 2–4 year horizons; 6-month predictions are materially less reliable.
### Contents
  1. [Key Findings](https://www.microburbs.com.au/research/street-forecasting-whitepaper#findings)
  2. [Methodology](https://www.microburbs.com.au/research/street-forecasting-whitepaper#methodology)
  3. [What Drives Street-Level Growth](https://www.microburbs.com.au/research/street-forecasting-whitepaper#drivers)
  4. [Confidence Scoring](https://www.microburbs.com.au/research/street-forecasting-whitepaper#confidence)
  5. [Results](https://www.microburbs.com.au/research/street-forecasting-whitepaper#results)
  6. [Addressing Likely Objections](https://www.microburbs.com.au/research/street-forecasting-whitepaper#objections)
  7. [Limitations](https://www.microburbs.com.au/research/street-forecasting-whitepaper#limitations)
  8. [Conclusion](https://www.microburbs.com.au/research/street-forecasting-whitepaper#conclusion)


## 1. Key Findings
  * **Top 10% outperformed by 3.0pp/year.** Across all market cycles in the backtest period (2012–2023), including COVID, rate hikes, and recovery.
  * **Top 1% outperformed by 6.8pp/year.** High confidence + extreme relative discount is the strongest signal combination.
  * **$265,000 equity gap** between top and bottom decile picks on a $1M property over four years.
  * **8-year extended backtest:** Top picks outperformed by 2.8pp/year with a $501,000 gap.
  * **Confidence validates:** High-confidence forecasts showed 3–10x lower error than low-confidence ones.
  * **Optimal horizon: 2–4 years.** 6-month predictions are substantially less reliable; 12-month is borderline.


## 2. How It Works
Most property forecasting happens at the suburb level. That is too coarse. Two streets in the same suburb can deliver wildly different returns over any given period. This system forecasts at the street level.
### Data
The system draws on 17.4 million settled house sales across Australia from 2005 to 2025. These are actual transaction prices, not listings or estimates. The data covers 14,069 suburbs across all states and territories: NSW, VIC, QLD, WA, SA, TAS, ACT, and NT.
For each of the 353,295 streets with recorded sales, the system builds a price history, calculates how the street has performed relative to its suburb over time, and measures recent trends. Streets with deeper transaction histories produce more stable estimates.
### Forecasting approach
The system measures how each street is priced relative to its suburb average, then forecasts where that relative position will move over the next 2 to 4 years. It converts relative forecasts into dollar-value price estimates using suburb-level price data.
For streets with limited sales history, the system blends street-level data with suburb-level data to stabilise the estimates. A street with only five sales will lean more heavily on its suburb’s overall pattern. A street with 300 sales will rely almost entirely on its own history. This prevents noisy data from producing wild forecasts.
### Validation
The backtest uses a rolling quarterly walk-forward approach from 2015 to 2023. At each quarter, the system was trained only on data available up to that point. It then made forecasts and those forecasts were compared to what actually happened. This covers multiple market cycles: the pre-COVID boom, the pandemic downturn, the 2021 spike, and the 2022 rate-hike correction.
No future data leaks into training. The system at each point in time knows only what an investor would have known.
## 3. What Drives Street-Level Growth
Five patterns emerged from the data. These are not rules we imposed. They are patterns the system found across 17.4 million sales.
**1. Mean reversion is the dominant force.** Streets currently priced below their suburb average tend to catch up over 2 to 4 years. This is the single strongest signal in the data. A street at 80% of its suburb’s average price is more likely to grow than one at 120%.
**2. Housing stock upgrades drive growth.** Streets where recent sales show larger homes, more bedrooms, and renovated stock grow faster. This reflects real physical changes to the street, not just market sentiment.
**3. Suburb momentum carries forward.** Streets in fast-growing suburbs continue to grow. This is partly self-reinforcing: buyer demand moves into adjacent streets as the primary streets become too expensive.
**4. Transaction depth equals reliability.** Streets with 100 or more historical sales produce more reliable forecasts. A street with 300 sales and a forecast of strong outperformance is far more trustworthy than a street with 10 sales and the same forecast.
**5. The 12-month price trend is the strongest short-term signal.** Streets with rising prices over the last year tend to continue rising for another 6 to 12 months. This momentum effect fades at longer horizons, where mean reversion takes over.
## 4. Confidence Scoring
Not all forecasts are equal. Each street forecast comes with a confidence level based primarily on transaction depth. A street with 300 recorded sales gets a high-confidence rating. A street with 15 sales gets a low one.
**High-confidence forecasts had actual errors 3 to 10 times lower than low-confidence ones.** This is the most important finding for practical use. An investor who only acts on high-confidence forecasts will see better results than one who acts on all of them.
The confidence system is honest. About 30% of streets receive a low-confidence rating, and those streets should be treated as rough guides only, not precise price targets.
## 5. Results
### Backtest performance by horizon  
| Forecast Horizon  | Top 10% Outperformance vs Market  | Bottom 10% Underperformance vs Market  | $ Gap on $1M (Top vs Bottom)  |  
| --- | --- | --- | --- |  
| 4 years  | +3.0 pp/yr  | -2.9 pp/yr  | $265K  |  
| 8 years  | +2.8 pp/yr  | -2.2 pp/yr  | $501K  |  
**Pattern:** The dollar gap between top and bottom picks grows with longer horizons. At 6 months, street-level movements are noisy. By 4 years, the underlying value signals have time to express themselves. The sweet spot is 2 to 4 years.
Over the 8-year backtest window, the top 10% of picks outperformed the national market by 2.8 percentage points per year. The gap between top and bottom picks was $501,000 on a $1M property over 8 years. The system identifies both outperformers and underperformers.
### Backtested street examples
The system was tested nationally across 353,295 streets. Here are examples from Sydney suburbs showing what the system predicted versus what actually happened over the following four years.
####  [McMahons Point](https://www.microburbs.com.au/suburb-reports/McMahons-Point-NSW-2060), NSW (backtest results)  
| Street  | We Forecast  | Actual Outperformance vs Market  |  
| --- | --- | --- |  
| Munro St  | Strong outperformance  | +10.9 pp/yr  |  
| East Crescent St  | Above average  | +7.3 pp/yr  |  
Munro St was priced below the suburb average at forecast time. It outperformed the national market by 10.9 percentage points per year over the following four years.
####  [Castlecrag](https://www.microburbs.com.au/suburb-reports/Castlecrag-NSW-2068), NSW (backtest results)  
| Street  | We Forecast  | Actual Outperformance vs Market  |  
| --- | --- | --- |  
| The Barricade  | Strong outperformance  | +5.9 pp/yr  |  
| Edinburgh Rd  | Average performance  | +0.2 pp/yr  |  
| Linden Way  | Below average  | -1.5 pp/yr  |  
The Barricade outperformed the market by 5.9 percentage points per year. Linden Way underperformed by 1.5 percentage points per year. Same suburb, same postcode. An investor who picked The Barricade over Linden Way gained roughly $200,000 more per year in equity on a $2.6M property.
## 6. Addressing Likely Objections
### Not every forecast will be right. How do you handle that?
The confidence system exists for this reason. High-confidence forecasts are correct more often. Low-confidence forecasts are correct less often. An investor who filters on confidence will outperform one who takes every forecast at face value. The system is not claiming to be right about every street. It is claiming to know which streets it is most likely to be right about.
### Past performance does not guarantee future results
Correct. But the backtest period from 2015 to 2023 is not a single market condition. It includes the pre-COVID boom (2015 to 2017), the 2018 to 2019 correction, the COVID crash (March 2020), the stimulus-driven recovery (2020 to 2021), and the 2022 rate-hike downturn. The system produced positive alpha across all of these conditions. That is not proof it will always work. But it is evidence that the signals are not specific to one type of market.
### Street-level data is too noisy for reliable forecasts
Raw street-level data is noisy. That is why the system blends street-level estimates with suburb-level data. Streets with few sales lean heavily on suburb patterns. Streets with many sales rely on their own history. This stabilisation step reduces noise without throwing away the hyper-local signal that makes street-level forecasting useful.
The alternative is to forecast at the suburb level, where every street gets the same prediction. That is less noisy but also less useful. Two streets in Castlecrag can differ by $320,000 over 4 years on the same purchase price. A suburb-level forecast would miss that entirely.
## 7. Limitations
  * **Short-term forecasts are unreliable.** The 6-month horizon is materially weaker than 2–4 year horizons. Do not use this model for timing decisions.
  * **No macroeconomic factors.** Interest rates, immigration policy, and infrastructure announcements are not included. The model assumes the macro environment is mean-reverting over the forecast horizon.
  * **Single model applied nationally.** The same parameters apply from Darwin to Melbourne. Localised dynamics in small regional markets may not be well captured.
  * **Data quality inconsistencies.** Some records contain price errors, off-market transactions, or unusual property characteristics. Outlier detection reduces but does not eliminate these.
  * **Cannot predict structural changes.** New infrastructure, rezoning decisions, and natural disasters are not in the model.


## 8. Conclusion
Street-level price forecasting across Australia is now possible at scale. The system covers 353,295 streets across 14,069 suburbs in every state and territory. It produces forecasts at five horizons from 6 months to 4 years.
The evidence is clear on two points. First, our top 10% of picks outperformed the national market by 3.0 percentage points per year and added $141,000 on a $1M property over 4 years (2012–2023 backtest). The spread between our top and bottom picks was $265,000 over the same period. Over 8 years, that gap grew to $501,000. Second, the confidence system works. High-confidence forecasts are meaningfully more reliable than low-confidence ones.
The practical implication for investors: focus on high-confidence streets that are currently priced below their suburb average, with a 2-to-4-year hold period. That is where this system adds the most value.
**Microburbs Research** Independent property market research using 90 million Australian listings, backtested to 1990 at street level. Published at [microburbs.com.au/insights](https://www.microburbs.com.au/insights).
[Read the accessible summary →](https://www.microburbs.com.au/research/street-forecasting-blog)
**Cite this paper**
Metcalfe, L. (March 2026). Street-Level Price Forecasting Across 353,295 Australian Streets. Microburbs Research.
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
