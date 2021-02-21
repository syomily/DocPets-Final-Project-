import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector, connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getClinic } from "../store/actions/clinic";
import axios from "axios";

//component
import ChooseDate from "./ChooseDate";
import ModalAddPet from "./ModalAddPet";
import DoctorCard from "./DoctorCard";
import BoxAnimal from "../components/BoxAnimal";

//styling, icon, & image
import "./DetailRSContent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import ava1 from "../components/assets/img/doc1.png";
import ava2 from "../components/assets/img/doc2.jpg";
import dog from "./assets/img/emojiDog.svg";
import cat from "./assets/img/emojiCat.svg";
import hamster from "./assets/img/emojiHamster.svg";
import rabbit from "./assets/img/emojiRabbit.svg";

const DetailrsContent = (props) => {
    //hooks
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(" ");
    const [clinic, setClinic] = useState({});
    const [facilities, setFacilities] = useState("");
    const [day, setDay] = useState("");
    const [waktu, setWaktu] = useState();
    const [doctor, setDoctor] = useState("");

    //handler
    const handlerClickBook = () => {
        console.log("click");
    };
    const handleClickDay = (e) => {
        setDay(e.target.value);
    };
    const handleClickWaktu = (e) => {
        setWaktu(e.target.value);
    };

    //param
    let { id } = useParams();
    let userId = localStorage.getItem("id")
    console.log(userId)

    //useEffect
    useEffect(() => {
        axios
            .get(`https://doctorpets.tk:3002/klinik/getKlinikById/${id}`)
            .then((res) => {
                console.log(res.data.result[0]);
                setClinic(res.data.result[0]);
                setFacilities(res.data.result[0].fasilitas);
                setDoctor(res.data.result[0].dokter);
                setLoad(true);
            })
            .catch((err) => {
                setError(err.message);
                setLoad(true);
            });
            // axios
            // .get(`https://doctorpets.tk:3002/klinik/getKlinikById/${id}`)
            // .then((res) => {
            //     console.log(res.data.result[0]);
            //     setClinic(res.data.result[0]);
            //     setFacilities(res.data.result[0].fasilitas);
            //     setDoctor(res.data.result[0].dokter);
            //     setLoad(true);
            // })
            // .catch((err) => {
            //     setError(err.message);
            //     setLoad(true);
            // });
    }, []);

    //split facilities
    let facility = facilities.split(",");

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
        fontSize: "17px",
        fontWeight: "700",
        marginLeft: "20px",
        margin: "10px 0",
        color: "#445e6b",
        marginBottom: "1rem",
    };
    const detailrsImage = {
        borderRadius: "10px",
        minWidth: "40vw",
        maxWidth: "550px",
        overflow: "hidden",
        marginRight: "1rem",
    };
    const buttonBookNow = {
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

    //icon
    const yuhu = (
        <FontAwesomeIcon
            icon={faBookmark}
            style={{ color: "#fde84d", marginRight: "0.5rem" }}
        />
    );

    //dummy
    let dummyDoc = [
        {
            nama: "Dr. Alex, SP. Kucing",
            status: "offline",
            title: "Dokter Kucing",
            ava: ava1,
        },
        {
            nama: "Dr. Alizah, SP. Hamster",
            status: "online",
            title: "Dokter Hamster",
            ava: ava2,
        },
        {
            nama: "Dr. Alex, SP. Kelinci",
            status: "online",
            title: "Dokter Kelinci",
            ava: ava1,
        },
        {
            nama: "Dr. Alizah, SP. Anjing",
            status: "offline",
            title: "Dokter Anjing",
            ava: ava2,
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
        {
            nama: "kiano",
            jenis: "kelinci",
            gender: "male",
        },
        {
            nama: "blacky",
            jenis: "hamster",
            gender: "female",
        },
    ];

    return (
        <div className="detailrs-container">
            <Row>
                <Col>
                    <h1 style={detailrsH1}>{clinic.nama}</h1>
                </Col>
                <Col md="auto"></Col>
                <Col xs lg="2">
                    <Link to="/detailbooking">
                        <Button
                            style={buttonBookNow}
                            onClick={handlerClickBook}
                        >
                            Book Now
                        </Button>
                    </Link>
                </Col>
            </Row>
            <br />
            <Row>
                <h2 style={detailrsH2}>Informasi Umum</h2>
            </Row>
            <br />
            <Row>
                <Col>
                    <img src={clinic.foto} style={detailrsImage} alt="" />
                </Col>
                <Col>
                    <Row>
                        <h3 style={detailrsH3}>Informasi Kunjungan</h3>
                    </Row>
                    <br />
                    <Row>
                        <h4 style={detailrsH4}>Hari dan Waktu Kunjungan</h4>
                    </Row>
                    <Row>
                        <ChooseDate />
                    </Row>
                    <br />
                    <Row>
                        <p>Klinik buka dari pukul 10:00 - 16:00</p>
                    </Row>
                    <Row>
                        <p>
                            Anda bisa memilih jam kunjungan antara pukul 10:00,
                            12:00, dan 14:00
                        </p>
                    </Row>
                    <Row>
                        <p>Setiap sesi berlangsung selama maksimal 2 jam</p>
                    </Row>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <h3 style={detailrsH3}>Tentang</h3>
                    <p>{clinic.tentang}</p>
                </Col>
                <Col>
                    <h3 style={detailrsH3}>Fasilitas</h3>
                    <div>
                        {facility.map((yey, idx) => {
                            return (
                                <Row key={idx}>
                                    <i>{yuhu}</i> <p>{yey}</p>
                                </Row>
                            );
                        })}
                    </div>
                </Col>
            </Row>
            <Row>
                <h3 style={detailrsH3}>Pilih Dokter</h3>
            </Row>
            <Row>
                {doctor
                    ? doctor.map((doctor, idx) => {
                          return (
                              <DoctorCard
                                  key={idx}
                                  ava={doctor.ava}
                                  title={doctor.title}
                                  nama={doctor.nama}
                                  status={doctor.status}
                              />
                          );
                      })
                    : dummyDoc.map((doctor, idx) => {
                          return (
                              <DoctorCard
                                  value={doctor.nama}
                                  key={idx}
                                  ava={doctor.ava}
                                  title={doctor.title}
                                  nama={doctor.nama}
                                  status={doctor.status}
                              />
                          );
                      })}
            </Row>
            <br />
            <br />
            <br />
            <Row>
                <h3 style={detailrsH3}>Masukkan Informasi Hewan Peliharaan</h3>
            </Row>
            <Row>
                <ModalAddPet />
                {dummyPet.map((pet, idx) => {
                    return (
                        <div key={idx}>
                            <Col>
                                <BoxAnimal
                                    nama={pet.nama}
                                    gender={pet.gender}
                                    image={`${
                                        pet.jenis === "anjing"
                                            ? dog
                                            : pet.jenis === "kucing"
                                            ? cat
                                            : pet.jenis === "hamster"
                                            ? hamster
                                            : rabbit
                                    }`}
                                />
                            </Col>
                        </div>
                    );
                })}
            </Row>
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DetailrsContent);
