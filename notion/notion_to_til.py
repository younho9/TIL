import os
import sys

from notion.client import NotionClient

def get_contents_from_notion(token_v2, parent_page_url_or_id, directory_name):
    client = NotionClient(token_v2=token_v2)
    til_repo = client.get_block(parent_page_url_or_id)
    
    # Main Loop
    for post in til_repo.children:
        text = "# %s\n\n" % (post.title)
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
                print(block.title + "\n")
                language = input("Input a language : ")
                text = text + "```" + language + "\n" + block.title + "\n```\n\n"
            # Handles Images
            if (block.type == "image"):
                text = text + "![" + block.id + "](" + block.source + ")\n\n"
            # Handles Bullets
            if (block.type == "bulleted_list"):
                text = text + "- " + block.title + "\n\n"
            # Handles Dividers
            if (block.type == "divider"):
                text = text + "---" + "\n\n"
            # Handles Basic Text, Links, Single Line Code
            if (block.type == "text"):
                text = text + block.title + "\n\n"
            if (block.type == "bookmark"):
                text = text + "🔗 [" + block.title + "](" + block.link + ")\n\n"
        try:
            os.mkdir("../docs/" + directory_name)
        except:
            pass
        print("\nTitle is " + post.title)
        filename = input("Input filename of TIL content : ")
        file = open("../docs/" + directory_name + "/" + filename + ".md", "w")
        file.write(text)
        print("✅Successfully exported new TIL content to docs/" + directory_name + "/"+ filename + ".md")
