'use strict'; module.exports = function(Comments) {
    //Comments.disableRemoteMethodByName('create');				    //Removes (POST) /model
    //Comments.disableRemoteMethodByName('upsert');				    //Removes (PUT,PATCH)  /model
    Comments.disableRemoteMethodByName('exists');                    //Removes (GET) /model/:id/exists
    //Comments.disableRemoteMethodByName('findById');                  //Removes (GET) /model/:id
    //Comments.disableRemoteMethodByName('find');                      //Removes (GET) /model
    Comments.disableRemoteMethodByName('findOne');                   //Removes (GET) /model/findOne
    //Comments.disableRemoteMethodByName('destroyById');               //Removes (DELETE) /model/:id
    //Comments.disableRemoteMethodByName('deleteById');                //Removes (DELETE) /model/:id
    Comments.disableRemoteMethodByName('count');                     //Removes (GET) /model/count
    //Comments.disableRemoteMethodByName('updateAttributes');          //Removes (PUT,PATCH) /model/:id
    Comments.disableRemoteMethodByName('prototype.updateAttributes');          //Removes (PUT,PATCH) /model/:id
    Comments.disableRemoteMethodByName('createChangeStream');        //Removes (POST) /model/change-stream
    Comments.disableRemoteMethodByName('updateAll');                 //Removes (POST) /model/update
    Comments.disableRemoteMethodByName('replaceOrCreate');           //Removes (POST) /model/replaceOrCreate
    Comments.disableRemoteMethodByName('replaceById');	            //Removes (POST) /model/:id/replace
    Comments.disableRemoteMethodByName('upsertWithWhere');           //Removes (PUT,PATCH) /model/upsertWithWhere
    //Comments.disableRemoteMethodByName('upsertById');                //Removes (PUT,PATCH) /model/:id
};