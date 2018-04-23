"use strict"
var loopback = require('loopback');
var fs = require('fs');
var ds = loopback.createDataSource('mysql', {
});

var tablenames = ['comments']; //['authorization','users','clubs','courses','games','holes','scores','swings', 'comments'];

tablenames.forEach(function(table) {
    var jsonfile = table + ".json";

    ds.discoverSchema(table, {owner : 'pocketcaddy_prod'}, function(err, schema) {
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
