import React from "react";
import {Form} from "../../component/Form/Form";
import {IconButton, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleMinus, faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";

export function ManageBooking() {
    return (
        <section className="absolute left-[50px] right-0 flex flex-col justify-center items-center h-max gap-[25px]">
            <div className="h-full flex justify-center items-center ">
                <Form classes={"w-[90%] flex justify-center items-center flex-wrap mt-5 gap-5 drop-shadow-md bg-white rounded-2xl p-4"}>
                    <>
                        <TextField
                            className="w-[200px]"
                            id="outlined-disabled"
                            label="Table Number"
                            defaultValue="1"
                        />
                        <TextField
                            className="w-[200px]"
                            id="outlined-number"
                            label="Number of people"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <input
                            className="w-[200px] py-[12px] px-[5px]  rounded border border-solid border-[#0000004a]"
                            type={"date"}/>
                        <input
                            className="w-[200px] py-[12px] px-[5px]  rounded border border-solid border-[#0000004a]"
                            type={"time"}/>

                        <TextField
                            className="w-[200px]"
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                        />
                        <TextField
                            className="w-[200px]"
                            id="outlined-basic"
                            label="NIC"
                            variant="outlined"
                        />
                        <TextField
                            className="w-[200px]"
                            id="outlined-basic"
                            label="Contact Number"
                            variant="outlined"
                        />
                        <Button
                            className="w-[200px] h-[52px] text-3xl"
                            variant="contained"
                            color="success"
                        >
                            BOOK
                        </Button>
                    </>
                </Form>
            </div>
            <div  className="w-[90%]">
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
                                        <FontAwesomeIcon icon={faTrash} style={{color:"red"}}/>
                                    </IconButton>
                                    <IconButton aria-label="delete">
                                        <FontAwesomeIcon icon={faPenToSquare} style={{color:"green"}}/>
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