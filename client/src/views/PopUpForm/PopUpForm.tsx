import React, {useEffect, useState} from "react";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {Form} from "../../component/Form/Form";
import {api} from "../../config/config";


export function PopUpForm({isPopupOpen, isOpen, isClose, table_id}: Props) {
    let [currentDate, setCurrentDate] = useState('');
    let [currentTime, setCurrentTime] = useState('');
    let [peopleCount, setPeopleCount] = useState(2);
    let [tableId, setTableId] = useState(table_id);
    let [name, setName] = useState('');
    let [nic, setNIC] = useState('');
    let [contactNumber, setContactNumber] = useState('');

    const handleDateChange = (event: any) => {
        setCurrentDate(event.target.value);
    };

    const handleTimeChange = (event: any) => {
        setCurrentTime(event.target.value);
    };

    const handlePeopleCountChange = (event: any) => {
        setPeopleCount(event.target.value);
    };

    const handleNameChange = (event: any) => {
        setName(event.target.value);
    };

    const handleNICChange = (event: any) => {
        setNIC(event.target.value);
    };

    const handleContactNumberChange = (event: any) => {
        setContactNumber(event.target.value);
    };

    const handleBookingEvent=(event:any)=>{
        api.post("/admin/booking",{
            table_id:tableId,
            date:currentDate,
            time:currentTime,
            name:name,
            nic:nic,
            contact:contactNumber,
            online_or_not:"online",
        }).then((rep:any)=>{
            console.log("ok");
            alert("Successfully Added...!")
        }).catch((error)=>{
            console.log(error);
        })
    }

    useEffect(() => {
        const currentDateObject = new Date();
        const formattedDate = currentDateObject.toISOString().split('T')[0]; // YYYY-MM-DD
        const formattedTime = currentDateObject.toLocaleTimeString('en-US', {hour12: false}); // HH:mm

        setCurrentDate(formattedDate);
        setCurrentTime(formattedTime);
    }, []);


    return (
        <section style={{display: isPopupOpen ? 'flex' : 'none'}}
                 className="fixed left-0 top-0 z-50 w-full sm:h-screen items-center justify-center">
            <div className="bg-white rounded-xl relative w-[464px] h-max p-[20px] sm:top-5 sm:mb-5 sm:border-2
                 flex flex-col items-center sm:items-start">
                <button onClick={isClose} className="w-[25px] h-[25px] absolute top-[5px] right-[5px]">
                    <FontAwesomeIcon icon={faXmark} style={{color: "#ff0000", fontSize: "22px"}}/>
                </button>
                <h1 className="text-3xl">Book your table</h1>
                <p className="text-center sm:text-start">Your reservation is for 2 hours from your desired
                    reservation time. Rs.200 will be added for an
                    additional hour</p>
                <Form classes={"mt-5 flex flex-wrap flex-row gap-[20px] items-center justify-center"}>
                    <>
                        <TextField
                            className="w-[100px] sm:w-[200px]"
                            disabled
                            id="outlined-disabled"
                            label="Table Number"
                            defaultValue={tableId}
                        />
                        <TextField
                            className="w-[100px] sm:w-[200px]"
                            id="outlined-number"
                            label="Number of people"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={peopleCount}
                            onChange={handlePeopleCountChange}
                        />
                        <input
                            className="w-[100px] sm:w-[200px] py-[12px] px-[5px]  rounded border border-solid border-[#0000004a]"
                            type={"date"}
                            value={currentDate}
                            onChange={handleDateChange}
                        />
                        <input
                            className="w-[100px] sm:w-[200px] py-[12px] px-[5px]  rounded border border-solid border-[#0000004a]"
                            type={"time"}
                            value={currentTime}
                            onChange={handleTimeChange}
                        />

                        <TextField
                            className="w-[100px] sm:w-[200px]"
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={handleNameChange}
                        />
                        <TextField
                            className="w-[100px] sm:w-[200px]"
                            id="outlined-basic"
                            label="NIC"
                            variant="outlined"
                            value={nic}
                            onChange={handleNICChange}
                        />
                        <TextField
                            className="w-[100px] sm:w-[200px]"
                            id="outlined-basic"
                            label="Contact Number"
                            variant="outlined"
                            value={contactNumber}
                            onChange={handleContactNumberChange}
                        />
                        <Button
                            className="w-[100px] sm:w-[200px] h-[52px] text-3xl"
                            variant="contained"
                            color="success"
                            onClick={handleBookingEvent}
                        >
                            BOOK NOW
                        </Button>
                    </>
                </Form>
            </div>
        </section>
    );
}

type Props = {
    isPopupOpen: boolean;
    isOpen: any;
    isClose: any;
    table_id: string
};
