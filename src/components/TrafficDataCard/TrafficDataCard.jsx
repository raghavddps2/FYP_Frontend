import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid} from "@material-ui/core"
import styles from "./TrafficDataCard.module.css";
import CountUp from 'react-countup'
import Chart from "react-apexcharts"
import cx from "classnames";
import {api1} from '../../api/index'

const TrafficDataCard = () => {
    const baseUrl = api1

    const [carData,setCarData] = useState(0)
    const [busData,setBusData] = useState(0)
    const [heavyData,setHeavyData] = useState(0)
    const [otherData,setOtherData] = useState(0)
    const [pedestrianData,setPedestrianData] = useState(0)
    const [totalData,setTotalData] = useState(0)
    const [date,setDate] = useState("")

    const [stateData,setStateData] = useState({
        options: {
            chart: {
                id: "Real time traffic data"
            },
            noData: {
                text: 'Loading... Traffic Data'
            },
            xaxis: {
                categories: []
            }},
            
            series:[
            {
                name: "Real time traffic data",
                data: []
            }]
    })

    useEffect(() => {
        
        fetch(`${baseUrl}/realtimeTraffic`)
        .then(data => data.json())
        .then(data1 => {
            const {data: {date,bus_count,car_count,heavy_vehicle_count,other_vehicle_count,pedestrian_count,total_vehicle_count}} = data1
            setTotalData(total_vehicle_count)
            setDate(date)
            setBusData(bus_count)
            setCarData(car_count)
            setHeavyData(heavy_vehicle_count)
            setOtherData(other_vehicle_count)
            setTotalData(total_vehicle_count)
            setPedestrianData(pedestrian_count)

            const temp = {
                options: {
                    chart: {
                        id: "Real time Traffic Data"
                    },
                    noData: {
                        text: 'Loading...'
                    },
                    title: {
                        text: 'Traffic count data in real time',
                        align: 'center',
                        style: {
                            fontSize: '24px'
                        }
                    },
                    yaxis: {
                        title: {
                            text: "Traffic count",
                            style: {
                                fontSize: '24px'
                            }
                        }
                    },
                    xaxis: {
                        categories: ["Bus Count","Car Count","Heavy Vehicle Count","Other Vehicle Count","Pedestrian Count","Total Vehicle Count"]
                    }},
                    
                    series:[
                    {
                        name: "Real time Traffic Data",
                        data: [bus_count,car_count,heavy_vehicle_count,other_vehicle_count,pedestrian_count,total_vehicle_count]
                    }]
            }
            setStateData(temp)
        })
    },[setStateData])
    

    return (
        <div className={styles.container}>
            <center><h1 class="ui-header">Real Time Traffic Counting Demo</h1></center>
            <br></br>
            <Grid container spacing={30} justify="center">

                <Grid item component={Card} xs={12} md ={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Bus Count</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {busData} duration = {2.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary" >{ new Date(date).toDateString() }</Typography>
                        <Typography variant="body5">Number of Buses Detected</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md ={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Cars Count</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {carData} duration = {2.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary" > { new Date(date).toDateString() } </Typography>
                        <Typography variant="body5">Number of cars detected</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md ={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Heavy Vehicles Count</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {heavyData} duration = {2.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary" >{ new Date(date).toDateString() }</Typography>
                        <Typography variant="body5">Number of heavy vehciles detected</Typography>
                    </CardContent>
                </Grid>

            </Grid>
            <br></br>
            <Grid container spacing={30} justify="center">

                <Grid item component={Card} xs={12} md ={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Other Vehicles Count</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {otherData} duration = {2.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary" >{ new Date(date).toDateString() }</Typography>
                        <Typography variant="body5">Number of other category vehicles detected</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md ={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total Vehicle Count</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {totalData} duration = {2.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary" > { new Date(date).toDateString() } </Typography>
                        <Typography variant="body5">Total number of vehicles detected </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md ={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Pedestrain count</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {pedestrianData} duration = {2.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary" >{ new Date(date).toDateString() }</Typography>
                        <Typography variant="body5">Number of pedestrians detected </Typography>
                    </CardContent>
                </Grid>

            </Grid>
            <br></br>
            <Chart
            options={stateData.options}
            series={stateData.series}
            type="bar"
            width="1400"
            height="500"/>
        </div>
    );
}

export default TrafficDataCard;