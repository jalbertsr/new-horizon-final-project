curl -H "Content-Type: application/json" -X POST -d '{ "title": "Kross Vento 7", "category": "road", "size": "M" }' localhost:3000/api/bikes

curl -H "Content-Type: application/json" -X POST -d '{ "title": "peugeout", "category": "mountain", "size": "XL" }' localhost:3000/api/bikes

curl localhost:3000/api/bikes

demonio -> mongod --dbpath /Users/catabuadescoll/mongo/db

// IMPORT BIKES JSON
mongoimport -d newHorizon -c bikes --jsonArray --file server/data/bikes.json

mongoimport -h ds123614.mlab.com:23614 -d newHorizon -c bikes -u admin -p admin -o server/data/bikes.json