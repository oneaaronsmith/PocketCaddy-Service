'use strict'; module.exports = function(Golfers) {

    //Golfers.disableRemoteMethodByName('create');				        //Removes (POST) /model
    Golfers.disableRemoteMethodByName('upsert');				        //Removes (PUT,PATCH)  /model
    Golfers.disableRemoteMethodByName('exists');                        //Removes (GET) /model/:id/exists
    //Golfers.disableRemoteMethodByName('findById');                    //Removes (GET) /model/:id
    //Golfers.disableRemoteMethodByName('find');                        //Removes (GET) /model
    Golfers.disableRemoteMethodByName('findOne');                       //Removes (GET) /model/findOne
    Golfers.disableRemoteMethodByName('destroyById');                   //Removes (DELETE) /model/:id
    //Golfers.disableRemoteMethodByName('deleteById');                    //Removes (DELETE) /model/:id
    Golfers.disableRemoteMethodByName('count');                         //Removes (GET) /model/count
    //Golfers.disableRemoteMethodByName('updateAttributes');              //Removes (PUT,PATCH) /model/:id
    Golfers.disableRemoteMethodByName('prototype.updateAttributes');    //Removes (PUT,PATCH) /model/:id
    Golfers.disableRemoteMethodByName('createChangeStream');            //Removes (POST) /model/change-stream
    Golfers.disableRemoteMethodByName('updateAll');                     //Removes (POST) /model/update
    Golfers.disableRemoteMethodByName('replaceOrCreate');               //Removes (POST) /model/replaceOrCreate
    Golfers.disableRemoteMethodByName('replaceById');	                //Removes (POST) /model/:id/replace
    Golfers.disableRemoteMethodByName('upsertWithWhere');               //Removes (PUT,PATCH) /model/upsertWithWhere
    //Golfers.disableRemoteMethodByName('upsertById');                    //Removes (PUT,PATCH) /model/:id

    /*//Relationship Methods:

    Golfers.disableRemoteMethodByName('__get__tags');
    Golfers.disableRemoteMethodByName('__create__tags');
    Golfers.disableRemoteMethodByName('__destroyById__accessTokens'); // DELETE
    Golfers.disableRemoteMethodByName('__updateById__accessTokens'); // PUT

    //--belongsTo--

    Golfers.disableRemoteMethodByName('__get__relatedModelName')
    
    //--hasOne--

    Golfers.disableRemoteMethodByName('__create__relatedModelName');
    Golfers.disableRemoteMethodByName('__get__relatedModelName');
    Golfers.disableRemoteMethodByName('__update__relatedModelName');
    Golfers.disableRemoteMethodByName('__destroy__relatedModelName');

    //--hasMany--

    Golfers.disableRemoteMethodByName('__count__relatedModelNamePlural');
    Golfers.disableRemoteMethodByName('__create__relatedModelNamePlural');
    Golfers.disableRemoteMethodByName('__delete__relatedModelNamePlural');
    Golfers.disableRemoteMethodByName('__destroyById__relatedModelNamePlural');
    Golfers.disableRemoteMethodByName('__findById__relatedModelNamePlural');
    Golfers.disableRemoteMethodByName('__get__relatedModelNamePlural');
    Golfers.disableRemoteMethodByName('__updateById__relatedModelNamePlural');

    //--hasManyThrough--

    Golfers.disableRemoteMethodByName('__count__relatedModelNamePlural');
    Golfers.disableRemoteMethodByName('__create__relatedModelNamePlural');
    Golfers.disableRemoteMethodByName('__delete__relatedModelNamePlural');
    Golfers.disableRemoteMethodByName('__destroyById__relatedModelNamePlural');
    Golfers.disableRemoteMethodByName('__exists__relatedModelNamePlural (through only)');
    Golfers.disableRemoteMethodByName('__findById__relatedModelNamePlural');
    Golfers.disableRemoteMethodByName('__get__relatedModelNamePlural');
    Golfers.disableRemoteMethodByName('__link__relatedModelNamePlural (through only)');
    Golfers.disableRemoteMethodByName('__updateById__relatedModelNamePlural');
    Golfers.disableRemoteMethodByName('__unlink__relatedModelNamePlural (through only)');

    //--hasAndBelongsToMany--

    Golfers.disableRemoteMethodByName('__link__relatedModelNamePlural');
    Golfers.disableRemoteMethodByName('__unlink__relatedModelNamePlural'); */
};