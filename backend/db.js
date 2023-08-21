const mongoose = require("mongoose");
const mongoURI ="mongodb://localhost:27017/MongoDBFiles";
const mongoDB = async () => {
  mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
    if (err) {
      console.log("-----", err);
    } else {
      console.log("Connected to MongoDB");
      const fetched_data = await mongoose.connection.db.collection("food_item");
      fetched_data.find({}).toArray(async function (err, data) {
        const foodCategory = await mongoose.connection.db.collection(
          "food_category"
        );
        // console.log(foodCategory)
        foodCategory.find({}).toArray(function (err, catData) {
          if (err) {
            console.log(err);
          } else {
            // console.log(data);
            global.food_item = data;
            global.food_Category = catData;
          }
        });

        // if (err) {
        //   console.log(err);
        // }
        // else {
        //   // console.log(data);
        //   global.food_item = data;
        //   // console.log(global.food_item);
        // }
      });
    }
  });
};
module.exports = mongoDB;
