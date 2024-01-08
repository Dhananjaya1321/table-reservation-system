import React, {useEffect, useState} from "react";
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
import {Form} from "../../component/Form/Form";
import {api} from "../../config/config";

export function ManageTables() {
    let [tables, setTables] = useState([]);
    let [tableId, setTableId] = useState('TBL-1');
    let [tableNumber, setTableNumber] = useState('');

    let handleTableNumberChange = (event: any) => {
        setTableNumber(event.target.value);
    }

    let handleTableSaveEvent = async () => {
        try {
            await api.post("/admin/table", {
                table_id: tableId,
                table_number: tableNumber,
            }).then((res) => {
                alert("Successfully Added...!");
                getAllTables();
                setTableNumber('');
            }).catch((error: any) => {
                console.error(error);
                setTableNumber('');
            })
        } catch (error) {
            console.error(error);
        }
    };

    let getAllTables = async () => {
        try {
            api.get("admin/all/table").then((rep: any) => {
                setTables(rep.data);
                console.log(rep.data.length);
                setTableId('TBL-' + (rep.data.length + 1));
            }).catch((error: any) => {
                console.error(error);
            })
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getAllTables();
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className="absolute left-[50px] right-0 flex flex-col justify-center items-center h-max gap-[25px]">
            <Form
                classes={"w-[90%] mt-5 flex justify-center items-center flex-wrap flex-row gap-[25px] p-[20px] rounded-2xl drop-shadow-md bg-white"}>
                <>
                    <TextField
                        className="w-[200px]"
                        disabled
                        id="outlined-disabled"
                        label="Table ID"
                        value={tableId}
                        // onChange={}
                    />
                    <TextField
                        className="w-[200px]"
                        id="outlined-basic"
                        label="Table Number"
                        variant="outlined"
                        value={tableNumber}
                        onChange={handleTableNumberChange}
                    />
                    <Button
                        className=" w-[200px] h-[52px] text-3xl"
                        variant="contained"
                        style={{backgroundColor: "#00bf00"}}
                        onClick={handleTableSaveEvent}
                    >
                        ADD
                    </Button>
                </>
            </Form>
            <div className="w-[90%]">
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
                                        <FontAwesomeIcon icon={faCircleMinus} style={{color: "red"}}/>
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
