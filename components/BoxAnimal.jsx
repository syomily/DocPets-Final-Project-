import React from "react";

//styling n icons
import { Row, Button } from "react-bootstrap";

//custom styling
const textStyle = {
    color: "#445e6b",
    fontSize: "18px",
    fontWeight: "bold",
};
const buttonBoxStyle = {
    height: "70px",
    width: "200px",
    border: "0px",
};

function BoxAnimal(props) {
    return (
        <Button variant="light" className="my-2 mx-1" style={buttonBoxStyle}>
            <Row className="justify-content-center align-content-center mx-3 my-1">
                <img src={props.image}></img>
            </Row>
            <Row className="justify-content-center align-content-center mx-3 my-1">
                <p style={textStyle}>
                    {props.nama} / {props.gender}
                </p>
            </Row>
            <br />
        </Button>
    );
}

export default BoxAnimal;
