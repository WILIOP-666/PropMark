[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
Technical Whitepaper
# Tightly Held Properties Threshold: Technical Whitepaper
Full statistical methodology, bin performance analysis, temporal consistency testing, and regional robustness results across 124,051 property sales.
t = 46.27T-Statistic
p ≈ 0P-Value
95.8%Date Consistency
124,051Total Sales Tested
![Luke Metcalfe](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Fluke-headshot-circle.png&w=256&q=75)
Luke Metcalfe
Founder & Chief Data Scientist
15+ years in property data analytics
### Table of Contents
  1. [1. Abstract](https://www.microburbs.com.au/tightly-held-whitepaper#abstract)
  2. [2. Methodology](https://www.microburbs.com.au/tightly-held-whitepaper#methodology)
  3. [3. Tier Performance](https://www.microburbs.com.au/tightly-held-whitepaper#tier-performance)
  4. [4. Temporal Analysis](https://www.microburbs.com.au/tightly-held-whitepaper#temporal-analysis)
  5. [5. Regional Robustness](https://www.microburbs.com.au/tightly-held-whitepaper#regional-robustness)
  6. [6. Suburb-Level Evidence](https://www.microburbs.com.au/tightly-held-whitepaper#suburb-evidence)
  7. [7. Defence of Method](https://www.microburbs.com.au/tightly-held-whitepaper#defence-of-method)
  8. [8. Limitations](https://www.microburbs.com.au/tightly-held-whitepaper#limitations)


## 1. Abstract
This paper presents a univariate threshold that measures owner-occupancy rate at the suburb level. Suburbs where more than 95% of homes are owner-occupied are classified as “tightly held.” Suburbs where fewer than 82% of homes are owner-occupied are classified as high-rental/high-turnover.
We tested this threshold across 124,051 property sales from July 2021 to September 2023. Tightly held suburbs outperformed the national median by +1.06 percentage points per year over rolling 2-year windows. High-rental suburbs underperformed by -1.25 percentage points per year. The spread between top and bottom tiers is 2.31 percentage points.
The signal was tested across 24 individual sample dates and 11 GCCSA regions. It held at 23 of 24 dates (95.8% consistency). It produced a positive spread in 9 of 11 regions. The t-statistic of 46.27 places the result far beyond any reasonable threshold for statistical significance.
## 2. Methodology
### 2.1 Feature Construction
This is a univariate threshold. The single input variable is the owner-occupancy rate at the suburb level. This rate is derived from census and other government data sources. It measures the proportion of dwellings in a suburb that are occupied by their owners rather than rented out.
Unlike composite indices that combine multiple variables, this threshold uses a single, transparent metric. The simplicity is a strength: there is no black box, no interaction terms, and no proprietary weighting.
### 2.2 Threshold Definition
Suburbs are classified into three tiers based on their owner-occupancy rate:
  * **Top tier:** Above 95% owner-occupied (tightly held)
  * **Middle tier:** Between 82% and 95% owner-occupied
  * **Bottom tier:** Below 82% owner-occupied (high rental/turnover)


This threshold is not inverted. High values are associated with better growth outcomes.
### 2.3 Performance Metric
The primary metric is the difference in median annualised 2-year growth between each tier and the national median. Statistical significance is assessed using a two-sided t-test.
diff = median_growth(tier) - median_growth(national)  
t-statistic = (mean(tier) - mean(national)) / SE(tier)  
p-value from two-sided t-test
### 2.4 Growth Horizon
Growth is measured over rolling 2-year windows. Each observation is a single property sale. The target variable is the annualised 2-year growth rate from the sale date, measured relative to the national median for that period.
**Why owner-occupancy matters:** When owners live in their homes, they are less likely to sell during downturns. This reduces listings supply, supports prices, and creates a self-reinforcing cycle of stability. Investor-dominated suburbs, by contrast, face selling pressure when rental yields compress or interest rates rise.
## 3. Tier Performance
Top Tier (>95%)
+1.06%
t-stat = 46.27  
N = 33,373 sales
Middle Tier (82-95%)
+0.07%
Near market average  
N = 59,245 sales
Bottom Tier (<82%)
-1.25%
Growth drag  
N = 31,433 sales  
| Tier  | Owner-Occ Rate  | Diff vs National  | N (Sales)  | Significant  |  
| --- | --- | --- | --- | --- |  
| Top  | Above 95%  | +1.06%  | 33,373  | Significant  |  
| Middle  | 82% to 95%  | +0.07%  | 59,245  | Significant  |  
| Bottom  | Below 82%  | -1.25%  | 31,433  | Significant  |  
**Key observation:** All three tiers produce statistically significant results. The spread between top and bottom is 2.31 percentage points per year. The monotonic ordering (top positive, middle near zero, bottom negative) confirms the threshold captures a real gradient in growth outcomes.
## 4. Temporal Analysis
A signal that works at one point in time could be a fluke. We tested the Tightly Held threshold at every available sample date from July 2021 to September 2023.
The above-threshold suburbs (blue) sit above the below-threshold suburbs (red) at **23 of 24 sample dates (95.8%)**. The separation is strongest in late 2021, where the spread exceeds 3.5 percentage points. The gap narrows through 2022 and 2023. The single inversion occurs at the final date (September 2023), based on a very small sample of 52 sales.
### 4.1 Date-by-Date Consistency
We tested the top tier's outperformance at 24 individual sample dates. The result was positive at 23 of 24 dates.  
| Sample Date  | Top Tier Growth  | Bottom Tier Growth  | Spread  | Significance  |  
| --- | --- | --- | --- | --- |  
| 2021-07  | +1.53%  | -1.82%  | +3.34%  | Significant  |  
| 2021-08  | +1.58%  | -1.87%  | +3.45%  | Significant  |  
| 2021-09  | +1.57%  | -1.93%  | +3.50%  | Significant  |  
| 2021-10  | +1.63%  | -2.03%  | +3.65%  | Significant  |  
| 2021-11  | +1.67%  | -2.08%  | +3.75%  | Significant  |  
| 2021-12  | +1.71%  | -2.05%  | +3.76%  | Significant  |  
| 2022-01  | +1.66%  | -1.96%  | +3.62%  | Significant  |  
| 2022-02  | +1.59%  | -1.88%  | +3.47%  | Significant  |  
| 2022-03  | +1.49%  | -1.74%  | +3.23%  | Significant  |  
| 2022-04  | +1.40%  | -1.65%  | +3.05%  | Significant  |  
| 2022-05  | +1.26%  | -1.53%  | +2.80%  | Significant  |  
| 2022-06  | +1.15%  | -1.42%  | +2.57%  | Significant  |  
| 2022-07  | +1.03%  | -1.22%  | +2.24%  | Significant  |  
| 2022-08  | +0.92%  | -1.04%  | +1.96%  | Significant  |  
| 2022-09  | +0.80%  | -0.83%  | +1.63%  | Significant  |  
| 2022-10  | +0.61%  | -0.68%  | +1.29%  | Significant  |  
| 2022-11  | +0.50%  | -0.58%  | +1.09%  | Significant  |  
| 2022-12  | +0.41%  | -0.54%  | +0.94%  | Significant  |  
| 2023-01  | +0.36%  | -0.48%  | +0.84%  | Significant  |  
| 2023-02  | +0.33%  | -0.43%  | +0.76%  | Significant  |  
| 2023-03  | +0.38%  | -0.38%  | +0.76%  | Significant  |  
| 2023-04  | +0.41%  | -0.37%  | +0.78%  | Significant  |  
| 2023-05  | +0.44%  | -0.31%  | +0.74%  | Significant  |  
| 2023-09  | -1.07%  | +0.14%  | -1.21%  | Not Significant  |  
**Pattern in the final date:** The single non-significant result occurs at September 2023, based on only 52 total sales (23 top tier, 29 bottom tier). This small sample is not reliable. Across the 23 dates with adequate sample sizes (1,300+ sales per tier), the signal is consistently positive.
## 5. Regional Robustness
A signal that works only in one city is less useful than one that works nationally. We tested the Tightly Held threshold across all 11 GCCSA regions in the dataset.
The signal produces a positive spread in **9 of 11 regions**. Greater Sydney and the ACT are the only regions where the signal inverts. Sydney's inversion may reflect the city's high land values overriding the owner-occupancy effect.
### 5.1 Full Regional Table
All growth rates are annualised over 2 years. The spread column shows the difference between above-threshold and below-threshold growth rates.  
| Region  | Top Tier Growth  | Bottom Tier Growth  | Spread  | Top N  | Bottom N  | P-value  |  
| --- | --- | --- | --- | --- | --- | --- |  
| Rest of Vic.  | -1.58%  | -4.91%  | +3.33%  | 5,438  | 2,766  | ≈ 0  |  
| Greater Perth  | +5.41%  | +3.02%  | +2.39%  | 1,234  | 1,589  | ≈ 0  |  
| Rest of WA  | +1.71%  | -0.02%  | +1.73%  | 2,310  | 1,519  | ≈ 0  |  
| Greater Adelaide  | +6.36%  | +4.78%  | +1.58%  | 2,856  | 1,279  | ≈ 0  |  
| Greater Brisbane  | +4.26%  | +2.88%  | +1.38%  | 4,127  | 2,268  | ≈ 0  |  
| Greater Melbourne  | -5.05%  | -6.36%  | +1.31%  | 2,748  | 3,718  | ≈ 0  |  
| Rest of Qld  | +2.50%  | +1.66%  | +0.84%  | 7,854  | 5,159  | ≈ 0  |  
| Rest of SA  | +6.95%  | +6.52%  | +0.43%  | 2,120  | 1,060  | 0.031  |  
| Rest of NSW  | -2.77%  | -3.12%  | +0.35%  | 3,946  | 5,329  | 0.003  |  
| ACT  | -4.94%  | -4.81%  | -0.13%  | 218  | 335  | 0.812  |  
| Greater Sydney  | -4.79%  | -3.74%  | -1.06%  | 1,522  | 4,949  | ≈ 0  |  
**Strongest regions:** Rest of Victoria (+3.33% spread across 8,204 sales) and Greater Perth (+2.39% spread across 2,823 sales). Even in declining markets like Rest of Victoria and Greater Melbourne, tightly held suburbs fell less than high-rental suburbs. The signal works in both rising and falling markets.
## 6. Suburb-Level Evidence
Suburb-level comparisons for selected cities are available on the [summary](https://www.microburbs.com.au/tightly-held-threshold).
## 7. Defence of Method
### 7.1 Why a Single Variable Works
This threshold uses a single variable: owner-occupancy rate. Unlike composite indices that combine multiple inputs, this approach is transparent and verifiable. Owner-occupiers hold their properties longer than investors. This reduces supply. Reduced supply, holding demand constant, supports prices. The data confirms this logic across 124,051 sales.
### 7.2 Statistical Significance
The t-statistic of 46.27 is far beyond the conventional threshold of 1.96 (p = 0.05). The p-value is essentially zero. The probability of observing a +1.06% difference across 33,373 top-tier sales by random chance is negligible. For context, a t-statistic above 3.0 is considered very strong evidence. This result exceeds that threshold by a factor of 15.
### 7.3 Consistency Over Time
The signal was positive at 23 of 24 sample dates. The single inversion at September 2023 is based on only 52 sales and is not statistically meaningful. Across all dates with adequate sample sizes, the signal is 100% consistent.
### 7.4 Geographic Breadth
The spread is positive in 9 of 11 GCCSA regions. It works in strong markets (Greater Adelaide, Greater Perth, Greater Brisbane) and weak markets (Rest of Victoria, Greater Melbourne). The two exceptions are Greater Sydney and the ACT.
### 7.5 Practical Use
Investors can check owner-occupancy rates from publicly available census data. A suburb above 95% is classified as tightly held. A suburb below 82% carries higher turnover risk. Combined with other Microburbs signals, this threshold forms one layer in a multi-factor approach to suburb selection.
**Key advantage of this threshold:** Transparency. Unlike composite indices, the input variable is a single publicly available statistic. Any investor can verify the owner-occupancy rate for their target suburb using ABS census data.
## 8. Limitations
### 8.1 Short Data Period
This threshold covers July 2021 to September 2023, a shorter window than some other thresholds in the Microburbs research programme. The 2-year period includes a property boom, a rapid rate-hiking cycle, and an early recovery phase. Whether the pattern persists across a full market cycle remains to be confirmed.
### 8.2 Census Data Is Point-in-Time
Owner-occupancy rates are drawn from census and other government data. The Australian Census is conducted every five years (most recently 2021). Suburbs can shift between census dates. A suburb that was 96% owner-occupied in 2021 may have changed by 2026.
### 8.3 Sydney Inversion
Greater Sydney shows a negative spread of -1.06%. Tightly held suburbs in Sydney underperformed relative to high-rental suburbs during 2021 to 2023. This may reflect Sydney's unique market dynamics, where land scarcity and high-density housing in rental-heavy suburbs can drive growth independently of ownership patterns.
### 8.4 Individual Suburb Variation
Even within the top tier, individual suburb outcomes vary. Buckland Park in Adelaide posted +22.39% per year while Greenhill (SA) recorded -1.23% per year, despite both having 100% owner-occupancy. The threshold provides a statistical edge across many purchases, not a guarantee for any single suburb.
### 8.5 No Causal Claim
This paper documents a correlation between owner-occupancy rates and subsequent property growth. We hypothesise that high owner-occupancy reduces listings supply and supports prices. But the data does not prove causation.
### 8.6 Small Sample at Final Date
The September 2023 sample contains only 52 sales (23 top tier, 29 bottom tier). This is too small for reliable inference. The inversion at this date should not be treated as evidence that the signal has broken down.
**Summary of limitations:** The Tightly Held threshold is a statistical tool, not a crystal ball. It identifies a persistent pattern across 124,051 sales and 11 regions over a 2-year period. But the data window is shorter than other thresholds. Sydney inverts the pattern. Individual outcomes vary. Use this threshold as one factor in a broader investment framework.
## Access Suburb-Level Scores
Get owner-occupancy rates for every suburb in Australia. Combine with other Microburbs signals to build a shortlist backed by data.
[Explore on Microburbs](https://microburbs.com.au)[Back to Overview](https://www.microburbs.com.au/tightly-held-threshold)
[Read the Summary](https://www.microburbs.com.au/tightly-held-threshold)[All Thresholds](https://www.microburbs.com.au/insights)
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
