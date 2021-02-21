import React from "react";

//styling, icons
import "./ModalBookingSuccess.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const ModalBookingSuccess = (props) => {
    const divStyle = {
        display: props.displayModal ? "block" : "none",
    };
    function closeModal(e) {
        e.stopPropagation();
        props.closeModal();
    }
    const check = <FontAwesomeIcon icon={faCheckCircle} />;

    return (

        <div className="modal-book-success-container" onClick={closeModal} style={divStyle}>
            <div
                className="modal-book-success-content"
                onClick={(e) => e.stopPropagation()}
            >
                <span classname="close_" onClick={closeModal}>
                    &times;
                </span>
                <br />
                <br />
                <br />
                <div className="modal-book-success-content-down">
                    <i className="check-style">{check}</i>{" "}
                    <h2 className="modal-book-success-h2">Booking Success</h2>
                </div>
            </div>
        </div>
    );
};

export default ModalBookingSuccess;
