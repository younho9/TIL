import os

from notion.client import NotionClient

def get_contents_from_notion(token_v2, notion_repo_url, directory_name):
    client = NotionClient(token_v2=token_v2)
    notion_repo = client.get_block(notion_repo_url)
    
    # Main Loop
    for post in notion_repo.children:
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
                print("\n-------------------------------------------------------")
                print(block.title)
                print("-------------------------------------------------------\n")
                language = input("🗣  Input a language : ")
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
        print("\n-------------------------------------------------------")
        print("Title is " + post.title)
        print("-------------------------------------------------------\n")
        filename = input("📝 Input filename of TIL content : ")
        filename = filename.replace(' ', '-')
        file = open("../docs/" + directory_name + "/" + filename + ".md", "w")
        file.write(text)
        print("\n-------------------------------------------------------")
        print("✅Successfully exported new TIL content to docs/" + directory_name + "/"+ filename + ".md")
        print("-------------------------------------------------------\n")