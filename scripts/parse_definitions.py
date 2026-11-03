import os, re, json, glob

OUT = '/home/ubuntu/projects/PropMark/docs/checkpoints/phase-5-reverse-engineering-raw/crawled'
results = []

for f in sorted(glob.glob(os.path.join(OUT, '*_meta.json'))):
    try:
        meta = json.load(open(f))
    except: continue
    url = meta.get('url', '')
    if '/definitions/' not in url or url == 'https://www.microburbs.com.au/definitions':
        continue
    md = f.replace('_meta.json', '.md')
    if not os.path.exists(md): continue
    txt = open(md).read()
    if len(txt) < 200 or 'security service' in txt or 'verifies you are not a bot' in txt:
        continue

    slug = url.split('/definitions/')[-1]
    # Title
    m = re.search(r'# ([^\n]+)', txt)
    term = m.group(1).strip() if m else slug.replace('-', ' ').title()

    # Definition: line after title, until "Next" or "Back to" or "Microburbs"
    m = re.search(r'# [^\n]+\n(.+?)(?:\n\[ (?:Next|Back)|\n\[Microburbs\]|\n\[ Back)', txt, re.S)
    definition = m.group(1).strip() if m else ''
    definition = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', definition)
    definition = re.sub(r'\s+', ' ', definition).strip()

    if not definition or len(definition) < 10:
        continue

    results.append({
        'slug': slug,
        'term': term,
        'definition': definition,
        'url': url,
    })

out = '/home/ubuntu/projects/PropMark/src/lib/data/crawledDefinitions.json'
with open(out, 'w') as f:
    json.dump(results, f, indent=2)
print(f"Parsed {len(results)} definitions → {out}")
