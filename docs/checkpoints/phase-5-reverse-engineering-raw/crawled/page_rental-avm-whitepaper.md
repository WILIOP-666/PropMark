[![Microburbs](https://www.microburbs.com.au/_next/image?url=%2Fimages%2Flogo-primary-2026.png&w=384&q=75)](https://www.microburbs.com.au/)
Products
[Suburb Reports](https://www.microburbs.com.au/suburb-reports)[Property Reports](https://www.microburbs.com.au/property-reports)[Suburb Finder](https://www.microburbs.com.au/suburb-finder)[Property Finder](https://www.microburbs.com.au/property-finder-intro)[API Access](https://www.microburbs.com.au/api-access)[AI Chat](https://www.microburbs.com.au/chat-intro)[Consulting](https://www.microburbs.com.au/consulting)[Free Tools](https://www.microburbs.com.au/tools)
Resources
[Insights](https://www.microburbs.com.au/insights)[Blog](https://www.microburbs.com.au/blog)[Podcasts and Videos](https://www.microburbs.com.au/podcast)[Data Definitions](https://www.microburbs.com.au/definitions)
[Pricing](https://www.microburbs.com.au/pricing)
Microburbs Research Whitepaper
# Predicting Rental Value for Every Australian Property
Luke Metcalfe, Microburbs Research
March 2026
## Abstract
We built a rental automated valuation model (AVM) that estimates weekly asking rent for residential properties across all eight Australian states and territories. Validated on 462,693 rental listings from July 2024 to March 2026, the model places 73.6% of predictions within 10% of the actual advertised rent, with a mean absolute error of $60.88 per week. Properties with prior rental history achieve 84.2% accuracy at the same threshold. The system combines property attributes, building-level comparables, spatial rental pools, school catchment data, land valuations, and sale price signals to produce estimates at the individual address level.
## Key Findings
  * **73.6% of estimates fall within 10% of advertised rent** across 462,693 properties nationally, validated from July 2024 to March 2026. The median prediction error is 5.5%.
  * **Properties with prior rental history are far more predictable.** Where a property has been listed before, accuracy rises to 84.2% within 10%. For properties with no history, the figure is 67.9%.
  * **Apartments are easier to value than houses.** Apartments achieve 75.7% within 10% ($53.77/wk MAE), while houses achieve 72.7% ($64.75/wk MAE), reflecting the greater heterogeneity in detached homes.
  * **Building-level comparisons matter.** For apartments, the median rent of same-bedroom units in the same building is one of the three most informative signals, more predictive than suburb-level statistics alone.
  * **Visual presentation correlates with rent.** In a proof-of-concept on 17,000 properties, photo-derived quality scores show moderate-to-strong correlation with asking rent. This signal has not yet been deployed at scale.
  * **ACT (Canberra) and Victoria (Melbourne) are the most predictable markets** , at 81.4% and 77.3% within 10% respectively, over the period July 2024 to March 2026. Queensland (Brisbane) and the Northern Territory (Darwin) are the hardest.


73.6%
Within 10% of Asking Rent
$60.88
Average Error ($/wk)
462,693
Properties Validated
All 8
States and Territories
### Contents
  1. [Key Findings](https://www.microburbs.com.au/research/rental-avm-whitepaper#key-findings)
  2. [Methodology](https://www.microburbs.com.au/research/rental-avm-whitepaper#methodology)
  3. [Results](https://www.microburbs.com.au/research/rental-avm-whitepaper#results)
  4. [Defence Against Criticism](https://www.microburbs.com.au/research/rental-avm-whitepaper#defence)
  5. [Limitations](https://www.microburbs.com.au/research/rental-avm-whitepaper#limitations)
  6. [Conclusion](https://www.microburbs.com.au/research/rental-avm-whitepaper#conclusion)


## Methodology
### Data
The model draws on 462,693 deduplicated rental listings from the 24 months to March 2026. Each listing is matched to a national geocoded address register, giving a consistent property identifier across all data sources. The dataset covers every state and territory, with New South Wales (168,702 listings) and Victoria (133,703) contributing the largest volumes.
We use seven categories of input data:
  1. **Property attributes** (bedrooms, bathrooms, parking, property type, location coordinates). Available for every property.
  2. **Rental history** (prior advertised rents for the same address). Available for 35.3% of properties.
  3. **Building-level comparables** (median and mean rent of units with the same bedroom count in the same building). Available for roughly 30% of apartments.
  4. **Spatial comparable pools** (statistics on nearby rental listings at multiple distances and time horizons). Available for approximately 95% of properties.
  5. **Sale price signals** (what similar properties sold for, and the typical rent-to-price ratio in the area). Available for 17.1% of properties.
  6. **School catchment data** (academic and socio-economic ranking of the nearest primary school catchment). Available for 88.9% of properties.
  7. **Land valuations and area** (government-assessed land values and parcel area). Currently available for 14.9% of properties, concentrated in New South Wales.


Listing descriptions are also processed to extract structural signals (mentions of pools, renovations, furnished status, and overall descriptive detail). These contribute modestly but measurably to accuracy.
### Approach
The system assembles dozens of validated signals for each property. Multiple estimation models are combined using weights optimised to maximise the proportion of predictions within 10% of the actual rent. The validation withholds entire suburbs from training. When testing accuracy for a given suburb, the model has never seen any data from that suburb. This prevents the system from simply memorising local patterns.
This is a deliberate design choice. A simpler validation approach (random sampling) would produce higher headline numbers. But it would overstate real-world performance, because in practice, the system must value properties in suburbs it has not seen at training time. The spatial hold-out approach gives a more honest estimate of accuracy.
### Sample size and time period  
| State  | SUA  | Listings  | Within 10%  | MAE ($/wk)  |  
| --- | --- | --- | --- | --- |  
| NSW  | Sydney  | 168,702  | 71.9%  | $73.21  |  
| VIC  | Melbourne  | 133,703  | 77.3%  | $46.28  |  
| QLD  | Brisbane  | 85,983  | 69.6%  | $66.15  |  
| WA  | Perth  | 35,894  | 75.2%  | $61.62  |  
| SA  | Adelaide  | 22,551  | 74.7%  | $45.45  |  
| ACT  | Canberra  | 8,047  | 81.4%  | $46.35  |  
| TAS  | Hobart  | 6,778  | 75.4%  | $40.26  |  
| NT  | Darwin  | 1,034  | 67.1%  | $59.74  |  
All results are from July 2024 to March 2026. The model is retrained on a rolling basis as new listings become available.
## Results
### Accuracy by property type  
| Property Type  | Listings  | Within 10%  | MAE ($/wk)  |  
| --- | --- | --- | --- |  
| Villa  | 4,492  | 76.9%  | $47.77  |  
| Apartment  | 154,500  | 75.7%  | $53.77  |  
| Townhouse  | 29,021  | 74.9%  | $56.99  |  
| House  | 262,047  | 72.7%  | $64.75  |  
| Duplex / Semi  | 7,040  | 65.9%  | $82.99  |  
| Studio  | 3,544  | 62.8%  | $50.12  |  
Apartments are the most predictable type. They sit in multi-unit buildings where same-building comparisons provide a strong anchor. To illustrate: at 37 Victor Street in [Chatswood (Sydney)](https://www.microburbs.com.au/suburb-reports/Chatswood-NSW-2067), a 224-unit complex, the model compares each unit to others in the same building with the same bedroom count. Each floor up adds roughly $10-40 per week. An extra bathroom adds $30-50 per week. A north-facing unit in this building commands approximately $77 per week more, from July 2024 to March 2026.
### The rental history advantage
The single most important signal is whether the property has been listed before. Where prior rental data exists, the model achieves 84.2% of predictions within 10%. Without history, the figure drops to 67.9%. This 16 percentage point gap (from July 2024 to March 2026) reflects a basic truth. Knowing what a property rented for last year is the strongest predictor of what it will rent for this year.
About 35.3% of properties in the dataset have at least one prior rental listing. For the remaining 64.7%, the model relies on spatial comparables, building-level data, and property attributes.
### Concrete examples
**Example 1: [30 Sugarloaf Crescent, Castlecrag](https://www.microburbs.com.au/property-reports/GANSW704340930) ([Castlecrag](https://www.microburbs.com.au/suburb-reports/Castlecrag-NSW-2068), Sydney)**  
3-bedroom house. Asking rent: $1,200/wk. AVM estimate: $1,151/wk (4.0% error). The model drew on 50 nearby comparable properties, weighting by distance (nearest at 170m) and recency (most recent 7 days old). The comparable average was $1,120/wk, adjusted for recent local rental growth (10% per year to March 2026). The suburb median is $1,206/wk over the same period.
**Example 2: [Wollstonecraft apartment](https://www.microburbs.com.au/property-reports/GANSW706333577) ([Wollstonecraft](https://www.microburbs.com.au/suburb-reports/Wollstonecraft-NSW-2065), Sydney)**  
3-bed, 2-bath apartment with 2 secure parking spaces. Asking rent: $1,400/wk. The listing description mentions Caesar stone kitchens, European appliances, blackbutt timber floors, and north-facing terrace. These descriptive features contribute to the estimate. The model reads the listing text and identifies quality indicators.
**Example 3: [Marayong house](https://www.microburbs.com.au/property-reports/GANSW705288588) ([Marayong](https://www.microburbs.com.au/suburb-reports/Marayong-NSW-2148), Sydney)**  
3-bed, 2-bath house with 1 parking space. Asking rent: $490/wk. A family home in western Sydney with tiled floors, gas cooking, and a fenced yard. The model uses spatial comparables within 2km and the suburb median ($490/wk for Marayong) to estimate the rent. School catchment data (Marayong Public School, Blacktown Girls High School) tells the model about the local demographic. The lower price point relative to the eastern suburbs examples above is captured through location and what nearby properties have rented for, from July 2024 to March 2026.
### What the model values most
The five most influential signals are:
  1. **Bedroom and bathroom combination** (a 3-bed/2-bath is valued differently to a 3-bed/1-bath).
  2. **Most recent prior rent** (for the 35.3% of properties where this is available).
  3. **Same-building, same-bedroom median rent** (comparing like-for-like within a building).
  4. **Average prior rent** (the full rental history for the address).
  5. **Bedroom count** (the raw number, separate from the interaction term).


What nearby properties rented for recently is the largest source of information. For properties with no rental history, these nearby comparisons are the primary basis for the estimate.
### Photo quality proof-of-concept
We tested whether listing photos contain price signals, scoring 17,000 properties on visual quality: grandeur, material richness, natural light, spaciousness, kitchen quality, and overall appeal.
Properties with higher visual quality scores rent for more. Adding photo scores to estimates improves accuracy by 3.7 percentage points. A direct rent estimate from photos alone improves accuracy by 4.5 percentage points.
These results have not been deployed at scale. They show that a property’s visual presentation carries price information that text descriptions alone do not capture.
## Defence Against Criticism
### “Your model just predicts the suburb median”
A model that returned the suburb median rent for every property would achieve roughly 52% of predictions within 10%. Our model achieves 73.6%, a gap of more than 20 percentage points. The improvement comes from property-level features (bedroom count, building comparables, rental history) and what rented nearby recently. Suburb-level averages are used but account for only a small part of the estimate.
### “Asking rent is not what tenants pay”
This is correct. The model predicts advertised asking rent, not the final lease price. In a separate analysis using settled rent data, we found comparable accuracy. Data on what nearby tenants actually pay adds 3.7 percentage points of accuracy for predicting settled rents specifically (July 2024 to March 2026). The asking-to-settled gap is a known limitation, addressed below.
### “Properties with rental history are easy. What about new listings?”
Fair point. The 84.2% accuracy for properties with history drops to 67.9% for cold-start properties with no prior record. This is the model’s primary weakness. Three factors help close it. Building-level comparables cover roughly 30% of apartments. Spatial comparable pools cover 95% of properties. Sale price data (inferring rent from what the property sold for) covers 17.1%. The cold-start problem remains the most significant area for improvement.
## Limitations
  * **Asking rent, not settled rent.** The model predicts the advertised price, which may differ from what the tenant ultimately pays. In tight markets, tenants may pay above asking. In soft markets, landlords may negotiate down.
  * **Cold-start accuracy.** For the 64.7% of properties with no prior rental listing, accuracy is materially lower (67.9% vs 84.2% within 10%, from July 2024 to March 2026). Estimates for these properties should be treated as rough guides, not precise figures.
  * **Land area coverage is partial.** Government land parcel data is currently available for New South Wales only, covering 14.9% of the national dataset. Extending this to other states would improve house valuations, where land size is a significant driver.
  * **Interior quality is not observed.** Two identical 3-bed houses in the same street may rent $200/wk apart if one has been renovated and the other has not. The model captures some of this through description text and photo signals (in the proof-of-concept), but interior condition remains a significant source of error.
  * **Market timing.** The model uses recent nearby listings. In rapidly moving markets, recent comparable data may understate (or overstate) current rents.


## Conclusion
A national rental AVM covering all states and property types is achievable with current data. At 73.6% of predictions within 10% (from July 2024 to March 2026), the model is useful as a screening tool for investors evaluating yield across large numbers of properties. It is most reliable for apartments (75.7%) and properties with rental history (84.2%), and least reliable for unusual property types, cold-start addresses, and high-value homes where comparable data is sparse.
The primary opportunity for improvement is expanding coverage of land area data nationally and deploying photo-based quality scoring at scale. Both would address the cold-start gap by adding property-specific information that does not depend on prior rental history.
For investors, the implication is straightforward. This system can flag properties where the implied yield is materially above or below the local average. It does not replace due diligence. It narrows the search.
**Microburbs Research** Independent property market research using 90 million Australian listings, backtested to 1990 at street level. Published at [microburbs.com.au/insights](https://www.microburbs.com.au/insights).
**Cite this paper**
Metcalfe, L. (March 2026). Predicting Rental Value for Every Australian Property. Microburbs Research.
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
