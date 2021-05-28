import React, {useState, useEffect} from 'react';
import Chart from "react-apexcharts"
import {api1} from '../../api/index'
const PolarChart1 = () => {
    const baseUrl = api1
    const [stateData,setStateData] = useState({
        series: [],
    options: {
      chart: {
        type: 'polarArea',
      },
      stroke: {
        colors: ['#fff']
      },
      fill: {
        opacity: 0.8
      },
      noData: {
        text: 'Getting unsafe areas based on Traffic - Heavy Vehicles.'
        },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
    })

    useEffect(() => {

        fetch(`${baseUrl}/getUnsafeAreasByTraffic`)
        .then(data => data.json())
        .then(data1 => {
            const {data : {UnsafeArea1, UnsafeArea2, UnsafeArea3}} = data1
            let values = []
            let labels = []
            for(let i=0;i<UnsafeArea1.length;i++){
                values.push(UnsafeArea1[i]["average_count"])
                labels.push(UnsafeArea1[i]["camera"] + " 00:00 - 08:00")
            }
            for(let i=0;i<UnsafeArea2.length;i++){
                values.push(UnsafeArea2[i]["average_count"])
                labels.push(UnsafeArea2[i]["camera"] + " 08:00 - 16:00")
            }
            for(let i=0;i<UnsafeArea3.length;i++){
                values.push(UnsafeArea3[i]["average_count"])
                labels.push(UnsafeArea3[i]["camera"] + " 16:00 - 24:00")
            }
            const temp = {
                series: values,
            options: {
              chart: {
                type: 'polarArea',
              },
              labels: labels,
              stroke: {
                colors: ['#fff']
              },
              fill: {
                opacity: 0.8
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          };
            setStateData(temp)
        })
    },[setStateData])
    

    return (
        <Chart
            options={stateData.options}
            series={stateData.series}
            type="polarArea"
            width="600"
            height="600"/>
    )       
}

export default PolarChart1;
