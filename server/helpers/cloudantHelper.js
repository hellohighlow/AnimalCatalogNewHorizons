const Cloudant = require('@cloudant/cloudant');
const configs = require('../configs/cloudantConfig');
const cloudant = require('@cloudant/cloudant');
var coudant = Cloudant(configs);

async function queryDB(db, selector, fields) {
  return await cloudant.db.use(db).find({
    "selector": selector,
    "fields": fields
  })
  .catch((e) => {
    console.error('Error in method queryDB: ', e);
  })
}

async function insertDoc(db, doc) {
  return await cloudant.db.use(db).insert(doc)
  .catch((e) => {
    console.error('Error in method insertDoc: ', e);
  })
}

async function deleteDoc(db, doc) {
  return await cloudant.db.use(db).destroy(doc._id, doc._rev)
  .catch((e) => {
    console.error('Error in method deleteDoc: ', e);
  })
}

module.exports = {
  queryDB,
  insertDoc,
  deleteDoc
}