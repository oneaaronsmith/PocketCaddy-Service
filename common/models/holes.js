'use strict'; module.exports = function(Holes) {

    Holes.disableRemoteMethodByName('create');				    //Removes (POST) /model
    Holes.disableRemoteMethodByName('upsert');				    //Removes (PUT,PATCH)  /model
    Holes.disableRemoteMethodByName('exists');                    //Removes (GET) /model/:id/exists
    //Holes.disableRemoteMethodByName('findById');                  //Removes (GET) /model/:id
    //Holes.disableRemoteMethodByName('find');                      //Removes (GET) /model
    Holes.disableRemoteMethodByName('findOne');                   //Removes (GET) /model/findOne
    Holes.disableRemoteMethodByName('destroyById');               //Removes (DELETE) /model/:id
    Holes.disableRemoteMethodByName('deleteById');                //Removes (DELETE) /model/:id
    Holes.disableRemoteMethodByName('count');                     //Removes (GET) /model/count
    Holes.disableRemoteMethodByName('updateAttributes');          //Removes (PUT,PATCH) /model/:id
    Holes.disableRemoteMethodByName('prototype.updateAttributes');          //Removes (PUT,PATCH) /model/:id
    Holes.disableRemoteMethodByName('createChangeStream');        //Removes (POST) /model/change-stream
    Holes.disableRemoteMethodByName('updateAll');                 //Removes (POST) /model/update
    Holes.disableRemoteMethodByName('replaceOrCreate');           //Removes (POST) /model/replaceOrCreate
    Holes.disableRemoteMethodByName('replaceById');	            //Removes (POST) /model/:id/replace
    Holes.disableRemoteMethodByName('upsertWithWhere');           //Removes (PUT,PATCH) /model/upsertWithWhere
    Holes.disableRemoteMethodByName('upsertById');                //Removes (PUT,PATCH) /model/:id
};