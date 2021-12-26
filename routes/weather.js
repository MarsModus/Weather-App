const router = require("express").Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config()

router.get("/", (req, res)=> {
    res.render("index", {
        city: null,
        des: null,
        icon: null,
        temp: null
    });
})

router.post("/", async (req, res) => {
    const query = req.body.cityName;
	const unit = "metric";
	const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query + "&appid=" + process.env.API_KEY + "&units=" + unit;

    try {
        await fetch(url)
        .then(res => res.json())
        .then(data => {
            if(data.cod === "404"){
                res.render('index', {
                    city: data.message,
                    des: null,
                    icon: null,
                    temp: null
                })
            } else {
                const city = data.name;
                const temp = data.main.temp;
			    const des = data.weather[0].description;
			    const icon = data.weather[0].icon;

                res.render('index', {
                    city, temp, des, icon
                });
            }
        });
        
    }catch(err){
        res.render('index', {
            city: "Something is wrong.",
            des: null,
            icon: null,
            temp: null
        })
    }
    
})

module.exports = router;