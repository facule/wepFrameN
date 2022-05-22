const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user');
const Post = require('./post');
const Hashtag = require('./hashtag');
const Map = require('./map');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Hashtag = Hashtag;
db.Map = Map;

User.init(sequelize);
Post.init(sequelize);
Hashtag.init(sequelize);
Map.init(sequelize);

User.associate(db);
Post.associate(db);
Hashtag.associate(db);
Map.associate(db);

module.exports = db;
