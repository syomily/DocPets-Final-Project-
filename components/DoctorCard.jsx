import React, { useState } from "react";

//styling, icons
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./DoctorCard.scss";

const DoctorCard = (props) => {
    //hooks
    const [doctor, setDoctor] = useState("")

    //handler
    const onClickDoctor = (e) => {
        setDoctor(e.target.value);
        console.log(doctor)
    };

    //custom styling
    const buttonBoxStyle = {
        height: "50px",
        width: "300px",
        border: "0px",
    };
    let checkIcon = (
        <FontAwesomeIcon
            icon={faCheckCircle}
            style={{
                color: "#fde84d",
                marginLeft: "0.5rem",
                verticalAlign: "center",
                position: "absolute",
                top: "2rem",
                left: "-1rem",
            }}
        />
    );
    let onlineIcon = (
        <FontAwesomeIcon
            icon={faGlobe}
            style={{
                marginRight: "5px",
                paddingLeft: "5px",
            }}
        />
    );

    return (
        <Button
            value={props.nama}
            onClick={(e) => {
                onClickDoctor(e, "value");
            }}
            variant="light"
            className="doctor-card-container"
            style={buttonBoxStyle}
        >
            <Row>
                <Col className="col-sm-4">
                    <img src={props.ava} className="doctor-image"></img>
                </Col>
                <Col className="col-sm-7">
                    <Row>
                        <p className="text-doctor-up">{props.title}</p>
                    </Row>
                    <Row>
                        <p className="text-doctor-center">{props.nama}</p>
                    </Row>
                    <Row>
                        <i
                            style={
                                props.status === "online"
                                    ? { color: "#0F0" }
                                    : { color: "#F00" }
                            }
                        >
                            {onlineIcon}
                        </i>
                        <p
                            style={
                                props.status === "online"
                                    ? { color: "#0F0" }
                                    : { color: "#F00" }
                            }
                            className="text-doctor-down"
                        >
                            {props.status}
                        </p>
                    </Row>
                </Col>
                <Col className="col-sm-1">
                    <i>{checkIcon}</i>
                </Col>
            </Row>
        </Button>
    );
};

export default DoctorCard;
