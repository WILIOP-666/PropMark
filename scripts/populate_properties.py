import json
import random

# Load the suburbs database to get real suburb names, postcodes, LGAs, and median prices
with open("C:/laragon/www/propmark/src/lib/data/suburbsData.ts", "r", encoding="utf-8") as f:
    content = f.read()

start = content.find("[\n")
end = content.rfind("];")
suburbs = json.loads(content[start:end+1])

# High quality architectural photography URLs
PROPERTY_IMAGES = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
]

STREET_NAMES = [
    "George Street", "Crown Street", "Bourke Street", "Harrison Street", "Ocean Street",
    "King Street", "High Street", "Victoria Road", "Queen Street", "Campbell Parade",
    "Hall Street", "Swan Street", "Smith Street", "Brunswick Street", "Chapel Street",
    "Moray Street", "Oxley Street", "Park Road", "Albert Street", "William Street",
    "Church Street", "Station Street", "Railway Parade", "The Esplanade", "Pacific Highway",
    "Military Road", "Darling Street", "Glebe Point Road", "Oxford Street", "John Street"
]

FEATURES_POOL = [
    "Architecturally renovated open-plan layout with European oak timber floorboards",
    "North-facing entertaining terrace with private landscaped plunge pool",
    "Designer stone kitchen with integrated Miele / Smeg appliances",
    "Spacious master retreat with custom walk-in wardrobe and ensuite",
    "Secure double lock-up garage with internal access and EV charging ready",
    "Level walking distance to train / light rail station, cafes, and village shops",
    "High 3.2m ornate ceilings with original cornices and heritage fireplaces",
    "Solar panel battery storage system (13.2kW) for zero net energy bills",
    "Ducted zoned reverse-cycle air conditioning throughout",
    "Designated school catchment zone for top-ranked state schools"
]

properties = []

# 1. Exact Belmont North properties from inspected Microburbs report
belmont_properties = [
    {
        "id": "prop-bn-01",
        "slug": "89-harrison-st-belmont-north",
        "address": "89 Harrison Street",
        "suburb": "Belmont North",
        "state": "NSW",
        "postcode": "2280",
        "propertyType": "House",
        "bedrooms": 3,
        "bathrooms": 2,
        "carSpaces": 2,
        "landAreaSqm": 620,
        "buildingAreaSqm": 185,
        "yearBuilt": 1988,
        "estimatedValueMin": 910000,
        "estimatedValueMax": 970000,
        "avmValue": 940000,
        "confidenceScore": 94,
        "lastSalePrice": 940000,
        "lastSaleDate": "2024-03-15",
        "rentalEstimateWeekly": 680,
        "grossYieldPct": 3.8,
        "zoningCode": "R2 Low Density Residential",
        "councilLga": "City of Lake Macquarie",
        "imageUrl": PROPERTY_IMAGES[0],
        "features": [
            "Single-level brick family home in peaceful cul-de-sac",
            "Expansive covered alfresco deck overlooking leafy backyard",
            "Modern kitchen with breakfast bar and stainless steel appliances",
            "Side vehicle access suitable for boat, trailer or caravan",
            "Close proximity to Belmont Golf Club and Lake Macquarie foreshore"
        ]
    },
    {
        "id": "prop-bn-02",
        "slug": "1-kanundra-st-belmont-north",
        "address": "1 Kanundra Street",
        "suburb": "Belmont North",
        "state": "NSW",
        "postcode": "2280",
        "propertyType": "House",
        "bedrooms": 3,
        "bathrooms": 1,
        "carSpaces": 1,
        "landAreaSqm": 585,
        "buildingAreaSqm": 150,
        "yearBuilt": 1975,
        "estimatedValueMin": 840000,
        "estimatedValueMax": 900000,
        "avmValue": 870000,
        "confidenceScore": 92,
        "lastSalePrice": 870000,
        "lastSaleDate": "2024-01-22",
        "rentalEstimateWeekly": 620,
        "grossYieldPct": 3.7,
        "zoningCode": "R2 Low Density Residential",
        "councilLga": "City of Lake Macquarie",
        "imageUrl": PROPERTY_IMAGES[1],
        "features": [
            "Solid brick and tile residence on generous corner allotment",
            "Polished cypress pine timber floors throughout living zones",
            "Undercover parking with separate workshop and garden shed",
            "Walk to Belmont North Public School and local bus routes",
            "Substantial scope for contemporary renovation or granny flat addition"
        ]
    },
    {
        "id": "prop-bn-03",
        "slug": "44-wommara-ave-belmont-north",
        "address": "44 Wommara Avenue",
        "suburb": "Belmont North",
        "state": "NSW",
        "postcode": "2280",
        "propertyType": "House",
        "bedrooms": 4,
        "bathrooms": 2,
        "carSpaces": 2,
        "landAreaSqm": 710,
        "buildingAreaSqm": 220,
        "yearBuilt": 1994,
        "estimatedValueMin": 1050000,
        "estimatedValueMax": 1150000,
        "avmValue": 1090000,
        "confidenceScore": 93,
        "lastSalePrice": 890000,
        "lastSaleDate": "2021-08-14",
        "rentalEstimateWeekly": 750,
        "grossYieldPct": 3.6,
        "zoningCode": "R2 Low Density Residential",
        "councilLga": "City of Lake Macquarie",
        "imageUrl": PROPERTY_IMAGES[2],
        "features": [
            "Executive dual-level family home with panoramic lake views",
            "In-ground saltwater swimming pool surrounded by tropical gardens",
            "Multiple living areas including upstairs teen retreat",
            "Triple lockup garage with ample storage space",
            "5 minutes drive to Redhead surf beach"
        ]
    }
]
properties.extend(belmont_properties)

