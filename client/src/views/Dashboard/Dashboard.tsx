import React, {useEffect, useState} from "react";
import {DashboardItem} from "../../component/DashboardItem/DashboardItem";
import {LineChart} from "@mui/x-charts/LineChart";
import {PieChart} from "@mui/x-charts";
import {api} from "../../config/config";

export function Dashboard() {
    let [currentDate, setCurrentDate] = useState('');
    let [tables, setTables] = useState<any[]>([]);
    let [userCount, setUserCount] = useState(0);
    let [tableCount, setTableCount] = useState(0);
    let [bookedTableCount, setBookedTableCount] = useState(0);
    let [availableTableCount, setAvailableTableCount] = useState(0);
    let [bookingCount, setbookingCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersResponse = await api.get("users/count");
                setUserCount(usersResponse.data.length);

                const tablesResponse = await api.get("admin/all/table");
                setTables(tablesResponse.data);

                setTableCount(tablesResponse.data.length);

                let bookedCount = 0;
                tablesResponse.data.forEach((table: any) => {
                    if (table.booking && table.booking.length > 0) {
                        for (let i in table.booking) {
                            console.log(i)
                            ++bookedCount;
                            if (table.booking[i].date.slice(0, 10) === currentDate) {
                                setBookedTableCount(++bookedTableCount);
                                console.log(bookedTableCount)
                                break;
                            }
                        }
                    }
                });
                setAvailableTableCount(tableCount - bookedTableCount);
                setbookingCount(bookedCount);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

        const currentDateObject = new Date();
        const formattedDate = currentDateObject.toISOString().split('T')[0];
        setCurrentDate(formattedDate);

    }, [currentDate, tableCount]);


    return (
        <section className="top-0 absolute left-[50px] right-0 flex flex-col h-max ">
            <div className="mt-10 flex flex-row justify-center items-center flex-wrap gap-[25px] ">
                <DashboardItem topic={"Table Count"} count={tableCount}/>
                <DashboardItem topic={"Available Table"} count={availableTableCount}/>
                <DashboardItem topic={"Booked Table"} count={bookedTableCount}/>
                <DashboardItem topic={"Customers Count"} count={userCount}/>
                <DashboardItem topic={"Booking Count"} count={bookingCount}/>
            </div>
            <div id="chart-div" className="flex flex-row flex-wrap items-center">
                <LineChart
                    xAxis={[{data: [1, 2, 3, 5, 8, 10]}]}
                    series={[
                        {
                            data: [2, 100.5, 2, 8.5, 1.5, 5],
                        },
                    ]}
                    width={1000}
                    height={400}
                />
                <PieChart
                    series={[
                        {
                            data: [
                                {id: 0, value: 10, label: 'series A'},
                                {id: 1, value: 15, label: 'series B'},
                                {id: 2, value: 20, label: 'series C'},
                            ],
                            highlightScope: {faded: 'global', highlighted: 'item'},
                            faded: {innerRadius: 30, additionalRadius: -30, color: 'gray'},
                        },
                    ]}
                    width={800}
                    height={500}
                />
            </div>
        </section>
    );
}
