require('dotenv').config();
var server = require('./server');

/*var ds = loopback.createDataSource('mysql', {
  "host": process.env.DB_HOST,
  "port": 3306,
  "database": process.env.DB_NAME,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS
});*/

var ds = require('./datasources.production.js');
var ds = server.dataSources.pocketcaddy_prod;

var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];

ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' - lbTables - '] created in ', ds.adapter.name);
  ds.disconnect();
});