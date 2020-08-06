const MongoDB = require('mongodb').MongoClient;
const URI = process.env.MONGO_URI;

async function findDocument(db, collection, query){
  var MongoClient = new MongoDB(URI, { useNewUrlParser: true, useUnifiedTopology: true });
  return await MongoClient.connect()
  .then(async function(){
    return await MongoClient.db(db).collection(collection).findOne(query);
  })
  .then(async function(res){
    await MongoClient.close();
    return await res;
  })
  .catch((e) => {
    console.error("Error in findDocument: ", e)
    MongoClient.close()
  })
}

async function findDocuments(db, collection, query){
  var MongoClient = new MongoDB(URI, { useNewUrlParser: true, useUnifiedTopology: true });
  return await MongoClient.connect()
  .then(async function(){
    return await MongoClient.db(db).collection(collection).find(query);
  })
  .then(async function(res){
    await MongoClient.close();
    return await res;
  })
  .catch((e) => {
    console.error("Error in findDocuments: ", e)
    MongoClient.close()
  })
}

async function insertDocument(db, collection, doc){
  var MongoClient = new MongoDB(URI, { useNewUrlParser: true, useUnifiedTopology: true });
  return await MongoClient.connect()
  .then(async function(){
    return await MongoClient.db(db).collection(collection).insertOne(doc);
  })
  .then(async function(res){
    await MongoClient.close();
    return await res;
  })
  .catch((e) => {
    console.error("Error in insertDocument: ", e)
    MongoClient.close()
  })
}

async function insertDocuments(db, collection, docs){
  var MongoClient = new MongoDB(URI, { useNewUrlParser: true, useUnifiedTopology: true });
  return await MongoClient.connect()
  .then(async function(){
    return await MongoClient.db(db).collection(collection).insertMany(docs);
  })
  .then(async function(res){
    await MongoClient.close();
    return await res;
  })
  .catch((e) => {
    console.error("Error in insertDocuments: ", e)
    MongoClient.close()
  })
}

async function updateDocument(db, collection, doc, query, options) {
  var MongoClient = new MongoDB(URI, { useNewUrlParser: true, useUnifiedTopology: true });
  return await MongoClient.connect()
  .then(async function(){
    return await MongoClient.db(db).collection(collection).updateOne(query, doc, options);
  })
  .then(async function(res){
    await MongoClient.close();
    return await res;
  })
  .catch((e) => {
    console.error("Error in updateDocument: ", e)
    MongoClient.close()
  })
}

async function updateDocuments(db, collection, docs, query, options) {
  var MongoClient = new MongoDB(URI, { useNewUrlParser: true, useUnifiedTopology: true });
  return await MongoClient.connect()
  .then(async function(){
    return await MongoClient.db(db).collection(collection).updateMany(query, doc, options);
  })
  .then(async function(res){
    await MongoClient.close();
    return await res;
  })
  .catch((e) => {
    console.error("Error in updateDocuments: ", e)
    MongoClient.close()
  })
}

async function deleteDocument(db, collection, query) {
  var MongoClient = new MongoDB(URI, { useNewUrlParser: true, useUnifiedTopology: true });
  return await MongoClient.connect()
  .then(async function(){
    return await MongoClient.db(db).collection(collection).deleteOne(query);
  })
  .then(async function(res){
    await MongoClient.close();
    return await res;
  })
  .catch((e) => {
    console.error("Error in deleteDocument: ", e)
    MongoClient.close()
  })
}

async function deleteDocuments(db, collection, query) {
  var MongoClient = new MongoDB(URI, { useNewUrlParser: true, useUnifiedTopology: true });
  return await MongoClient.connect()
  .then(async function(){
    return await MongoClient.db(db).collection(collection).deleteMany(query);
  })
  .then(async function(res){
    await MongoClient.close();
    return await res;
  })
  .catch((e) => {
    console.error("Error in deleteDocuments: ", e)
    MongoClient.close()
  })
}

module.exports = {
  findDocument,
  findDocuments,
  insertDocument,
  insertDocuments,
  updateDocument,
  updateDocuments,
  deleteDocument,
  deleteDocuments
}