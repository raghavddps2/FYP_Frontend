import React, {useState, useEffect} from 'react';
import Chart from "react-apexcharts"
import {api1} from '../../api/index'
const RangeBarChart = () => {
    const baseUrl = api1
    const [stateData,setStateData] = useState({
        options: {
        chart: {
            height: 350,
            type: 'rangeBar'
          },
          stroke: {
            colors: ['transparent'],
            width: 2,    
        },
          plotOptions: {
            bar: {
              horizontal: true,
              columnWidth: '20%'
            }
          },
          noData: {
            text: 'Range Bar Chart - The longer the range, the More Unsafe the area is.'
        },
        xaxis: {
            categories: [],
            title: {
                text: 'Axis Scale'
            }
        },
        yaxis: {
            title: {
                text: 'Heavy vehicles and pedestrians distance.'
            }
        },
          dataLabels: {
            enabled: true,
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              type: 'vertical',
              
              shadeIntensity: 0.25,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [50, 0, 100, 100]
            }
          },
          xaxis: {
            type: 'datetime'
          },
          legend: {
            position: 'top'
          }
          },
            series:[]
    })

    useEffect(() => {

        fetch(`${baseUrl}/safeAreasCollectively`)
        .then(data => data.json())
        .then(data1 => {
            const {data} = data1
            let ans = []
            let p = []
            let ser = []
            for(const prop in data){
                console.log(prop)
                p.push(prop)
                ans.push([{
                    x : 'Heavy Vehicles and Pedestrians',
                    y : [
                        data[prop][1],data[prop][0]
                    ]    
                }])
            }

            for(let i=0;i<ans.length;i++){
                ser.push({name: p[i],data: ans[i]})
            }
            console.log(ser);

            const temp = {
                options: {
                chart: {
                    height: 350,
                    type: 'rangeBar'
                  },
                  plotOptions: {
                    bar: {
                      horizontal: true
                    }
                  },
                  dataLabels: {
                    enabled: true,
                  },
                  fill: {
                    type: 'gradient',
                    margin: '10px',
                    gradient: {
                      shade: 'light',
                      type: 'vertical',
                      
                      shadeIntensity: 0.25,
                      gradientToColors: undefined,
                      inverseColors: true,
                      opacityFrom: 1,
                      opacityTo: 1,
                      stops: [50, 0, 100, 100]
                    }
                  },
                  xaxis: {
                    type: 'datetime'
                  },
                  legend: {
                    position: 'top'
                  }
                  },
                    series:ser
            }
            setStateData(temp)
        })
    },[setStateData])
    

    return (
        <Chart
            options={stateData.options}
            series={stateData.series}
            type="rangeBar"
            width="600"
            height="600"/>
    )       
}

export default RangeBarChart;
