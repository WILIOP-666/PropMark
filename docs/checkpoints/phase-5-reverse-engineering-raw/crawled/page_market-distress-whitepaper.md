[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
Technical Whitepaper
# Market Distress Threshold: Technical Whitepaper
Full statistical methodology, tier performance analysis, temporal consistency testing, and regional robustness results across 491,844 property sales.
t = 113.96T-Statistic
p ≈ 0P-Value
92%Quarterly Consistency
491,844Total Sales Tested
![Luke Metcalfe](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Fluke-headshot-circle.png&w=256&q=75)
Luke Metcalfe
Founder & Chief Data Scientist
15+ years in property data analytics
### Table of Contents
  1. [1. Abstract](https://www.microburbs.com.au/market-distress-whitepaper#abstract)
  2. [2. Methodology](https://www.microburbs.com.au/market-distress-whitepaper#methodology)
  3. [3. Tier Performance](https://www.microburbs.com.au/market-distress-whitepaper#tier-performance)
  4. [4. Temporal Analysis](https://www.microburbs.com.au/market-distress-whitepaper#temporal-analysis)
  5. [5. Regional Robustness](https://www.microburbs.com.au/market-distress-whitepaper#regional-robustness)
  6. [6. Suburb-Level Evidence](https://www.microburbs.com.au/market-distress-whitepaper#suburb-evidence)
  7. [7. Defence of Method](https://www.microburbs.com.au/market-distress-whitepaper#defence-of-method)
  8. [8. Limitations](https://www.microburbs.com.au/market-distress-whitepaper#limitations)


## 1. Abstract
This paper presents a univariate threshold that measures market distress in Australian suburbs. The threshold uses a single variable: the percentage of house sales in a suburb that settle below their previous purchase price. Suburbs with fewer than 15% of sales at a loss are classified as low-distress. Suburbs with more than 30% of sales at a loss are classified as high-distress.
Low-distress suburbs outperformed the national median by +0.58 percentage points per year over rolling 2-year windows. High-distress suburbs underperformed by -2.09 percentage points. The spread between top and bottom tiers is 2.68 percentage points per year. This result is based on 491,844 property sales from 2008 to 2023.
The signal was tested across 63 quarterly periods, 27 individual sample dates, and 11 GCCSA regions. Low-distress suburbs outperformed high-distress suburbs in 92% of quarters. The result was statistically significant at 22 of 27 sample dates. The spread was positive in 10 of 11 regions. The t-statistic is 113.96, with an effectively zero p-value.
## 2. Methodology
### 2.1 Variable Definition
This threshold uses a single variable: the percentage of house sales in a suburb that settle below their previous purchase price. We measure this from property transaction records across all Australian suburbs. Each sale is compared to the most recent prior sale of the same property. If the sale price is lower than the prior price, it counts as a sale at a loss.
### 2.2 Threshold Definition
We define three tiers based on the distress rate:
  * **Top Tier (Low Distress):** Below 15% of sales at a loss
  * **Middle Tier:** 15% to 30% of sales at a loss
  * **Bottom Tier (High Distress):** Above 30% of sales at a loss


Note that this threshold is inverted compared to most indices. Low values are good (few distressed sales) and high values are bad (many distressed sales).
### 2.3 Growth Measurement
Growth is measured over rolling 2-year windows. For each property sale, we compute the annualised growth rate relative to the national median growth rate over the same period.
### 2.4 Performance Metric
diff = median_growth(tier) - median_growth(national)  
t-statistic = (mean(tier) - mean(national)) / SE(tier)  
p-value from two-sided t-test
**Note on variable simplicity:** Unlike composite indices that combine multiple census variables, this threshold uses a single, directly observable market signal. The distress rate is computed from property transaction records, not survey data. This makes the threshold transparent and easy to verify.
## 3. Tier Performance
Top Tier (Below 15%)
+0.58%
p approximately 0  
N = 357,668 sales
Middle Tier (15-30%)
-0.93%
N = 62,079 sales
Bottom Tier (Above 30%)
-2.09%
p approximately 0  
N = 72,097 sales  
| Tier  | Distress Range  | Diff vs National  | t-statistic  | N (Sales)  | Significant  |  
| --- | --- | --- | --- | --- | --- |  
| Top (Low Distress)  | < 15%  | +0.58%  | 113.96  | 357,668  | Significant  |  
| Middle  | 15% to 30%  | -0.93%  | --  | 62,079  | Significant  |  
| Bottom (High Distress)  | > 30%  | -2.09%  | --  | 72,097  | Significant  |  
**Key observation:** All three tiers produce statistically significant results. The spread between top and bottom is 2.68 percentage points per year. The monotonic ordering (top positive, middle slightly negative, bottom strongly negative) confirms the threshold captures a real gradient in growth outcomes.
## 4. Temporal Analysis
We tested the Market Distress threshold across every quarter from 2008-Q1 to 2023-Q3.
The low-distress line (blue) sits above the high-distress line (red) in **58 of 63 quarters (92%)**. The separation is strongest during 2015 to 2017, where the spread exceeds 5 percentage points.
### 4.1 Date-by-Date Consistency
The result was statistically significant at 22 of 27 dates.  
| Date  | Top Growth  | Bottom Growth  | Spread  | Top N  | Bottom N  | Significance  |  
| --- | --- | --- | --- | --- | --- | --- |  
| 2008-03  | +0.36%  | +0.05%  | +0.31%  | 390  | 361  | Not Significant  |  
| 2008-10  | -0.09%  | +0.34%  | -0.44%  | 308  | 526  | Not Significant  |  
| 2009-05  | +0.08%  | -0.36%  | +0.43%  | 289  | 608  | Not Significant  |  
| 2009-12  | +0.28%  | -0.65%  | +0.93%  | 385  | 342  | Not Significant  |  
| 2010-07  | +0.55%  | -1.01%  | +1.56%  | 608  | 222  | Significant  |  
| 2011-02  | +0.40%  | -1.68%  | +2.08%  | 686  | 132  | Significant  |  
| 2011-09  | +0.42%  | -2.06%  | +2.48%  | 685  | 121  | Significant  |  
| 2012-04  | +0.72%  | -2.48%  | +3.20%  | 576  | 214  | Significant  |  
| 2012-11  | +0.69%  | -1.57%  | +2.26%  | 575  | 291  | Significant  |  
| 2013-06  | +1.04%  | -1.34%  | +2.38%  | 642  | 308  | Significant  |  
| 2014-01  | +1.13%  | -2.58%  | +3.71%  | 922  | 275  | Significant  |  
| 2014-08  | +0.79%  | -1.95%  | +2.74%  | 1,400  | 278  | Significant  |  
| 2015-03  | +0.53%  | -2.56%  | +3.09%  | 1,950  | 251  | Significant  |  
| 2015-10  | +0.84%  | -3.53%  | +4.37%  | 2,396  | 318  | Significant  |  
| 2016-05  | +0.95%  | -5.15%  | +6.10%  | 2,635  | 317  | Significant  |  
| 2016-12  | +0.99%  | -4.29%  | +5.28%  | 2,667  | 510  | Significant  |  
| 2017-07  | +0.48%  | -2.35%  | +2.83%  | 2,765  | 498  | Significant  |  
| 2018-02  | +0.33%  | -1.81%  | +2.14%  | 2,889  | 582  | Significant  |  
| 2018-09  | +0.31%  | -1.24%  | +1.54%  | 2,793  | 613  | Significant  |  
| 2019-04  | +0.39%  | -1.08%  | +1.46%  | 2,540  | 667  | Significant  |  
| 2019-11  | +0.95%  | -2.34%  | +3.29%  | 2,463  | 981  | Significant  |  
| 2020-06  | +1.44%  | -3.86%  | +5.30%  | 2,517  | 778  | Significant  |  
| 2021-01  | +0.86%  | -2.93%  | +3.79%  | 2,969  | 603  | Significant  |  
| 2021-08  | +0.15%  | -1.52%  | +1.68%  | 3,873  | 239  | Significant  |  
| 2022-03  | -0.04%  | +2.35%  | -2.39%  | 4,423  | 71  | Not Significant  |  
| 2022-10  | +0.22%  | -0.74%  | +0.96%  | 4,216  | 62  | Not Significant  |  
| 2023-05  | +0.87%  | -6.38%  | +7.25%  | 3,893  | 253  | Significant  |  
**Pattern in non-significant dates:** The five non-significant results cluster in two periods. The early dates (2008 to 2009) have small sample sizes. The late dates (2022) have very few high-distress suburbs remaining after the property boom. The signal returns strongly at 2023-05 with a 7.25% spread.
## 5. Regional Robustness
The signal produces a positive spread in **10 of 11 regions**. Greater Sydney is the only region where the signal inverts (-0.06%).
### 5.1 Full Regional Table  
| Region  | Top Tier Growth  | Bottom Tier Growth  | Spread  | Top N  | Bottom N  | P-value  |  
| --- | --- | --- | --- | --- | --- | --- |  
| Rest of SA  | +4.94%  | -3.01%  | +7.95%  | 3,923  | 2,444  | ≈ 0  |  
| Rest of WA  | +1.38%  | -3.01%  | +4.39%  | 6,294  | 8,536  | ≈ 0  |  
| Rest of Vic.  | +0.83%  | -3.40%  | +4.23%  | 45,585  | 2,538  | 3.9e-257  |  
| Rest of Qld  | +1.58%  | -2.36%  | +3.94%  | 45,855  | 14,709  | ≈ 0  |  
| Greater Perth  | -0.20%  | -4.00%  | +3.79%  | 8,259  | 11,165  | 8.0e-279  |  
| Greater Adelaide  | +0.84%  | -2.44%  | +3.28%  | 22,051  | 1,553  | 2.4e-112  |  
| Rest of NSW  | +0.29%  | -1.79%  | +2.08%  | 105,021  | 16,443  | ≈ 0  |  
| Greater Brisbane  | +0.93%  | +0.18%  | +0.74%  | 33,229  | 1,378  | 4.5e-08  |  
| Rest of Tas.  | +0.52%  | -0.12%  | +0.64%  | 190  | 50  | 0.427  |  
| Greater Melbourne  | -1.21%  | -1.75%  | +0.54%  | 30,299  | 1,906  | 0.001  |  
| Greater Sydney  | +0.51%  | +0.57%  | -0.06%  | 56,795  | 11,358  | 0.299  |  
**Strongest regions:** Rest of South Australia (+7.95% spread across 6,367 sales) and Rest of Western Australia (+4.39% spread across 14,830 sales). In declining markets like Greater Perth, low-distress suburbs fell -0.20% per year while high-distress suburbs fell -4.00%.
## 6. Suburb-Level Evidence
Suburb-level comparisons for selected cities are available on the [summary](https://www.microburbs.com.au/market-distress-index).
## 7. Defence of Method
### 7.1 Why a Single Variable Works
The distress rate is not just a number. It is a summary statistic that captures several underlying market dynamics. A suburb with many loss-making sales typically has oversupply, weak demand, poor lending conditions, or structural economic decline.
### 7.2 Statistical Significance
The overall t-statistic is 113.96. The probability of observing a 2.68% spread across 491,844 sales by random chance is effectively zero.
### 7.3 Consistency Over Time
The signal was statistically significant at 22 of 27 sample dates spanning 15 years. A signal that works 81% of the time across a full market cycle is robust.
### 7.4 Geographic Breadth
The spread is positive in 10 of 11 regions. It works in rising and falling markets. Even Greater Melbourne, which saw broad declines, showed a positive 0.54% spread.
### 7.5 Practical Use
A 2.68 percentage point advantage per year, compounded over time, is meaningful. This threshold is one input among several in the Microburbs research programme.
**Analogy:** A suburb where 40% of recent sales were at a loss is like a business district where 40% of shops are closing. The remaining shops are not necessarily doomed. But the environment is hostile. A suburb where 5% of sales are at a loss is like a shopping strip with a waiting list for leases.
## 8. Limitations
### 8.1 Distress Rate Is Backward-Looking
The distress rate measures what has already happened, not what will happen next. The threshold does not predict turning points.
### 8.2 Small Sample in Some Periods
During strong market conditions (2020 to 2022), very few suburbs had distress rates above 30%. At 2022-03, only 71 bottom-tier sales were available.
### 8.3 Greater Sydney Exception
The signal does not work in Greater Sydney. Sydney's supply constraints may insulate even distressed suburbs from underperformance.
### 8.4 Individual Suburb Variation
Even within the top tier, individual suburb outcomes vary widely. The threshold provides a statistical edge across large numbers of purchases, not a guarantee for any single suburb.
### 8.5 No Causal Claim
This paper documents a correlation, not a causal mechanism. Other unmeasured variables may explain part or all of the observed relationship.
**Summary of limitations:** The Market Distress threshold is a statistical tool, not a crystal ball. It identifies a persistent pattern across 491,844 sales, 15 years, and 11 regions. But individual outcomes will vary. Use this threshold as one factor in a broader investment framework.
## Access Suburb-Level Distress Scores
Get distress rates for every suburb in Australia. Combine with other Microburbs signals to build a shortlist backed by data.
[Explore on Microburbs](https://microburbs.com.au)[Back to Overview](https://www.microburbs.com.au/market-distress-index)
[Read the Summary](https://www.microburbs.com.au/market-distress-index)[All Thresholds](https://www.microburbs.com.au/insights)
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
