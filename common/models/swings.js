'use strict'; module.exports = function(Swings) {

    //Swings.disableRemoteMethodByName('create');				    //Removes (POST) /model
    //Swings.disableRemoteMethodByName('upsert');				    //Removes (PUT,PATCH)  /model
    Swings.disableRemoteMethodByName('exists');                    //Removes (GET) /model/:id/exists
    //Swings.disableRemoteMethodByName('findById');                  //Removes (GET) /model/:id
    //Swings.disableRemoteMethodByName('find');                      //Removes (GET) /model
    Swings.disableRemoteMethodByName('findOne');                   //Removes (GET) /model/findOne
    //Swings.disableRemoteMethodByName('destroyById');               //Removes (DELETE) /model/:id
    //Swings.disableRemoteMethodByName('deleteById');                //Removes (DELETE) /model/:id
    //Swings.disableRemoteMethodByName('count');                     //Removes (GET) /model/count
    //Swings.disableRemoteMethodByName('updateAttributes');          //Removes (PUT,PATCH) /model/:id
    Swings.disableRemoteMethodByName('prototype.updateAttributes');          //Removes (PUT,PATCH) /model/:id
    Swings.disableRemoteMethodByName('createChangeStream');        //Removes (POST) /model/change-stream
    Swings.disableRemoteMethodByName('updateAll');                 //Removes (POST) /model/update
    Swings.disableRemoteMethodByName('replaceOrCreate');           //Removes (POST) /model/replaceOrCreate
    Swings.disableRemoteMethodByName('replaceById');	            //Removes (POST) /model/:id/replace
    Swings.disableRemoteMethodByName('upsertWithWhere');           //Removes (PUT,PATCH) /model/upsertWithWhere
    //Swings.disableRemoteMethodByName('upsertById');                //Removes (PUT,PATCH) /model/:id

    Swings.afterRemote('create', function(context, remoteMethodOutput, next) {
        console.log(remoteMethodOutput);
        
        var ds = Swings.dataSource;
        var sql = 'UPDATE clubs SET avg_distance = (SELECT AVG(distance) FROM swings WHERE club_id = ' + remoteMethodOutput.clubId + ') WHERE club_id = ' + remoteMethodOutput.clubId;
       
        ds.connector.query(sql, function(err, scores) {
            if (err) console.error(err);
        });

        next();
    });


};