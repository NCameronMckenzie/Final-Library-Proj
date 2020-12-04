const db = require('../middleware/dbconnect');

exports.getinstance_user = function (req, res, next) {
    var usernname = res.locals.user;
    var checkedbooks = res.locals.checkedbooks;

    //res.render('books', {layout: 'search', username: , checked_info: });
    res.render('user', {layout: 'default', username: usernname, checkedbooks: checkedbooks});
};