[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
Technical Whitepaper
# Transport Ecosystem Index: Technical Whitepaper
Full statistical methodology, bin performance analysis, temporal consistency testing, and regional robustness results across 272,958 property sales.
By Luke Metcalfe, Microburbs Research. February 2026
R² = 0.176
Out-of-Sample Fit
p = 3.2e-142
Top Bin Significance
75%
Quarterly Consistency
272,958
Total Sales Tested
![Luke Metcalfe](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Fluke-headshot-circle.png&w=256&q=75)
Luke Metcalfe
Founder & Chief Data Scientist
15+ years in property data analytics
## Contents
  1. [1.Abstract](https://www.microburbs.com.au/transport-ecosystem-whitepaper#abstract)
  2. [2.Methodology](https://www.microburbs.com.au/transport-ecosystem-whitepaper#methodology)
  3. [3.Bin Performance](https://www.microburbs.com.au/transport-ecosystem-whitepaper#bin-performance)
  4. [4.Temporal Analysis](https://www.microburbs.com.au/transport-ecosystem-whitepaper#temporal-analysis)
  5. [5.Regional Robustness](https://www.microburbs.com.au/transport-ecosystem-whitepaper#regional-robustness)
  6. [6.Suburb-Level Evidence](https://www.microburbs.com.au/transport-ecosystem-whitepaper#suburb-evidence)
  7. [7.Defence of Method](https://www.microburbs.com.au/transport-ecosystem-whitepaper#defence-of-method)
  8. [8.Limitations](https://www.microburbs.com.au/transport-ecosystem-whitepaper#limitations)


## 1. Abstract
This paper presents a composite index that measures transport connectivity in Australian suburbs. The index combines six transport connectivity variables from census data into a single score. Suburbs with strong, multi-modal transport networks score higher. Suburbs with limited or car-dependent transport options score lower.
We trained a statistical model on historical property sales data to predict 4-year annualised growth rates. The model was evaluated out of sample and achieved an R-squared of 0.1761. The overall model R-squared was 0.213 with train R-squared of 0.1694. The top-scoring suburbs outperformed the national median by +4.0 percentage points over 4 years. The bottom-scoring suburbs underperformed by -3.3 percentage points.
The signal was tested across 163 quarterly periods and 13 GCCSA regions. The top bin was statistically significant at 147 of 163 dates. The top quartile beat the bottom quartile in 122 of 163 quarters (75%). The signal produced a positive spread in 8 of 13 regions.
These results indicate a persistent, geographically broad relationship between transport connectivity and subsequent property growth.
## 2. Methodology
### 2.1 Feature Construction
The Transport Ecosystem Index is built from six transport connectivity variables. These variables capture commuting patterns, public transport access, active transport usage, and vehicle dependency at the suburb level. We do not disclose the specific census field names, as the combination itself represents proprietary research.
Each variable was standardised and combined into a single composite score using a weighted formula. The weights were derived from a predictive model trained to predict 4-year annualised property growth relative to the national median.
### 2.2 Model Training
The model was trained on property sales data spanning 2008 to 2021. Each observation is a single property sale. The target variable is the annualised 4-year growth rate from the sale date. The features are the six transport-derived variables for the suburb where the sale occurred.
The model was trained using a strict out-of-sample framework. Training and test sets were split by time period to prevent data leakage. Properties sold in overlapping windows were excluded from the test set to ensure clean separation.
### 2.3 Performance Metric
The primary metric is the difference in median annualised 4-year growth between each bin and the national median. Statistical significance is assessed using a two-sided t-test against the null hypothesis that the bin's mean growth equals the national mean.
diff = median_growth(bin) - median_growth(national)  
t-statistic = (mean(bin) - mean(national)) / SE(bin)  
p-value from two-sided t-test
### 2.4 Out-of-Sample R-squared
The model achieved an out-of-sample R-squared of 0.1761. The training R-squared was 0.1694 and the overall R-squared was 0.213. This means 17.6% of variance in 4-year suburb-level growth can be explained by the six transport connectivity variables alone. The close alignment between train and test R-squared confirms the model is not overfitted.
#### Note on R-squared
Property prices are influenced by hundreds of factors, including interest rates, infrastructure, zoning, supply, local employment, and macroeconomic conditions. No single thematic index will produce a very high R-squared. The relevant question is whether the signal is statistically significant and consistent, not whether it explains most of the variance. An out-of-sample R-squared of 0.176 is notably strong for a single thematic factor.
## 3. Bin Performance
The model sorts suburbs into three bins based on their Transport Ecosystem score. Each bin has a distinct growth profile.
Top Bin
+4.0%
p = 3.2e-142 N = 38,548 sales Range: 86 to 100
Middle Bin
+0.7%
p = 4.2e-10 N = 146,319 sales Range: 32 to 86
Bottom Bin
-3.3%
p = 8.3e-174 N = 88,091 sales Range: 0 to 32  
| Bin  | Score Range  | Diff vs National  | p-value  | N (Sales)  | Significant  |  
| --- | --- | --- | --- | --- | --- |  
| Top  | 86 to 100  | +4.0%  | 3.2e-142  | 38,548  | Yes  |  
| Middle  | 32 to 86  | +0.7%  | 4.2e-10  | 146,319  | Yes  |  
| Bottom  | 0 to 32  | -3.3%  | 8.3e-174  | 88,091  | Yes  |  
Key observation
All three bins produce statistically significant results. The spread between top and bottom is 7.3 percentage points over 4 years. The monotonic ordering (top strongly positive, middle mildly positive, bottom strongly negative) confirms the index captures a real gradient in growth outcomes. The bottom bin's p-value of 8.3e-174 is one of the strongest signals across all Microburbs indices.
## 4. Temporal Analysis
A signal that works at one point in time could be a fluke. We tested the Transport Ecosystem Index across every quarter from 2008-Q1 to 2021-Q3.
Quarterly consistency
The top quartile sat above the bottom quartile in 122 of 163 quarters (75%). The separation is strongest during 2012 to 2016, where the top quartile consistently outperforms by over 3 percentage points. In 2014-Q3, the gap peaked at 4.57 percentage points (+2.46% top vs -2.11% bottom). The signal narrows after 2017 as market conditions shifted, but the top quartile remains higher for most of the post-2017 period as well.
### 4.1 Date-by-Date Consistency
The top bin was statistically significant at 147 of 163 individual dates. Below is a consistency summary by time window.  
| Period  | Quarters  | Top > Bottom  | Consistency  |  
| --- | --- | --- | --- |  
| 2008-Q1 to 2009-Q4  | 8  | 3 of 8  | 38%  |  
| 2010-Q1 to 2011-Q4  | 8  | 4 of 8  | 50%  |  
| 2012-Q1 to 2013-Q4  | 8  | 8 of 8  | 100%  |  
| 2014-Q1 to 2015-Q4  | 8  | 8 of 8  | 100%  |  
| 2016-Q1 to 2017-Q4  | 8  | 8 of 8  | 100%  |  
| 2018-Q1 to 2019-Q4  | 8  | 8 of 8  | 100%  |  
| 2020-Q1 to 2021-Q3  | 7  | 5 of 7  | 71%  |  
#### Bottom bin non-underperformance dates (33 of 163)
2008-12, 2009-03, 2009-06, 2009-07, 2009-09, 2009-10, 2010-03, 2010-08, 2010-09, 2010-10, 2012-06, 2012-10, 2012-11, 2013-03, 2013-09, 2014-06, 2014-09, 2015-04, 2016-02, 2016-05, 2016-08, 2016-12, 2017-10, 2019-02, 2019-03, 2019-05, 2019-06, 2019-10, 2020-04, 2020-10, 2021-01, 2021-03, 2021-06
Pattern
The signal is most consistent during the 2012 to 2019 core period. The early years (2008-2011) coincide with the post-GFC recovery, when distressed sales across all suburb types compressed growth differentials. The 2020-2021 tail weakened as the pandemic property boom lifted all suburbs regardless of transport connectivity. From 2012 onward, the top quartile outperformed the bottom quartile in every single quarter through to 2019-Q4.
## 5. Regional Robustness
A signal that works only in one city is less useful than one that works nationally. We tested the Transport Ecosystem Index across all 13 GCCSA regions in Australia.
Geographic breadth
The signal produces a positive spread (top quartile beats bottom quartile) in 8 of 13 regions. Greater Darwin leads with a +3.23% spread. Greater Melbourne follows at +3.02%. Five regions show a negative spread. The weakest region is Rest of NT at -4.24%, where the small sample of 147 sales limits reliability.  
| Region (GCCSA)  | Top Q Growth  | Bottom Q Growth  | Spread  | N (Sales)  |  
| --- | --- | --- | --- | --- |  
| Greater Darwin  | -3.42%  | -6.65%  | +3.23%  | 367  |  
| Greater Melbourne  | -0.13%  | -3.15%  | +3.02%  | 4,945  |  
| Rest of WA  | -0.77%  | -3.14%  | +2.37%  | 3,603  |  
| Rest of Qld  | +0.86%  | -1.20%  | +2.06%  | 13,184  |  
| Rest of NSW  | +2.45%  | +1.03%  | +1.42%  | 14,351  |  
| Greater Sydney  | -0.93%  | -1.24%  | +0.31%  | 4,576  |  
| Greater Adelaide  | +0.15%  | -0.08%  | +0.23%  | 3,216  |  
| Rest of Vic.  | +2.30%  | +2.19%  | +0.11%  | 7,443  |  
| ACT  | +0.15%  | +0.70%  | -0.55%  | 1,129  |  
| Greater Brisbane  | +0.07%  | +0.71%  | -0.64%  | 1,854  |  
| Greater Perth  | -3.35%  | -2.41%  | -0.94%  | 2,684  |  
| Rest of SA  | -1.40%  | -0.46%  | -0.94%  | 2,342  |  
| Rest of NT  | -6.97%  | -2.73%  | -4.24%  | 147  |  
Strongest regions
Greater Darwin (+3.23% spread across 367 sales) and Greater Melbourne (+3.02% spread across 4,945 sales). Even in declining markets like Darwin and Rest of WA, well-connected suburbs fell less than poorly connected ones. The five negative-spread regions include Rest of NT (147 sales, too small to be reliable), Greater Perth, Rest of SA, Greater Brisbane, and ACT.
## 6. Suburb-Level Evidence
Suburb-level comparisons for selected cities are available on the [summary](https://www.microburbs.com.au/home-office-index).
## 7. Defence of Method
### 7.1 Why the R-squared Is Noteworthy
An out-of-sample R-squared of 0.176 means the model explains 17.6% of variance in 4-year suburb-level growth. This is a strong result for a single thematic factor. Property prices are shaped by hundreds of variables. No single index will capture the majority of variance.
The close alignment between train R-squared (0.1694) and test R-squared (0.1761) confirms the model is not overfitted. The signal generalises to unseen data.
### 7.2 Statistical Significance
The top bin's outperformance has a p-value of 3.2e-142. The probability of observing a +4.0% difference across 38,548 sales by random chance is effectively zero. A p-value below 0.05 is the standard threshold. The Transport Ecosystem Index exceeds this by 140 orders of magnitude.
The bottom bin is even more significant at p = 8.3e-174 across 88,091 sales. Both tails carry strong statistical weight.
### 7.3 Consistency Over Time
The top bin was significant at 147 of 163 dates. The top quartile beat the bottom quartile in 122 of 163 quarters (75%). A signal that works three-quarters of the time across a full market cycle spanning booms, corrections, and the COVID pandemic is robust.
### 7.4 Geographic Breadth
The spread is positive in 8 of 13 GCCSA regions. It works in declining markets (Greater Darwin at +3.23%, Rest of WA at +2.37%) and in growing markets (Rest of Queensland at +2.06%, Rest of NSW at +1.42%).
### 7.5 Practical Use
Investors do not need a model to predict exact prices. They need a signal to tilt the odds in their favour across a portfolio of purchases. A 4.0 percentage point advantage per purchase, compounded over time, is highly meaningful.
Analogy
A weather model that explains 17.6% of daily temperature variation would be a useful tool for identifying warm and cold regions. The Transport Ecosystem Index reliably identifies which suburbs grow faster on average, across 13 years of data and 13 geographic zones. It describes a property "climate" pattern. It is not a daily forecast for any single suburb.
## 8. Limitations
### 8.1 Census Data Is Point-in-Time
The index relies on Australian Census data from 2016 and 2021. Census data is collected every five years. Transport usage patterns can shift between census dates. A suburb that scored highly in 2016 may have changed by 2021 due to new infrastructure or service cuts.
### 8.2 Backward-Looking Model
The model was trained on historical data from 2008 to 2021. Past patterns do not guarantee future results. New transport infrastructure (such as the Sydney Metro or Melbourne Suburban Rail Loop) may alter suburb rankings in ways not captured by the current model.
### 8.3 Individual Suburb Variation
Even within the top bin, individual suburb outcomes vary widely. Brighton Vic scored 96.9 but returned -2.86% per year during 2021-2025. Acacia Ridge in Brisbane scored 58.2 and returned +1.41% per year. The index provides a statistical edge across large numbers of purchases, not a guarantee for any single suburb.
### 8.4 Five Negative-Spread Regions
The signal inverts in 5 of 13 regions. Greater Brisbane (-0.64%), ACT (-0.55%), Greater Perth (-0.94%), Rest of SA (-0.94%), and Rest of NT (-4.24%) all show negative spreads. Investors in these regions should treat the Transport Ecosystem Index with caution.
### 8.5 Sample Size Variability
Some regions have small sample sizes. Rest of NT contributed only 147 sales. Greater Darwin contributed 367 sales. Results in small-sample regions carry wider confidence intervals.
### 8.6 No Causal Claim
This paper documents a correlation, not a causal mechanism. We hypothesise that suburbs with diverse transport options attract a broader range of buyers, reducing dependency on any single commuting route. But the data does not prove causation.
#### Summary of limitations
The Transport Ecosystem Index is a statistical tool, not a crystal ball. It identifies a persistent pattern across 272,958 sales, 13 years, and 13 regions. But individual outcomes will vary. Census data updates infrequently. The model is backward-looking. The signal does not hold in all regions. Use this index as one factor in a broader investment framework.
## Access Suburb-Level Scores
Get Transport Ecosystem scores for every suburb in Australia. Combine with other Microburbs signals to build a shortlist backed by data.
[Explore on Microburbs](https://microburbs.com.au)[Back to Overview](https://www.microburbs.com.au/home-office-index)
[Read the Summary](https://www.microburbs.com.au/home-office-index)[All Thresholds](https://www.microburbs.com.au/insights)
Generated 27 February 2026 at 14:32:07
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
