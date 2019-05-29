# Node-100-Movie-Finder-App

For this project, my goal was to create an Express Server that acts as a cache server between the client (website) and a 
destination server (OMDB).  My Express server proxys incoming requests to OMDB as I manually created an HTTP request using 
axios.  I then am able to cache the data and have the possibility to present the data to the user if needed.  I also use 
morgan middlewarre to log all incoming requests to the console.

Points of Difficulty:
1. Understanding encodeURIComponent
2. Comprehending how req.query functions
