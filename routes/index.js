const moviesJSON = require('../movies.json');
//home
exports.home = function(req, res){
    var movies = moviesJSON.movies;
    res.render('home', {
        title : "Star World Movies",
        movies : movies
    });
};

//movie_single
exports.movie_single = function(req, res){
    var episode_number = req.params.episode_number;
    res.send('This is page for episode ' + episode_number);
};

//not_found
exports.notFound = function(req, res){
    res.send('This is not the page that you are looking for');
};