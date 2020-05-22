import argparse
import os
import sys

from notion_to_til import get_contents_from_notion

if __name__ == "__main__":
    description = "Export 📝TIL(Today I Learned) contents from Notion to /docs/directory"
    parser = argparse.ArgumentParser(description=description)
    parser.add_argument(
        "--directory", dest="directory", help="Save contents to /docs/directory", type=str
    )
    args = parser.parse_args()

    directory = args.directory
    if not directory:
        directory = "etc"

    url = "https://www.notion.so/younho9/TIL-Today-I-Learned-1576d9889f3948f4b5e8d6311e81bc8b"
    token = os.environ.get("NOTION_TOKEN")

    get_contents_from_notion(token, url, directory)
    