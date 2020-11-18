import sys
import json
from narkdown.exporter import NotionExporter

if __name__ == "__main__":
    if len(sys.argv) == 3:
        token = sys.argv[1]
        database_url = sys.argv[2]
    else:
        with open("config.json", "r") as f:
            config = json.load(f)
        token = config["TOKEN"]
        database_url = config["DATABASE_URL"]

    for category in ["Algorithms", "CS", "Frontend", "ETC"]:
        NotionExporter(
            token=token,
            docs_directory="./docs/" + category.lower(),
            create_page_directory=False,
            add_metadata=True,
            lower_pathname=True,
            lower_filename=True,
        ).get_notion_pages_from_database(
            url=database_url,
            category_column_name="Category",
            tags_column_name="Tags",
            status_column_name="Status",
            current_status="✅ Completed",
            next_status="🖨 Published",
            filters={"Main Category": category},
        )

    # Get Daily contents from database
    NotionExporter(
        token=token,
        docs_directory="./log/20-log",
        create_page_directory=False,
        add_metadata=True,
        lower_pathname=True,
        lower_filename=True,
    ).get_notion_pages_from_database(
        url=database_url,
        tags_column_name="Tags",
        created_time_column_name="Created Time",
        status_column_name="Status",
        current_status="✅ Completed",
        next_status="🖨 Published",
        filters={"Main Category": "Log"},
    )
