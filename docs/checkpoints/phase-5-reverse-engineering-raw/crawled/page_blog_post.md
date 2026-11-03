[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
MICROBURBS BLOG
# I Asked ChatGPT Where to Buy Property.  
Here's Why That Was a Mistake.
We tested 7 versions of GPT against real Australian property data. The results should make you think twice before trusting AI with your biggest investment.
By Luke Metcalfe | 4 March 2026
![Luke Metcalfe](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Fluke-headshot-circle.png&w=256&q=75)
Luke Metcalfe
Founder & Chief Data Scientist
15+ years in property data analytics
Last year, a friend told me he was using ChatGPT to find his next investment property. "It's amazing," he said. "I just ask it which suburbs will grow, and it gives me a list with percentages and everything." 
That conversation stuck with me. So we ran an experiment. We asked 7 different versions of GPT to pick Australia's top growth suburbs. Then we checked what happened to those suburbs over the next 9 to 38 months.
We scored 6,888 predictions against actual hedonic price data from 7,691 suburbs. The short answer: you would have been better off picking suburbs at random.
## The key number: -0.96 percentage points
Across all 7 GPT versions, the suburbs it picked grew 0.96 percentage points slower than the market over the forecast period. On a typical $875,000 property, that is $8,401 in lost equity. That is the median price of GPT-picked suburbs. Six of seven versions underperformed. Only GPT-4.1 beat the market, and barely: +0.42pp over 9 months.
## What We Actually Did
We sent the same prompt to every version of GPT: "Name 20 suburbs in [state] most likely to grow." We asked for growth percentages and reasoning. Every version, every state, every territory.
Then we measured actual growth from the month after each version was released. GPT-3.5 came out in November 2022, so we measured from December 2022 to February 2026. GPT-4.1 came out in April 2025, so we measured from May 2025 to February 2026. Each version was measured against the market over its own time window.
This is not a gotcha. It is a fair test. We are comparing GPT's picks to a random selection in the same state over the same period.
## The Peppermint Grove Problem
GPT-3.5 picked Peppermint Grove as one of WA's top growth suburbs in December 2022. It grew 15.6% over 38 months to February 2026. Sounds decent until you learn the WA average was 61.0%. On the median WA property ($969,000), you missed out on $84,028 compared to buying randomly in WA.
Why did GPT pick Peppermint Grove? Because it is Perth's most written-about suburb. Thousands of real estate articles mention it. GPT reads those articles during training and concludes it must be a growth hotspot. But "famous" and "about to grow" are not the same thing. The price is already baked in.
The same pattern played out across the country over the same December 2022 to February 2026 window. Noosa Heads (+8.0% vs Queensland's +47.8%). Caulfield North (-22.9% vs Victoria's +7.2%). Berrima (-21.0% vs NSW's +17.5%). GPT picked the famous suburbs. The famous suburbs underperformed.
## The Lucky Hit That Proves Nothing
GPT-3.5 did pick Davoren Park in South Australia in December 2022. It grew 176.1% over 38 months, from $259,000 to $715,000 by February 2026. That is a massive win on paper.
But GPT predicted 5% growth. It had no idea Davoren Park would boom. The reasoning it gave was generic: "affordable suburb with growth potential." The same phrase it used for dozens of other suburbs that went nowhere. A broken clock is right twice a day.
Swan View in WA also outperformed over the same period (+93.8% vs the state's +61.0%). But the overall portfolio of GPT's WA picks still lost to the market. One lucky pick does not make a strategy.
## Real Properties. Real Losses.
Forget underperformance. Some of GPT's picks actually lost money. Not "grew slower than average." Actually fell in value.
[Launceston](https://www.microburbs.com.au/suburb-reports/Launceston-Tas-7250) was GPT-3.5's second strongest pick for Tasmania. Not a throwaway buried at the bottom of a list. It was number two. GPT predicted 6% growth because of "increased investment in infrastructure and amenities." Three years later, the median house price has fallen 13.4% to $817,000. Anyone who bought at the time lost $126,000. That is before stamp duty, conveyancing, and agent fees.
[Sandy Bay](https://www.microburbs.com.au/suburb-reports/Sandy-Bay-Tas-7005) was also GPT-3.5's second strongest pick, this time for Hobart. "Prestigious suburb with strong demand for quality housing." GPT predicted 8% growth. The median house is now $1,140,000, down 15% over three years. Lost $201,000.
[Jindabyne](https://www.microburbs.com.au/suburb-reports/Jindabyne-NSW-2627). "Popular snow destination with limited housing supply." GPT predicted 10% growth. Three years later, the median house is $1,100,000, down 18.1%. Lost $243,000.
[Footscray](https://www.microburbs.com.au/suburb-reports/Footscray-Vic-3011). "Proximity to Melbourne CBD and affordability." GPT predicted 10% growth. Down 16.2% over three years. The median house is now $790,000. Lost $153,000.
These are not cherry-picked worst cases. These are suburbs GPT ranked in its top picks. You can check the current prices on our [suburb report pages](https://www.microburbs.com.au/suburb-reports/Launceston-Tas-7250). The growth figures come straight from our data.
## The Scoreboard  
| Model  | vs Market (total)  | Typical Cost  |  
| --- | --- | --- |  
| GPT-4.1 (9mo)  | +0.42pp  | +$3,599  |  
| GPT-4o-mini (18mo)  | -0.30pp  | -$2,723  |  
| GPT-3.5 (38mo)  | -1.70pp  | -$14,994  |  
| GPT-4o (20mo)  | -0.67pp  | -$5,485  |  
| GPT-4 (35mo)  | -1.27pp  | -$12,193  |  
| GPT-4-turbo (22mo)  | -1.68pp  | -$15,945  |  
| GPT-4.1-mini (9mo)  | -3.03pp  | -$26,729  |  
The worst performer, GPT-4.1-mini, underperformed by 3.03 percentage points over 9 months. That is $26,729 lost on the median $884,000 property.
## Why GPT Fails at Property
GPT is trained on internet text. It knows which suburbs get talked about. It knows the cliches: "close to the CBD", "infrastructure investment", "lifestyle appeal". But popular suburbs are already priced in. The growth happens in the places nobody is writing about yet.
Property forecasting requires data that GPT does not have. Supply pipelines. Council approvals. Demographic shifts. Wage growth by postcode. Days-on-market trends. These signals live in databases, not in real estate blog posts from 2021.
When GPT-3.5 said "Parramatta will grow 20%", it was repeating what real estate writers had already said. It cannot tell you whether Parramatta is overvalued relative to its underlying fundamentals. It does not know the current supply pipeline. It has old text, not live signals.
## The Bottom Line
We tested 17,096 GPT predictions against actual prices across every state in Australia. Six of seven versions underperformed the market. On the typical $875,000 property, GPT cost investors $8,401 in lost equity compared to a random selection.
ChatGPT is great at many things. Picking growth suburbs is not one of them. For your biggest financial decision, you need real data, not recycled blog posts.
## Want the Full Data?
[Read the Whitepaper All 7 GPT versions. Animated growth charts. State-by-state breakdown. Data validation against CoreLogic and Domain.](https://www.microburbs.com.au/llm-forecasting-accuracy/whitepaper)[View the Summary The key findings in 2 minutes. Performance bars, suburb examples, and the bottom line.](https://www.microburbs.com.au/llm-forecasting-accuracy)
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
