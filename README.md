# Weather-App
This is my weather app, using node.js with express and ejs. 

Next order of business is to add more styles, to make it pretty.

How it works:
It consumes data from https://openweathermap.org/ in the back end with node/express and renders an output section in the front end with ejs.

!!!If you are interested in giving it a spin, you must first generate an API_KEY from OpenWeatherMap and paste it in a .env file. Check my .env.sample for reference.
Hope you like it.

Also you don't forget to install dependencies if needed. 
Here is a list: 
   "body-parser"[this is not required, you can replace "bodyParser" in line 7 of app.js with "express" and will work the same.], 
   "dotenv",
   "ejs",
   "express",
   "node-fetch",
   "nodemon" 
