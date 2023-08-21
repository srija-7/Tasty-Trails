import React, { useState, useRef, useEffect } from "react";
import "./card.css";

import { useDispatchCart, useCart } from "./ContextReducer";
export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();

  let option = props.options;
  let priceOption = Object.keys(option);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  // let fooditem = props.food_item;

  const handleAddtoCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.fooditem._id) {
        food = item;

        break;
      }
    }
    if (food !== []) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.fooditem._id,
          price: finalPrice,
          qty: qty,
        });
        return 
      }
      else if(food.size!==size){
        await dispatch({
          type: "ADD",
          id: props.fooditem._id,
          name: props.fooditem.name,
          price: finalPrice,
          qty: qty,
          size: size,
        });
        return
      }
      return
    }
    await dispatch({
      type: "ADD",
      id: props.fooditem._id,
      name: props.fooditem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
    // console.log(data);
  };
  let finalPrice = qty * parseInt(option[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  return (
    <>
      <div>
        <div
          className="card mt-3"
          style={{ width: "16rem", maxHeight: "1000px" }}
        >
          <img
            // src= {"https://source.unsplash.com/random/300x200/?FriedRice"}
            src={props.fooditem.img}
            className="d-block w-100"
            style={{ height: "150px", objectFit: "fill" }}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title fontchange">{props.fooditem.name}</h5>
            <p className="card-text des">
              {props.fooditem.description}
              {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, ad? */}
            </p>
            <div className="container w-100 p-0" style={{ height: "38px" }}>
              <select
                className="m-2 w-25 h-100 bg-success rounded"
                style={{ color: "white", fontFamily: "Poppins" }}
                onChange={(e) => setQty(e.target.value)}
              >
                {Array.from(Array(10), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              <select
                className="m-2 w-50 h-100 bg-success rounded"
                style={{ color: "white", fontFamily: "Poppins" }}
                ref={priceRef}
                onChange={(e) => setSize(e.target.value)}
              >
                {priceOption.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
            </div>
            <hr></hr>
            <div className="fs-5 ml-3 fontchange">
              Total Price:{" "}
              <span className="card_style color">₹{finalPrice}/-</span>
            </div>
            {/* <button className="btn btn-outline-danger justify-center ms-2 font">
              Remove
            </button> */}
            <hr />

            <button
              className={`btn btn-outline-warning justify-center ms-2`}
              onClick={handleAddtoCart}
              style={{ fontFamily: "Poppins" }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
