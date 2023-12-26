import React from "react";
import {IconButton, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleMinus} from "@fortawesome/free-solid-svg-icons";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function ManageTables() {
    return (
        <section
            className="absolute left-[50px] right-0 m-auto sm:m-[unset] sm:relative sm:left-0 self-start flex flex-col justify-center items-center h-max gap-[25px]">
            <form
                className="w-[90%] md:w-[80%] lg:w-full mt-5 flex justify-center items-center flex-wrap flex-row gap-[25px] p-[20px] rounded-2xl drop-shadow-md bg-white">
                <TextField
                    className="w-[200px]"
                    disabled
                    id="outlined-disabled"
                    label="Table ID"
                    defaultValue="1"
                />
                <TextField
                    className="w-[200px]"
                    id="outlined-basic"
                    label="Table Number"
                    variant="outlined"
                />
                <Button
                    className=" w-[200px] h-[52px] text-3xl"
                    variant="contained"
                    style={{backgroundColor: "#00bf00"}}
                >
                    ADD
                </Button>
            </form>
            <div className="w-[90%] md:w-[80%] lg:w-full">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Table ID</TableCell>
                                <TableCell align="right">Table Number</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">TBL-001</TableCell>
                                <TableCell align="right">calories</TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="delete">
                                        <FontAwesomeIcon icon={faCircleMinus} style={{color:"red"}}/>
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