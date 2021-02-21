import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarLogin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/img/logo.png";
import logofont from "./assets/img/logofont.png";
import React, { useState, useEffect } from "react";
import { Button, Modal, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import ClinicCard from "./ClinicCard";
import axios from "axios";

const NavBarLogin = (props) => {
  const [name, setName] = useState(localStorage.getItem("nama"));
  const [query, setQuery] = useState("");
  const [clinics, setClinic] = useState([]);
  const search = <FontAwesomeIcon icon={faSearch} />;

  const [modalSearchClinic, setModalSearchClinic] = useState(false);
  const toggleModalSearchClinic = () => {
    setModalSearchClinic(!modalSearchClinic);
  };

  const isLogin = () => {
    if (localStorage.getItem("token") === null) {
      return false;
    } else {
      return true;
    }
  }

  const searchClinic = async (e) => {
    e.preventDefault();
    axios
      .post(
        `https://doctorpets.tk:3002/klinik/search?nama=${query}&lokasi=jawa`
      )
      // .then(response => console.log(response.data.result))
      .then((response) => {
        // setClinic(response.data.result)
        console.log(response.data.result);
      })
      .catch((error) => {
        setClinic({ errorMessage: error.message });
        console.error("There was an error!", error);
      });
  };

  console.info(localStorage.getItem("role", "<==this is role"));
  console.info(localStorage.getItem("nama", "<==this is nama"));

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
      <div className="navbar-container w-100">
        <div className="navbar">
          <Link to={`/`}>
            <img src={logo} alt="docpets logo" className="navbar-logo"></img>
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
            <Link to={`/`} className="navbar-text">
              <h3 className="navbar-h3">Chat</h3>
            </Link>
            <form className="navbar-search" onSubmit={searchClinic}>
              <i onClick={toggleModalSearchClinic} type="submit">
                {search}
              </i>{" "}
              <input
                type="text"
                name="query"
                placeholder="  search clinic"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Modal
                isOpen={modalSearchClinic}
                toggle={toggleModalSearchClinic}
              >
                <div className="card-list">
                  {clinics?.data?.map((clinic) => (
                    <ClinicCard />
                  ))}
                </div>
              </Modal>
            </form>
            <NavDropdown
              title={pic}
              className="navbar-text nav-dropdown"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>hi, {name}</NavDropdown.Item>
              <NavDropdown.Item onClick={signOut}>
                <Link to="/"> Sign out </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBarLogin;
