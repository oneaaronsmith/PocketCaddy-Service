'use strict';

module.exports = function enableAuthentication(server) {
    server.enableAuth();

    var ds = server.dataSources.pocketcaddy_prod;
 
    var lbTables = ['ACL', 'RoleMapping', 'Role'];
    
    ds.autoupdate(lbTables, function(er) {
      if (er) throw er;
      console.log('Loopback tables [' - lbTables - '] created in ', ds.adapter.name);
      //ds.disconnect();
    });

};