import config
import argparse
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

    url = config.url
    token = config.token_v2

    get_contents_from_notion(token, url, directory)
    