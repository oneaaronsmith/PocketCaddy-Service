'use strict'; module.exports = function(Swings) {

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