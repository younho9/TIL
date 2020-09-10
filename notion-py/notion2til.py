import os
import sys
import config
import urllib.request

from datetime import datetime
from notion.client import NotionClient

image_types = ['png', 'jpg', 'jpeg']
page_status_list = ['🛠 In Progress', '✅ Completed', '🖨 Published']

def notion2til(token, collection_id, target):
  client = NotionClient(token_v2=token)
  contents_collection = client.get_collection(collection_id)
  pages = contents_collection.get_rows()
  
  # Main Loop
  for page in pages:
    if(page.status != '✅ Completed'):
      continue

    dir_name = target + '/' + page.tag[0]
    make_directory(dir_name)
    file_name = page.title.replace(' ', '-')
    file_path = dir_name + '/' + file_name

    post = '# ' + page.title + '\n\n'
    post = post + parse_notion_contents(token, page.children, dir_name, '')

    write_post(post, file_path)
    update_sidebar(target, page.tag[0], page.title, file_name)
    
    print('✅ Successfully exported blog content to' + file_path + '.md')

def make_directory(dir_name):
  try:
    os.mkdir(dir_name)
  except:
    pass
  try:
    os.mkdir(dir_name + '/images')
  except:
    pass

def parse_notion_contents(token, blocks, dir_name, offset):
  image_number = 0
  contents = ''

  for block in blocks:
    type = block.type
    # Handles H1
    if (type == 'header'):
      contents += offset + '## ' + block.title + '\n\n'
    # Handles H2
    elif (type == 'sub_header'):
      contents += offset + '### ' + block.title + '\n\n'
    # Handles H3
    elif (type == 'sub_sub_header'):
      contents += offset + '#### ' + block.title + '\n\n'
    # Handles Code Blocks
    elif (type == 'code'):
      contents += offset + '```' + block.language.lower() + '\n' + block.title + '\n```\n\n'
    # Handles Callout Blocks
    elif (type == 'callout'):
      contents += offset + '> ' + block.icon + ' ' + block.title + '\n\n'
    # Handles Quote Blocks
    elif (type == 'quote'):
      contents += offset + '> ' + block.title + '\n\n'
    # Handles Bookmark Blocks
    elif (type == 'bookmark'):
      contents += offset + '🔗 [' + block.title + '](' + block.link + ')\n\n'
    # Handles Linked Notion Page
    elif (type == 'page'):
      contents += offset + '🔗 [' + block.title + '](' + block.get_browseable_url() + ')\n\n'
    # Handles Images
    elif (type == 'image'):
      for image_type in image_types:
        if image_type in block.source:
          image_path = 'images/image-' + str(image_number) + '.' + image_type
          contents += offset + '![image-' + str(image_number) + '](' + image_path + ')\n\n'
          urllib.request.urlretrieve(block.source, dir_name + '/' + image_path)
      image_number += 1
    # Handles Bullets
    elif (type == 'bulleted_list'):
      contents += offset + '- ' + block.title + '\n\n'
    # Handles Numbered List
    elif (type == 'numbered_list'):
      contents += offset + '1. ' + block.title + '\n\n'
    # Handles ToDo
    elif (type == 'to_do'):
      contents += offset + '- [ ] ' + block.title + '\n\n'
    # Handles Toggle
    elif (type == 'toggle'):
      contents += offset + '<details><summary> ' + block.title + '</summary>\n\n'
    # Handles Basic text, Links, Single Line Code
    elif (type == 'text'):
      contents += offset + block.title + '\n\n'
    # Handles Table
    elif (type == 'collection_view'):
      contents += offset + parse_notion_collection(token, block.collection.id, offset) + '\n\n'
    # Handles Dividers
    # elif (type == 'divider'):
    #     contents += offset + '---' + '\n\n'

    # Handles block children
    if block.children:
      if(type == 'page'):
        continue
      contents += parse_notion_contents(token, block.children, dir_name, offset + '\t')
      if(type == 'toggle'):
        contents += offset + '</details>\n\n'

  return contents

def parse_notion_collection(token, collection_id, offset):
  client = NotionClient(token_v2=token)
  table = client.get_collection(collection_id)
  columns = list(map(lambda i: { 'id': i['id'], 'slug': i['slug'], 'type': i['type'] }, table.get_schema_properties()))
  contents = ''

  for column in columns:
    contents += '| ' + column['slug'] + ' '
  
  contents += '|\n' + offset + '|---' * len(columns) + '|'
  
  for row in table.get_rows():
    contents += '\n' + offset + '| '
    for column in columns:
      data = row.get_property(column['id'])
      if data is None or not data:
        contents += '    | '
      elif column['type'] == 'date' : 
        contents += ('' if data.start is None else str(data.start)) + ('' if data.end is None else ' -> ' + str(data.end)) + ' | '
      elif column['type'] == 'person' :
        contents += ', '.join(map(lambda i: i.full_name, data)) + ' | '
      elif column['type'] == 'file' :
        contents += ', '.join(map(lambda i: '[link](' + i + ')', data)) + ' | '
      elif column['type'] == 'select' :
        contents += str([data]) + ' | '
      elif column['type'] == 'multi_select' :
        contents += ', '.join(map(lambda i: '[' + i +']', data)) + ' | '
      elif column['type'] == 'checkbox' :
        contents += ( '✅' if data else '⬜️') + ' | '
      else:
        contents += str(data) + ' | '
  
  return contents

def write_post(post, file_path):
  file = open(file_path + '.md', 'w')
  file.write(post)

def update_sidebar(target, category, title, file_name):
  category_title = '- 📂 **' + category + '**\n';
  post_path = '  - [' + title + ']' + '(/' + category + '/' + file_name + '.md)'

  with open(target + '/_sidebar.md', 'r') as f:
    new_sidebar =[]
    for line in f.readlines():
      if(line.strip() == post_path.strip()):
        continue
      new_sidebar.append(line.replace(category_title, (category_title + '\n' + post_path).rstrip()))

  with open(target + '/_sidebar.md', 'w') as f:
    for line in new_sidebar:
      f.writelines(line)
