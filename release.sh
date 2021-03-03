echo "RUNNING INSTALL (APP)"
yarn install
cd server

echo "RUNNING INSTALL (SERVER)"
yarn install
cd ..

echo "RUNNING BUILD"
yarn run build
