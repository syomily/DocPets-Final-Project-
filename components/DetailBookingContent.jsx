import React, { useState } from "react";
import { connect } from "react-redux";

//styling
import { Row, Col, Button } from "react-bootstrap";

//component
import ModalBookingSuccess from "./ModalBookingSuccess";

const DetailBooking = (props) => {
    //state
    const [modals, setModals] = useState(false);
    const toggleModals = () => setModals(!modals);

    //dummy datas
    const dummy = {
        id: 51,
        nama: "Klinik Peliharaan Sejati",
        lokasi: "batam",
        tentang: "klinik terbaik untuk para pria sejati",
        fasilitas: "toilet,whiskas gratis",
        foto:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F3e%2FHELIOS_ENDO-Klinik_Hamburg_Foto_2013_June_05.jpg&f=1&nofb=1",
        dokter: null,
        adminId: 4,
        createdAt: "2021-01-13T14:28:45.000Z",
        updatedAt: "2021-01-13T14:28:45.000Z",
    };

    let dummyDoc = [
        {
            nama: "Dr. Alex, SP. Kucing",
            status: "offline",
            title: "Dokter Kucing",
            checked: "true",
        },
        {
            nama: "Dr. Alizah, SP. Hamster",
            status: "online",
            title: "Dokter Hamster",
            checked: "true",
        },
        {
            nama: "Dr. Alex, SP. Kelinci",
            status: "offline",
            title: "Dokter Kelinci",
            checked: "true",
        },
        {
            nama: "Dr. Alizah, SP. Anjing",
            status: "online",
            title: "Dokter Anjing",
            checked: "false",
        },
        {
            nama: "Dr. Alex, SP. Kelinci",
            status: "offline",
            title: "Dokter Kelinci",
            checked: "true",
        },
        {
            nama: "Dr. Alizah, SP. Anjing",
            status: "online",
            title: "Dokter Anjing",
            checked: "false",
        },
    ];
    let dummyPet = [
        {
            nama: "pampam",
            jenis: "anjing",
            gender: "male",
        },
        {
            nama: "ronin",
            jenis: "kucing",
            gender: "female",
        },
    ];

    //hooks
    const [day, setDay] = useState("");
    const [waktu, setWaktu] = useState();

    //handler
    const handleClickDay = (e) => {
        setDay(e.target.value);
    };
    const handleClickWaktu = (e) => {
        setWaktu(e.target.value);
    };

    //custom styling
    const detailrsH1 = {
        fontSize: "45px",
        fontWeight: "700",
        marginLeft: "20px",
        margin: "10px 0",
        color: "#445e6b",
    };
    const detailrsH2 = {
        fontSize: "30px",
        fontWeight: "700",
        marginLeft: "20px",
        margin: "10px 0",
        color: "#445e6b",
    };
    const detailrsH3 = {
        fontSize: "20px",
        fontWeight: "700",
        marginLeft: "20px",
        margin: "10px 0",
        color: "#445e6b",
    };
    const detailrsH4 = {
        fontSize: "16px",
        fontWeight: "500",
        marginLeft: "20px",
        margin: "10px 0",
        color: "#445e6b",
        marginBottom: "1rem",
    };
    const detailrsImage = {
        borderRadius: "10px",
        maxWidth: "600px",
        overflow: "hidden",
        marginRight: "1rem",
    };
    const buttonSuccessBook = {
        backgroundColor: "#fde84d",
        color: "#445e6b",
        fontSize: "20px",
        fontWeight: "bold",
        height: "60px",
        width: "200px",
        position: "relative",
        marginTop: "0.5rem",
        border: "0px solid",
    };

    let str = dummy.fasilitas;
    let temp = new Array();
    temp = str.split(",");

    return (
        <div className="detailrs-container">
            <Row>
                <Col>
                    <h1 style={detailrsH1}>Resume Booking</h1>
                </Col>
                <Col md="auto"></Col>
                <Col xs lg="2">
                    <Button onClick={toggleModals} style={buttonSuccessBook}>
                        Done
                    </Button>
                    <ModalBookingSuccess
                        displayModal={modals}
                        closeModal={toggleModals}
                    />
                </Col>
            </Row>
            <hr />
            <Row>
                <h3 style={detailrsH3}>{dummy.nama}</h3>
            </Row>
            <br />
            <Row>
                <Col>
                    <img src={dummy.foto} style={detailrsImage} alt="" />
                </Col>
                <Col>
                    <Row>
                        <h2 style={detailrsH2}>Informasi Kunjungan</h2>
                    </Row>
                    <br />
                    <Row>
                        <h3 style={detailrsH3}>Hari & Waktu Kunjungan</h3>
                    </Row>
                    <Row>
                        <h4 style={detailrsH4}>
                            Senin 12 Oktober, Pukul 12:00-15:00 Siang
                        </h4>
                    </Row>
                    <br />

                    <Row>
                        <h3 style={detailrsH3}>Dokter</h3>
                    </Row>
                    <Row>
                        <h4 style={detailrsH4}>{dummyDoc[0].nama}</h4>
                    </Row>
                    <br />

                    <Row>
                        <h3 style={detailrsH3}>Hewan Peliharaan</h3>
                    </Row>
                    <Row>
                        <h4 style={detailrsH4}>
                            <ol>
                                {dummyPet.map((pet, idx) => {
                                    return (
                                        <li key={idx}>
                                            <h4 style={detailrsH4}>
                                                {pet.nama}, {pet.jenis},{" "}
                                                {pet.gender}
                                            </h4>
                                        </li>
                                    );
                                })}
                            </ol>
                        </h4>
                    </Row>
                    <br />
                </Col>
            </Row>
            <br />
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    // signUpDatas: (data) => dispatch(registerAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailBooking);
