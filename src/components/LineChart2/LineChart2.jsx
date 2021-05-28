import React, {useState, useEffect} from 'react';
import { Dropdown } from 'semantic-ui-react'
import Chart from "react-apexcharts"
import {api1} from './../../api/index'
const LineChart2 = ({date,camera}) => {
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
                name: "Total People",
                type: 'column',
                data: []
            },
            {
                name: "Pedestrians Wearing Masks",
                type: 'line',
                data: []
            },
            {
                name: "Pedestrians not wearing Masks",
                type: 'line',
                data: []
            },]
    })

    useEffect(() => {
        console.log("ji")
        console.log(date,cam)
        fetch(`${baseUrl}/getTrafficMaskData?date=${date}&camera_name=${cam}`)
        .then(data => data.json())
        .then(data1 => {
            const {data} = data1
            console.log(data)
            let time = []
            let total_people_count = []
            let pedestrian_mask_count  = []
            let pedestrian_no_mask_count = []
            
            for(let i=0;i<data.length;i++){
                time.push(data[i].time)
                pedestrian_mask_count.push(data[i].people_with_mask)
                pedestrian_no_mask_count.push(data[i].people_without_mask)
                total_people_count.push(data[i].people_with_mask+data[i].people_without_mask)
            }

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
                          text: 'Pedestrain Mask Detection Paramaters'
                        },
                      },
                    title: {
                        text: 'Real time graph displaying count of people wearing/not wearing wrt. time',
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
                            name: "Total People",
                            type: 'column',
                            data: total_people_count
                        },
                        {
                            name: "People not wearing masks",
                            type: 'line',
                            data: pedestrian_no_mask_count
                        },
                        {
                            name: "People wearing masks.",
                            type: 'line',
                            data: pedestrian_mask_count
                        },]
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
        setCam(data.value)
        fetch(`${baseUrl}/getTrafficMaskData?date=${date}&camera_name=${cam}`)
        .then(data => data.json())
        .then(data1 => {
            const {data} = data1
            console.log(data)
            let time = []
            let total_people_count = []
            let pedestrian_mask_count  = []
            let pedestrian_no_mask_count = []
            
            for(let i=0;i<data.length;i++){
                time.push(data[i].time)
                pedestrian_mask_count.push(data[i].people_with_mask)
                pedestrian_no_mask_count.push(data[i].people_without_mask)
                total_people_count.push(data[i].people_with_mask+data[i].people_without_mask)
            }
            console.log(pedestrian_mask_count)

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
                          text: 'Pedestrain Mask Detection Paramaters'
                        },
                      },
                    title: {
                        text: 'Real time graph displaying count of people wearing/not wearing wrt. time',
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
                            name: "Total People",
                            type: 'area',
                            data: total_people_count
                        },
                        {
                            name: "People not wearing masks",
                            type: 'area',
                            data: pedestrian_no_mask_count
                        },
                        {
                            name: "People wearing masks.",
                            type: 'area',
                            data: pedestrian_mask_count
                        },]
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
            type="area"
            width="600"
            height="400"/>
        </div>
    )       
}

export default LineChart2;
