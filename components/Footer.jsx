import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { Col, Container, Image, NavLink, Row } from 'react-bootstrap'
import logo5 from './assets/docpets2.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Footer.css"


const Footer = () => {
  const facebook = <FontAwesomeIcon icon={faFacebook} size='3x' className='pagee' />
  const instagram = <FontAwesomeIcon icon={faInstagram} size='3x' className='pagee' />
  const twitter = <FontAwesomeIcon icon={faTwitter} size='3x' className='pagee' />
  

  return (
    <div className='bg-footer text-light' expand='lg'>
      <Container>
      <Row className='pt-5'>
        <Col md='4'>
            <Image className='logo5' src={logo5} /> <span />
        </Col>

        <Col md='3'>    
            <ul className='company1'>
            <p className='kuning'>Company</p> 
              <NavLink className='text-light'><li className='ft'>About Us</li></NavLink>
              <NavLink className='text-light'><li className='ft'>Career</li></NavLink> 
              <NavLink className='text-light'><li className='ft'>Contact Us</li></NavLink>
            </ul>
        </Col>

        <Col md='3'>     
            <ul className='FT'>
              <p>Further Information</p>
              <NavLink className='text-light'><li className='ft'>About us</li></NavLink>
              <NavLink className='text-light'><li className='ft'>Career</li></NavLink> 
              <NavLink className='text-light'><li className='ft'>Contact Us</li></NavLink>
            </ul>
        </Col>    

        <Col className="tt" md='2'> 
              <p className='followus'>Follow Us</p>
              {facebook}{instagram}{twitter}
              <p className='followus'>Copyright © 2021 DOCPETS.  All Rights Reserved</p>
        </Col>     
        </Row> 
      </Container>
    </div>
  )
}

export default Footer