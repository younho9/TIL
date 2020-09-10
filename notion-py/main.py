import config
import sys
from notion2til import notion2til

if __name__ == '__main__':
  if len(sys.argv) == 3 :
    token = sys.argv[1]
    id = sys.argv[2]
  else:
    token = config.token
    id = config.id  
  
  notion2til(token, id)
