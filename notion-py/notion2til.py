import os
import sys
import urllib.request

from datetime import datetime
from notion.client import NotionClient

def notion2til(token, collection_id):
  client = NotionClient(token_v2=token)
  contents_collection = client.get_collection(collection_id)
  posts = contents_collection.get_rows()
  
  # Main Loop
  for post in posts:
    # Post Filter
    if(post.status == "🛠 In Progress"):
      continue
    # if(post.status == "✅ Completed"):
    #   continue
    if(post.status == "🖨 Published"):
      continue

    # Handle title
    text = "# " + post.title + "\n\n"

    # Handles Post Image Source
    image_sources = []
    image_number = 0
    image_types = ['png', 'jpg', 'jpeg']

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
        for image_type in image_types:
          if image_type in block.source:
            text = text + "![image-" + str(image_number) + "](" + "./images/image-" + str(image_number) + '.' + image_type + ")\n\n"
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
      os.mkdir(dir_name + "/images")
    except:
      pass

    # Handles post Images
    for index, image_source in enumerate(image_sources):
      for image_type in image_types:
        if image_type in image_source:
          urllib.request.urlretrieve(image_source, dir_name + "/images/image-" + str(index) + '.' + image_type)
          
    title = post.title.replace(" ", "-")
    file = open(dir_name + "/" + title + ".md", "w")
    print("✅ Successfully exported blog content to" + dir_name + "/" + title + ".md")
    file.write(text)

    # Handles sidebar
    sidebar_category = '- 📂 **' + post.tag[0] + '**\n';
    sidebar_line = '  - [' + post.title + ']' + '(/' + post.tag[0] + '/' + title + '.md)'

    with open('../docs/_sidebar.md', 'r') as f:
      new_sidebar =[]
      for line in f.readlines():
        if(line.strip() == sidebar_line.strip()):
          continue
        new_sidebar.append(line.replace(sidebar_category, (sidebar_category + '\n' + sidebar_line).rstrip()))

    with open('../docs/_sidebar.md', 'w') as f:
      for line in new_sidebar:
        f.writelines(line)

if __name__ == '__main__':
  notion2til(sys.argv[1], sys.argv[2])
