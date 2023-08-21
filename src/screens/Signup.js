import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export default function Signup() {
  const [credential, setcredential] = useState({
    name: "",
    email: "",
    password: "",
    geoLocation: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        name: credential.name,
        email: credential.email,
        password: credential.password,
        location: credential.geoLocation,
      })
    );

    try{
    const response = await fetch("http://localhost:4000/api/creatuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credential.name,
        email: credential.email,
        password: credential.password,
        location: credential.geoLocation,
      }),
      //   Parameter should same to Client
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      navigate("/login");
      alert("Now Login");
    }
    else{
      alert("Enter Valid Credentials");
    }
  }
  catch(error){
    console.error("Error:", error);
    alert("An Error Occured");
  }};
  const onChange = async (event) => {
    setcredential({ ...credential, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="signup">
        <div>
          <NavBar />
        </div>
        <div className="container">
          <form
            className="w-50 m-auto mt-5 rounded"
            onSubmit={handleSubmit}
            style={{
              background: "rgba( 0, 0, 0, 0.5 )",
              "box-shadow": "0 8px 32px 0 rgba( 31, 38, 135, 0.37)",
              "backdrop-filter": "blur( 7.5px )",
              "-webkit-backdrop-filter": "blur( 7.5px )",
              "border-radius": "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}
          >
            <div className="m-3">
              <label htmlFor="name" style={{ color: "white" }}>
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={credential.name}
                onChange={onChange}
              />
            </div>
            <div className="m-3">
              <label htmlFor="exampleInputEmail1" style={{ color: "white" }}>
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
                name="email"
                value={credential.email}
                onChange={onChange}
              />
            </div>
            <div className="m-3">
              <label htmlFor="exampleInputPassword1" style={{ color: "white" }}>
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                value={credential.password}
                onChange={onChange}
              />
            </div>
            <div className="m-3">
              <label htmlFor="Address" style={{ color: "white" }}>
                Address
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                name="geoLocation"
                value={credential.geoLocation}
                onChange={onChange}
              />
            </div>
            <button type="submit" className="btn btn-success m-3">
              Submit
            </button>
            <Link to="/login" className="m-3 mx-1 btn btn-danger">
              Already a user
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
