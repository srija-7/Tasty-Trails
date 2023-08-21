/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import "./style.css";
// import { BiLogInCircle } from "react-icons/bi";
// import { RiAccountCircleFill } from "react-icons/ri";
// import Carousal from "../components/carousal";

export default function home() {
  const [food_Category, setfood_Category] = useState([]);
  const [food_item, setfood_item] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    let response = await fetch("http://localhost:4000/api/foodData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    response = await response.json();
    // console.log(response[1][1].CategoryName)
    setfood_item(response[0]);
    setfood_Category(response[1]);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        {/* <Carousal /> */}
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption " style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                {/* <button className="btn btn-success" type="submit">
                  Search
                </button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/700x400/?burger"
                className="d-block w-100 h-100"
                style={{ filter: "brightness(30%" }}
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/700x400/?pizza"
                className="d-block w-100 h-100"
                style={{ filter: "brightness(30%" }}
                alt="Pizza"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/700x400/?barbeque"
                className="d-block w-100 h-100"
                style={{ filter: "brightness(30%" }}
                alt="Barbeque"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {localStorage.getItem("authToken") ? (
        <div className="home">
          <div className="container m-3">
            {food_Category !== [] ? (
              food_Category.map((data) => {
                return (
                  <div className="row mb-3">
                    <div key={data._id} className="fs-3 m-3 fontchange">
                      {data.CategoryName}
                    </div>
                    <hr></hr>
                    {food_item !== [] ? (
                      food_item
                        .filter(
                          (item) =>
                            item.CategoryName === data.CategoryName &&
                            item.name
                              .toLowerCase()
                              .includes(search.toLowerCase())
                        )
                        .map((filterItem) => {
                          return (
                            <div
                              key={filterItem._id}
                              className="col-12 col-md-6 col-lg-3"
                            >
                              <Card
                                fooditem={filterItem}
                                options={filterItem.options[0]}
                                // foodName={filterItem.name}
                                // item={filterItem}

                                // imgSrc={filterItem.img}
                                // description={filterItem.description}
                              >
                                {" "}
                              </Card>
                            </div>
                          );
                        })
                    ) : (
                      <div> No Such Data Found</div>
                    )}
                  </div>
                );
              })
            ) : (
              <div>"""""""""</div>
            )}
            {/* <Card /> */}
          </div>
        </div>
      ) : (
        <div className="container d-flex mt-4">
          {/* <Link className="nav-link fontchange" to="/login">
            <button className="btn btn-outline-success mx-1">
              <BiLogInCircle /> Login
            </button>
          </Link>
          &nbsp; &nbsp;
          <Link className="nav-link fontchange" to="/creatuser">
            <button className="btn btn-outline-info">
              <RiAccountCircleFill /> SignUp
            </button>
          </Link> */}
          <p className="fontchange">
            {" "}
            <span style={{ color: "red" }}>Alert! </span> Login or SignUp to see
            the Menu
          </p>{" "}
          &#10132;
          <p>
            &nbsp;
            <Link className="fontchange" to="/login">
              Click Here to Login
            </Link>
          </p>
        </div>
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
}
