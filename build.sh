# build.sh
pip install pipenv
cd notion
pipenv install
pipenv run python main.py --directory=$1
cd ..
npx prettier --write docs/**/*.md
cd docs
echo App
docsify serve
