import React from 'react'
import { Container, Row, Button, Card } from 'react-bootstrap'
import PP from '../components/assets/img/sunrise.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/ClinicProfile.css'
import ImageUploader from 'react-images-upload'


const ClinicProfile = (props) => {
    return(
    
    <Container>
        <Row>
            <div className='col-12 col-lg-4'>
                <div className='container-profile mx-auto d-flex mt-4'>

                    <br /><br />
                        <div className='boxats mx-auto'>
                            <br/>
                            <center>
                                <img src={PP} alt='photo-prf' className='img-circle' />
                            <br />
                            <div className='info'>
                                <p>drh Syohan Demega P</p>
                                <div className='btn-disd mx-auto d-flex'>
                                <Button type='button' className='btn-sm disabled mx-auto d-flex' role='button' aria-disabled='true'>Clinic</Button> <br />
                                </div>
                                <div className='cardinfo'>
                                <h6 className='mr-4 mx-auto'>Doctor Information</h6> 
                                    <label className='mr-4 mx-auto'>
                                        Status
                                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" defaultChecked />Open
                                    </label> 
                                    <label className='mr<i class="fas fa-signal-4    "></i> mx-auto'>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />Closed
                                    </label> <br />
                                <label>Waktu Buka</label> <b />
                                <select className="form-opr">
                                    <option>Choose Operation Times</option>
                                    <option>08.00-10.00</option>
                                    <option>10.00-1200</option>
                                    <option>13.00-15.00</option>
                                    <option>15.00-17.00</option>
                                    <option>18.00-20.00</option>
                                </select>  
                                </div>
                                <div className='btn-ats mx-auto d-flex'>
                                    <Button type='button' className='btn-md mx-auto d-flex btn-outline-warning'>Edit Profile</Button>
                                </div>
                            </div>
                            </center> 
                        </div> 
                </div> <br /> 
                <Card> 
                <div className='btn-lgt'>
                    <h5>Log Out</h5>
                </div>
            </Card>
            </div>
     <div className='col-xs-12 col-md-8'>       
    <div className="con-bwh container-fluid d-flex mt-4 mb-4">
        <div className="row">
            <div className="col-lg mb-6">
                <h1 className="page-header">Clinic Profile</h1>
            </div>
            <div className="col-lg-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h5 className='judultulisan'>Upload Photo</h5>
                     </div>
                    <div ClassName='uploadpc'>
                    <ImageUploader
                        withIcon={true}
                        buttonText='Upload image'
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                    />
                    </div>
                    <div className="radio-ktk d-inline-block mr-2 d-flex mx-auto">
                        <h5 className='judultulisan mr-2 mx-auto'>Clinic Information</h5> 
                            <label className='mr-2 d-inline-block d-flex mx-auto'>
                            <p>Status</p>
                                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" defaultChecked />Open
                                    </label> 
                            <label className='mr-2 d-inline-block d-flex mx-auto'>
                                    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />Closed
                            </label>
                    </div>
                    <div className='form-opr d-inline-block mb-2 d-flex mx-auto'>
                        <label>Waktu Buka</label> <br />
                            <select className="form-opr">
                                <option>Choose Operation Times</option>
                                <option>08.00-10.00</option>
                                <option>10.00-1200</option>
                                <option>13.00-15.00</option>
                                <option>15.00-17.00</option>
                                <option>18.00-20.00</option>
                            </select>
                    </div> 
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-lg-12">
                                    <div className="form-group" >
                                    <h5 className='judultulisan mr-2 mx-auto'>Basic Information</h5> 
                                        <label>Nama Klinik</label>
                                        <input className="form-control" placeholder="type Nama Klinik" />
                                    </div>
                                        <label className='mr-2 mx-auto'>
                                            <p>Gender</p>
                                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" defaultChecked />Male
                                            </label> 
                                            <label className='mr-2 mx-auto'>
                                            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />Female
                                        </label>
                                    <div className="form-group">
                                    <h5 className='judultulisan mr-2 mx-auto'>Contact Details</h5> 
                                        <label>Nomor Telephone </label>
                                        <input className="form-control" placeholder="Type Nomor Telephone" />
                                    </div>
                                    <div className="form-group">
                                        <label>E-mail </label>
                                        <input className="form-control" placeholder="Type E-mail" />
                                    </div>
                                    <div className="form-group">
                                        <label>Alamat</label>
                                        <input className="form-control" placeholder="Type Alamat" />
                                    </div>
                                    <div className="form-group">
                                        <label>Special Notes Clinic</label>
                                        <textarea className="form-control" rows="3"></textarea>
                                    </div>
                                    <button type="submit" className="btn-sb btn-default">Simpan</button>
                                    <button type="reset" className="btn-re btn-default">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </Row>
    </Container>

);
}

export default ClinicProfile