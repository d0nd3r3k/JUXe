
/*
 * Routes.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Easter Egg' });
};

exports.remote = function(req, res){
  res.render('remote', { title: 'Admin Remote' });
};