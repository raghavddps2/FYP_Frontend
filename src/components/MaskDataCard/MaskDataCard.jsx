import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid} from "@material-ui/core"
import styles from "./MaskDataCard.module.css";
import CountUp from 'react-countup'
import Chart from "react-apexcharts"
import cx from "classnames";
import {api1} from '../../api/index'

const MaskDataCard = () => {

    const baseUrl = api1
    const [stateData,setStateData] = useState({
        options: {
            chart: {
                id: "Real time Mask data"
            },
            noData: {
                text: 'Loading... Mask Data'
            },
            title: {
                text: 'Pedestrain Face Mask Data over time',
                align: 'center'
            },
            xaxis: {
                categories: []
            }},
            
            series:[
            {
                name: "Real time Mask data",
                data: []
            }]
    })

    const [maskData,setMaskData] = useState(0)
    const [NoMaskData,setNoMaskData] = useState(0)
    const [TotalPeopleData,setTotalPeopleData] = useState(0)
    const [date,setDate] = useState("")

    useEffect(() => {
        
        fetch(`${baseUrl}/realtimeMask`)
        .then(data => data.json())
        .then(data1 => {
            const {data: {people_with_mask,people_without_mask,total_mask,date}} = data1
            setMaskData(people_with_mask)
            setNoMaskData(people_without_mask)
            setTotalPeopleData(total_mask)
            setDate(date)

            const temp = {
                options: {
                    chart: {
                        id: "Real time "
                    },
                    noData: {
                        text: 'Loading...'
                    },
                    title: {
                        text: 'Pedestrain Face Mask Data over time',
                        align: 'center',
                        style: {
                            fontSize: '24px'
                        }
                    },
                    yaxis: {
                        title: {
                            text: "No of people",
                            style: {
                                fontSize: '24px'
                            }
                        }
                    },
                    xaxis: {
                        categories: ["People with mask","People without mask","Total people"],
                    },
                    },
                    
                    series:[
                    {
                        name: "Real time Mask data",
                        data: [people_with_mask,people_without_mask,total_mask]
                    }]
            }
            setStateData(temp)
        })
    },[setStateData])
    


    return (
        <div className={styles.container}>
            <center><h1 class="ui-header">Real Time Face Mask Detection Demo</h1></center>
            <br></br>
            <Grid container spacing={30} justify="center">

                <Grid item component={Card} xs={12} md ={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Mask Count</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {maskData} duration = {2.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary" >{ new Date(date).toDateString() }</Typography>
                        <Typography variant="body5">Number of people wearing masks</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md ={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Without mask count</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {NoMaskData} duration = {2.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary" > { new Date(date).toDateString() } </Typography>
                        <Typography variant="body5">Number of people not wearing masks</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md ={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total Count</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {TotalPeopleData} duration = {2.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary" >{ new Date(date).toDateString() }</Typography>
                        <Typography variant="body5">Total Number of people</Typography>
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
    )
}

export default MaskDataCard;