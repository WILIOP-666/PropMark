import os, re, json, glob

OUT = '/home/ubuntu/projects/PropMark/docs/checkpoints/phase-5-reverse-engineering-raw/crawled'

def parse_suburb(path):
    txt = open(path).read()
    slug = os.path.basename(path).replace('suburb_','').replace('.md','')
    data = {'slug': slug}

    # Name & state from header
    m = re.search(r'# ([^\n]+)\nNSW|VIC|QLD|SA|WA|TAS|ACT|NT', txt)
    # median house price
    m = re.search(r'Median house\n\s*\$?([\d,]+)', txt)
    if m: data['medianHousePrice'] = int(m.group(1).replace(',',''))
    m = re.search(r'Median unit\n\s*\$?([\d,]+)', txt)
    if m: data['medianUnitPrice'] = int(m.group(1).replace(',',''))
    # population
    m = re.search(r'(\d[\d,]*) people call', txt)
    if m: data['population'] = int(m.group(1).replace(',',''))
    # crime
    m = re.search(r'(\d[\d,]*)\noffences per 100,000', txt)
    if m: data['crimeRate'] = int(m.group(1).replace(',',''))
    # growth
    m = re.search(r'growth rate of ([\d.]+)% for houses', txt)
    if m: data['capitalGrowth12MoPct'] = float(m.group(1))
    m = re.search(r'([\d.]+)% for units', txt)
    if m: data['unitGrowth12MoPct'] = float(m.group(1))
    # rent house
    m = re.search(r'median rent for houses.*?\$([\d,]+) per week', txt, re.S)
    if m: data['medianHouseRentWeek'] = int(m.group(1).replace(',',''))
    # rent unit
    m = re.search(r'median rent for units and apartments.*?\$([\d,]+) per week', txt, re.S)
    if m: data['medianUnitRentWeek'] = int(m.group(1).replace(',',''))
    # median age
    m = re.search(r'Median age\n\s*(\d+) years', txt)
    if m: data['medianAge'] = int(m.group(1))
    # median mortgage
    m = re.search(r'Median mortgage\n\s*\$([\d,]+)', txt)
    if m: data['medianMortgage'] = int(m.group(1).replace(',',''))
    # household rent
    m = re.search(r'household rent\n\s*\$([\d,]+)', txt)
    if m: data['householdRent'] = int(m.group(1).replace(',',''))
    # income
    m = re.search(r'median household income of \$([\d,]+) a week', txt)
    if m: data['medianIncome'] = int(m.group(1).replace(',',''))

    # gross yield calc
    if 'medianHousePrice' in data and 'medianHouseRentWeek' in data:
        data['grossHouseYieldPct'] = round(data['medianHouseRentWeek']*52/data['medianHousePrice']*100, 2)
    if 'medianUnitPrice' in data and 'medianUnitRentWeek' in data:
        data['grossUnitYieldPct'] = round(data['medianUnitRentWeek']*52/data['medianUnitPrice']*100, 2)

    return data

# Parse all suburbs
results = []
for path in sorted(glob.glob(os.path.join(OUT, 'suburb_*.md'))):
    if path.endswith('_meta.json'): continue
    try:
        d = parse_suburb(path)
        results.append(d)
    except Exception as e:
        print(f"ERROR {path}: {e}")

out_path = '/home/ubuntu/projects/PropMark/src/lib/data/crawledSuburbs.json'
with open(out_path, 'w') as f:
    json.dump(results, f, indent=2)
print(f"Parsed {len(results)} suburbs → {out_path}")

# Parse properties
def parse_property(path):
    txt = open(path).read()
    slug = os.path.basename(path).replace('property_','').replace('.md','')
    data = {'slug': slug}
    # address
    m = re.search(r'# ([^\n]+)', txt)
    if m: data['title'] = m.group(1).strip()
    # price
    m = re.search(r'\$([\d,]+)', txt)
    if m: data['price'] = int(m.group(1).replace(',',''))
    # beds/baths/parking
    m = re.search(r'(\d+)\s*bed', txt, re.I)
    if m: data['bedrooms'] = int(m.group(1))
    m = re.search(r'(\d+)\s*bath', txt, re.I)
    if m: data['bathrooms'] = int(m.group(1))
    m = re.search(r'(\d+)\s*car|parking', txt, re.I)
    if m: data['parking'] = int(m.group(1))
    # property type
    m = re.search(r'(House|Unit|Apartment|Townhouse|Villa|Land)', txt, re.I)
    if m: data['type'] = m.group(1)
    return data

props = []
for path in sorted(glob.glob(os.path.join(OUT, 'property_*.md'))):
    if path.endswith('_meta.json'): continue
    try:
        d = parse_property(path)
        props.append(d)
    except Exception as e:
        print(f"ERROR {path}: {e}")

out_path2 = '/home/ubuntu/projects/PropMark/src/lib/data/crawledProperties.json'
with open(out_path2, 'w') as f:
    json.dump(props, f, indent=2)
print(f"Parsed {len(props)} properties → {out_path2}")
