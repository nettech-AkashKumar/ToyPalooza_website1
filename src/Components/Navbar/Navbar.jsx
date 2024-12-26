import React, { useState } from "react";
import "../Navbar/Navbar.css";
import { BiChevronDown } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Website from "../../Assets/Image/website-logo.png";
import { GiDuck } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs"; //icon
import { BiBookAlt } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { GiComb } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import "bootstrap/dist/css/bootstrap.min.css"; //mention this

const Navbars = () => {
  return (
    <>
      <div>
        <div className="mobile bg-body-tertiary">
          {/* 1st div */}
          <div className="" style={{ display: "flex", gap: "10px" }}>
            <span>
              <FiPhoneCall style={{ fontSize: "22px" }} />
            </span>
            <span>+91 8888 4444 20</span>
          </div>
          {/* 2nd div */}
          <div className="" style={{ display: "flex", gap: "10px" }}>
            <span>
              <FaCarSide style={{ color: "#f9c542", fontSize: "30px" }} />
            </span>
            <span className="">Free shipping on orders above 799</span>
            <span className="px-2">
              English
              <BiChevronDown />
            </span>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg  bg-body-tertiary">
          <div className="container-fluid">
            <div className="logo d-flex align-items-center ">
              <img src={Website} alt="" />
              <a className="navbar-brand p-0" href="#">
                PlayPaloozo
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <ul className="dropdown-menu">
                    {/* <li className="d-flex flex-column">
                      <div
                        className="d-flex align-items-center justify-content-around"
                        style={{ gap: "10px" }}
                      >
                        <GiDuck style={{ color: "#8565d1", fontSize: "30px" }} />
                        <a href="link">Toys</a>
                        <p className="new" style={{
                            color: "#4ba37d",
                            backgroundColor: "#ecfdf3",
                            fontSize: "10px",
                          }}>New</p>
                      </div>
                      <span className="seemore-btn">
                        See more
                        <BsArrowRight />
                      </span>
                    </li> */}
                    <span className="d-flex align-items-center justify-content-around px-3 w-75">
                      <GiDuck style={{ color: "#8565d1", fontSize: "25px" }} />
                      Toys{" "}
                      <span
                        style={{ color: "#4ba37d", backgroundColor: "#ecfdf3" }}
                      >
                        New
                      </span>
                    </span>
                    <span>
                      <p
                        style={{
                          textAlign: "center",
                          color: "#8565d1",
                          fontWeight: "600",
                          borderRadius: "10px",
                        }}
                      >
                        See more <BsArrowRight />
                      </p>
                    </span>

                    {/* <li className="d-flex flex-column">
                      <div
                        className="d-flex align-items-center justify-content-around"
                        style={{ gap: "10px" }}
                      >
                        <BiBookAlt
                          style={{ color: "#8565d1", fontSize: "30px" }}
                        />
                        <a href="Toys">Stationary</a>
                        <p
                          className="new"
                          style={{
                            color: "#4ba37d",
                            backgroundColor: "#ecfdf3",
                            fontSize: "10px",
                          }}
                        >
                          New
                        </p>
                      </div>
                      <span className="seemore-btn">
                        See more
                        <BsArrowRight />
                      </span>
                    </li> */}
                    <span className="d-flex align-items-center justify-content-around px-3 w-75">
                      <BiBookAlt
                        style={{ color: "#8565d1", fontSize: "25px" }}
                      />
                      Stationary{" "}
                    </span>
                    <p
                      style={{
                        textAlign: "center",
                        color: "#8565d1",
                        fontWeight: "600",
                        borderRadius: "10px",
                      }}
                    >
                      See more <BsArrowRight />
                    </p>

                    {/* <li className="d-flex flex-column">
                      <div
                        className="d-flex align-items-center justify-content-around"
                        style={{ gap: "10px" }}
                      >
                        <GiComb
                          style={{ color: "#8565d1", fontSize: "30px" }}
                        />
                        <a href="Toys">Hair Accessories</a>
                        <p
                          className="new"
                          style={{
                            color: "#4ba37d",
                            backgroundColor: "#ecfdf3",
                            fontSize: "10px",
                          }}
                        >
                          New
                        </p>
                      </div>
                      <span className="seemore-btn">
                        See more
                        <BsArrowRight />
                      </span>
                    </li> */}
                    <span className="d-flex align-items-center justify-content-around px-3 w-80">
                      <GiComb
                        className="mx-2"
                        style={{ color: "#8565d1", fontSize: "25px" }}
                      />{" "}
                      Hair Access{" "}
                      <span
                        className="mx-2"
                        style={{ color: "#4ba37d", backgroundColor: "#ecfdf3" }}
                      >
                        New
                      </span>{" "}
                    </span>
                    <span>
                      <p
                        style={{
                          textAlign: "center",
                          color: "#8565d1",
                          fontWeight: "600",
                          borderRadius: "10px",
                        }}
                      >
                        See more <BsArrowRight />
                      </p>
                    </span>
                    <span className="d-flex align-items-center justify-content-around px-3  w-75">
                      <BiShoppingBag
                        style={{ color: "#8565d1", fontSize: "25px" }}
                      />{" "}
                      Bag Access
                    </span>
                    <p
                      style={{
                        textAlign: "center",
                        color: "#8565d1",
                        fontWeight: "600",
                        borderRadius: "10px",
                      }}
                    >
                      See more <BsArrowRight />
                    </p>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Boys
                  </a>
                  <ul className="dropdown-menu">
                    <span className="d-flex align-items-center justify-content-around px-3 w-75">
                      <GiDuck style={{ color: "#8565d1", fontSize: "25px" }} />
                      Toys{" "}
                      <span
                        style={{ color: "#4ba37d", backgroundColor: "#ecfdf3" }}
                      >
                        New
                      </span>
                    </span>
                    <span>
                      <p
                        style={{
                          textAlign: "center",
                          color: "#8565d1",
                          fontWeight: "600",
                          borderRadius: "10px",
                        }}
                      >
                        See more <BsArrowRight />
                      </p>
                    </span>

                    <span className="d-flex align-items-center justify-content-around px-3 w-75">
                      <BiBookAlt
                        style={{ color: "#8565d1", fontSize: "25px" }}
                      />
                      Stationary{" "}
                    </span>
                    <p
                      style={{
                        textAlign: "center",
                        color: "#8565d1",
                        fontWeight: "600",
                        borderRadius: "10px",
                      }}
                    >
                      See more <BsArrowRight />
                    </p>

                    <span className="d-flex align-items-center justify-content-around px-3 w-80">
                      <GiComb
                        className="mx-2"
                        style={{ color: "#8565d1", fontSize: "25px" }}
                      />{" "}
                      Hair Access{" "}
                      <span
                        className="mx-2"
                        style={{ color: "#4ba37d", backgroundColor: "#ecfdf3" }}
                      >
                        New
                      </span>{" "}
                    </span>
                    <span>
                      <p
                        style={{
                          textAlign: "center",
                          color: "#8565d1",
                          fontWeight: "600",
                          borderRadius: "10px",
                        }}
                      >
                        See more <BsArrowRight />
                      </p>
                    </span>
                    <span className="d-flex align-items-center justify-content-around px-3  w-75">
                      <BiShoppingBag
                        style={{ color: "#8565d1", fontSize: "25px" }}
                      />{" "}
                      Bag Access
                    </span>
                    <p
                      style={{
                        textAlign: "center",
                        color: "#8565d1",
                        fontWeight: "600",
                        borderRadius: "10px",
                      }}
                    >
                      See more <BsArrowRight />
                    </p>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Girl
                  </a>
                  <ul className="dropdown-menu">
                   
                    <span className="d-flex align-items-center justify-content-around px-3 w-75">
                      <GiDuck style={{ color: "#8565d1", fontSize: "25px" }} />
                      Toys{" "}
                      <span
                        style={{ color: "#4ba37d", backgroundColor: "#ecfdf3" }}
                      >
                        New
                      </span>
                    </span>
                    <span>
                      <p
                        style={{
                          textAlign: "center",
                          color: "#8565d1",
                          fontWeight: "600",
                          borderRadius: "10px",
                        }}
                      >
                        See more <BsArrowRight />
                      </p>
                    </span>

                    <span className="d-flex align-items-center justify-content-around px-3 w-75">
                      <BiBookAlt
                        style={{ color: "#8565d1", fontSize: "25px" }}
                      />
                      Stationary{" "}
                    </span>
                    <p
                      style={{
                        textAlign: "center",
                        color: "#8565d1",
                        fontWeight: "600",
                        borderRadius: "10px",
                      }}
                    >
                      See more <BsArrowRight />
                    </p>

                    <span className="d-flex align-items-center justify-content-around px-3 w-80">
                      <GiComb
                        className="mx-2"
                        style={{ color: "#8565d1", fontSize: "25px" }}
                      />{" "}
                      Hair Access{" "}
                      <span
                        className="mx-2"
                        style={{ color: "#4ba37d", backgroundColor: "#ecfdf3" }}
                      >
                        New
                      </span>{" "}
                    </span>
                    <span>
                      <p
                        style={{
                          textAlign: "center",
                          color: "#8565d1",
                          fontWeight: "600",
                          borderRadius: "10px",
                        }}
                      >
                        See more <BsArrowRight />
                      </p>
                    </span>
                    <span className="d-flex align-items-center justify-content-around px-3  w-75">
                      <BiShoppingBag
                        style={{ color: "#8565d1", fontSize: "25px" }}
                      />{" "}
                      Bag Access
                    </span>
                    <p
                      style={{
                        textAlign: "center",
                        color: "#8565d1",
                        fontWeight: "600",
                        borderRadius: "10px",
                      }}
                    >
                      See more <BsArrowRight />
                    </p>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Stationary
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <div className="d-flex justify-content-around align-items-center">
                  <div className="d-flex gap-4 seemore">
                    <button
                      className="login-btn"
                      style={{
                        backgroundColor: "transparent",
                        color: "#676969",
                      }}
                    >
                      Login
                    </button>
                    <button
                      className="login-btn"
                      style={{ backgroundColor: "#8565d1", color: "white" }}
                    >
                      Shop
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbars;