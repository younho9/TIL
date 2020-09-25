import sys
from config import token, url
from notion2github.exporter import NotionExporter

if __name__ == "__main__":
    if len(sys.argv) == 3:
        token = sys.argv[1]
        url = sys.argv[2]

    # Get Frontend contents from database
    NotionExporter(token, "./docs/Frontend").get_notion_pages_from_database(
        url=url,
        category_column_name="Category",
        status_column_name="Status",
        current_status="✅ Completed",
        next_status="🖨 Published",
        filters={"Main Category": "Frontend"},
        create_page_directory=False,
    )

    # Get Algorithms contents from database
    NotionExporter(token, "./docs").get_notion_pages_from_database(
        url=url,
        category_column_name="Category",
        status_column_name="Status",
        current_status="✅ Completed",
        next_status="🖨 Published",
        filters={"Main Category": "Algorithms"},
        create_page_directory=False,
    )

    # Get CS contents from database
    NotionExporter(token, "./docs/CS").get_notion_pages_from_database(
        url=url,
        category_column_name="Category",
        status_column_name="Status",
        current_status="✅ Completed",
        next_status="🖨 Published",
        filters={"Main Category": "CS"},
        create_page_directory=False,
    )

    # Get Daily contents from database
    NotionExporter(token, "./docs/Daily").get_notion_pages_from_database(
        url=url,
        category_column_name="Category",
        status_column_name="Status",
        current_status="✅ Completed",
        next_status="🖨 Published",
        filters={"Main Category": "Daily"},
        create_page_directory=False,
    )
