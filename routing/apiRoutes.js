var friendsData = require('../data/friends.js');

module.exports = function(app){

    app.get('/api/friendsData', function(req, res){
        res.json(friendsData);
    });
}