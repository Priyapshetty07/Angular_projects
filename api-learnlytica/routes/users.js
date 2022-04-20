var express = require('express');
var router = express.Router();

let dbConnection = require('./../db/db').localConnect();

/* GET users listing. */
router.get('/', function (req, res, next) {
  dbConnection.query('SELECT * FROM api_learn.user_profile', (error,results,fields) => {
    if(error) throw error;
    res.send(results);

  });
  // res.send('respond with a resource');
});



module.exports = router;
