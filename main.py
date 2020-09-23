import sys
from config import token, url
from notion2github.exporter import NotionExporter

if __name__ == "__main__":
    if len(sys.argv) == 3:
        token = sys.argv[1]
        url = sys.argv[2]

    # Get all contents from database
    NotionExporter(token, "./docs/src").get_notion_pages_from_database(
        url=url,
        category_column_name="Category",
        status_column_name="Status",
        current_status="🖨 Published",
        next_status="",
        filters={},
    )
