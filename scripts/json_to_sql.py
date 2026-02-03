import json

INPUT_FILE = "sql/sample-candidates.json"
OUTPUT_FILE = "sql/sample-data.sql"

with open(INPUT_FILE, "r") as f:
    candidates = json.load(f)

with open(OUTPUT_FILE, "w") as f:
    for c in candidates:
        name = c["name"].replace("'", "''")
        skills = c["skills"].replace("'", "''")
        experience = c["experience_years"]

        f.write(
            f"INSERT INTO candidates (name, experience_years, skills) "
            f"VALUES ('{name}', {experience}, '{skills}');\n"
        )

print("SQL insert file generated successfully.")
