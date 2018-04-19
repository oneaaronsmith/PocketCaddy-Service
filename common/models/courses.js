'use strict'; module.exports = function(Courses) {
    Courses.disableRemoteMethodByName('create');				    //Removes (POST) /model
    Courses.disableRemoteMethodByName('upsert');				    //Removes (PUT,PATCH)  /model
    Courses.disableRemoteMethodByName('exists');                    //Removes (GET) /model/:id/exists
    //Courses.disableRemoteMethodByName('findById');                  //Removes (GET) /model/:id
    //Courses.disableRemoteMethodByName('find');                      //Removes (GET) /model
    Courses.disableRemoteMethodByName('findOne');                   //Removes (GET) /model/findOne
    Courses.disableRemoteMethodByName('destroyById');               //Removes (DELETE) /model/:id
    Courses.disableRemoteMethodByName('deleteById');                //Removes (DELETE) /model/:id
    Courses.disableRemoteMethodByName('count');                     //Removes (GET) /model/count
    Courses.disableRemoteMethodByName('updateAttributes');          //Removes (PUT,PATCH) /model/:id
    Courses.disableRemoteMethodByName('prototype.updateAttributes');          //Removes (PUT,PATCH) /model/:id
    Courses.disableRemoteMethodByName('createChangeStream');        //Removes (POST) /model/change-stream
    Courses.disableRemoteMethodByName('updateAll');                 //Removes (POST) /model/update
    Courses.disableRemoteMethodByName('replaceOrCreate');           //Removes (POST) /model/replaceOrCreate
    Courses.disableRemoteMethodByName('replaceById');	            //Removes (POST) /model/:id/replace
    Courses.disableRemoteMethodByName('upsertWithWhere');           //Removes (PUT,PATCH) /model/upsertWithWhere
    Courses.disableRemoteMethodByName('upsertById');                //Removes (PUT,PATCH) /model/:id
};