import React from 'react';
import { Nav, Button, Form, FormControl } from 'react-bootstrap'
import "./headerloginpage.css";
import { Link } from "react-router-dom"

function headerlogin() {
    return (
        <Nav className="Navigasi">
            <Nav.Item className="Home">
                <Link to="/">Home</Link>
            </Nav.Item>
            <Form.Group className="Kotak">
                <Form.Control type="text" placeholder="Search Your Clinic" /> 
            </Form.Group>
           

            <Nav>
                <Button className="Tombol" href="/login" variant="warning">SIGN IN</Button>
            </Nav>

        </Nav>
    )
}
export default headerlogin