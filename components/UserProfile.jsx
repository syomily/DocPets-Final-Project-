import React, { useState, useEffect } from "react";
import { Card, CardDeck, Button, Form } from "react-bootstrap";
import ImageUploader from "react-images-upload";
import "./UserProfile.css";
import axios from "axios";
import User from "./assets/img/user.svg";
import Paw from "./assets/img/paw.svg";
import History from "./assets/img/history.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Userprofile() {
    // const [users, setUsers] = useState('');
    const [users, setUsers] = useState({});
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(" ");
    const name = localStorage.getItem("nama");
    const id = localStorage.getItem("id");
    const foto = localStorage.getItem("foto");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("telepon");

    
    const token = localStorage.getItem("token");

    useEffect(() => {
        axios
            .get(`https://doctorpets.tk:3002/user/getProfile`)
            // .get(`https://doctorpets.tk:3002/user/getProfile`, {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // })
            .then((res) => {
                console.log(res.data, "data porpil");
                setUsers(res.data.result);
                setLoad(true);
                // {
                //     console.log(res.data.result.nama, "usernih");
                // }
            })
            .catch((err) => {
                setError(err.message);
                setLoad(true);
            });
    }, []);

    return (
        <>
            <CardDeck className="CardInfo">
                <Card>
                    <Card.Img variant="top" src={foto} className="Picture" />
                    {/* <Card.Img variant="top" src={User} className="Picture" /> */}
                    <Card.Body>
                        {console.log(users, "tess")}

                        <Card.Title> {name} </Card.Title>
                        <p>User</p>
                        <Card.Text className="Count">
                            <div className="Hewan">
                                <img src={Paw} className="Paw" />{" "}
                                <p className="Jumlah">4 Pets</p>
                            </div>
                            <div className="History">
                                <img src={History} className="Date" />{" "}
                                <p className="Kunjungan">3 Times</p>
                            </div>
                        </Card.Text>
                        <Button variant="danger" className="Hapus">DELLETE ACCOUNT</Button>
                    </Card.Body>
                </Card>
            </CardDeck>

            <Card body className="Logout">
                {" "}
                <Link to="/">Log Out </Link>{" "}
            </Card>

            <Card className="Uploadfoto">
                <Card.Body>
                    {" "}
                    <b>Upload Foto</b>
                </Card.Body>
            </Card>

            <Card className="Upload">
                <ImageUploader
                    withIcon={true}
                    buttonText="Choose images"
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                />
            </Card>

            <Card className="Basicinformation">
                <Card.Body>
                    {" "}
                    <b>Basic Information</b>
                </Card.Body>
                <Form.Group controlId="FormEmail" className="Username">
                    <p>Username</p>
                    <Form.Control
                        type="text"
                        placeholder={name}
                        className="Username"
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="Gender">
                    <p>Gender</p>
                    <Form.Check
                        type="radio"
                        label="Male"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                    />
                    <Form.Check
                        type="radio"
                        label="Female"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                    />
                </Form.Group>
            </Card>

            <Card className="Contact">
                <Card.Body>
                    {" "}
                    <b>Contact Information</b>
                </Card.Body>
                <Form.Group controlId="FormEmail" className="Username">
                    <p>Phone Number</p>
                    <Form.Control
                        type="number"
                        placeholder={phone}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="FormEmail" className="Username">
                    <p>Email</p>
                    <Form.Control
                        type="email"
                        placeholder={email}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="FormEmail" className="Username">
                    <p>Password</p>
                    <Form.Control
                        type="password"
                        placeholder="password"
                    ></Form.Control>
                </Form.Group>
            </Card>
            <Button variant="warning" className="Simpan">
                Save Profile
            </Button>
        </>
    );
}
export default Userprofile;
