/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jul495xbgyj3vjr")

  collection.name = "events"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jul495xbgyj3vjr")

  collection.name = "Event"

  return dao.saveCollection(collection)
})
