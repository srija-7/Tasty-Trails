import React from "react";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";
import "./font.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top navbar navbar-expand-lg  bg-dark fontchange colors">
          <div className="col-md-4 d-flex align-items-center">
            <Link
              to="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
            </Link>
            <span className="mb-3 mb-md-0 text-muted fontchange fs-7 colors">
              © 2023 Bring Me Meal, Inc
            </span>
          </div>

          <ul className="nav col-md-4 mr-4 justify-content-end list-unstyled d-flex fontchange colors">
            <li className="ms-3 colors">
              <Link className="text-muted" to="/">
                <AiFillInstagram/>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="text-muted" to="/">
                <AiFillTwitterCircle />
              </Link>
            </li>
            <li className="ms-3">
              <Link className="text-muted" to="/">
                <AiFillFacebook />
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
