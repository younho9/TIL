# build.sh
pip install pipenv
cd notion
pipenv install
pipenv run python main.py --directory=$1
cd ..
echo -------------------------------------------------------
echo 💄 Apply prettier
echo -------------------------------------------------------
npx prettier --write docs/**/*.md
echo -------------------------------------------------------
echo ✅ Successfully formatted
echo -------------------------------------------------------
cd docs
echo -------------------------------------------------------
echo 🚗 Run docsify server
echo -------------------------------------------------------
docsify serve
