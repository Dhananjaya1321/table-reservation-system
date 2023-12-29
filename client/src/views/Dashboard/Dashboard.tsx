import React from "react";
import {DashboardItem} from "../../component/DashboardItem/DashboardItem";
import {LineChart} from "@mui/x-charts/LineChart";
import {PieChart} from "@mui/x-charts";

export function Dashboard() {
    return (
        <section className="top-0 absolute left-[50px] right-0 flex flex-col h-max ">
            <div className="mt-10 flex flex-row justify-center items-center flex-wrap gap-[25px] ">
                <DashboardItem topic={"Table Count"} count={0}/>
                <DashboardItem topic={"Available Table"} count={0}/>
                <DashboardItem topic={"Booked Table"} count={0}/>
                <DashboardItem topic={"Customers Count"} count={0}/>
                <DashboardItem topic={"Booking Count"} count={0}/>
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
                                { id: 0, value: 10, label: 'series A' },
                                { id: 1, value: 15, label: 'series B' },
                                { id: 2, value: 20, label: 'series C' },
                            ],
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        },
                    ]}
                    width={800}
                    height={500}
                />
            </div>
        </section>
    );
}
