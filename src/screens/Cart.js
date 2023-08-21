import React from "react";
import "./style.css";
import { useCart, useDispatchCart } from "../components/ContextReducer";
import { BsFillTrashFill } from "react-icons/bs";

export default function Cart() {
  // let navigate = useNavigate();
  const handleCheckOut = async ()=>{
    // navigate = ("/checkout");
    // navigate = ("/checkout");
    window.location.href = "/address";
  }
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div
          className="w-100 text-center fs-3"
          style={{ fontFamily: "Poppins", fontWeight: "Bolder" }}
        >
          <div
            className="w-50 m-auto rounded"
            style={{
              fontFamily: "Poppins",
              background: "rgba( 0, 0, 0, 0.5 )",
              "box-shadow": "0 8px 32px 0 rgba( 31, 38, 135, 0.37)",
              "backdrop-filter": "blur( 7.5px )",
              "-webkit-backdrop-filter": "blur( 7.5px )",
              "border-radius": "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              color: "white",
            }}
          >
            &nbsp; <span style={{ color: "Red" }}>Sorry! &#128533; </span> The
            Cart is Empty &nbsp;
          </div>
        </div>
      </div>
    );
  }
  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <>
      <div>
        <div className="container mt-5 mb-5">
          <div
            className="container rounded table-responsive  table-responsive-sm table-responsive-md"
            style={{
              fontFamily: "Poppins",
              background: "rgba( 0, 0, 0, 0.5 )",
              "box-shadow": "0 8px 32px 0 rgba( 31, 38, 135, 0.37)",
              "backdrop-filter": "blur( 7.5px )",
              "-webkit-backdrop-filter": "blur( 7.5px )",
              "border-radius": "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              color: "white",
            }}
          >
            <table className="table ">
              <thead className="fs-5" style={{ color: "white" }}>
                <tr>
                  <th scope="col">S No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Option</th>
                  <th scope="col">Amount</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody style={{ color: "white" }}>
                {data.map((food, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{food.name}</td>
                    <td>{food.qty}</td>
                    <td>{food.size}</td>
                    <td>{food.price}</td>
                    <td>
                      <button
                        type="button"
                        className="btn p-0"
                        onClick={() => {
                          dispatch({ type: "REMOVE", index: index });
                        }}
                      >
                        <BsFillTrashFill />
                      </button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-3">
              <h1
                className="fs-3 mt-5 ms-4 mb-4"
                style={{ fontFamily: "Poppins", color: "white" }}
              >
                Total Price: {totalPrice}/-
              </h1>
            </div>
            <div>
              <button
                className="btn btn-outline-danger mt-5 ms-4 mb-4"
                style={{ fontFamily: "Poppins" }}
                onClick={handleCheckOut}
              >
                {" "}
                Check Out{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
