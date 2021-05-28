import React, {useState, useEffect} from 'react';
import Chart from "react-apexcharts"
import {api1} from '../../api/index'
const ScatterChart = () => {
    const baseUrl = api1
    const [stateData,setStateData] = useState({
        series: [
            {
                data: []
            },
        ],
        options: {
            chart: {
              height: 350,
              type: 'scatter',
              zoom: {
                enabled: true,
                type: 'xy'
              }
            },
            noData: {
                text: 'Loading...'
            },
            xaxis: {
              tickAmount: 10,
              title: {
                  text: 'Camera'
              }
            },
            yaxis: {
              tickAmount: 7,
              title: {
                  text: "Average no of pedestrians and vehicles (signifies business)"
              }
            }
          },

    })

    useEffect(() => {

        fetch(`${baseUrl}/getUrbanPlanningAllocation`)
        .then(data => data.json())
        .then(data1 => {
            const {data : {Allocation1, Allocation2}} = data1
            let busyData = []
            let notBusyData = []
            for(let i=0;i<Allocation1.length;i++){
                busyData.push([i+1,Allocation1[i].average_count])
            }
            for(let i=Allocation1.length;i<Allocation2.length;i++){
                notBusyData.push([i+1,Allocation2[i].average_count])
            }
            let seriesData = []
            seriesData.push({
                name: "Busy Areas",
                data: busyData
            })

            seriesData.push({
                name: "Less Crowded Areas",
                data: notBusyData
            })
            const temp = {
                series: seriesData,
                options: {
                    chart: {
                      height: 350,
                      type: 'scatter',
                      zoom: {
                        enabled: true,
                        type: 'xy'
                      }
                    },
                    noData: {
                        text: 'Loading...'
                    },
                    xaxis: {
                      tickAmount: 10,
                      title: {
                          text: 'Camera'
                      }
                    },
                    yaxis: {
                      tickAmount: 7,
                      min: 1600,
                      title: {
                          text: "Average no of pedestrians and vehicles (signifies business)"
                      }
                    }
                  },
        
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
            height="600"/>
    )       
}

export default ScatterChart;
