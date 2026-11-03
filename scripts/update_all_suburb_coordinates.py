import json
import csv
import re

SUBURBS_PATH = r"C:\laragon\www\propmark\src\lib\data\suburbsData.ts"
POSTCODES_PATH = r"C:\laragon\www\propmark\scripts\australian_postcodes.csv"

def main():
    print("[*] Loading australian_postcodes.csv...")
    # Map (locality.lower(), state.lower(), postcode) and (locality.lower(), state.lower())
    exact_lookup = {}
    fallback_lookup = {}

    with open(POSTCODES_PATH, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            loc = row["locality"].strip().lower()
            st = row["state"].strip().lower()
            pc = row["postcode"].strip()

            try:
                lat = float(row["Lat_precise"]) if row.get("Lat_precise") else float(row["lat"])
                lng = float(row["Long_precise"]) if row.get("Long_precise") else float(row["long"])
            except:
                continue

            lga = row.get("lgaregion") or row.get("sa3name") or ""
            region = row.get("sa4name") or row.get("region") or ""

            exact_key = (loc, st, pc)
            fallback_key = (loc, st)

            data = {
                "lat": round(lat, 5),
                "lng": round(lng, 5),
                "lga": lga.strip(),
                "region": region.strip()
            }

            if exact_key not in exact_lookup:
                exact_lookup[exact_key] = data
            if fallback_key not in fallback_lookup:
                fallback_lookup[fallback_key] = data

    print(f"[+] Loaded {len(exact_lookup)} exact postcodes and {len(fallback_lookup)} fallback localities.")

    # Read suburbsData.ts
    with open(SUBURBS_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    # Find the JSON array
    prefix = "export const SUBURBS_DATABASE: SuburbProfile[] = "
    start_idx = content.find(prefix)
    if start_idx == -1:
        print("[-] Error: Prefix not found in suburbsData.ts")
        return

    json_str = content[start_idx + len(prefix):].strip()
    if json_str.endswith(";"):
        json_str = json_str[:-1].strip()

    suburbs = json.loads(json_str)
    print(f"[+] Loaded {len(suburbs)} suburbs from suburbsData.ts")

    updated_count = 0
    sydney_fallback_fixed = 0

    for s in suburbs:
        name = s["name"].strip().lower()
        st = s["state"].strip().lower()
        pc = s["postcode"].strip()

        match = exact_lookup.get((name, st, pc)) or fallback_lookup.get((name, st))

        if match:
            old_lat = s["coordinates"]["lat"]
            old_lng = s["coordinates"]["lng"]

            # If it had Sydney CBD placeholder
            if abs(old_lat - (-33.8688)) < 0.001 and abs(old_lng - 151.2093) < 0.001 and name != "sydney":
                sydney_fallback_fixed += 1

            s["coordinates"]["lat"] = match["lat"]
            s["coordinates"]["lng"] = match["lng"]

            if match["lga"]:
                s["lga"] = match["lga"] if "Council" in match["lga"] or "City" in match["lga"] or "Shire" in match["lga"] else f"{match['lga']} Council"
            if match["region"]:
                s["region"] = match["region"]

            updated_count += 1

    # Check Gosford specifically
    gosford = next((s for s in suburbs if s["slug"] == "gosford-nsw-2250"), None)
    if gosford:
        print(f"[+] Gosford verified: lat={gosford['coordinates']['lat']}, lng={gosford['coordinates']['lng']}, LGA={gosford['lga']}, Region={gosford['region']}")

    # Write back cleanly
    new_content = "import { SuburbProfile } from \"../types\";\n\nexport const SUBURBS_DATABASE: SuburbProfile[] = " + json.dumps(suburbs, indent=2) + ";\n"

    with open(SUBURBS_PATH, "w", encoding="utf-8") as f:
        f.write(new_content)

    print(f"[+] Successfully updated {updated_count}/{len(suburbs)} suburbs!")
    print(f"[+] Fixed {sydney_fallback_fixed} suburbs that were previously stuck on Sydney CBD coordinates!")

if __name__ == "__main__":
    main()
