import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./style.css";

export default function Login() {
  const [credential, setcredential] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e, res) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        email: credential.email,
        password: credential.password,
      })
    );

    try {
      const response = await fetch("http://localhost:4000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credential.email,
          password: credential.password,
        }),
        //   Parameter should same to Client
      });
      if (!response.ok) {
        throw new Error("Network Response Not OK");
      }
      const json = await response.json();
      console.log(json);

      if (json.success) {
        localStorage.setItem("userEmail",credential.email)
        localStorage.setItem("authToken", json.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      } else {
        alert("Enter Valid Credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An Error Occured");
    }
  };
  const onChange = async (event) => {
    setcredential({ ...credential, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="login">
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
            <button type="submit" className="btn btn-success m-3">
              Login
            </button>
            <Link to="/creatuser" className="m-3 mx-1 btn btn-danger">
              New User
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
