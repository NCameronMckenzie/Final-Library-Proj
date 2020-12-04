const db = require('../middleware/dbconnect');

const get_checkedbooks = function (req, res, next){
    var sql = "SELECT checkout.eid, title, books.ISBN, book_status FROM books, checkout WHERE books.ISBN = checkout.ISBN AND book_status = 'unavailable' GROUP BY eid";

    db.query(sql, function (err, data, fields){
        console.log(data.length + ' books are checked out currently');
        res.locals.checkedbooks = data;
        next();
    });
};

module.exports = get_checkedbooks;