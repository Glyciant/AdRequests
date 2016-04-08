var	config = require('./config'),
  thinky = require('thinky')({host:config.rethink.host, port:config.rethink.port, db: config.rethink.db}),
  r = thinky.r,
  type = thinky.type,
  Query = thinky.Query;

var schema = {};

schema.primarykey = {
  requests: "id"
};

schema.requests = {
  id: type.number(),
  redditusername: type.string(),
  twitchusername: type.string(),
  type: type.string(),
  yesvotes: type.array(),
  novotes: type.array(),
  open: type.boolean(),
  approved: type.boolean(),
  requestdata: type.object(),
  comments: type.array()
};

module.exports = schema
