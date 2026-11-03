[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
# We Checked Our Data Against Every Major Portal.  
Here Is What We Found.
We thought our listing database was good. We compared it against Domain, View, and Homely sitemaps. Up to 73% of their listings were missing from our system.
By Luke Metcalfe | 1 March 2026
![Luke Metcalfe](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Fluke-headshot-circle.png&w=256&q=75)
Luke Metcalfe
Founder & Chief Data Scientist
15+ years in property data analytics
Most property data companies will tell you their coverage is strong. They will point to millions of records in their database. They will show you a count and expect you to be impressed.
We had 140,082 unique Buy listings in our database. That felt like a solid number. Then we did something uncomfortable. We compared that number against the actual sitemaps of every major property portal in Australia.
The results were bad. Not a little bad. Embarrassingly bad.
## What Does 'Missing' Actually Mean?
Every property portal publishes a sitemap. It is a public list of every listing URL on their site. We downloaded sitemaps from Domain, View.com.au, and Homely. Then we matched every URL against our database.
If a listing URL appeared in the portal's sitemap but not in our system, we counted it as missing. Simple as that.  
| Portal  | Sitemap Listings  | Missing from Our DB  | Gap %  |  
| --- | --- | --- | --- |  
| Domain.com.au  | 161,625  | 100,379  | 62.1%  |  
| View.com.au  | 153,872  | 76,063  | 49.4%  |  
| Homely.com.au  | 140,219  | 102,824  | 73.3%  |  
Read those numbers again. Homely has 140,219 listings on their sitemap. We are missing 102,824 of them. That is nearly three out of every four.
**The worst finding:** View.com.au is a total blind spot. We have zero View URLs in our database. Every one of the 76,063 missing listings represents a property we have never scraped from this portal.
## What This Looks Like in Practice
Abstract percentages do not capture the problem. Specific streets do.
If you are searching for a house in Richmond on View.com.au, there is a 50% chance that listing does not exist in our database. Richmond is one of Melbourne's most popular investment suburbs. It is not some obscure regional town. And we are missing half its View listings.
A property at 47 Oakes Road, Carlingford NSW appears on View.com.au. It does not appear in our system. An investor using Microburbs to research Carlingford would never know that property exists.
Bondi, Surfers Paradise, Richmond. These are not edge cases. These are the suburbs investors search for every day. And our coverage has gaps in all of them.
815 properties listed for sale in the Northern Territory on Homely. We have zero of them. Not 10. Not 50. Zero.
## The Coverage Chart
Only 18.1% of properties appear on all three portals. The rest exist on one or two portals only. If you are scraping just one source, you are seeing a fraction of the market.
![Portal coverage overlap showing only 18.1% of listings appear across all three portals](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Fscrape-listings%2Foutside_in_coverage.png&w=3840&q=75)
This chart shows how listings distribute across Domain, View, and Homely. The overlap is surprisingly small. Each portal has thousands of listings that the others do not.
## Where Are the Biggest Gaps?
We broke the missing listings down by state. VIC and NSW have the worst numbers.
26,870
VIC listings missing from View
24,711
NSW listings missing from View
73.3%
Homely gap rate
0%
Agent name populated
That last number is worth pausing on. Agent name is 0% populated across every source we scrape. Every listing. Every portal. Zero agent names captured. If you want to analyse agent performance or connect listings to selling agents, our data cannot do it right now.
## The Portals We Do Not Scrape at All
The gaps above are just the portals we already track. There are entire portals we have never touched.
allhomes.com.au
The number one property portal in the ACT. We do not scrape it.
property.com.au
5.5 million visits per month. We do not scrape it.
soho.com.au
Growing portal with off-market listings. We do not scrape it.
listingloop.com.au
Pre-market and off-market listings. We do not scrape it.
homehound.com.au
Aggregator with agent-direct feeds. We do not scrape it.
And then there is REA. Realestate.com.au blocks sitemap access entirely through their robots.txt file. We cannot even measure the gap because they will not let us see what is there.
## Three Weeks Stale
There is another problem beyond coverage. Our last scrape was 11 February 2026. That means the data was three weeks old at the time of this audit.
Three weeks in property listings is a long time. Properties sell. New ones come on the market. Price changes happen. An investor looking at our data in early March was seeing a picture from mid-February. That is not good enough.
Stale data compounds the coverage problem. We are not just missing listings we never scraped. We are also showing listings that may have already sold.
## So What Does This Mean for Investors?
If you are using Microburbs to track the listing market, you are seeing roughly half of what is actually available. In some states and portals, you are seeing less than a quarter.
This matters for three reasons.
**Price comparisons are incomplete.** If 62% of Domain listings are missing, the price distribution you see in our data is skewed. Median prices, price per square metre, days on market. All of these numbers are calculated from an incomplete sample.
**Suburb coverage is uneven.** Some suburbs might look like they have no listings when they actually have dozens. An investor might dismiss a suburb based on low listing counts that are really just low scrape counts.
**Opportunity cost is invisible.** You cannot research a listing you do not know exists. The property at 47 Oakes Road, Carlingford is a real listing on a real portal. If our system does not show it, an investor using Microburbs alone will never consider it.
## Why Are We Publishing This?
Most companies would not write a blog post about how bad their data coverage is. They would fix it quietly and hope nobody noticed.
We are publishing it because trust matters more than looking good. Microburbs is a data platform. If the data has gaps, our users need to know. Pretending the gaps do not exist is worse than the gaps themselves.
And we are going to fix it. This audit is the first step. We now know exactly which portals, which states, and which suburbs have the worst coverage. That gives us a roadmap.
The scraping pipeline needs to run more frequently. View.com.au needs to be added as a source. Homely's NT coverage needs to be built from scratch. Agent name extraction needs to work. And we need to investigate the portals we have never touched.
We say no to showing data we are not confident in. Our objectivity as a data source is more core to our business than looking polished. That is not always the comfortable choice. But it is the right one for a platform that people need to trust.
**Method.** We downloaded public sitemaps from domain.com.au, view.com.au, and homely.com.au on 1 March 2026. We extracted all listing URLs matching Buy property patterns. We matched each URL against our internal database of 140,082 unique Buy listings (last scraped 11 February 2026). A listing was counted as 'missing' if its portal URL did not appear in our system. REA (realestate.com.au) was excluded because their robots.txt blocks sitemap access.
Generated: 1 March 2026 at 14:00:00
## Help Us Close the Gap
We are rebuilding our scraping pipeline to cover every major portal in Australia. If you have noticed missing listings or data gaps, we want to hear about it.
[Sign Up Free](https://www.microburbs.com.au/v3/subscription-options)[Report a Gap](https://www.microburbs.com.au/contact)
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
