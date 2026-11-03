[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
Technical Whitepaper
# Mean Reversion Threshold: Technical Whitepaper
Full statistical methodology, threshold calibration, temporal consistency testing, and regional robustness results across 825,392 property sales.
t = 251.87
T-Statistic
p ~ 0
P-Value
100%
Quarterly Consistency
825,392
Total Sales Tested
![Luke Metcalfe](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Fluke-headshot-circle.png&w=256&q=75)
Luke Metcalfe
Founder & Chief Data Scientist
15+ years in property data analytics
### Table of Contents
  1. [1. Abstract](https://www.microburbs.com.au/mean-reversion-whitepaper#section-1)
  2. [2. Methodology](https://www.microburbs.com.au/mean-reversion-whitepaper#section-2)
  3. [3. Tier Performance](https://www.microburbs.com.au/mean-reversion-whitepaper#section-3)
  4. [4. Temporal Analysis](https://www.microburbs.com.au/mean-reversion-whitepaper#section-4)
  5. [5. Regional Robustness](https://www.microburbs.com.au/mean-reversion-whitepaper#section-5)
  6. [6. Suburb-Level Evidence](https://www.microburbs.com.au/mean-reversion-whitepaper#section-6)
  7. [7. Defence of Method](https://www.microburbs.com.au/mean-reversion-whitepaper#section-7)
  8. [8. Limitations](https://www.microburbs.com.au/mean-reversion-whitepaper#section-8)


## 1. Abstract
This paper presents a univariate threshold that measures mean reversion in Australian suburb house prices. The threshold uses a single variable: cumulative median house price growth over the preceding 10 years. Suburbs where prices grew less than 44% over the past decade are classified as "top tier" and tend to outperform in the next four years. Suburbs where prices grew more than 91.9% are classified as "bottom tier" and tend to underperform.
The top tier outperformed the national median by +1.14 percentage points per year over rolling 4-year windows. The bottom tier underperformed by -1.88 percentage points. The total spread is 3.02 percentage points per year. This was measured across 825,392 property sales from 2008 to 2021.
The signal was tested across 55 quarterly periods and 28 individual sample dates. It held at every single quarter and every single sample date. This is a 100% consistency rate. No other threshold in the Microburbs research programme achieves this level of temporal consistency. The t-statistic is 251.87 and the p-value is effectively zero.
The signal was tested across 15 GCCSA regions. It produced a positive spread in 12 of 15 regions. The three regions where it inverted are resource-driven markets (Greater Perth, Greater Darwin, and Rest of NT) where mining boom prices did not fully revert.
## 2. Methodology
### 2.1 Variable Construction
The mean reversion threshold uses a single variable: the cumulative percentage change in a suburb's median house price over the preceding 10 years.
past_growth = (median_price_now - median_price_10yr_ago) / median_price_10yr_ago
For example, if a suburb's median house price was $300,000 ten years ago and is $420,000 today, the past growth is 40%. This suburb would fall into the top tier (below 44%). If another suburb's median was $250,000 and is now $500,000, the past growth is 100%. This suburb would fall into the bottom tier (above 91.9%).
### 2.2 Threshold Calibration
The thresholds were calibrated using property sales data spanning 2008 to 2021. The top tier threshold is 44% past 10-year growth. The bottom tier threshold is 91.9%. Suburbs between these two thresholds fall into the middle tier.
### 2.3 Performance Metric
The primary metric is the difference in median annualised 4-year growth between each tier and the national median. Statistical significance is assessed using a two-sided t-test.
diff = median_growth(tier) - median_growth(national)  
t-statistic = (mean(tier) - mean(national)) / SE(tier)  
p-value from two-sided t-test
### 2.4 Inverted Logic
This threshold is inverted relative to most other indices. The "top tier" contains suburbs with LOW past growth. These are the suburbs that outperform in the future. The "bottom tier" contains suburbs with HIGH past growth. These are the suburbs that underperform in the future.
**Note on univariate design:** Unlike composite indices that combine multiple variables, the mean reversion threshold uses a single, transparent variable. The advantage is simplicity and interpretability. Despite this simplicity, the signal is the most temporally consistent threshold in the Microburbs research programme.
## 3. Tier Performance
The model sorts suburbs into three tiers based on their past 10-year median house price growth. Each tier has a distinct forward growth profile.
Top Tier (Below 44%)
+1.14%
p ~ 0 (t = 251.87) N = 367,662 sales
Middle Tier (44% to 91.9%)
-0.14%
Near the market average N = 252,173 sales
Bottom Tier (Above 91.9%)
-1.88%
High past growth = weak future growth N = 205,557 sales  
| Tier  | Past Growth Range  | Diff vs National  | p-value  | N (Sales)  | Significant  |  
| --- | --- | --- | --- | --- | --- |  
| Top  | Below 44%  | +1.14%  | ~ 0  | 367,662  | Yes  |  
| Middle  | 44% to 91.9%  | -0.14%  | ~ 0  | 252,173  | Yes  |  
| Bottom  | Above 91.9%  | -1.88%  | ~ 0  | 205,557  | Yes  |  
**Key observation:** All three tiers produce statistically significant results. The spread between top and bottom is 3.02 percentage points per year. The monotonic ordering (top positive, middle near zero, bottom negative) confirms the threshold captures a real gradient in growth outcomes. The t-statistic of 251.87 is by far the highest of any threshold in the research programme.
## 4. Temporal Analysis
We tested the mean reversion threshold across every quarter from 2008-Q1 to 2021-Q3. The top tier outperformed the bottom tier at every single quarter and every single sample date.
The low-past-growth tier outperformed at **55 of 55 quarters (100%)**. This is the only threshold in the research programme that never inverts. The separation is widest during 2013 to 2014, exceeding 6 percentage points. Even during the narrowest gap in 2016-Q3, the spread remained positive at 0.48 percentage points.
### 4.1 Date-by-Date Consistency
The result was positive at all 28 dates. Every single date showed the top tier outperforming the bottom tier.  
| Sample Date  | Top Tier Growth  | Bottom Tier Growth  | Spread  | Top N  | Bottom N  | Significance  |  
| --- | --- | --- | --- | --- | --- | --- |  
| 2008-03  | +1.05%  | -1.57%  | +2.63%  | 1,825  | 1,505  | Significant  |  
| 2008-09  | +1.15%  | -1.38%  | +2.53%  | 1,727  | 1,593  | Significant  |  
| 2009-03  | +1.14%  | -1.29%  | +2.43%  | 1,742  | 1,615  | Significant  |  
| 2009-09  | +1.04%  | -0.98%  | +2.02%  | 1,681  | 1,676  | Significant  |  
| 2010-03  | +1.27%  | -1.05%  | +2.32%  | 1,594  | 1,867  | Significant  |  
| 2010-09  | +1.45%  | -0.96%  | +2.41%  | 1,513  | 2,023  | Significant  |  
| 2011-03  | +1.72%  | -1.05%  | +2.77%  | 1,440  | 2,088  | Significant  |  
| 2011-09  | +2.18%  | -1.45%  | +3.63%  | 1,432  | 2,003  | Significant  |  
| 2012-03  | +2.31%  | -1.76%  | +4.07%  | 1,436  | 1,966  | Significant  |  
| 2012-09  | +2.46%  | -2.16%  | +4.63%  | 1,439  | 1,982  | Significant  |  
| 2013-03  | +2.77%  | -2.71%  | +5.49%  | 1,404  | 1,950  | Significant  |  
| 2013-09  | +2.86%  | -3.75%  | +6.61%  | 1,569  | 1,574  | Significant  |  
| 2014-03  | +2.36%  | -4.02%  | +6.38%  | 1,842  | 1,404  | Significant  |  
| 2014-09  | +1.95%  | -3.71%  | +5.67%  | 1,876  | 1,268  | Significant  |  
| 2015-03  | +1.60%  | -3.25%  | +4.84%  | 2,015  | 1,057  | Significant  |  
| 2015-09  | +1.31%  | -2.04%  | +3.35%  | 2,054  | 999  | Significant  |  
| 2016-03  | +0.65%  | -0.97%  | +1.62%  | 2,285  | 858  | Significant  |  
| 2016-09  | +0.09%  | -0.47%  | +0.56%  | 2,629  | 802  | Significant  |  
| 2017-03  | +0.22%  | -1.03%  | +1.25%  | 2,767  | 844  | Significant  |  
| 2017-09  | +0.16%  | -1.12%  | +1.29%  | 3,037  | 815  | Significant  |  
| 2018-03  | +0.26%  | -1.68%  | +1.95%  | 3,260  | 779  | Significant  |  
| 2018-09  | +0.47%  | -2.13%  | +2.61%  | 3,344  | 779  | Significant  |  
| 2019-03  | +0.49%  | -1.85%  | +2.34%  | 3,332  | 709  | Significant  |  
| 2019-09  | +0.49%  | -1.08%  | +1.57%  | 3,331  | 547  | Significant  |  
| 2020-03  | +0.83%  | -1.43%  | +2.26%  | 3,354  | 510  | Significant  |  
| 2020-09  | +1.15%  | -1.78%  | +2.93%  | 3,416  | 397  | Significant  |  
| 2021-03  | +1.67%  | -2.67%  | +4.34%  | 3,165  | 627  | Significant  |  
| 2021-09  | +2.52%  | -3.80%  | +6.32%  | 2,602  | 1,167  | Significant  |  
**Perfect temporal consistency:** All 28 sample dates show a positive spread. The spread ranges from a minimum of +0.56% (2016-09) to a maximum of +6.61% (2013-09). Even at its weakest, the signal remains positive. This 100% consistency rate is unique in the Microburbs research programme.
## 5. Regional Robustness
We tested the mean reversion threshold across all 15 GCCSA regions in Australia.
The signal produces a positive spread in **12 of 15 regions**. Greater Sydney leads with a +6.40% spread across 63,808 sales. The three regions where the signal inverts are ACT (-0.09%), Greater Perth (-0.27%), and the Northern Territory regions.  
| Region (GCCSA)  | Top Tier Growth  | Bottom Tier Growth  | Spread  | N (Sales)  | p-value  |  
| --- | --- | --- | --- | --- | --- |  
| Greater Sydney  | +4.51%  | -1.89%  | +6.40%  | 63,808  | ~ 0  |  
| Greater Hobart  | +5.75%  | -0.57%  | +6.32%  | 251  | 1.3e-32  |  
| Rest of Tas.  | +3.11%  | -0.38%  | +3.49%  | 364  | 1.1e-34  |  
| Rest of Qld  | +0.19%  | -3.10%  | +3.30%  | 119,654  | ~ 0  |  
| Rest of SA  | +0.27%  | -2.51%  | +2.78%  | 26,495  | ~ 0  |  
| Rest of WA  | -1.75%  | -4.51%  | +2.77%  | 41,480  | ~ 0  |  
| Greater Brisbane  | +1.22%  | -1.41%  | +2.63%  | 48,015  | ~ 0  |  
| Rest of NSW  | +2.00%  | -0.34%  | +2.34%  | 86,646  | ~ 0  |  
| Greater Melbourne  | +2.29%  | +0.14%  | +2.15%  | 33,702  | 4.2e-260  |  
| Greater Adelaide  | +0.69%  | -1.14%  | +1.83%  | 36,174  | ~ 0  |  
| Rest of Vic.  | +1.71%  | +0.20%  | +1.51%  | 56,582  | ~ 0  |  
| ACT  | +0.07%  | +0.16%  | -0.09%  | 5,948  | 0.36  |  
| Greater Perth  | -2.13%  | -1.86%  | -0.27%  | 48,743  | 2.8e-12  |  
| Greater Darwin  | -3.86%  | -2.89%  | -0.97%  | 3,999  | 2.5e-10  |  
| Rest of NT  | -4.99%  | -3.19%  | -1.80%  | 1,358  | 9.6e-21  |  
**Strongest regions:** Greater Sydney (+6.40% spread across 63,808 sales) and Greater Hobart (+6.32% spread across 251 sales). In Rest of WA, even though both tiers posted negative growth, low-past-growth suburbs fell 2.77 percentage points less than high-past-growth suburbs. The signal works in both rising and falling markets.
## 6. Suburb-Level Evidence
Suburb-level comparisons for selected cities are available on the [summary](https://www.microburbs.com.au/mean-reversion-threshold).
## 7. Defence of Method
### 7.1 Why Mean Reversion Works
Mean reversion in property markets is well documented in academic literature. The mechanism is straightforward. Suburbs that have grown quickly become relatively expensive. Buyers start looking at cheaper alternatives. Capital flows shift toward undervalued areas. Over time, the gap between expensive and cheap suburbs narrows.
### 7.2 Statistical Significance
The t-statistic is 251.87. The probability of observing a +3.02% spread across 825,392 sales by random chance is effectively zero. For context, a p-value below 0.05 is the standard threshold for statistical significance. The mean reversion threshold exceeds this by hundreds of orders of magnitude.
### 7.3 Consistency Over Time
The signal was positive at all 28 sample dates spanning 14 years. It was positive in 100% of 55 quarterly observations. No other threshold in the Microburbs research programme achieves this level of temporal consistency.
### 7.4 Geographic Breadth
The spread is positive in 12 of 15 GCCSA regions. It works in rising markets (Greater Sydney, Greater Hobart) and falling markets (Rest of WA). The three exceptions are resource-driven markets where mining booms created unusual price dynamics.
### 7.5 Practical Use
The mean reversion threshold provides a simple screen for suburb selection. Look for suburbs where the median house price grew less than 44% over the past decade. Avoid suburbs where it grew more than 91.9%. This is a filter, not a final answer.
**Key advantage:** Unlike composite indices that combine multiple variables in opaque ways, the mean reversion threshold is fully transparent. The single variable (past 10-year growth) can be verified by any investor using publicly available data. The threshold values (44% and 91.9%) are fixed and published.
## 8. Limitations
### 8.1 Resource Markets
The signal inverts in three resource-driven regions: Greater Perth, Greater Darwin, and Rest of NT. In these markets, suburbs that boomed during mining cycles did not fully revert. Investors in Western Australia and the Northern Territory should not rely on this threshold alone.
### 8.2 Backward-Looking Model
The model was calibrated on historical data from 2008 to 2021. Past patterns do not guarantee future results. However, mean reversion is a fundamental economic principle, not an artefact of a specific time period.
### 8.3 Individual Suburb Variation
Even within the top tier, individual suburb outcomes vary widely. Dysart recovered at +5.09% per year, but Nome lost -3.78% per year despite also having low past growth. The threshold provides a statistical edge across large numbers of purchases, not a guarantee for any single suburb.
### 8.4 Threshold Stability
The thresholds (44% and 91.9%) were calibrated on a specific data sample. Different calibration periods might produce slightly different thresholds. The underlying principle (low past growth predicts strong future growth) is robust, but the exact cutoff values may shift over time.
### 8.5 Confounding Variables
Suburbs with low past growth may share other characteristics that also predict future growth. The mean reversion effect may be partially explained by these confounders. This paper documents a correlation, not a causal mechanism.
**Summary of limitations:** The mean reversion threshold is the most temporally consistent signal in the Microburbs research programme. It is simple, transparent, and backed by 825,392 sales. But it does not work in resource-driven markets. Individual outcomes vary. The threshold values may shift over time. Use this as one factor in a broader investment framework.
## Access Suburb-Level Scores
Get mean reversion data for every suburb in Australia. Identify suburbs where low past growth signals strong future performance.
[Explore on Microburbs](https://microburbs.com.au)[Back to Overview](https://www.microburbs.com.au/mean-reversion-threshold)
[Read the Summary](https://www.microburbs.com.au/mean-reversion-threshold)[All Thresholds](https://www.microburbs.com.au/insights)
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
