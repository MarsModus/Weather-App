# Weather-App
This is my weather app, using node.js with express and ejs. 

Next order of business is to add more styles, to make it pretty.

How it works:
It consumes data from https://openweathermap.org/ in the back end with node/express and renders an output section in the front end with ejs.

!!!If you are interested in giving it a spin, you must first generate an API_KEY from OpenWeatherMap and paste it in a .env file. Check my .env.sample for reference.
Hope you like it.

Also you don't forget to install dependencies if needed. 
Here is a list: 
   "body-parser": "^1.19.0",[this is not required, you can replace "bodyParser" in line 7 of app.js with "express" and will work the same.]
   "dotenv": "^10.0.0",
   "ejs": "^3.1.6",
   "express": "^4.17.2",
   "node-fetch": "^3.1.0",
   "nodemon": "^2.0.15" 
