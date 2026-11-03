[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
Research Whitepaper
# We Asked 7 Versions of GPT to Pick Australia's Top Growth Suburbs. Then We Checked.
17,096 predictions. 8 states and territories. Up to 38 months of actual price data. The results are not what you would expect. You would have been better off picking at random.
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
-0.35%/yr
avg underperformance
## The One-Line Summary
You would have been better off picking suburbs at random.
Six of seven versions underperformed the market when measured from the exact month after their publication date. Only GPT-4.1 beat the market, by just 0.4% per year. Across all versions, GPT-picked suburbs underperformed by 0.35% per year. On a $1M property, that is $7,789 in lost equity compared to a random selection.
Performance vs market by model (% per year)
4.1
+0.4%/yr
4o-mini
-0.2%/yr
3.5-turbo
-0.4%/yr
4o
-0.4%/yr
4
-0.5%/yr
4-turbo
-0.9%/yr
4.1-mini
-2.7%/yr
UnderperformedOutperformed
## How We Tested This
Every version of GPT has a knowledge cutoff date. GPT-3.5 stopped learning in late 2021. GPT-4o stopped in late 2023. That creates a natural experiment. We can ask each version to forecast property growth, then check the actual prices for the years that followed.
We queried 7 versions of GPT across all 8 Australian states and territories. Each version was asked to name 20 suburbs most likely to grow, along with expected growth percentages and reasoning. We then measured actual suburb growth from the month after each version's exact publication date through to February 2026 using monthly hedonic price data.
The critical part: we compare each version's picks against all other suburbs in the same state or territory, over the same period. This controls for the broader market. If Sydney grew 15% overall, we are not asking whether GPT predicted 15%. We are asking whether the specific suburbs it chose grew more or less than 15%.
### The Prompt
"Provide a list of 20 suburbs in [STATE] (Australia) most likely to experience growth for houses in the residential real estate sector up to [YEAR]. If possible, provide the anticipated capital growth percentage and give reasons why and sources (if you use them). Format your response as a numbered list with the suburb name, expected growth percentage, and brief reason."
Each version received this prompt for every state/territory and multiple forecast years. All queries used temperature 0.2 for consistency.
### What GPT Said Back
GPT-3.5-turbo, asked for NSW growth suburbs up to 2024:
1. **Parramatta** - 20% growth: Parramatta is undergoing significant urban renewal and infrastructure development...
2. **Penrith** - 18% growth: Penrith is benefiting from its proximity to Sydney and ongoing investment in transport infrastructure.
3. **Liverpool** - 15% growth: Liverpool is experiencing population growth and improved amenities...
4. **Castle Hill** - 16% growth: Castle Hill is a popular suburb with strong demand...
... and so on for 100 suburbs per state.
Notice the generic reasoning. "Infrastructure development", "proximity to Sydney", "strong demand". These are the kind of phrases that appear thousands of times in real estate articles. GPT is reciting patterns from its training data, not analysing live market signals.
### GPT Versions Tested  
| Version  | Provider  | Released  | Growth From  | Predictions  |  
| --- | --- | --- | --- | --- |  
| gpt-3.5-turbo  | OpenAI  | 30 Nov 2022  | Dec 2022 to Feb 2026  | 5,065  |  
| gpt-4  | OpenAI  | 14 Mar 2023  | Apr 2023 to Feb 2026  | 938  |  
| gpt-4-turbo  | OpenAI  | 9 Apr 2024  | May 2024 to Feb 2026  | 1,870  |  
| gpt-4o  | OpenAI  | 13 May 2024  | Jun 2024 to Feb 2026  | 3,319  |  
| gpt-4o-mini  | OpenAI  | 18 Jul 2024  | Aug 2024 to Feb 2026  | 2,483  |  
| gpt-4.1  | OpenAI  | 14 Apr 2025  | May 2025 to Feb 2026  | 2,569  |  
| gpt-4.1-mini  | OpenAI  | 14 Apr 2025  | May 2025 to Feb 2026  | 645  |  
## Price Growth: GPT Picks vs Market
These charts show indexed price growth from each version's publication date. Both lines start at 100. The solid line tracks the average hedonic price of GPT-picked suburbs. The dashed line shows the market baseline (all suburbs in the same states). If the solid line ends above the dashed line, GPT beat the market.
GPT-3.5-Turbo (Dec 2022 – Feb 2026)
651 picks. 38 months. Trailed the market by 6.2 index points.
100105110115120125130135Dec 22Jun 23Dec 23Jun 24Dec 24Jun 25Dec 25Feb 26GPT picks (651 suburbs) Market baseline Indexed value (100 = start)
GPT-4.1 (May 2025 – Feb 2026)
777 picks. 9 months. Beat the market by 0.5 index points.
100102104106108110112May 25Jun 25Dec 25Feb 26GPT picks (777 suburbs) Market baseline Indexed value (100 = start)
GPT-4o (Jun 2024 – Feb 2026)
1,014 picks. 20 months. Trailed the market by 1.1 index points.
100105110115120Jun 24Dec 24Jun 25Dec 25Feb 26GPT picks (1014 suburbs) Market baseline Indexed value (100 = start)
How to read these charts
Both lines start at 100 on the model's publication date. A value of 126 means the average property price grew 26% from that date. The gap between the solid and dashed line at the end is the outperformance or underperformance. GPT-3.5-turbo (top left) shows the clearest example: its picks (red line) consistently trail the market baseline (dashed) across the full 38-month window.
## Did GPT Pick Winners?
This is the only question that matters for investors. If you followed GPT's suburb recommendations, did your property grow faster than average?
The answer, for most versions, is no. Six of seven GPT versions underperformed the market. Only GPT-4.1 (1,048 picks, +0.4% per year) beat the market. The versions with the most data (GPT-3.5-turbo with 2,154 picks and GPT-4o with 1,487 picks) both underperformed. You would have been better off picking suburbs at random.  
| Version  | Period  | Picks  | GPT Growth  | Market Growth  | vs Market/yr  | Beat Median  | $1M Equity Lost  |  
| --- | --- | --- | --- | --- | --- | --- | --- |  
| gpt-4.1  | May 2025 – Feb 2026  | 1,048  | 10.4%  | 10.0%  | +0.4%/yr  | 54%  | +$3,302  |  
| gpt-4o-mini  | Aug 2024 – Feb 2026  | 995  | 14.9%  | 15.3%  | -0.2%/yr  | 43%  | -$3,092  |  
| gpt-3.5-turbo  | Dec 2022 – Feb 2026  | 2,154  | 23.3%  | 24.4%  | -0.4%/yr  | 44%  | -$11,504  |  
| gpt-4o  | Jun 2024 – Feb 2026  | 1,487  | 16.4%  | 17.0%  | -0.4%/yr  | 43%  | -$6,747  |  
| gpt-4  | Apr 2023 – Feb 2026  | 138  | 39.7%  | 41.0%  | -0.5%/yr  | 43%  | -$13,037  |  
| gpt-4-turbo  | May 2024 – Feb 2026  | 965  | 17.0%  | 18.6%  | -0.9%/yr  | 45%  | -$15,915  |  
| gpt-4.1-mini  | May 2025 – Feb 2026  | 101  | 6.3%  | 8.3%  | -2.7%/yr  | 39%  | -$20,450  |  
How to read this table
Each row shows one GPT version. "Period" is the measurement window: from the month after the version's exact publication date to February 2026. "vs Market/yr" is the annualised outperformance or underperformance of GPT-picked suburbs against all suburbs in the same state or territory. A negative number means GPT's picks grew slower than average. "$1M Equity Lost" shows the dollar gain or loss on a $1M property if you bought in a GPT-picked suburb versus a randomly chosen one.
## The Older the Version, the Worse the Picks
GPT-3.5-turbo (released 30 Nov 2022) recommended suburbs that grew 0.4% per year slower than the market from December 2022 onwards. Only 44% of its picks beat the state median. GPT-4 (released 14 Mar 2023) underperformed by 0.5% per year, with 43% beating the median.
In Western Australia, the gap was extreme. GPT-3.5's picks grew 44.7% from December 2022 while the WA average was 61.0%. That is 5.1% per year of underperformance. On a $1M property, you would be $162,290 worse off following GPT. Only 12.7% of its WA picks beat the state median.
GPT-3.5 vs Market in Western Australia (Dec 2022 – Feb 2026)
The biggest miss. GPT picks grew 48.8% while WA overall grew 65.0%. A $162,290 gap on $1M.
100110120130140150160Dec 22Jun 23Dec 23Jun 24Dec 24Jun 25Dec 25Feb 26GPT picks (8 suburbs) Market baseline Indexed value (100 = start)
Look at what happened to investors who followed GPT-3.5 in WA. It recommended Peppermint Grove ($3.1M median) and Applecross ($1.6M median). These are Perth's most expensive, most-written-about suburbs. They grew 15.6% and 16.6% while the WA average was 61.0%. On a $1M investment, following that advice cost you $454k in Peppermint Grove and $444k in Applecross compared to buying randomly in WA.
The same pattern repeats nationally. In NSW, Berrima dropped 21% while the state grew 17.5%. In Victoria, Caulfield North dropped 22.9% while the state grew 7.2%. GPT consistently picked expensive, well-known suburbs that underperformed their state. Only 21% of GPT-3.5's WA picks beat the state median.
WA: the biggest miss
GPT-3.5's WA picks grew 44.7% while the state averaged 61.0%. On a $1M property, you would be roughly $162k behind a random WA suburb. GPT gravitated to prestigious postcodes (Peppermint Grove, Applecross, Dalkeith) that appear frequently in real estate articles. The real growth was in affordable outer suburbs like Swan View (+93.8%) and Joondalup (+87.9%).
## Newer Versions: Smarter, or Just Less Wrong?
GPT-4.1 (released April 2025) is the only large-sample version to beat the market, outperforming by 0.4% per year with 54% of picks beating the median. But 0.4% per year over 9 months is not a reliable investing edge.
GPT-4o and GPT-4o-mini both underperformed slightly (-0.4% per year and -0.2% per year respectively). GPT-4-turbo was worst among newer versions at -0.9% per year. The pattern is consistent: no version of GPT reliably picks suburbs that outperform the broader market.
GPT-4-Turbo (May 2024 – Feb 2026)
710 picks. Trailed by 0.9 index points.
100105110115120May 24Jun 24Dec 24Jun 25Dec 25Feb 26GPT picks (710 suburbs) Market baseline Indexed value (100 = start)
GPT-4o-Mini (Aug 2024 – Feb 2026)
335 picks. Converged with market at the end.
100102104106108110112114116118Aug 24Dec 24Jun 25Dec 25Feb 26GPT picks (335 suburbs) Market baseline Indexed value (100 = start)
GPT-4.1's picks in NSW beat the market by 1.8 percentage points, with 65% beating the median. In Queensland, it outperformed by 1.0 percentage points. But in WA, it underperformed by 1.2 percentage points. The wins and losses roughly cancel out, consistent with random variation rather than genuine forecasting skill.
## The Numbers at a Glance
Visual comparison of how each version's suburb picks performed against the market. A positive number means GPT outperformed. A negative number means you would have been better off picking randomly.
$1M investment outcome by GPT version
GPT-3.5 picks vs market (Dec 2022 – Feb 2026)
GPT picks
$1233k
Market
$1244k
-$11,000 on $1M
GPT-4.1 picks vs market (May 2025 – Feb 2026)
GPT picks
$1104k
Market
$1100k
++$4,000 on $1M
GPT-4o picks vs market (Jun 2024 – Feb 2026)
GPT picks
$1164k
Market
$1170k
-$6,000 on $1M
### What Happened to Investors Who Followed GPT?
GPT named its top picks. Here is what happened if you bought where it told you to, compared to buying randomly in the same state.
GPT'S WORST ADVICE  
| Suburb  | State  | Version  | Suburb Grew  | State Avg  | vs State  | $1M Cost  |  
| --- | --- | --- | --- | --- | --- | --- |  
| Peppermint Grove  | WA  | GPT-3.5  | +15.6%  | +61.0%  | -45.4pp  | Missed $454k  |  
| Applecross  | WA  | GPT-3.5  | +16.6%  | +61.0%  | -44.4pp  | Missed $444k  |  
| Noosa Heads  | Qld  | GPT-3.5  | +8.0%  | +47.8%  | -39.8pp  | Missed $398k  |  
| Berrima  | NSW  | GPT-3.5  | -21.0%  | +17.5%  | -38.5pp  | Lost $385k  |  
| Caulfield North  | Vic.  | GPT-3.5  | -22.9%  | +7.2%  | -30.1pp  | Lost $301k  |  
EVEN A BROKEN CLOCK...  
| Suburb  | State  | Version  | Suburb Grew  | State Avg  | vs State  | $1M Extra  |  
| --- | --- | --- | --- | --- | --- | --- |  
| Davoren Park  | SA  | GPT-3.5  | +176.1%  | +47.8%  | +128.3pp  | +$1,283k  |  
| Elizabeth North  | SA  | GPT-3.5  | +105.8%  | +47.8%  | +58.0pp  | +$580k  |  
| Proserpine  | Qld  | GPT-4o  | +85.4%  | +25.5%  | +59.9pp  | +$599k  |  
| Swan View  | WA  | GPT-3.5  | +93.8%  | +61.0%  | +32.8pp  | +$328k  |  
The pattern is clear
GPT picked expensive, famous suburbs that appear frequently in real estate articles. Peppermint Grove and Applecross are Perth's most prestigious addresses. Noosa Heads is Queensland's most talked-about coastal market. These suburbs underperformed their state by 9 to 14% per year. The real growth was in affordable suburbs with less internet coverage. When GPT did name a winner (Davoren Park, Swan View), it had no idea of the magnitude. It predicted single-digit growth for suburbs that doubled or tripled. The wins were accidental.
## State-by-State Performance (Selected)
Performance varies wildly by state. Some versions do well in one state and terribly in another. This is consistent with random variation rather than genuine forecasting skill.  
| Version  | State  | Period  | GPT Picks  | GPT Growth  | State Avg  | vs Market  | Beat Median  | $1M Diff  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| gpt-3.5-turbo  | NSW  | Dec 22 – Feb 26  | 488  | 13.0%  | 17.5%  | -4.5%  | 39%  | -$45,079  |  
| gpt-3.5-turbo  | WA  | Dec 22 – Feb 26  | 353  | 44.7%  | 61.0%  | -16.2%  | 13%  | -$162,290  |  
| gpt-3.5-turbo  | Vic.  | Dec 22 – Feb 26  | 336  | 9.6%  | 7.2%  | +2.4%  | 66%  | +$23,829  |  
| gpt-3.5-turbo  | NT  | Dec 22 – Feb 26  | 41  | 27.4%  | -3.2%  | +30.6%  | 83%  | +$306,053  |  
| gpt-3.5-turbo  | Tas.  | Dec 22 – Feb 26  | 355  | 12.6%  | 3.4%  | +9.2%  | 54%  | +$91,821  |  
| gpt-4.1  | NSW  | May 25 – Feb 26  | 97  | 8.7%  | 6.9%  | +1.8%  | 65%  | +$18,166  |  
| gpt-4.1  | Qld  | May 25 – Feb 26  | 197  | 13.4%  | 12.4%  | +1.0%  | 59%  | +$9,768  |  
| gpt-4.1  | Vic.  | May 25 – Feb 26  | 199  | 7.3%  | 6.3%  | +1.0%  | 63%  | +$9,570  |  
| gpt-4.1  | WA  | May 25 – Feb 26  | 198  | 14.2%  | 15.3%  | -1.2%  | 52%  | -$11,584  |  
| gpt-4o  | WA  | Jun 24 – Feb 26  | 137  | 25.6%  | 34.3%  | -8.7%  | 21%  | -$87,203  |  
| gpt-4o-mini  | Vic.  | Aug 24 – Feb 26  | 57  | 11.5%  | 7.6%  | +3.9%  | 67%  | +$38,739  |  
| gpt-4o-mini  | Tas.  | Aug 24 – Feb 26  | 159  | 15.8%  | 10.4%  | +5.5%  | 52%  | +$54,554  |  
## Absolute Accuracy: How Far Off Were the Numbers?
Beyond picking the right suburbs, how accurate were the growth percentage predictions themselves? Every version under-predicted actual growth except gpt-4.1-mini. The Australian market grew far faster than any version of GPT expected.  
| Version  | Scored  | MAE  | Bias  | Avg Predicted  | Avg Actual  |  
| --- | --- | --- | --- | --- | --- |  
| gpt-4.1  | 1,048  | 7.4%  | -3.4%  | 6.9%  | 10.4%  |  
| gpt-4.1-mini  | 101  | 9.4%  | +6.7%  | 13.0%  | 6.3%  |  
| gpt-4o-mini  | 995  | 12.5%  | -10.0%  | 5.0%  | 14.9%  |  
| gpt-4o  | 1,030  | 14.3%  | -12.1%  | 4.6%  | 16.6%  |  
| gpt-3.5-turbo  | 2,154  | 22.2%  | -11.8%  | 11.4%  | 23.3%  |  
What MAE and Bias mean
MAE (Mean Absolute Error) measures how far off the predictions were on average, regardless of direction. A MAE of 8.5% means GPT was off by 8.5 percentage points per suburb on average. Bias shows the systematic direction of errors. A bias of -17.8% means GPT consistently under-predicted growth by that amount. Every version except gpt-4.1-mini has negative bias, meaning the entire market grew faster than any version of GPT expected.
## Data Validation: Microburbs vs CoreLogic and Domain
We cross-checked our Microburbs hedonic price data against published figures from Cotality (formerly CoreLogic) and Domain. The state rankings match exactly. Growth magnitudes are directionally aligned, with differences explained by methodology.
State rankings: exact match
Both Microburbs and CoreLogic rank growth: WA > Qld > SA > NSW > Vic.  
| State  | Microburbs (Dec 2022 – Feb 2026)  | CoreLogic Estimate (Dec 2022 – Dec 2025)  | Difference Explained By  |  
| --- | --- | --- | --- |  
| WA  | +63.3%  | 58-62%  | House-only and regional WA push Microburbs slightly higher  |  
| Qld  | +48.8%  | 41-43%  | Regional Qld contributes to higher statewide figure  |  
| SA  | +47.1%  | 36-38%  | Largest gap: house-only and regional SA run ahead of capital city dwellings index  |  
| NSW  | +16.7%  | 21-22%  | Microburbs slightly lower: statewide median vs Sydney capital city index  |  
| Vic.  | +6.5%  | 4.5-5%  | Both confirm Vic as weakest performer. Regional Vic provides slight uplift  |  
Why the numbers differ slightly
CoreLogic/Cotality reports combined dwelling values (houses plus units). Our data is house-only, which typically shows higher growth. CoreLogic focuses on capital cities. Our data is statewide, including regional areas that have outperformed in Qld, WA, and SA. Finally, our measurement period extends two months further into 2026.
## What This Means for Property Investors
The ChatGPT property hype is real and growing. Social media is full of people asking GPT where to buy. This data suggests that is a bad strategy.
GPT is trained on internet text. It knows which suburbs get talked about. It knows the cliches: "close to the CBD", "infrastructure investment", "lifestyle appeal". But popular suburbs are already priced in. The growth happens in the places nobody is talking about yet.
Property forecasting requires local, timely data. Supply pipelines, council approvals, demographic shifts, wage growth by postcode, days on market trends. These are not things GPT can access. It has old text, not live signals.
-0.35%/yr
Average underperformance of GPT picks across 6,888 scored predictions. Negative means GPT grew slower than a random suburb.
6 of 7
GPT versions underperformed the market when measured from their exact publication date to February 2026.
-$7,789
Average equity lost per $1M property if you followed GPT's advice instead of picking at random.
## Methodology
**GPT versions queried:** 7 versions of GPT via the OpenAI API (gpt-3.5-turbo, gpt-4, gpt-4-turbo, gpt-4o, gpt-4o-mini, gpt-4.1, gpt-4.1-mini). All queried at temperature 0.2 for consistency.
**Prompt:** "Provide a list of 20 suburbs in [STATE] (Australia) most likely to experience growth for houses in the residential real estate sector up to [YEAR]. If possible, provide the anticipated capital growth percentage and give reasons why." Each version was queried for all 8 states/territories.
**Growth measurement:** Actual suburb growth measured using monthly Microburbs hedonic price indices (rm40_hedonic) covering 7,691 suburbs nationally. Growth period starts from the month after each version's exact publication date (e.g. GPT-3.5-turbo released 30 Nov 2022, growth measured from Dec 2022) through to February 2026. This captures growth from the point an investor could first use that version.
**Baseline comparison:** Each version's picks are compared against all suburbs in the same state or territory over the same period and start month. "Beat median" percentages and outperformance figures are calculated within-state to control for differing state-level growth rates (e.g. WA +61.0% vs Vic. +7.2% from Dec 2022 to Feb 2026).
**Suburb matching:** GPT-predicted suburb names were fuzzy-matched to Microburbs SAL (Suburb and Locality) identifiers using name normalisation and state suffix variants. 6,888 of 8,876 suburb predictions (78%) were successfully matched. Unmatched names were typically misspellings, region names, or suburbs too small to have hedonic price data.
**Data validation:** Microburbs hedonic indices were cross-checked against published Cotality (CoreLogic) and Domain state-level growth figures. State rankings match exactly (WA > Qld > SA > NSW > Vic.). Magnitude differences are explained by house-only vs combined dwelling measurement, statewide vs capital city scope, and the two additional months of data into 2026.
**Data sources:** Microburbs hedonic price index (primary, 7,691 suburbs, all states, monthly data 1990-2026). Supplementary validation from complete sold data (~1M house sales, mostly VIC). External validation from Cotality HVI, Domain House Price Report, and PropTrack Home Price Index.
## Download the Raw Data
All data from this research is available for download. Every GPT prediction, every scored comparison, every baseline figure. Use it for your own analysis.
[ All 17,096 GPT predictions17,096 rows CSV](https://www.microburbs.com.au/data/llm-forecasting/all_predictions.csv)[ Scored predictions with actual growth8,880 rows CSV](https://www.microburbs.com.au/data/llm-forecasting/scored_predictions.csv)[ Predicted vs market by state52 rows CSV](https://www.microburbs.com.au/data/llm-forecasting/predicted_vs_market.csv)[ Accuracy summary by model6 rows CSV](https://www.microburbs.com.au/data/llm-forecasting/accuracy_by_model.csv)[ Baseline state growth rates100 rows CSV](https://www.microburbs.com.au/data/llm-forecasting/baseline_state_growth.csv)
## Conclusion
Do not ask ChatGPT where to buy property.
A random selection of suburbs would have outperformed GPT in six of seven cases. Across 6,888 scored predictions from 7 versions of GPT, the picks underperformed the market by 0.35% per year on average.
In dollar terms, following each version's advice would have cost investors:
  * GPT-4.1-mini: -$20,450 per $1M (-2.7% per year)
  * GPT-4-turbo: -$15,915 per $1M (-0.9% per year)
  * GPT-4: -$13,037 per $1M (-0.5% per year)
  * GPT-3.5-turbo: -$11,504 per $1M (-0.4% per year)
  * GPT-4o: -$6,747 per $1M (-0.4% per year)
  * GPT-4o-mini: -$3,092 per $1M (-0.2% per year)
  * GPT-4.1: +$3,302 per $1M (+0.4% per year)


The weighted average across all 6,888 picks: **-$7,789 per $1M invested**. You lost money following GPT compared to picking at random.
Property forecasting requires live, hyper-local data. Supply pipelines, demographic flows, approval volumes, wage growth by postcode. These signals exist, and they work. But they live in databases, not in the training text of a language model.
GPT is predicting the next word. Not the next hotspot.
Generated 28 February 2026 at 15:55:00
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
