var loopback = require('loopback');
var fs = require('fs');
var ds = loopback.createDataSource('mysql', {
    "host": "pocketcaddy-np.cwydbfrpny9l.us-east-1.rds.amazonaws.com",
    "port": 3306,
    "database": "pocketcaddy_nonprod",
    "username": "master",
    "password": "!pocketcaddypass1"
  });

var tablenames = ['authorization','users','clubs','courses','games','holes','scores','swings'];

tablenames.forEach(function(table) {
    var jsonfile = table + ".json";

    ds.discoverSchema(table, {owner : 'pocketcaddy_nonprod'}, function(err, schema) {
    if(err) {
        console.error(err);
        return;
    }
    console.log(schema);

    var json = JSON.stringify(schema, null, '  ');
    console.log(json);

    fs.writeFile('../common/models/'+ jsonfile, json, function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    }); 

    var jsFile = table + ".js";
    var jsFileContent = "'use strict'; module.exports = function("+table.substr(0,1).toUpperCase() + table.substr(1)+") {};";

    fs.writeFile('../common/models/'+jsFile,jsFileContent, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
    });
});

ds.disconnect();
