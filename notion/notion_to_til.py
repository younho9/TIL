import os
import config
import urllib.request

from datetime import datetime
from notion.client import NotionClient

collection_id = config.id
token = os.environ.get("NOTION_TOKEN")

client = NotionClient(token_v2=token)
contents_collection = client.get_collection(collection_id)
posts = contents_collection.get_rows()

# Main Loop
for post in posts:
    # Post Filter 
    if(post.coegeun_hangmog != "True"):
        continue

    # Handle title
    text = "# " + post.title + "\n\n"

    # Handles Post Image Source
    image_sources = []
    image_number = 0

    # Get blog post
    for block in post.children:
        # Handles H1
        if (block.type == "header"):
            text = text + "## " + block.title + "\n\n"
        # Handles H2
        if (block.type == "sub_header"):
            text = text + "### " + block.title + "\n\n"
        # Handles H3
        if (block.type == "sub_sub_header"):
            text = text + "#### " + block.title + "\n\n"
        # Handles Code Blocks
        if (block.type == "code"):
            text = text + "```" + block.language.lower() + "\n" + block.title + "\n```\n\n"
        # Handles Callout Blocks
        if (block.type == "callout"):
            text = text + "> " + block.icon + " " + block.title + "\n\n"
        # Handles Quote Blocks
        if (block.type == "quote"):
            text = text + "> " + block.title + "\n\n"
        # Handles Bookmark Blocks
        if (block.type == "bookmark"):
            text = text + "🔗 [" + block.title + "](" + block.link + ")\n\n"
        # Handles Images
        if (block.type == "image"):
            image_sources.append(block.source)
            if "png" in block.source:
                text = text + "![image-" + str(image_number) + "](" + "./images/image-" + str(image_number) + ".png" + ")\n\n"
            elif "jpg" in block.source:
                text = text + "![image-" + str(image_number) + "](" + "./images/image-" + str(image_number) + ".jpg" + ")\n\n"
            elif "jpeg" in block.source:
                text = text + "![image-" + str(image_number) + "](" + "./images/image-" + str(image_number) + ".jpeg" + ")\n\n"
            image_number += 1
        # Handles Bullets
        if (block.type == "bulleted_list"):
            text = text + "- " + block.title + "\n\n"
        # Handles Dividers
        # if (block.type == "divider"):
        #     text = text + "---" + "\n\n"
        # Handles Basic Text, Links, Single Line Code
        if (block.type == "text"):
            text = text + block.title + "\n\n"


    # Make blog post directory
    dir_name = "../docs/" + str(post.tag[0])
    try:
        os.mkdir(dir_name)
    except:
        pass

    # Handles post Images
    for index, image_source in enumerate(image_sources):
        if "png" in image_source:
            urllib.request.urlretrieve(image_source, dir_name + "/images/image-" + str(index) + ".png")
        elif "jpg" in image_source:
            urllib.request.urlretrieve(image_source, dir_name + "/images/image-" + str(index) + ".jpg")
        elif "jpeg" in image_source:
            urllib.request.urlretrieve(image_source, dir_name + "/images/image-" + str(index) + ".jpeg")
    
    title = post.title.replace(" ", "-")
    file = open(dir_name + "/" + title + ".md", "w")
    print("✅ Successfully exported blog content to" + dir_name + "/" + title + ".md")
    file.write(text)