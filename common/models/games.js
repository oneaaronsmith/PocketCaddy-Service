'use strict'; module.exports = function(Games) {

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