[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
RESEARCH WHITEPAPER
# We Asked 7 Versions of GPT to Pick  
Australia's Top Growth Suburbs.  
Then We Checked.
17,096 predictions. 8 states and territories. Up to 38 months of actual price data. The results are not what you would expect.
By Luke Metcalfe | 28 February 2026
![Luke Metcalfe](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Fluke-headshot-circle.png&w=256&q=75)
Luke Metcalfe
Founder & Chief Data Scientist
15+ years in property data analytics
7
GPT versions tested
17,096
suburb predictions
6,888
scored against actuals
-0.96pp
underperformance (total)
## 1. The One-Line Summary
You would have been better off picking suburbs at random.
Six of seven versions underperformed the market when measured from the exact month after their publication date. Only GPT-4.1 beat the market, by just 0.42pp over 9 months. Across all versions, GPT-picked suburbs underperformed by 0.96 percentage points over the forecast period. On a typical $875,000 property, that is $8,401 in lost equity. That is the median price of GPT-picked suburbs.
## 2. How We Tested This
Every version of GPT has a knowledge cutoff date. GPT-3.5 stopped learning in late 2021. GPT-4o stopped in late 2023. That creates a natural experiment. We can ask each version to forecast property growth, then check the actual prices for the years that followed.
We queried 7 versions of GPT across all 8 Australian states and territories. Each version was asked to name 20 suburbs most likely to grow, along with expected growth percentages and reasoning. We then measured actual suburb growth from the month after each version's exact publication date through to February 2026. We used monthly hedonic price data.
The critical part is simple. We compare each version's picks against all other suburbs in the same state, over the same period. This controls for the broader market. If Sydney grew 15% overall, we are not asking whether GPT predicted 15%. We are asking whether the specific suburbs it chose grew more or less than 15%.
### GPT Versions Tested  
| Model  | Released  | Growth Period  | Predictions  |  
| --- | --- | --- | --- |  
| gpt-3.5-turbo  | 30 Nov 2022  | Dec 2022 to Feb 2026  | 5,065  |  
| gpt-4  | 14 Mar 2023  | Apr 2023 to Feb 2026  | 938  |  
| gpt-4-turbo  | 9 Apr 2024  | May 2024 to Feb 2026  | 1,870  |  
| gpt-4o  | 13 May 2024  | Jun 2024 to Feb 2026  | 3,319  |  
| gpt-4o-mini  | 18 Jul 2024  | Aug 2024 to Feb 2026  | 2,483  |  
| gpt-4.1  | 14 Apr 2025  | May 2025 to Feb 2026  | 2,569  |  
| gpt-4.1-mini  | 14 Apr 2025  | May 2025 to Feb 2026  | 645  |  
## 3. Price Growth: GPT Picks vs Market
These charts show indexed price growth from each version's publication date. Both lines start at 100. The solid line tracks the average hedonic price of GPT-picked suburbs. The dashed line shows the market baseline. If the solid line ends above the dashed line, GPT beat the market.
GPT-3.5-Turbo (Dec 2022 – Feb 2026)
651 picks. 38 months. Trailed the market by 6.2 index points.
135120105100GPT picks (651) → 126.4Market baseline → 132.6Dec 22Dec 23Dec 24Dec 25
GPT picks trailed the market by 6.2 index points (-6.2pp)
GPT-4.1 (May 2025 – Feb 2026)
777 picks. 9 months. Beat the market by 0.5 index points.
112108104100GPT picks (777) → 110.4Market baseline → 109.9May 25Sep 25Feb 26
GPT picks beat the market by 0.5 index points (+0.5pp)
GPT-4o (Jun 2024 – Feb 2026)
1,014 picks. 20 months. Trailed the market by 1.1 index points.
120112106100GPT picks (1,014) → 116.4Market baseline → 117.5Jun 24Jan 25Feb 26
GPT picks trailed the market by 1.1 index points (-1.1pp)
How to read these charts
Both lines start at 100 on the model's publication date. A value of 126 means the average property price grew 26% from that date. The gap between the solid and dashed line at the end is the outperformance or underperformance. GPT-3.5-turbo, shown at top left, is the clearest example. Its picks, shown in red, consistently trail the market baseline across the full 38-month window.
## 4. Did GPT Pick Winners?
This is the only question that matters for investors. If you followed GPT's suburb recommendations, did your property grow faster than average? The answer, for most versions, is no. Dollar costs are calculated at the median property price of each model's picks.  
| Version  | Period  | Median Price  | Picks  | GPT Growth  | Mkt Growth  | vs Market  | Beat Median  | Typical Cost  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| gpt-4.1  | May 25 – Feb 26  | $861k  | 1,048  | 10.4%  | 10.0%  | +0.42pp  | 54%  | +$3,599  |  
| gpt-4o-mini  | Aug 24 – Feb 26  | $894k  | 995  | 14.9%  | 15.3%  | -0.30pp  | 43%  | -$2,723  |  
| gpt-3.5-turbo  | Dec 22 – Feb 26  | $882k  | 2,154  | 23.3%  | 24.4%  | -1.70pp  | 44%  | -$14,994  |  
| gpt-4o  | Jun 24 – Feb 26  | $814k  | 1,487  | 16.4%  | 17.0%  | -0.67pp  | 43%  | -$5,485  |  
| gpt-4  | Apr 23 – Feb 26  | $957k  | 138  | 39.7%  | 41.0%  | -1.27pp  | 43%  | -$12,193  |  
| gpt-4-turbo  | May 24 – Feb 26  | $950k  | 965  | 17.0%  | 18.6%  | -1.68pp  | 45%  | -$15,945  |  
| gpt-4.1-mini  | May 25 – Feb 26  | $884k  | 101  | 6.3%  | 8.3%  | -3.03pp  | 39%  | -$26,729  |  
## 5. Performance by State
GPT's biggest miss was Western Australia. Across all GPT versions combined, WA picks underperformed by 8.67 percentage points. That cost investors $84,028 on the median $969,000 WA property. Only 24% of GPT's WA picks beat the state median.
Victoria was the only state where GPT picks slightly outperformed, gaining $5,652 on the median $803,000 property. But 54% beating the median is barely above random chance.  
| State  | Picks  | Median Price  | vs Market  | Dollar Cost  | Beat %  |  
| --- | --- | --- | --- | --- | --- |  
| WA  | 1,036  | $969k  | -8.67pp  | -$84,028  | 24%  |  
| NSW  | 1,111  | $1,051k  | -1.57pp  | -$16,487  | 46%  |  
| Qld  | 877  | $951k  | -1.56pp  | -$14,836  | 47%  |  
| SA  | 1,024  | $788k  | -0.36pp  | -$2,875  | 47%  |  
| Vic.  | 1,084  | $803k  | +0.70pp  | +$5,652  | 54%  |  
Why WA was the worst
GPT gravitated to Perth's most expensive, most-written-about suburbs: Peppermint Grove (+15.6%), Applecross (+16.6%), Cottesloe (+35.5%). These appear frequently in real estate articles, so they dominate GPT's training data. The real growth was in affordable outer suburbs like Swan View (+93.8%), Armadale (+85.2%), and Kelmscott (+76.4%). GPT largely ignored those places.
## 6. The Prompt We Used
We sent the same prompt to every version, for every state and territory in Australia:
"Provide a list of 20 suburbs in [STATE] (Australia) most likely to experience growth for houses in the residential real estate sector up to [YEAR]. If possible, provide the anticipated capital growth percentage and give reasons why."
### What GPT-3.5 Said (NSW, up to 2024)
1. **Parramatta** - 20% growth: Parramatta is undergoing significant urban renewal and infrastructure development.
2. **Penrith** - 18% growth: Penrith is benefiting from its proximity to Sydney and ongoing investment in transport infrastructure.
3. **Liverpool** - 15% growth: Liverpool is experiencing population growth and improved amenities.
4. **Castle Hill** - 16% growth: Castle Hill is a popular suburb with strong demand.
And so on for 100 suburbs per state.
Notice the generic reasoning. "Infrastructure development", "proximity to Sydney", "strong demand". These phrases appear thousands of times in real estate articles. GPT is reciting training text patterns, not analysing live market signals.
## 7. Real Properties. Real Losses.
These are not hypotheticals. GPT recommended these suburbs, some as top picks. Anyone who bought where GPT told them to lost money, before transaction costs.
GPT-3.5's second strongest picks lost real money
[Launceston](https://www.microburbs.com.au/suburb-reports/Launceston-Tas-7250) was GPT-3.5's #2 pick for Tasmania. GPT predicted 6% growth: "Increased investment in infrastructure and amenities." Three years later, the median house is $817,000, down 13.4%. Lost $126,000. [Sandy Bay](https://www.microburbs.com.au/suburb-reports/Sandy-Bay-Tas-7005), also a #2 pick, fell 15.0% to $1,140,000. Lost $201,000.
### GPT's Worst Advice  
| Suburb  | State  | Model  | Period  | Suburb Grew  | State Avg  | vs State  | Impact  |  
| --- | --- | --- | --- | --- | --- | --- | --- |  
| Jindabyne  | NSW  | GPT-3.5 (#46 pick)  | 3Y to Mar 26  | -18.1%  | +17.5%  | -35.6pp  | Lost $243k  |  
| Footscray  | Vic.  | GPT-3.5 (#40 pick)  | 3Y to Mar 26  | -16.2%  | +7.2%  | -23.4pp  | Lost $153k  |  
| Sandy Bay  | Tas  | GPT-3.5 (#2 pick)  | 3Y to Mar 26  | -15.0%  | +3.8%  | -18.8pp  | Lost $201k  |  
| Launceston  | Tas  | GPT-3.5 (#2 pick)  | 3Y to Mar 26  | -13.4%  | +3.8%  | -17.2pp  | Lost $126k  |  
| Bellerive  | Tas  | GPT-4o-mini (#5 pick)  | 3Y to Mar 26  | -9.4%  | +3.8%  | -13.2pp  | Lost $85k  |  
### Even a Broken Clock Can Be Right  
| Suburb  | State  | Model  | Period  | Suburb Grew  | State Avg  | vs State  | Gained  |  
| --- | --- | --- | --- | --- | --- | --- | --- |  
| Davoren Park  | SA  | GPT-3.5  | Dec 22 – Feb 26  | +176.1%  | +47.8%  | +128.3pp  | +$1,283k  |  
| Elizabeth North  | SA  | GPT-3.5  | Dec 22 – Feb 26  | +105.8%  | +47.8%  | +58.0pp  | +$580k  |  
| Proserpine  | Qld  | GPT-4o  | Jun 24 – Feb 26  | +85.4%  | +25.5%  | +59.9pp  | +$599k  |  
| Swan View  | WA  | GPT-3.5  | Dec 22 – Feb 26  | +93.8%  | +61.0%  | +32.8pp  | +$328k  |  
The wins were accidental. In every case GPT predicted modest single-digit growth (3-8%). It named the suburbs but had no idea they would boom. Meanwhile, its #2 picks included [Sandy Bay](https://www.microburbs.com.au/suburb-reports/Sandy-Bay-Tas-7005) (now $1,140,000, down 15%) and [Launceston](https://www.microburbs.com.au/suburb-reports/Launceston-Tas-7250) (now $817,000, down 13.4%). You can verify these prices on our suburb report pages.
## 8. Absolute Accuracy: How Far Off Were the Numbers?
Beyond picking the right suburbs, how accurate were the growth percentage predictions themselves? Every version under-predicted actual growth except gpt-4.1-mini. The Australian market grew far faster than any version of GPT expected.  
| Model  | Scored  | MAE  | Bias  | Avg Predicted  | Avg Actual  |  
| --- | --- | --- | --- | --- | --- |  
| gpt-4.1  | 1,048  | 7.4pp  | -3.4pp  | 6.9%  | 10.4%  |  
| gpt-4.1-mini  | 101  | 9.4pp  | +6.7pp  | 13.0%  | 6.3%  |  
| gpt-4o-mini  | 995  | 12.5pp  | -10.0pp  | 5.0%  | 14.9%  |  
| gpt-4o  | 1,030  | 14.3pp  | -12.1pp  | 4.6%  | 16.6%  |  
| mistral:7b  | 93  | 22.1pp  | -21.3pp  | 9.5%  | 30.8%  |  
| gpt-3.5-turbo  | 2,154  | 22.2pp  | -11.8pp  | 11.4%  | 23.3%  |  
## 9. Data Validation: Microburbs vs CoreLogic and Domain
We cross-checked our Microburbs hedonic price data against published figures from Cotality (formerly CoreLogic) and Domain. The state rankings match exactly. Growth magnitudes are directionally aligned, with differences explained by methodology.
State rankings: exact match
Both Microburbs and CoreLogic rank growth: WA > Qld > SA > NSW > Vic.  
| State  | Microburbs (Dec 22 – Feb 26)  | CoreLogic Est. (Dec 22 – Dec 25)  | Difference Explained By  |  
| --- | --- | --- | --- |  
| WA  | +63.3%  | 58-62%  | House-only and regional WA push Microburbs slightly higher  |  
| Qld  | +48.8%  | 41-43%  | Regional Qld contributes to higher statewide figure  |  
| SA  | +47.1%  | 36-38%  | Largest gap: house-only and regional SA run ahead of capital city dwellings  |  
| NSW  | +16.7%  | 21-22%  | Statewide median vs Sydney capital city index  |  
| Vic.  | +6.5%  | 4.5-5%  | Both confirm Vic as weakest. Regional Vic provides slight uplift  |  
## 10. What This Means for Property Investors
GPT is trained on internet text. It knows which suburbs get talked about. It knows the cliches: "close to the CBD", "infrastructure investment", "lifestyle appeal". But popular suburbs are already priced in. The growth happens in the places nobody is talking about yet.
-0.96pp
Average underperformance across 6,888 scored predictions (total over forecast period)
6 of 7
GPT versions underperformed the market from their publication date
$8,401
Equity lost on a typical $875,000 property across all versions combined
## 11. Methodology
**GPT versions queried:** 7 versions via the OpenAI API. All queried at temperature 0.2 for consistency.
**Prompt:** "Provide a list of 20 suburbs in [STATE] (Australia) most likely to experience growth for houses in the residential real estate sector up to [YEAR]. If possible, provide the anticipated capital growth percentage and give reasons why." We queried each version for all 8 states and territories.
**Growth measurement:** Monthly Microburbs hedonic price indices (rm40_hedonic) covering 7,691 suburbs nationally. Growth starts from the month after each version's exact publication date through February 2026.
**Baseline comparison:** Each version's picks compared against all suburbs in the same state over the same period. Beat-median percentages calculated within-state to control for differing state-level growth rates.
**Suburb matching:** GPT-predicted suburb names fuzzy-matched to Microburbs SAL identifiers. 6,888 of 8,876 predictions (78%) matched.
**Data validation:** Cross-checked against Cotality (CoreLogic) and Domain state-level growth figures. State rankings match exactly.
## 12. Conclusion
**You would have been better off picking suburbs at random.**
Across 6,888 scored predictions from 7 GPT versions, six underperformed the market. The only version that beat the market (GPT-4.1, 1,048 picks) gained $3,599 on an $861,000 property over 9 months. That is noise, not signal.
The worst performers cost real money. GPT-4.1-mini cost investors $26,729 on an $884,000 property. GPT-4-turbo cost $15,945 on a $950,000 property. GPT-3.5 cost $14,994 on an $882,000 property. In Western Australia alone, GPT cost investors $84,028 on the median property.
Property forecasting requires live, hyper-local data. Supply pipelines, demographic flows, approval volumes, wage growth by postcode. These signals exist, and they work. But they live in databases, not in the training text of a language model.
Do not ask ChatGPT where to buy property. A random selection of suburbs would have outperformed GPT in six of seven cases.
Generated 28 February 2026
## Property Forecasting That Uses Real Data
Microburbs analyses 12.8 million data points across every suburb in Australia. Not text predictions. Actual supply, demand, and price signals updated weekly.
[Explore Microburbs](https://www.microburbs.com.au)[Listen to the Podcast](https://www.microburbs.com.au/podcast)
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
