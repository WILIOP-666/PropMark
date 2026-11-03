import os, re, json, glob

OUT = '/home/ubuntu/projects/PropMark/docs/checkpoints/phase-5-reverse-engineering-raw/crawled'
results = []

for f in sorted(glob.glob(os.path.join(OUT, '*_meta.json'))):
    try:
        meta = json.load(open(f))
    except: continue
    url = meta.get('url', '')
    if 'People-Lifestyle' not in url:
        continue
    md = f.replace('_meta.json', '.md')
    if not os.path.exists(md): continue
    txt = open(md).read()
    if len(txt) < 500 or 'security service' in txt or 'verifies you are not a bot' in txt:
        continue

    # Extract suburb name from URL
    slug = url.split('People-Lifestyle/')[-1]
    # Remove mbmap_ prefix if present
    name = slug.replace('mbmap_', '').replace('_', ' ').replace('%20', ' ')

    data = {'slug': slug, 'url': url}

    # Population
    m = re.search(r'(\d[\d,]*)\s*Population', txt)
    if m: data['population'] = int(m.group(1).replace(',', ''))
    # Median Age
    m = re.search(r'(\d+)\s*Median Age', txt)
    if m: data['medianAge'] = int(m.group(1))
    # HH Income
    m = re.search(r'\$\s*([\d,]+)\s*HH Income', txt)
    if m: data['householdIncome'] = int(m.group(1).replace(',', ''))
    # Families %
    m = re.search(r'([\d.]+)%\s*Families', txt)
    if m: data['familiesPct'] = float(m.group(1))
    # Uni Graduates %
    m = re.search(r'([\d.]+)%\s*Uni Graduates', txt)
    if m: data['uniGraduatesPct'] = float(m.group(1))
    # Diversity %
    m = re.search(r'([\d.]+)%\s*Diversity', txt)
    if m: data['diversityPct'] = float(m.group(1))

    if len(data) > 1:
        results.append(data)

out = '/home/ubuntu/projects/PropMark/src/lib/data/crawledPeopleLifestyle.json'
with open(out, 'w') as f:
    json.dump(results, f, indent=2)
print(f"Parsed {len(results)} people-lifestyle pages → {out}")
