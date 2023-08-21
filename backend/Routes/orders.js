const express = require("express");
const router = express.Router();
// const Order = require("../models/Orders");


router.post('/foodData',(req,res)=>{
    try {
        // console.log(global.food_item)
        res.send([global.food_item,global.food_Category])
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }
})

// http://localhost:4000/api/foodData
module.exports = router;