// var mysql      = require('mysql2');

// var connection = mysql.createConnection({

//   host     : 'localhost',

//   user     : 'root',

//   password : 'PriyaDiya@0713',

//   database : 'api_learn',

//   insecureAuth : true

// });

//  connection.connect();

//  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {

//   if (error) throw error;

//   console.log('The solution is: ', results[0].solution);

// });

 

// connection.end();

var mysql = require('mysql2');



let mysqlConnect = function () {

    return mysql.createConnection({

        host: 'localhost',

        user: 'root',

        password: 'PriyaDiya@0713',

        database: 'api_learn',

        insecureAuth : true

    });

};



module.exports.localConnect = mysqlConnect;