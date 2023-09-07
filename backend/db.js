const mongoose = require("mongoose");
const mongoURI ="mongodb+srv://gandrathisreeja:srija290702@cluster0.vqycbbj.mongodb.net/tt";
// const mongoDB = async () => {
//   mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//     if (err) {
//       console.log("-----", err);
//     } else {
//       console.log("Connected to MongoDB");
//       const fetched_data = await mongoose.connection.db.collection("food_item");
//       fetched_data.find({}).toArray(async function (err, data) {
//         const foodCategory = await mongoose.connection.db.collection(
//           "food_category"
//         );
//         // console.log(foodCategory)
//         foodCategory.find({}).toArray(function (err, catData) {
//           if (err) {
//             console.log(err);
//           } else {
//             // console.log(data);
//             global.food_item = data;
//             global.food_Category = catData;
//           }
//         });

//         // if (err) {
//         //   console.log(err);
//         // }
//         // else {
//         //   // console.log(data);
//         //   global.food_item = data;
//         //   // console.log(global.food_item);
//         // }
//       });
//     }
//   });
// };
// module.exports = mongoDB;
const connectDB = async() => {
  try {
      const conn = await mongoose.connect(mongoURI);
      console.log(`connected to Mongodb Database ${conn.connection.host}`);

      const db = mongoose.connection;
      // Fetch data from "food_item" collection
      const foodItemCollection = db.collection('food_item');
      const data = await foodItemCollection.find({}).toArray();

      // Fetch data from "food_category" collection
      const foodCategoryCollection = db.collection('food_category');
      const catData = await foodCategoryCollection.find({}).toArray();

      global.food_item = data;
      global.food_Category = catData;
  } catch (error) {
      console.log(`Error in Mongodb ${error}`);
  }
};
module.exports=connectDB;
