import React from "react";
import { Link } from "react-router-dom";

export default function ClinicCard({clinic}) {
    console.log(clinic, "YOYOYO");
    return (
        <div className="clinic-card">
            <Link to={`/detailrs/${clinic.id}`}>
                <img
                    className="clinic-card--image"
                    src={`${clinic.foto}`}
                    alt={clinic.nama + " poster"}
                />
                <p className="clinic-card--title">{clinic.nama}</p>
                <p className="clinic-card--loc">{clinic.lokasi}</p>
                <p className="clinic-card--desc">{clinic.tentang}</p>
            </Link>
        </div>
    );
}