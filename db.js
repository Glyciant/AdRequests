var	config = require('./config'),
  schema = require('./schema'),
  thinky = require('thinky')({host:config.rethink.host, port:config.rethink.port, db: config.rethink.db}),
	r = thinky.r,
	type = thinky.type,
	Query = thinky.Query,
  RequestModel = thinky.createModel('requests', schema.requests, schema.primarykey.requests);

var requests = {

}

module.exports = {
  requests: requests
}
