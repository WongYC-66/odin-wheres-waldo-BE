var express = require('express');
var router = express.Router();

//  API point
// /v1/success_guess_post 
//    input : val, x-coor, y-coor
//    output : true/ false

// /v1/score_board_get
//    output : [{username, score}, ...]

// /v1/score_board_post
//    input : user, time
//    output : success/fail


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* POST guess */
router.post('/v1/success_guess_post', function(req, res, next) {
  res.json({'res': true});
});

/* GET scoreboard list */
router.get('/v1/score_board_get', function(req, res, next) {
  res.json({'list': [
    {username: 'a', time:'5'},
    {username: 'b', time:'10'},
  ]});
});

/* POST scoreboard list */
router.post('/v1/score_board_post', function(req, res, next) {
  res.json({'msg': 'success'});
});


module.exports = router;
