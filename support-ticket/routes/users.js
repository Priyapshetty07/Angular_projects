var express = require('express');
var router = express.Router();

let dbConnection = require('./../db/db').localConnect();

/* GET users listing. */
router.get('/', function (req, res, next) {
  dbConnection.query('SELECT * FROM support_ticket.ticket', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});
// post method
router.post('/tickets', (req, res, next) => {

  let {
    id,

    username,

    ticketid,

    ticketQuestion,

    ticket_date

  } = req.body

  let insertQuery = `insert into support_ticket.ticket

  (id,username,ticketid,ticketQuestion,ticket_date)

  values('${id}','${username}','${ticketid}','${ticketQuestion}','${ticket_date}')`;

  dbConnection.query(insertQuery, (error, result, feild) => {

    if (error) throw error;

    res.send("detailes are fetched from postman api detailes are inserted");

  });

});

module.exports = router;


