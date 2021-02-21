// import { Button } from 'bootstrap';
import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { CardBody, CardText, Container, Row, Col, Button } from 'reactstrap'
import '../components/AppointmentUser.css';
import PP from '../components/assets/img/sunrise.jpg'


const HistoryUser = (props) => { 
return (
            <Container className='kt-gd'>
                <div tabIndex='1' className='cr w-100c mb-2'>
                    <CardBody>
                        <CardText>
                            <Row className='ktk-gd justify-content-around mx-auto text-center' >
                                {/* <Col className='kt01 d-flex' md='3'> */}
                                <Col className='ktph' md='2'>
                                    <img src={PP} alt='phtrs' className='imgrs' width={45} height={45}/>
                                </Col>
                                <Col className='kt-2 d-flex align-items-center justify-content-around mx-auto text-center' md='4'>
                                    <p className='nama-cl'>KLINIK RS RAGUNAN</p>
                                {/* </Col> */}
                                </Col>
                                {/* <Col className='kt02' md='6'> */}
                                <Col className='kt-3 d-flex justify-content-around mx-auto text-center' md='2'>
                                    <p ClassName='sts'>Finished</p>
                                </Col>
                                <Col className='btn-04' md='3'>
                                    <Button type='button' className='btn-md mx-auto d-flex btn-outline-warning'>Book Again</Button>   
                                </Col>
                                {/* </Col> */}
                            </Row>
                        </CardText>
                    </CardBody>
                </div>
            </Container>
    )

}

export default HistoryUser