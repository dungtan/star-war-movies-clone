const express = require('express');
const routes = require('./routes');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
//Routes

//home
app.get('/', routes.home);

//movie_single
app.get('/star_wars_episode/:episode_number', routes.movie_single);

//notFound
app.get('*',routes.notFound);
app.listen(port, function(){
    console.log('The application is running on localhost:3000');
})