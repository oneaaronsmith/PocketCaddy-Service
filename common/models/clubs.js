'use strict'; module.exports = function(Clubs) {
    //Clubs.disableRemoteMethodByName('create');				         //Removes (POST) /model
    //Clubs.disableRemoteMethodByName('upsert');				         //Removes (PUT,PATCH)  /model
    Clubs.disableRemoteMethodByName('exists');                           //Removes (GET) /model/:id/exists
    //Clubs.disableRemoteMethodByName('findById');                       //Removes (GET) /model/:id
    //Clubs.disableRemoteMethodByName('find');                           //Removes (GET) /model
    Clubs.disableRemoteMethodByName('findOne');                          //Removes (GET) /model/findOne
    //Clubs.disableRemoteMethodByName('destroyById');                    //Removes (DELETE) /model/:id
    //Clubs.disableRemoteMethodByName('deleteById');                     //Removes (DELETE) /model/:id
    Clubs.disableRemoteMethodByName('count');                            //Removes (GET) /model/count
    //Clubs.disableRemoteMethodByName('updateAttributes');               //Removes (PUT,PATCH) /model/:id
    //Clubs.disableRemoteMethodByName('prototype.updateAttributes');     //Removes (PUT,PATCH) /model/:id
    Clubs.disableRemoteMethodByName('createChangeStream');               //Removes (POST) /model/change-stream
    Clubs.disableRemoteMethodByName('updateAll');                        //Removes (POST) /model/update
    Clubs.disableRemoteMethodByName('replaceOrCreate');                  //Removes (POST) /model/replaceOrCreate
    Clubs.disableRemoteMethodByName('replaceById');	                     //Removes (POST) /model/:id/replace
    Clubs.disableRemoteMethodByName('upsertWithWhere');                  //Removes (PUT,PATCH) /model/upsertWithWhere
    //Clubs.disableRemoteMethodByName('upsertById');                     //Removes (PUT,PATCH) /model/:id

    /*//Relationship Methods:

    Clubs.disableRemoteMethodByName('__get__tags');
    Clubs.disableRemoteMethodByName('__create__tags');
    Clubs.disableRemoteMethodByName('__destroyById__accessTokens'); // DELETE
    Clubs.disableRemoteMethodByName('__updateById__accessTokens'); // PUT

    //--belongsTo--

    Clubs.disableRemoteMethodByName('__get__relatedModelName')
    
    //--hasOne--

    Clubs.disableRemoteMethodByName('__create__relatedModelName');
    Clubs.disableRemoteMethodByName('__get__relatedModelName');
    Clubs.disableRemoteMethodByName('__update__relatedModelName');
    Clubs.disableRemoteMethodByName('__destroy__relatedModelName');

    //--hasMany--

    Clubs.disableRemoteMethodByName('__count__relatedModelNamePlural');
    Clubs.disableRemoteMethodByName('__create__relatedModelNamePlural');
    Clubs.disableRemoteMethodByName('__delete__relatedModelNamePlural');
    Clubs.disableRemoteMethodByName('__destroyById__relatedModelNamePlural');
    Clubs.disableRemoteMethodByName('__findById__relatedModelNamePlural');
    Clubs.disableRemoteMethodByName('__get__relatedModelNamePlural');
    Clubs.disableRemoteMethodByName('__updateById__relatedModelNamePlural');

    //--hasManyThrough--

    Clubs.disableRemoteMethodByName('__count__relatedModelNamePlural');
    Clubs.disableRemoteMethodByName('__create__relatedModelNamePlural');
    Clubs.disableRemoteMethodByName('__delete__relatedModelNamePlural');
    Clubs.disableRemoteMethodByName('__destroyById__relatedModelNamePlural');
    Clubs.disableRemoteMethodByName('__exists__relatedModelNamePlural (through only)');
    Clubs.disableRemoteMethodByName('__findById__relatedModelNamePlural');
    Clubs.disableRemoteMethodByName('__get__relatedModelNamePlural');
    Clubs.disableRemoteMethodByName('__link__relatedModelNamePlural (through only)');
    Clubs.disableRemoteMethodByName('__updateById__relatedModelNamePlural');
    Clubs.disableRemoteMethodByName('__unlink__relatedModelNamePlural (through only)');

    //--hasAndBelongsToMany--

    Clubs.disableRemoteMethodByName('__link__relatedModelNamePlural');
    Clubs.disableRemoteMethodByName('__unlink__relatedModelNamePlural'); */

};