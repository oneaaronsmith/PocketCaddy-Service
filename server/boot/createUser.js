var async = require('async');
module.exports = function(app) {

    var mysqlDs = app.dataSources.pocketcaddy_np;

    async.parallel({
        golferCreate: async.apply(createGolfer),
      }, function(err, results) {
        if (err) console.log(err);
    });

    function createGolfer(cb) {
      var Golfer = app.models.Golfers;
      Golfer.create([{
        username: 'test',
        email: 'test@test.com',
        password: 'test'
      }], cb);
  }
}