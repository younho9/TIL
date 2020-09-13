import os
import sys
import config
import urllib.request

from datetime import datetime
from notion.client import NotionClient

page_status_list = ["🛠 In Progress", "✅ Completed", "🖨 Published"]
target = "../docs"


def notion2til(token, collection_id):
    client = NotionClient(token_v2=token)
    contents_collection = client.get_collection(collection_id)
    pages = contents_collection.get_rows()

    for page in pages:
        if page.status != "✅ Completed":
            continue

        dir_name = target + "/" + page.tag[0]
        make_directory(dir_name)
        file_name = page.title.replace(" ", "-")
        file_path = dir_name + "/" + file_name

        post = "# " + page.title + "\n\n"
        post = post + parse_notion_contents(
            token, page.children, dir_name, file_name, ""
        )

        write_post(post, file_path)
        update_sidebar(page.tag[0], page.title, file_name)

        print("✅ Successfully exported blog content to" + file_path + ".md")


def make_directory(dir_name):
    try:
        os.mkdir(dir_name)
    except:
        pass
    try:
        os.mkdir(dir_name + "/images")
    except:
        pass


def parse_notion_contents(token, blocks, dir_name, file_name, offset):
    image_number = 0
    contents = ""

    for block in blocks:
        type = block.type
        contents += offset
        if type == "header":
            contents += "## " + block.title
        elif type == "sub_header":
            contents += "### " + block.title
        elif type == "sub_sub_header":
            contents += "#### " + block.title
        elif type == "code":
            contents += "```" + block.language.lower() + "\n" + block.title + "\n```"
        elif type == "callout":
            contents += "> " + block.icon + " " + block.title
        elif type == "quote":
            contents += "> " + block.title
        elif type == "bookmark":
            contents += "🔗 [" + block.title + "](" + block.link + ")"
        elif type == "page":
            contents += "🔗 [" + block.title + "](" + block.get_browseable_url() + ")"
        elif type == "image":
            contents += save_and_get_image_path(
                block.source, dir_name, file_name, image_number
            )
            image_number += 1
        elif type == "bulleted_list":
            contents += "- " + block.title
        elif type == "numbered_list":
            contents += "1. " + block.title
        elif type == "to_do":
            contents += "- [ ] " + block.title
        elif type == "toggle":
            contents += "<details><summary>" + block.title + "</summary>"
        elif type == "text":
            contents += block.title
        elif type == "collection_view":
            contents += parse_notion_collection(token, block.collection.id, offset)
        # elif type == 'divider':
        #     contents += '---'

        contents += "\n\n"

        if block.children:
            if type == "page":
                continue
            elif type == "toggle":
                contents += parse_notion_contents(
                    token, block.children, dir_name, file_name, offset
                )
                contents += offset + "</details>\n\n"
            else:
                contents += parse_notion_contents(
                    token, block.children, dir_name, file_name, offset + "\t"
                )

    return contents


def save_and_get_image_path(source, dir_name, file_name, image_number):
    types = ["png", "jpg", "jpeg"]
    type = filter(lambda i: i in source, types)
    path = "images/" + file_name + "-image-" + str(image_number) + "." + "".join(type)
    urllib.request.urlretrieve(source, dir_name + "/" + path)

    return "![" + file_name + "-image-" + str(image_number) + "](" + path + ")"


def parse_notion_collection(token, collection_id, offset):
    client = NotionClient(token_v2=token)
    table = client.get_collection(collection_id)
    columns = list(
        map(
            lambda i: {"id": i["id"], "name": i["name"], "type": i["type"]},
            table.get_schema_properties(),
        )
    )

    contents = "| " + " | ".join(map(lambda i: i["name"], columns)) + " |\n"
    contents += offset + "| " + " | ".join(map(lambda i: "---", columns)) + " |\n"

    for row in table.get_rows():
        contents += offset
        for column in columns:
            contents += "| "
            data = row.get_property(column["id"])
            if data is None or not data:
                contents += "   "
            elif column["type"] == "date":
                contents += ("" if data.start is None else str(data.start)) + (
                    "" if data.end is None else " -> " + str(data.end)
                )
            elif column["type"] == "person":
                contents += ", ".join(map(lambda i: i.full_name, data))
            elif column["type"] == "file":
                contents += ", ".join(map(lambda i: "[link](" + i + ")", data))
            elif column["type"] == "select":
                contents += str([data])
            elif column["type"] == "multi_select":
                contents += ", ".join(map(lambda i: "[" + i + "]", data))
            elif column["type"] == "checkbox":
                contents += "✅" if data else "⬜️"
            else:
                contents += str(data)
            contents += " "
        contents += "|\n"

    return contents


def write_post(post, file_path):
    file = open(file_path + ".md", "w")
    file.write(post)


def update_sidebar(category, title, file_name):
    category_title = "- 📂 **" + category + "**\n"
    post_path = "  - [" + title + "]" + "(/" + category + "/" + file_name + ".md)"

    with open(target + "/_sidebar.md", "r") as f:
        new_sidebar = []
        for line in f.readlines():
            if line.strip() == post_path.strip():
                continue
            new_sidebar.append(
                line.replace(
                    category_title, (category_title + "\n" + post_path).rstrip()
                )
            )

    with open(target + "/_sidebar.md", "w") as f:
        for line in new_sidebar:
            f.writelines(line)
