const db = require('../middleware/dbconnect');

const get_username = function (req, res, next) {
    userID = req.query.id;
    sql = "SELECT username FROM administrators WHERE aid = ?";
    
    db.query(sql, userID, function (err, data, fields) {
        res.locals.user = data[0].username;
        next();
    });
};

module.exports = get_username;