# 2. Generate 4-6 realistic property listings for the top 50 Australian suburbs
top_suburbs = suburbs[:50]

prop_counter = 1
for sub in top_suburbs:
    sub_name = sub["name"]
    state = sub["state"]
    postcode = sub["postcode"]
    lga = sub["lga"]
    base_price = sub["market"]["medianHousePrice"]
    base_rent = sub["market"]["medianHouseRentWeek"]

    # Generate 4 properties per suburb
    for i in range(4):
        street_num = (i + 1) * 14 + (prop_counter % 33)
        street_name = STREET_NAMES[(prop_counter + i) % len(STREET_NAMES)]
        full_address = f"{street_num} {street_name}"
        slug = f"{street_num}-{street_name.lower().replace(' ', '-')}-{sub_name.lower().replace(' ', '-')}"

        p_type = "House" if i < 2 else ("Unit" if i == 2 else "Townhouse")
        beds = 3 if p_type == "House" else (2 if p_type == "Unit" else 3)
        baths = 2 if beds >= 3 else 1
        cars = 2 if p_type == "House" else 1

        price_multiplier = 0.9 + (i * 0.12)
        if p_type == "Unit":
            price_multiplier *= 0.55
        elif p_type == "Townhouse":
            price_multiplier *= 0.78

        avm = int(base_price * price_multiplier)
        est_min = int(avm * 0.95)
        est_max = int(avm * 1.05)
        last_sale = int(avm * 0.82)
        rent = int((avm * 0.034) / 52)
        gross_yield = round(((rent * 52) / avm) * 100, 1)

        land = 450 + (i * 60) if p_type == "House" else (0 if p_type == "Unit" else 180)
        building = 180 + (i * 30) if p_type == "House" else (90 if p_type == "Unit" else 150)

        selected_features = [
            FEATURES_POOL[i % len(FEATURES_POOL)],
            FEATURES_POOL[(i + 2) % len(FEATURES_POOL)],
            FEATURES_POOL[(i + 4) % len(FEATURES_POOL)],
            FEATURES_POOL[(i + 6) % len(FEATURES_POOL)],
        ]

        prop_record = {
            "id": f"prop-{sub['slug'][:6]}-{i+1:02d}",
            "slug": slug,
            "address": full_address,
            "suburb": sub_name,
            "state": state,
            "postcode": postcode,
            "propertyType": p_type,
            "bedrooms": beds,
            "bathrooms": baths,
            "carSpaces": cars,
            "landAreaSqm": land,
            "buildingAreaSqm": building,
            "yearBuilt": 1990 + (i * 8),
            "estimatedValueMin": est_min,
            "estimatedValueMax": est_max,
            "avmValue": avm,
            "confidenceScore": 90 + (i % 6),
            "lastSalePrice": last_sale,
            "lastSaleDate": f"202{1 + (i % 4)}-0{(i*2+3)%9+1}-15",
            "rentalEstimateWeekly": rent,
            "grossYieldPct": gross_yield,
            "zoningCode": "R2 Low Density Residential" if p_type == "House" else "R4 High Density Residential",
            "councilLga": lga,
            "imageUrl": PROPERTY_IMAGES[(prop_counter + i) % len(PROPERTY_IMAGES)],
            "features": selected_features
        }
        properties.append(prop_record)
        prop_counter += 1

print(f"Generated {len(properties)} complete, granular Australian property listings!")

# Write to TypeScript file
ts_output = f"""import {{ PropertyListing }} from "../types";

export const PROPERTIES_DATABASE: PropertyListing[] = {json.dumps(properties, indent=2)};
"""

output_path = "C:/laragon/www/propmark/src/lib/data/propertiesData.ts"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(ts_output)

print(f"Saved to {output_path} successfully!")
