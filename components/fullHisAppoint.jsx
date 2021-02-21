import React from 'react'
import { Container, Row, Button, Card, Col, tabs } from 'react-bootstrap'
import PP from '../components/assets/img/sunrise.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/ClinicProfile.css'
import '../components/fullHisAppoint.css'
import AppointmentUser from '../components/AppointmentUser'
import HistoryUser from '../components/HistoryUser'
import Bag from '../components/assets/img/koper.jpeg'
import { Route, NavLink, HashRouter } from 'react-router-dom'


const DoctorProfile = (props) => {
    return (
    
    <Container>
        <Row>
            <div className='col-12 col-lg-4'>
                <div className='containerprf mx-auto d-flex mt-4'>

                    <br /><br />
                        <div className='boxats mx-auto'>
                            <br/>
                            <center>
                                <img src={PP} alt='photoprf' className='rounded-circle' />
                            <br />
                            <div className='info'>
                                <p>drh Syohan Demega P</p>
                                <div className='btn-disd mx-auto d-flex'>
                                <Button type='button' className='btn-sm disabled mx-auto d-flex' role='button' aria-disabled='true'>Doctor</Button> <br />
                                </div>
                                <div className='cardinfo'>
                                <h6 className='mr-4 mx-auto'>Doctor Information</h6> 
                                    <label className='mr-4 mx-auto'>
                                        Status
                                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" defaultChecked />Online
                                    </label> 
                                    <label className='mr<i class="fas fa-signal-4    "></i> mx-auto'>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />Offline
                                    </label> <br />
                                    <img src={Bag} alt='koper' className='mybag' /> <p>3 years</p> 
                                </div>
                                <div className='btn-ats mx-auto d-flex'>
                                    <Button type='button' className='btn-md mx-auto d-flex btn-outline-warning'>Edit Profile</Button>
                                </div>
                            </div>
                            </center> 
                        </div> 
                </div> <br /> 
                <Card className='btn-low'> 
                <div className='btn-low'>
                    <h5>Log Out</h5>
                </div>
                </Card>
            </div>
     <div className='col-xs-12 col-md-8'>       
        <div className="row">
            <div className="col-lg-12">
                <div className="panel3 panel-default">
                    <HashRouter>
                    <div ClassName='nav-bar d-inline' width='100%'>
                        {/* <ul className='ApCok'> */}
                        <li className='NvCOK'><NavLink active tag='a' exact to='/AppointmentUser'>Appointment</NavLink></li>
                        <li className='NvCOK'><NavLink to='/HistoryUser'>History</NavLink></li>
                        {/* </ul> */}
                    </div>
                    <div className='contentx'>
                        <Route active tag='a' exact path='/AppointmentUser' component={AppointmentUser}/>
                        <Route exact path='/HistoryUser' component={HistoryUser}/>
                    </div>
                    </HashRouter>
                </div>    
            </div>
        </div>
    </div>
    </Row>
    </Container>
);
}

export default DoctorProfile