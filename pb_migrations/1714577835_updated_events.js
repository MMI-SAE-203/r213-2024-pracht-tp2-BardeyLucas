/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jul495xbgyj3vjr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mewkr1sw",
    "name": "categorie_event",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Musique",
        "Dance",
        "Théatre"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jul495xbgyj3vjr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mewkr1sw",
    "name": "categorie_event",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "Musique",
        "Dance",
        "Théatre"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
