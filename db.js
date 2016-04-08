var	config = require('./config'),
  schema = require('./schema'),
  thinky = require('thinky')({host:config.rethink.host, port:config.rethink.port, db: config.rethink.db}),
	r = thinky.r,
	type = thinky.type,
	Query = thinky.Query,
  RequestModel = thinky.createModel('requests', schema.requests, schema.primarykey.requests);

var requests = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      RequestModel.then((db) => {
        resolve(db)
      })
    })
  },
  create: (object) => {
    return new Promise((resolve, reject) => {
      RequestModel.insert(object).run().then((db) => {
        resolve(db)
      })
    })
  },
  select: (id) => {
    return new Promise((resolve, reject) => {
      RequestModel.filter({id: id}).run().then((db) => {
        resolve(db)
      })
    })
  },
  vote: (id, yesvotes, novotes) => {
    return new Promise((resolve, reject) => {
      RequestModel.filter({id: id}).update({yesvotes: yesvotes, novotes: novotes}).run().then((db) => {
        resolve(db)
      })
    })
  },
  delete: (id) => {
    return new Promise((resolve, reject) => {
      RequestModel.filter({id: id}).delete().run().then((db) => {
        resolve(db)
      })
    })
  }
}

module.exports = {
  requests: requests
}
