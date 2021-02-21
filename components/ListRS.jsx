import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClinic } from "../store/actions/clinic";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import RumahSakit from "./assets/img/RS.jpeg";
import "./ListRS.css";

function Listrs() {
    const dispatch = useDispatch()
    const listRs = useSelector(state => state.clinic)
    useEffect(() => {
        dispatch(getClinic())
    }, [])
    // useEffect (() => {
    //     console.log("ini list rs lo",listRs)
    // }, [listRs])
    // const searchBar= document.getElementById("searchBar");
    // searchBar.addEventListener("onKeyUp", (e) => {
    //  console.log(e.target.value )
    // });


    return (
        <>
            <Row className="my-2 mx-3 justify-content-center">
                <div data-aos="fade-left">
                    <div className="searchButton">
                        <form className="form-inline my-0 my-lg-0">
                            <input className="form-control mr-sm-1 searching" type="search" placeholder="Search clinic" />

                        </form>
                    </div>
                    <ul id="clinic"></ul>
                </div>

                <Form className="mr-2" >
                    <Form.Control as="select">
                        {listRs.listClinic.map((clinic) => (
                            <option>{clinic.lokasi}</option>
                        ))}
                    </Form.Control>

                </Form>
                <Form className="mr-2">
                    <Form.Control as="select">
                        <option>Hewan Peliharaan</option>
                        <option>Kucing</option>
                        <option>Anjing</option>
                        <option>Kelinci</option>
                        <option>Hamster</option>
                    </Form.Control>
                </Form>
                <Button 
                className="Tombol"
                style={{
                backgroundColor: "#fde84d",
                color: "#445E6B",
                margin: "1rem 1rem",
                fontWeight: "700",
                width: "200px", 
                }}>
                    Cari Sekarang
                </Button>
            </Row>


            <div>
                {/* ini hard code list rs */}
                <Row >
                    {listRs.listClinic.map((clinic) => (
                        <div className="m-3">
                            <Card style={{ width: "20rem" }}>
                                <Card.Img variant="top" src={clinic.foto} 
                                className="Gambarcard"/>
                                <Card.Body className="Row">
                                    <Card.Title>{clinic.nama}</Card.Title>
                                    <Card.Text className="Card">
                                        <p>{clinic.tentang}</p>
                                    </Card.Text>
                                    <Button className="Buttoncard"
                                        style={{
                                        backgroundColor: "#fde84d",
                                        color: "#445E6B",
                                        margin: "1rem 1rem",
                                        fontWeight: "700",
                                        width: "200px", 
                                    }}>
                                        <Link to={`/detailrs/${clinic.id}`}>Book Now</Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </Row>
            </div>

        </>
    );
}
export default Listrs;
