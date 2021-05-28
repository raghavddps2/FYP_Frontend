import React, {useState, useEffect} from 'react';
import Chart from "react-apexcharts"
import {api1} from '../../api/index'
const BarChart5 = () => {
    const baseUrl = api1
    const [stateData,setStateData] = useState({
        options: {
            chart: {
                id: "Top 3 areas with Maximum Heavy vehicle traffic"
            },
            noData: {
                text: 'Loading... Top 3 areas with Maximum Heavy vehicle traffic'
            },
            xaxis: {
                categories: [],
                title: {
                    text: 'Areas with Maximum Heavy Vehicle Traffic'
                }
            },
            yaxis: {
                title: {
                    text: 'Average count of heavy  vehicles in these areas'
                }
            },
            colors:['#F44336', '#E91E63', '#9C27B0']
            },
            
            series:[
            {
                name: "Top 3 areas with Maximum Heavy vehicle traffic",
                data: []
            }]
    })

    useEffect(() => {

        fetch(`${baseUrl}/getUrbanAnalytics1`)
        .then(data => data.json())
        .then(data1 => {
            const {data : {Allocation}} = data1
            let data2

            const average_count = [Allocation[0].average_count,Allocation[1].average_count,Allocation[2].average_count]
            const camera_locs = [Allocation[0].camera+" "+Allocation[0].camera_details.location,Allocation[1].camera+" "+Allocation[1].camera_details.location,Allocation[2].camera+" "+Allocation[2].camera_details.location]
            console.log(average_count)
            console.log(camera_locs)
            data2 = {'average_count':average_count,'camera_locs':camera_locs}
            
            const temp = {
                options: {
                    chart: {
                        id: "Top 3 areas with Maximum Heavy vehicle traffic"
                    },
                    noData: {
                        text: 'Loading...'
                    },
                    xaxis: {
                        categories: data2.camera_locs
                    },
                    colors:['#F44336', '#E91E63', '#9C27B0']
                    },
                    
                    series:[
                    {
                        name: "Top 3 areas with Maximum Heavy vehicle traffic",
                        data: data2.average_count
                    }]
            }
            setStateData(temp)
        })
    },[setStateData])
    

    return (
        <Chart
            options={stateData.options}
            series={stateData.series}
            type="bar"
            width="600"
            height="500"/>
    )       
}

export default BarChart5;
