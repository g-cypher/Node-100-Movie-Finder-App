const express = require('express');
const app = express();
const morgan = require('morgan');
const axios = require('axios');

var cache = {};

app.use(morgan('dev'));

app.get("/", function (req, res){

var movieId = req.query.i;
var movieTitle = encodeURIComponent(req.query.t);
var movieUrl = 'http://www.omdbapi.com/?';
var movieApiKey = '&apikey=8730e0e';


if (movieId){
    if(cache.hasOwnProperty(movieId)){
        res.json(cache[movieId]);
    } else {
    axios.get(movieUrl + 'i=' + movieId + movieApiKey)
        .then(response => { 
            cache[movieId] = response.data; 
            res.json(cache[movieId]);
        })
        .catch(error => {
            console.log(error);
            res.send('Error');
        }); 
    }

    } else if (movieTitle){
        if(cache.hasOwnProperty(movieTitle)){
            res.json(cache[movieTitle]);
        } else {
            axios.get(movieUrl + 't=' + movieTitle + movieApiKey)
            .then(response => { 
                    cache[movieTitle] = response.data;
                    res.json(cache[movieTitle]);
            })
            .catch(error => {
                console.log(error);
                res.send('Error');
            });       
        }

    }
});


// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter

module.exports = app;