// const express = require("express");
// const router = express.Router();
// const Order = require("../models/Orders");
// router.post("/orderData", async (req, res) => {
//   let data = req.body.order_data || [];
//   // if (!Array.isArray(data)) {
//   //   data = [data]; // Convert to an array if it's not already
//   // }
//   data.unshift({ Order_date: req.body.order_data });
  

//   let eId = await Order.findOne({ email: req.body.email });
//   console.log(eId);
//   if (eId === null) {
//     try {
//       // Create New User Data Storage
//       await Order.create({
//         email: req.body.email,
//         order_data: [data],
//       }).then(() => {
//         res.json({ success: true });
//       });
//     } catch (error) {
//       console.log(error.message);
//       res.send("Server Error", error.message);
//     }
//   } else {
//     try {
//       // TO Check Old User and Update the Order for the current user
//       await Order.findOneAndUpdate(
//         { email: req.body.email },
//         { $push: { order_data: data } }.then(() => {
//           res.json({ success: true });
//         })
//       );
//     } catch (error) {
//       res.send("Server Error", error.message);
//     }
//   }
// });


// module.exports = router;