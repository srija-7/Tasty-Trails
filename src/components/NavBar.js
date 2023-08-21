import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./font.css";
import { MdDeliveryDining } from "react-icons/md";
import Badge from "react-bootstrap/Badge";
// MdFastfood
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { RiAccountCircleFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { FaBowlFood } from "react-icons/fa";
import { useCart } from "./ContextReducer";
import Modal from "../Modal";
import Cart from "../screens/Cart";

export default function NavBar() {
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  const items = useCart();
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link class="navbar-brand" to="/">
              <img
                src="BMM_2.png"
                alt=""
                width="40"
                height="30"
                className="d-inline-block align-text-top fontchange"
              />
              <span
                className="fontchange fs-2 colors"
                style={{ fontStyle: "italic" }}
              >
                {" "}
                {/* <MdFastfood /> */}
                {/* &nbsp; */}
                <span> </span> Tasty Trails
                {/* &nbsp; */}
                <MdDeliveryDining />
              </span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                {/* d-flex */}
                <li className="nav-item">
                  <Link
                    className="nav-link active fontchange fs-5"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                {localStorage.getItem("authToken") ? (
                  <li className="nav-item">
                    <Link
                      className="nav-link active fontchange fs-5"
                      aria-current="page"
                      to="/"
                    >
                      Orders
                    </Link>
                  </li>
                ) : (
                  ""
                )}
              </ul>
              {!localStorage.getItem("authToken") ? (
                <div className="d-flex">
                  <Link className="nav-link fontchange" to="/login">
                    <button className="btn btn-outline-success mx-1">
                      <BiLogInCircle /> Login
                    </button>
                  </Link>
                  &nbsp; &nbsp;
                  <Link className="nav-link fontchange" to="/creatuser">
                    <button className="btn btn-outline-info">
                      <RiAccountCircleFill /> SignUp
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="d-flex">
                  <div className="btn btn-outline-light mx-1" onClick={()=>{setCartView(true)}}>
                    <Badge pill bg="danger"> {items.length} </Badge>
                    <AiOutlineShoppingCart />
                  </div>
                  {cartView ? <Modal onClose={() => setCartView(false)}> <Cart></Cart> </Modal> : null}
                  <div>
                    <Link className="nav-link fontchange" to="/login">
                      <button
                        className="btn btn-outline-danger mx-1"
                        onClick={handleLogout}
                      >
                        <BiLogOutCircle /> Logout
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
