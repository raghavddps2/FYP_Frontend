import React, {useState, useEffect} from 'react';
import { Dropdown } from 'semantic-ui-react'
import Chart from "react-apexcharts"
import {api1} from './../../api/index'
const LineChart1 = ({date,camera}) => {
    const baseUrl = api1
    const [cam,setCam] = useState(camera)
    let drops = []
    for(let i=1;i<=12;i++){
        drops.push({key:"camera"+i,text:"camera"+i,value:"camera"+i,image:{ avatar: true, src: 'https://cdn2.iconfinder.com/data/icons/smart-city-11/100/smart-city-bw-28-512.png' }})
    }
    const [drop,setDrop] = useState(drops)
    const [stateData,setStateData] = useState({
        options: {
            chart: {
                id: camera
            },
            noData: {
                text: 'Loading... Police Allocation - Traffic Count'
            },
            xaxis: {
                categories: []
            }},
            
            series:[
            {
                name: "Total Traffic Count",
                type: 'column',
                data: []
            },
            {
                name: "Heavy Vehicle Count",
                type: 'line',
                data: []
            },
            {
                name: "Pedestrian Count",
                type: 'line',
                data: []
            },]
    })

    useEffect(() => {
        console.log("ji")
        console.log(date,cam)
        fetch(`${baseUrl}/getTrafficData?date=${date}&camera_name=${cam}`)
        .then(data => data.json())
        .then(data1 => {
            const {data} = data1
            console.log(data)
            let time = []
            let average_vehicle_count = []
            let heavy_vehicle_count  = []
            let people_count = []
            let car_count  = []
            for(let i=0;i<data.length;i++){
                time.push(data[i].time)
                average_vehicle_count.push(data[i].total_vehicle_count)
                heavy_vehicle_count.push(data[i].heavy_vehicle_count)
                people_count.push(data[i].pedestrian_count)
                car_count.push(data[i].car_count)
                drops.push()
            }
            console.log(time)
            console.log(average_vehicle_count)
            console.log(drops)
            const temp = {
                options: {
                    chart: {
                        id: camera
                    },
                    noData: {
                        text: 'Loading...'
                    },
                    xaxis: {
                        categories: time,
                        title: {
                            text: 'Time of the day.'
                        },
                    }},
                    yaxis: {
                        title: {
                          text: 'Traffic Paramters'
                        },
                      },
                    title: {
                        text: 'Real time graph displaying Various traffic parameters wrt. time',
                        align: 'center'
                    },
                    legend: {
                        position: 'top',
                        horizontalAlign: 'right',
                        floating: true,
                        offsetY: -25,
                        offsetX: -5
                      },
                    series:[
                        {
                            name: "Total Traffic Count",
                            type: 'column',
                            data: average_vehicle_count
                        },
                        {
                            name: "Heavy Vehicle Count",
                            type: 'line',
                            data: heavy_vehicle_count
                        },
                        {
                            name: "Car Count",
                            type: 'line',
                            data: car_count
                        },
]
            }
            setStateData(temp)
            setDrop(drops)
        })
    },[setStateData])
    
    const handleOnChange = (e, data) => {
        console.log(data.value)
        setStateData({
            options: {
                chart: {
                    id: camera
                },
                noData: {
                    text: 'Loading... Police Allocation - Traffic Count'
                },
                xaxis: {
                    categories: []
                }},
                
                series:[
                {
                    name: camera,
                    data: []
                }]
        })
        console.log(data.value+"kii")
        setCam(data.value)
        fetch(`${baseUrl}/getTrafficData?date=${date}&camera_name=${cam}`)
        .then(data => data.json())
        .then(data1 => {
            const {data} = data1
            console.log(data)
            let time = []
            let average_vehicle_count = []
            let heavy_vehicle_count  = []
            let people_count = []
            let car_count  = []
            for(let i=0;i<data.length;i++){
                console.log(data[i].total_vehicle_count)
                time.push(data[i].time)
                average_vehicle_count.push(data[i].total_vehicle_count)
                heavy_vehicle_count.push(data[i].heavy_vehicle_count)
                people_count.push(data[i].pedestrian_count)
                car_count.push(data[i].car_count)
                drops.push()
            }
            console.log(time)
            console.log(average_vehicle_count)
            console.log(drops)
            const temp = {
                options: {
                    chart: {
                        id: camera
                    },

                    legend: {
                        position: 'top',
                        horizontalAlign: 'right',
                        floating: true,
                        offsetY: -25,
                        offsetX: -5
                      },
                    noData: {
                        text: 'Loading...'
                    },
                    xaxis: {
                        categories: time,
                        title: {
                            text: 'Time of the day.'
                        },
                    }},
                    yaxis: {
                        title: {
                          text: 'Traffic Paramters'
                        },
                      },
                    title: {
                        text: 'Real time graph displaying Various traffic parameters wrt. time',
                        align: 'center'
                    },
                    series:[
                        {
                            name: "Total Traffic Count",
                            type: 'column',
                            data: average_vehicle_count
                        },
                        {
                            name: "Heavy Vehicle Count",
                            type: 'line',
                            data: heavy_vehicle_count
                        },
                        {
                            name: "Car Count",
                            type: 'line',
                            data: car_count
                        },
]
            }
            setStateData(temp)
     })}

    return (
        <div>
            <Dropdown
                placeholder='Select Camera'
                fluid
                selection
                options={drop}
                onChange={handleOnChange}
            />
        <Chart
            options={stateData.options}
            series={stateData.series}
            type="line"
            width="600"
            height="400"/>
        </div>
    )       
}

export default LineChart1;
