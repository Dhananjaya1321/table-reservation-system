import React, {useEffect, useState} from "react";
import {Form} from "../../component/Form/Form";
import {IconButton, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import {api} from "../../config/config";

export function ManageBooking() {
    let [tables, setTables] = useState<any[]>([]);
    let [currentDate, setCurrentDate] = useState('');
    let [currentTime, setCurrentTime] = useState('');
    let [peopleCount, setPeopleCount] = useState(2);
    let [tableId, setTableId] = useState('');
    let [name, setName] = useState('');
    let [nic, setNIC] = useState('');
    let [contactNumber, setContactNumber] = useState('');

    const handleDateChange = (event: any) => {
        setCurrentDate(event.target.value);
    };

    const handleTimeChange = (event: any) => {
        setCurrentTime(event.target.value);
    };

    const handleTableNumberChange = (event: SelectChangeEvent) => {
        setTableId(event.target.value as string);
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

    let getAllTables = async () => {
        try {
            api.get("admin/all/table").then((rep: any) => {
                setTables(rep.data);
                console.log(tables, rep.data)
            }).catch((error: any) => {
                console.error(error);
            })
        } catch (error) {
            console.error(error);
        }
    };

    const handleBookingEvent = (event: any) => {
        api.post("/admin/booking", {
            table_id: tableId,
            date: currentDate,
            time: currentTime,
            name: name,
            nic: nic,
            contact: contactNumber,
            online_or_not: "not",
        }).then((rep: any) => {
            console.log("ok");
            alert("Successfully Added...!")
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getAllTables();
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();

        const currentDateObject = new Date();
        const formattedDate = currentDateObject.toISOString().split('T')[0]; // YYYY-MM-DD
        const formattedTime = currentDateObject.toLocaleTimeString('en-US', {hour12: false}); // HH:mm

        setCurrentDate(formattedDate);
        setCurrentTime(formattedTime);
    }, []);

    return (
        <section className="absolute left-[50px] right-0 flex flex-col justify-center items-center h-max gap-[25px]">
            <div className="h-full flex justify-center items-center ">
                <Form classes={"w-[90%] flex justify-center items-center flex-wrap mt-5 gap-5 drop-shadow-md bg-white rounded-2xl p-4"}>
                    <>
                        <Select
                            className="w-[200px]"
                            id="demo-simple-select"
                            value={tableId}
                            onChange={handleTableNumberChange}
                            displayEmpty
                            inputProps={{'aria-label': 'Without label'}}
                        >
                            <MenuItem value={-1}>
                                <em>Table Number</em>
                            </MenuItem>
                            {
                                tables.map((table:any)=>(
                                    <MenuItem value={table.table_id}>{table.table_number}</MenuItem>
                                ))
                            }
                        </Select>
                        <TextField
                            className="w-[200px]"
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
                            className="w-[200px] py-[12px] px-[5px]  rounded border border-solid border-[#0000004a]"
                            type={"date"}
                            value={currentDate}
                            onChange={handleDateChange}
                        />
                        <input
                            className="w-[200px] py-[12px] px-[5px]  rounded border border-solid border-[#0000004a]"
                            type={"time"}
                            value={currentTime}
                            onChange={handleTimeChange}
                        />

                        <TextField
                            className="w-[200px]"
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={handleNameChange}
                        />
                        <TextField
                            className="w-[200px]"
                            id="outlined-basic"
                            label="NIC"
                            variant="outlined"
                            value={nic}
                            onChange={handleNICChange}
                        />
                        <TextField
                            className="w-[200px]"
                            id="outlined-basic"
                            label="Contact Number"
                            variant="outlined"
                            value={contactNumber}
                            onChange={handleContactNumberChange}
                        />
                        <Button
                            className="w-[200px] h-[52px] text-3xl"
                            variant="contained"
                            color="success"
                            onClick={handleBookingEvent}
                        >
                            BOOK
                        </Button>
                    </>
                </Form>
            </div>
            <div className="w-[90%]">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Booking ID</TableCell>
                                <TableCell align="left">Table number</TableCell>
                                <TableCell align="left">Date</TableCell>
                                <TableCell align="left">Time</TableCell>
                                <TableCell align="left">Customer</TableCell>
                                <TableCell align="left">NIC</TableCell>
                                <TableCell align="left">Contact</TableCell>
                                <TableCell align="left">Online or not</TableCell>
                                <TableCell align="left">actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="left" component="th" scope="row">BOK-001</TableCell>
                                <TableCell align="left" component="th" scope="row">001</TableCell>
                                <TableCell align="left" component="th" scope="row">12/30/2023</TableCell>
                                <TableCell align="left" component="th" scope="row">12:30 P.M.</TableCell>
                                <TableCell align="left" component="th" scope="row">Isuru</TableCell>
                                <TableCell align="left" component="th" scope="row">1111111111</TableCell>
                                <TableCell align="left" component="th" scope="row">07654110779</TableCell>
                                <TableCell align="left" component="th" scope="row">online</TableCell>
                                <TableCell align="left" style={{display: "flex"}}>
                                    <IconButton aria-label="delete">
                                        <FontAwesomeIcon icon={faTrash} style={{color: "red"}}/>
                                    </IconButton>
                                    <IconButton aria-label="delete">
                                        <FontAwesomeIcon icon={faPenToSquare} style={{color: "green"}}/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </section>
    );
}
