import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { addDays, setHours, setMinutes } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

function ChooseDate() {
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 120), 10)
    );
    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };
    const buttonBoxStyle = {
        backgroundColor: "#fde84d",
        height: "50px",
        width: "200px",
        border: "0px",
        fontSize: "15px",
        fontWeight: "700",
    };
    const ChooseDateButton = ({ value, onClick }) => (
        <div>
            <Button
                style={buttonBoxStyle}
                variant="light"
                className="my-2 mx-1"
                onClick={(e) => {
                    onClick(e, "value");
                    console.log(value);
                    console.log(value.split(" ")[0]);
                    console.log(value.split(" ")[1].slice(0, -1));
                    console.log(value.split(" ")[2]);
                    console.log(
                        value.split(" ")[3] + " " + value.split(" ")[4]
                    );
                }}
            >
                {value.split(" ")[0] + " " + value.split(" ")[1] + " " + value.split(" ")[2]}
            </Button>
            <Button
                style={buttonBoxStyle}
                variant="light"
                className="my-2 mx-1"
            >
                {value.split(" ")[3] + " " + value.split(" ")[4]}
            </Button>
        </div>
    );
    return (
        <div>
            <DatePicker
                closeOnScroll={false}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                maxDate={addDays(new Date(), 366)}
                minTime={setHours(setMinutes(new Date(), 0), 10)}
                maxTime={setHours(setMinutes(new Date(), 0), 14)}
                filterDate={isWeekday}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={120}
                timeCaption="waktu"
                dateFormat="MMMM dd, yyyy h:mm aa"
                customInput={<ChooseDateButton />}
            />
        </div>
    );
}

export default ChooseDate;
