import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    Button,
    Modal,
    NavDropdown,
    Row,
    Col,
    Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarLogin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserCircle,
    faSignOutAlt,
    faTools,
} from "@fortawesome/free-solid-svg-icons";

//redux
import { getProfileDetail } from "../store/actions/profile";
import { logoutAction } from "../store/actions/auth";

import { connect } from "react-redux";

import logo from "./assets/img/logo.png";
import logofont from "./assets/img/logofont.png";
import axios from "axios";

const NavBarLogin = (props) => {
    const nama = localStorage.getItem("nama");
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    //custom style n icons
    const textStyle = {
        fontSize: "15px",
        fontWeight: "700",
        textAlign: "center",
        color: "#445e6b",
        margin: "0",
    };
    const signoutIcon = (
        <FontAwesomeIcon icon={faSignOutAlt} style={{ color: "#fde84d" }} />
    );
    const settingIcon = (
        <FontAwesomeIcon icon={faTools} style={{ color: "#fde84d" }} />
    );
    const pic = (
        <FontAwesomeIcon
            icon={faUserCircle}
            size="2x"
            style={{ color: "#fde84d" }}
        />
    );
    const signOut = () => {
        localStorage.clear("token");
        window.location.reload();
    };

    return (
        <header>
            <div className="navbar-container w-100 shadowEffect">
                <div
                    className="navbar"
                    data-aos="fade-down"
                    data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out-cubic"
                >
                    <Link to={`/`}>
                        <img
                            src={logo}
                            alt="docpets logo"
                            className="navbar-logo"
                        ></img>
                        <img
                            src={logofont}
                            alt="docpets logo font"
                            className="navbar-logo-font"
                        ></img>
                    </Link>
                    <div className="navbar-login-right">
                        <Link to={`/`} className="navbar-text">
                            <h3 className="navbar-h3">Home</h3>
                        </Link>
                        <Link to={`/chat`} className="navbar-text">
                            <h3 className="navbar-h3">Chat</h3>
                        </Link>
                        <Link to={`/listrs`} className="navbar-text">
                            <h3 className="navbar-h3">Find Clinics</h3>
                        </Link>
                        {token ? (
                            <NavDropdown
                                title={pic}
                                className="navbar-text nav-dropdown"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item>
                                    <Row style={textStyle}>Hi, {nama}</Row>
                                    <Row style={textStyle}>{email}</Row>
                                </NavDropdown.Item>
                                <hr />
                                <NavDropdown.Item
                                    style={textStyle}
                                    className="alignMiddle"
                                >
                                    <div>
                                        <Link
                                            to="/user"
                                            style={{ color: "#445E6B" }}
                                        >
                                            <i style={{ color: "#fde84d" }}>
                                                {settingIcon}
                                            </i>{" "}
                                            Profile
                                        </Link>
                                    </div>
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    style={textStyle}
                                    className="alignMiddle"
                                >
                                    <div onClick={signOut}>
                                        <Link
                                            to="/"
                                            style={{ color: "#445E6B" }}
                                        >
                                            <i>{signoutIcon}</i> Sign out
                                        </Link>
                                    </div>
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Link to="/signup">
                                <Button
                                    className="btn border-0 pr-3 pl-3 ml-2"
                                    style={{
                                        backgroundColor: "#fde84d",
                                        color: "#445E6B",
                                        margin: "1rem 1rem",
                                        fontWeight: "700",
                                    }}
                                >
                                    Sign Up
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBarLogin;

// const mapStateToProps = (state) => ({
//     animal: state.getAnimal.data,
//     nama: state.profile.data.nama,
//     clinics: state.clinicSearch.listClinicSearch,
// });

// const mapDispatchToProps = (dispatch) => ({
//     search: (query) => dispatch({ type: "GET_CLINIC", payload: query }),
//     getProfile: () => dispatch({ type: "GET_PROFILE" }),
//     logout: () => dispatch(logoutAction()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(NavBarLogin);
