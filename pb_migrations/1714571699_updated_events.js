/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jul495xbgyj3vjr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pycexyjg",
    "name": "Date_event",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jul495xbgyj3vjr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pycexyjg",
    "name": "Daye_event",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
