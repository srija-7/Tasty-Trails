import React from "react";
import NavBar from "../components/NavBar";
import { Link, useNavigate } from "react-router-dom";

export default function info() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let navigate = useNavigate();
  const placedorder = () => {
    navigate("/");
    alert("Order Placed");
  };
  const cancelOrder = () => {
    alert("Order Cancelled");
    // return(
    //   <>
    //   <Alert>
    //     <Alert.Heading>Order</Alert.Heading>
    //   </Alert>
    //   </>
    // );
  };
  return (
    <>
      <div className="signup">
        <div>
          <NavBar />
        </div>
        <div className="conatiner">
          <form
            className="w-50 m-auto mt-5 rounded"
            style={{
              background: "rgba( 0, 0, 0, 0.5 )",
              "box-shadow": "0 8px 32px 0 rgba( 31, 38, 135, 0.37)",
              "backdrop-filter": "blur( 7.5px )",
              "-webkit-backdrop-filter": "blur( 7.5px )",
              "border-radius": "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}
          >
            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
            {/* <!-- Text input --> */}
            {/* <!-- Text input --> */}
            <div className="form-outline mb-4 w-75 m-auto mt-4">
              <textarea
                class="form-control"
                id="form6Example7"
                rows="4"
              ></textarea>
              <label
                className="form-label"
                for="form6Example4"
                style={{ color: "white" }}
              >
                Address
              </label>
            </div>
            {/* <!-- Email input --> */}
            {/* <!-- Number input --> */}
            <div className="form-outline mb-4 w-75 m-auto mt-4">
              <input
                type="number"
                id="form6Example6"
                className="form-control"
              />
              <label
                className="form-label"
                for="form6Example6"
                style={{ color: "white" }}
              >
                Phone
              </label>
            </div>
            {/* <!-- Submit button --> */}
            <button
              type="submit"
              className="btn btn-success m-3"
              onClick={placedorder}
            >
              Place Order
            </button>
            <Link
              to="/"
              className="m-3 mx-1 btn btn-danger"
              onClick={cancelOrder}
            >
              Cancel Order
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
