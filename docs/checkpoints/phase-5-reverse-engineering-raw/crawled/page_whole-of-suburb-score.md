[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
Whitepaper
# The General Forecast
What happens when you stop looking at one thing and start looking at everything?
Walk-forward backtested performance results from 12 years of predictions.
![Luke Metcalfe](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Fluke-headshot-circle.png&w=256&q=75)
Luke Metcalfe
Founder & Chief Data Scientist
15+ years in property data analytics
## The Problem with Single-Factor Forecasting
Property forecasting has a blindspot problem. Most predictions focus on one or two signals. Population growth. Auction clearance rates. Median price trends. Rental yields.
Each one of those tells you something real. But none of them tells you enough. A suburb with strong population growth and terrible transport will not perform the same as one with strong population growth and a new train station.
The answer is not to find the single best indicator. The answer is to look at everything at once and let the data tell you which combinations actually matter.
## What We Built
We built a system that takes everything Microburbs knows about a suburb and combines it into a single score. Not a checklist. Not a weighted average we designed by hand. A system that learned from 1.2 million real suburb outcomes which combinations of factors actually predicted growth.
The score measures outperformance. How much better or worse a suburb is expected to grow compared to the national average over the next two years.
### It looks at the full picture
The system draws on 13 separate measurements across six categories. These are not just different flavours of the same data. They come from different sources, measure different things, and update at different frequencies.
Property Market
Price level, recent growth, vacancy rates, rental prices, stock on market, months of supply
Infrastructure
Public transport access, road networks, commute connectivity
Demographics
Census population, cultural diversity, public housing concentration
Environment
Tree cover, urban heat, green space quality
Economy
Local business activity, job creation indicators
Market Timing Forecast
The core Microburbs Market Timing Forecast, backtested to 1990
The Market Timing Forecast is the foundation of the General Forecast. The other 12 inputs adjust the forecast up or down based on what the Market Timing Forecast cannot see: transport connectivity, vacancy rates, rental market conditions, urban environment, demographics, and local economy.
**Why this matters to investors.** You could look at each of these factors yourself. But you cannot hold 13 factors across 6,000 suburbs in your head and figure out which combinations matter. The system can. And it has 1.2 million historical examples to learn from.
## Performance: The Numbers
We used walk-forward backtesting across six separate windows spanning 12 years. At each window, the system was trained only on data available at that time, then asked to rank every suburb in Australia for the next 24 months. Six windows. 144 monthly predictions. Over 6,000 suburbs scored each month.
Then we waited. We watched what actually happened. Every suburb. Every outcome.
79.2%
of the top 20 picks beat the national average
+6.4%
average annual outperformance of top-20 picks
2,880
total top-20 picks across 144 months
2,280
of those 2,880 picks actually outperformed
The top-5 picks were even stronger: 81.5% hit rate and +8.0% per year average outperformance.
To put that +6.4% in context: if the national market grew 5% that year, the top-20 picks grew 11.4% on average. On a $600,000 property, that is the difference between $30,000 and $68,400 in annual capital growth.
## Month-by-Month Results
Averages can hide bad months. So here are some specific ones.
March 2014: 20 out of 20 picks outperformed
Average predicted: **+12.0% pa** Average actual: **+14.9% pa**
October 2020: 20 out of 20 picks outperformed
Average predicted: **+5.5% pa** Average actual: **+9.7% pa**
July 2021: 20 out of 20 picks outperformed
Average predicted: **+5.0% pa** Average actual: **+9.5% pa**
Multiple months achieved a perfect 20 out of 20 hit rate across different eras, from the 2014 Sydney boom to the 2020-2021 pandemic-era regional surge. The system consistently underestimated the actual outperformance.
## Real Suburbs. Real Outcomes.
Numbers in aggregate are useful. But investors buy specific suburbs. Here is what happened when the system pointed at specific places, spanning 12 years of picks.
Douglas Park, NSW(Wollondilly)
Outer south-west Sydney. Ranked #9 in March 2014. The system identified the Wollondilly growth corridor before prices moved. Affordable land, improving road access, and strong demographic signals.
Predicted: +11.9% paActual: +34.3% pa
Bankstown, NSW(Canterbury-Bankstown)
Western Sydney. Ranked #3 in April 2015. Strong transport connectivity, multicultural demand, and a price level that still had room to run. Multiple factors aligning.
Predicted: +14.0% paActual: +29.2% pa
Cranbourne East, VIC(Casey)
South-east Melbourne. Ranked #6 in March 2016. Affordable outer ring with new infrastructure, growing population, and low stock. The system spotted the corridor three years before peak growth.
Predicted: +8.8% paActual: +26.1% pa
Dysart, QLD(Isaac)
Central Queensland mining town. Ranked #2 in March 2018. The system detected early recovery signals: extremely low prices, tightening vacancy, and improving business activity.
Predicted: +6.2% paActual: +25.0% pa
Berry, NSW(Shoalhaven)
South Coast. Ranked #1 or #2 from March to July 2020. The system saw low vacancy, good transport to Sydney, and prices well below comparable coastal towns. Five months before regional NSW made headlines.
Predicted: +6.6% paActual: +18.1% to +20.0% pa
Boolarra, VIC(Latrobe)
Small town in Gippsland. Ranked #4-15 from January to March 2021. Not a suburb anyone was talking about. But it had the right combination: affordable, good environment, cultural amenity, and a tight rental market.
Predicted: +4.4% to +5.1% paActual: +17.2% to +24.7% pa
**The pattern across these examples.** In every case, multiple factors lined up. It was never just cheap prices or just low vacancy or just good transport. It was three, four, five factors all pointing in the same direction at once. And it works across different market conditions: the 2014 Sydney boom, the 2018 mining recovery, the 2020 regional surge, and the 2021 pandemic peak.
## Can It Tell Good Suburbs from Bad Ones?
We split all suburbs into five equal groups based on their predicted ranking, then checked what actually happened.
Top 20%
+2.46% pa
21-40%
+0.82% pa
41-60%
+0.10% pa
61-80%
-0.52% pa
Bottom 20%
-1.90% pa
Suburbs ranked in the top 20% outperformed the national average by 2.46% per year. Suburbs in the bottom 20% underperformed by 1.90% per year. A 4.4 percentage point annual gap.
On a $600,000 property held for two years, the top-group suburbs gained roughly $30,000 more than the national average. The bottom group lost roughly $23,000. The difference between being in the right group and the wrong group: roughly $52,000 over two years.
## The Full Top 20: June 2014
To show this is not cherry-picked, here is the complete top 20 for a single month from 12 years ago. Every pick. Every prediction. Every actual outcome. All 20 outperformed the national average. Picks came from 7 different states.  
| #  | Suburb  | State  | Predicted  | Actual  |  
| --- | --- | --- | --- | --- |  
| 1  | Appin  | NSW  | +10.3%  | +27.8%  |  
| 2  | Treeby  | WA  | +9.2%  | +12.6%  |  
| 3  | Chester Hill  | NSW  | +7.9%  | +24.6%  |  
| 4  | Karrabin  | QLD  | +7.7%  | +6.6%  |  
| 5  | Douglas Park  | NSW  | +7.4%  | +31.1%  |  
| 6  | Beaumont  | NSW  | +7.3%  | +7.1%  |  
| 7  | Wahroonga  | NSW  | +7.2%  | +18.8%  |  
| 8  | Wadalba  | NSW  | +7.1%  | +5.9%  |  
| 9  | Tallawong  | NSW  | +6.9%  | +13.0%  |  
| 10  | Macclesfield  | SA  | +6.8%  | +9.3%  |  
| 11  | Whites Valley  | SA  | +6.6%  | +12.1%  |  
| 12  | Thornhill Park  | VIC  | +6.4%  | +1.7%  |  
| 13  | Junction Village  | VIC  | +6.4%  | +0.5%  |  
| 14  | Durack  | NT  | +6.4%  | +6.4%  |  
| 15  | Elizabeth Park  | SA  | +6.2%  | +0.1%  |  
| 16  | Daleys Point  | NSW  | +6.0%  | +13.6%  |  
| 17  | Cedar Creek  | QLD  | +6.0%  | +6.6%  |  
| 18  | Tatura East  | VIC  | +5.9%  | +6.3%  |  
| 19  | Bugle Ranges  | SA  | +5.9%  | +3.2%  |  
| 20  | Bruce  | ACT  | +5.8%  | +0.5%  |  
Average prediction: +7.0% pa. Average actual: +10.4% pa. The system was conservative in every case. Picks spanned NSW, VIC, QLD, WA, SA, NT, and the ACT. The system found outperformers in every corner of the country.
## What the Wholistic Approach Catches That Others Miss
Look at the suburbs that performed best. They are not the ones you would find by screening on a single factor.
Douglas Park was not the cheapest suburb in south-west Sydney. But it had affordable land, improving road links, strong demographic momentum, and the kind of cultural integration that brings sustained buyer demand. Five factors, none exceptional alone. Together they were an early signal for the Wollondilly growth corridor.
Boolarra was a small Gippsland town. On its own, low price means nothing. Hundreds of cheap regional towns go nowhere. But Boolarra also had a strong environmental score, a tight rental market, growing cultural amenity, and the kind of demographic shift that comes before sustained demand. A screen for "cheap towns" would have buried it in a list of 500.
Dysart in Central Queensland. The system picked it in March 2018, well before mining-town recoveries became obvious. It detected extremely low prices combined with tightening vacancy and improving business activity. Three different data sources pointing the same direction.
**This is the core advantage.** Any single factor can be screened for. Population growth. Low vacancy. Cheap prices. But the suburbs that actually outperform are the ones where multiple factors align at the same time. That alignment is what this system measures. Not one thing. Everything.
## What It Does Not Do
The system does not predict interest rate movements. It does not forecast macroeconomic conditions. It does not know what the federal budget will contain or what the RBA will decide next month.
It predicts relative performance. Which suburbs will grow faster than the national average. This works whether the national market goes up 10% or down 5%. It is not a macro call. It is a suburb selection tool.
It is also not infallible. The hit rate is 79.2%, not 100%. About 1 in 5 top picks will underperform. But the average outperformance of +6.4% per year means that the winners more than cover the misses.
## Conditions It Was Tested Through
The March 2012 to February 2024 test window covers an extraordinary range of market conditions:
  * The post-GFC recovery period (2012-2013)
  * The 2014-2017 Sydney and Melbourne property boom
  * APRA lending restrictions and a market correction (2017-2019)
  * The onset of COVID-19 and multiple state lockdowns
  * The RBA cutting rates to 0.10%, the lowest in history
  * Government stimulus including HomeBuilder and JobKeeper
  * The largest regional migration surge in decades
  * International borders closed, removing overseas buyer demand
  * Construction cost increases of 20%+ in some areas
  * The fastest rate-hiking cycle in a generation: 0.10% to 4.35% in 18 months
  * A national house price correction of 7-10% in 2022, followed by a sharp recovery


The system was retrained at each window on only the data available at that point. At the first window (2012), it had never seen the Sydney boom. At the last window (2022), it had never seen rates above 4%. But the fundamental patterns it learned still held.
That is the benefit of measuring everything at once. Individual factors might respond unpredictably to a crisis. But a suburb where six different indicators all point the same direction tends to perform well even when markets get disrupted.
Want to understand how it works?
Our blog post explains the 13 factors, why combinations matter, and how the General Forecast is built.
[Read the Blog Post](https://www.microburbs.com.au/ml-suburb-forecasts)
### Summary of Results  
| Measure  | Result  |  
| --- | --- |  
| Test period  | March 2012 to February 2024 (144 months, 6 walk-forward windows)  |  
| Suburbs scored per month  | 6,000+  |  
| Top-5 hit rate  | 81.5% (587 of 720 picks outperformed)  |  
| Top-5 average outperformance  | +8.0% per year above national average  |  
| Top-20 hit rate  | 79.2% (2,280 of 2,880 picks outperformed)  |  
| Top-20 average outperformance  | +6.4% per year above national average  |  
| Top 20% vs bottom 20% gap  | 4.4 percentage points per year  |  
| Input factors  | 13 across 6 categories  |  
| Total suburb-month predictions  | 876,000+  |  
All growth figures are outperformance relative to the national average. Walk-forward backtesting: the system is retrained at each window on only the data available at that time. No future data is used in any window.
## Find Out Where Your Suburb Ranks
Every suburb in Australia. One score. Based on everything we know.
[Explore Microburbs](https://www.microburbs.com.au)[Read More Research](https://www.microburbs.com.au/blog)
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
