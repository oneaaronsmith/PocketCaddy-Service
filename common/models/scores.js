'use strict'; module.exports = function(Scores) {

    //Scores.disableRemoteMethodByName('create');				    //Removes (POST) /model
    //Scores.disableRemoteMethodByName('upsert');				    //Removes (PUT,PATCH)  /model
    Scores.disableRemoteMethodByName('exists');                    //Removes (GET) /model/:id/exists
    //Scores.disableRemoteMethodByName('findById');                  //Removes (GET) /model/:id
    //Scores.disableRemoteMethodByName('find');                      //Removes (GET) /model
    Scores.disableRemoteMethodByName('findOne');                   //Removes (GET) /model/findOne
    //Scores.disableRemoteMethodByName('destroyById');               //Removes (DELETE) /model/:id
    //Scores.disableRemoteMethodByName('deleteById');                //Removes (DELETE) /model/:id
    Scores.disableRemoteMethodByName('count');                     //Removes (GET) /model/count
    //Scores.disableRemoteMethodByName('updateAttributes');          //Removes (PUT,PATCH) /model/:id
    //Scores.disableRemoteMethodByName('prototype.updateAttributes');          //Removes (PUT,PATCH) /model/:id
    Scores.disableRemoteMethodByName('createChangeStream');        //Removes (POST) /model/change-stream
    Scores.disableRemoteMethodByName('updateAll');                 //Removes (POST) /model/update
    Scores.disableRemoteMethodByName('replaceOrCreate');           //Removes (POST) /model/replaceOrCreate
    //Scores.disableRemoteMethodByName('replaceById');	            //Removes (POST) /model/:id/replace
    //Scores.disableRemoteMethodByName('upsertWithWhere');           //Removes (PUT,PATCH) /model/upsertWithWhere
    //Scores.disableRemoteMethodByName('upsertById');                //Removes (PUT,PATCH) /model/:id
};