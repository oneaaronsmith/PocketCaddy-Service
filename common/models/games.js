'use strict'; module.exports = function(Games) {

    //Games.disableRemoteMethodByName('create');				    //Removes (POST) /model
    //Games.disableRemoteMethodByName('upsert');				    //Removes (PUT,PATCH)  /model
    Games.disableRemoteMethodByName('exists');                    //Removes (GET) /model/:id/exists
    //Games.disableRemoteMethodByName('findById');                  //Removes (GET) /model/:id
    //Games.disableRemoteMethodByName('find');                      //Removes (GET) /model
    Games.disableRemoteMethodByName('findOne');                   //Removes (GET) /model/findOne
    //Games.disableRemoteMethodByName('destroyById');               //Removes (DELETE) /model/:id
    //Games.disableRemoteMethodByName('deleteById');                //Removes (DELETE) /model/:id
    //Games.disableRemoteMethodByName('count');                     //Removes (GET) /model/count
    //Games.disableRemoteMethodByName('updateAttributes');          //Removes (PUT,PATCH) /model/:id
    //Games.disableRemoteMethodByName('prototype.updateAttributes');          //Removes (PUT,PATCH) /model/:id
    Games.disableRemoteMethodByName('createChangeStream');        //Removes (POST) /model/change-stream
    Games.disableRemoteMethodByName('updateAll');                 //Removes (POST) /model/update
    Games.disableRemoteMethodByName('replaceOrCreate');           //Removes (POST) /model/replaceOrCreate
    Games.disableRemoteMethodByName('replaceById');	            //Removes (POST) /model/:id/replace
    Games.disableRemoteMethodByName('upsertWithWhere');           //Removes (PUT,PATCH) /model/upsertWithWhere
    //Games.disableRemoteMethodByName('upsertById');                //Removes (PUT,PATCH) /model/:id

    Games.afterRemote('create', function(context, remoteMethodOutput, next) {
        console.log(remoteMethodOutput);
        
        var ds = Games.dataSource;
        var sql = 'INSERT INTO scores (hole_id, game_id) SELECT hole_id,'+ remoteMethodOutput.gameId +' FROM holes WHERE course_id = ' + remoteMethodOutput.courseId + '';
       
        ds.connector.query(sql, function(err, scores) {
            if (err) console.error(err);
        });

        next();
    });
};