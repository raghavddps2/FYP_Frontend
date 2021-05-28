import React, {useState, useEffect} from 'react';
import Chart from "react-apexcharts"
import {api1} from './../../api/index'
const BarChart2 = ({name}) => {
    const baseUrl = api1
    const [stateData,setStateData] = useState({
        options: {
            chart: {
                id: name
            },
            noData: {
                text: 'Loading... Police Allocation - Pedestrian Face Masks'
            },
            xaxis: {
                categories: []
            },
            colors:['#F44336', '#E91E63', '#9C27B0']
            },
            
            series:[
            {
                name: name,
                data: []
            }]
    })

    useEffect(() => {
        console.log(name)
        fetch(`${baseUrl}/getTrafficMaskPoliceAllocation`)
        .then(data => data.json())
        .then(data1 => {
            const {data} = data1
            let data2
            if(name === "Allocation1") {
                const {Allocation1} = data
                const average_count = [Allocation1[0].average_count,Allocation1[1].average_count,Allocation1[2].average_count]
                const camera_locs = [Allocation1[0].camera+" "+Allocation1[0].camera_details.location,Allocation1[1].camera+" "+Allocation1[1].camera_details.location,Allocation1[2].camera+" "+Allocation1[2].camera_details.location]
                console.log(average_count)
                console.log(camera_locs)
                data2 =  {'average_count':average_count,'camera_locs':camera_locs}
            }
            else if(name === "Allocation2"){
                const {Allocation2} = data
                const average_count = [Allocation2[0].average_count,Allocation2[1].average_count,Allocation2[2].average_count]
                const camera_locs = [Allocation2[0].camera+" "+Allocation2[0].camera_details.location,Allocation2[1].camera+" "+Allocation2[1].camera_details.location,Allocation2[2].camera+" "+Allocation2[2].camera_details.location]
                console.log(average_count)
                console.log(camera_locs)
                data2 = {'average_count':average_count,'camera_locs':camera_locs}
            }
            else{
                const {Allocation3} = data
                const average_count = [Allocation3[0].average_count,Allocation3[1].average_count,Allocation3[2].average_count]
                const camera_locs = [Allocation3[0].camera+" "+Allocation3[0].camera_details.location,Allocation3[1].camera+" "+Allocation3[1].camera_details.location,Allocation3[2].camera+" "+Allocation3[2].camera_details.location]
                console.log(average_count)
                console.log(camera_locs)
                data2 = {'average_count':average_count,'camera_locs':camera_locs}
            }
            const temp = {
                options: {
                    chart: {
                        id: name
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
                        name: name,
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
            width="400"
            height="400"/>
    )       
}

export default BarChart2;
