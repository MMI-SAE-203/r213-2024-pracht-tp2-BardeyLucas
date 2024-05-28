/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pjypqk0lmwt0n1u")

  // remove
  collection.schema.removeField("sjir1yin")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kabssysg",
    "name": "image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pjypqk0lmwt0n1u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sjir1yin",
    "name": "image",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("kabssysg")

  return dao.saveCollection(collection)
})