# build.sh
pip install pipenv

echo -------------------------------------------------------
echo 🧱 Start build
cd notion
pipenv install

echo -------------------------------------------------------
echo 📝 Get TIL contents from notion
pipenv run python notion_to_til.py
cd ..

echo -------------------------------------------------------
echo 💄 Apply prettier
npx prettier --write docs/**/*.md
echo ✅ Successfully formatted
cd docs

echo -------------------------------------------------------
echo 🚗 Run docsify server

docsify serve
