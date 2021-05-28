import React, {useState, useEffect} from 'react';
import { Dropdown } from 'semantic-ui-react'
import Chart from "react-apexcharts"
import {api1} from './../../api/index'
const BarChart3 = ({date,camera}) => {
    const baseUrl = api1
    const [cam,setCam] = useState(camera)
    let drops = []
    for(let i=1;i<=12;i++){
        drops.push({key:"camera"+i,text:"camera"+i,value:"camera"+i,image:{ avatar: true, src: 'https://cdn2.iconfinder.com/data/icons/smart-city-11/100/smart-city-bw-28-512.png' }})
    }
    const [drop,setDrop] = useState(drops)
    const [stateData,setStateData] = useState([{
        options: {
            chart: {
                id: camera
            },
            noData: {
                text: 'Loading...'
            },
            stroke: {
                curve: 'straight'
              },
              noData: {
                    text: 'Loading'
              },
              fill: {
                opacity: 0.3,
              },
              yaxis: {
                min: 0
              },
              colors: ['#999999'],
              title: {
                text: "Loading...",
                offsetX: 0,
                style: {
                  fontSize: '24px',
                }
              },
              xaxis: {
                categories: [],
                title: {
                    text: 'Time of the day.'
                },
            },
              subtitle: {
                text: 'Total Vehicles',
                offsetX: 0,
                style: {
                  fontSize: '14px',
                }
              },
            xaxis: {
                categories: []
            }},
            
            series:[
            {
                data: []
            },]
    },{
        options: {
            chart: {
                id: camera
            },
            noData: {
                text: 'Loading...'
            },
            stroke: {
                curve: 'straight'
              },
              noData: {
                    text: 'Loading...'
              },
              fill: {
                opacity: 0.3,
              },
              yaxis: {
                min: 0
              },
              colors: ['#999999'],
              title: {
                text: "Loading...",
                offsetX: 0,
                style: {
                  fontSize: '24px',
                }
              },
              subtitle: {
                text: 'Toal Heavy Vehicles',
                offsetX: 0,
                style: {
                  fontSize: '14px',
                }
              },
            xaxis: {
                categories: []
            }},
            
            series:[
            {
                name: "Total Heavy Vehicles",
                type: 'column',
                data: []
            },]
    },{
        options: {
            chart: {
                id: camera
            },
            noData: {
                text: 'Loading...'
            },
            stroke: {
                curve: 'straight'
              },
              noData: {
                    text: 'Loading'
              },
              fill: {
                opacity: 0.3,
              },
              yaxis: {
                min: 0
              },
              colors: ['#999999'],
              title: {
                text: '$424,652',
                offsetX: 0,
                style: {
                  fontSize: '24px',
                }
              },
              subtitle: {
                text: 'Total Cars',
                offsetX: 0,
                style: {
                  fontSize: '14px',
                }
              },
            xaxis: {
                categories: []
            }},
            
            series:[
            {
                name: "Total Cars",
                type: 'column',
                data: []
            },]
    }])

    useEffect(() => {
        console.log("ji")
        console.log(date,cam)
        fetch(`${baseUrl}/getTrafficData?date=${date}&camera_name=${cam}`)
        .then(data => data.json())
        .then(data1 => {
            const {data,car,total,heavy} = data1
            console.log(data)
            let time = []
            let cars = []
            let totals = []
            let heavys = []
            for(let i=0;i<data.length;i++){
                time.push(data[i].time)
                cars.push(data[i].car_count)
                totals.push(data[i].total_vehicle_count)
                heavys.push(data[i].heavy_vehicle_count)
            }
            console.log(time)
            const temp = [{
                options: {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                        enabled: true
                        },
                        id: camera
                    },
                    noData: {
                        text: 'Loading...'
                    },
                    stroke: {
                        curve: 'straight'
                      },
                      noData: {
                            text: 'Loading'
                      },
                      fill: {
                        opacity: 0.3,
                      },
                      yaxis: {
                        min: 0
                      },
                      colors: ['#999999'],
                      title: {
                        text: 'Total Vehicles',
                        offsetX: 0,
                        style: {
                          fontSize: '24px',
                        }
                      },
                      subtitle: {
                        text: total,
                        offsetX: 0,
                        style: {
                          fontSize: '14px',
                        }
                      },
                    axis: {
                      categories: time,
                      title: {
                          text: 'Time of the day.'
                      },
                  }},
                    
                    series:[
                    {
                        data: totals
                    },]
            },{
                options: {
                    chart: {
                        id: camera,
                        type: 'area',
                        height: 160,
                        sparkline: {
                        enabled: true
                        },
                    },
                    noData: {
                        text: 'Loading...'
                    },
                    stroke: {
                        curve: 'straight'
                      },
                      noData: {
                            text: 'Loading...'
                      },
                      fill: {
                        opacity: 0.3,
                      },
                      yaxis: {
                        min: 0
                      },
                      colors: ['#999999'],
                      title: {
                        text: 'Toal Heavy Vehicles',
                        offsetX: 0,
                        style: {
                          fontSize: '24px',
                        }
                      },
                      subtitle: {
                        text: heavy,
                        offsetX: 0,
                        style: {
                          fontSize: '14px',
                        }
                      },
                    xaxis: {
                        categories: time
                    }},
                    
                    series:[
                    {
                        name: "Total Heavy Vehicles",
                        type: 'column',
                        data: heavys
                    },]
            },{
                options: {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                        enabled: true
                        },
                        id: camera
                    },
                    noData: {
                        text: 'Loading...'
                    },
                    stroke: {
                        curve: 'straight'
                      },
                      noData: {
                            text: 'Loading'
                      },
                      fill: {
                        opacity: 0.3,
                      },
                      yaxis: {
                        min: 0
                      },
                      colors: ['#999999'],
                      title: {
                        text: 'Total Cars',
                        offsetX: 0,
                        style: {
                          fontSize: '24px',
                        }
                      },
                      subtitle: {
                        text: car,
                        offsetX: 0,
                        style: {
                          fontSize: '14px',
                        }
                      },
                    xaxis: {
                        categories: time
                    }},
                    
                    series:[
                    {
                        name: "Total Cars",
                        type: 'column',
                        data: cars
                    },]
            }]

            setStateData(temp)
            setDrop(drops)
        })
    },[setStateData])
    
    const handleOnChange = (e, data) => {
        console.log(data.value)
        setStateData([{
            options: {
                chart: {
                    id: camera
                },
                noData: {
                    text: 'Loading...'
                },
                stroke: {
                    curve: 'straight'
                  },
                  noData: {
                        text: 'Loading'
                  },
                  fill: {
                    opacity: 0.3,
                  },
                  yaxis: {
                    min: 0
                  },
                  colors: ['#999999'],
                  title: {
                    text: "Loading...",
                    offsetX: 0,
                    style: {
                      fontSize: '24px',
                    }
                  },
                  subtitle: {
                    text: 'Total Vehicles',
                    offsetX: 0,
                    style: {
                      fontSize: '14px',
                    }
                  },
                xaxis: {
                    categories: []
                }},
                
                series:[
                {
                    data: []
                },]
        },{
            options: {
                chart: {
                    id: camera
                },
                noData: {
                    text: 'Loading...'
                },
                stroke: {
                    curve: 'straight'
                  },
                  noData: {
                        text: 'Loading...'
                  },
                  fill: {
                    opacity: 0.3,
                  },
                  yaxis: {
                    min: 0
                  },
                  colors: ['#999999'],
                  title: {
                    text: "Loading...",
                    offsetX: 0,
                    style: {
                      fontSize: '24px',
                    }
                  },
                  subtitle: {
                    text: 'Toal Heavy Vehicles',
                    offsetX: 0,
                    style: {
                      fontSize: '14px',
                    }
                  },
                xaxis: {
                    categories: []
                }},
                
                series:[
                {
                    name: "Total Heavy Vehicles",
                    type: 'column',
                    data: []
                },]
        },{
            options: {
                chart: {
                    id: camera
                },
                noData: {
                    text: 'Loading...'
                },
                stroke: {
                    curve: 'straight'
                  },
                  noData: {
                        text: 'Loading'
                  },
                  fill: {
                    opacity: 0.3,
                  },
                  yaxis: {
                    min: 0
                  },
                  colors: ['#999999'],
                  title: {
                    text: 'Total Cars',
                    offsetX: 0,
                    style: {
                      fontSize: '24px',
                    }
                  },
                  subtitle: {
                    text: 'Loading...',
                    offsetX: 0,
                    style: {
                      fontSize: '14px',
                    }
                  },
                xaxis: {
                    categories: []
                }},
                
                series:[
                {
                    name: "Total Cars",
                    type: 'column',
                    data: []
                },]
        }])
        setCam(data.value)
        fetch(`${baseUrl}/getTrafficData?date=${date}&camera_name=${cam}`)
        .then(data => data.json())
        .then(data1 => {
            const {data,car,total,heavy} = data1
            console.log(data)
            let time = []
            let cars = []
            let totals = []
            let heavys = []
            for(let i=0;i<data.length;i++){
                time.push(data[i].time)
                cars.push(data[i].car_count)
                totals.push(data[i].total_vehicle_count)
                heavys.push(data[i].heavy_vehicle_count)
            }

            const temp = [{
                options: {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                        enabled: true
                        },
                        id: camera
                    },
                    noData: {
                        text: 'Loading...'
                    },
                    stroke: {
                        curve: 'straight'
                      },
                      noData: {
                            text: 'Loading'
                      },
                      fill: {
                        opacity: 0.3,
                      },
                      yaxis: {
                        min: 0
                      },
                      colors: ['#999999'],
                      title: {
                        text: 'Total Vehicles',
                        offsetX: 0,
                        style: {
                          fontSize: '24px',
                        }
                      },
                      subtitle: {
                        text: total,
                        offsetX: 0,
                        style: {
                          fontSize: '14px',
                        }
                      },
                    xaxis: {
                        categories: time
                    }},
                    
                    series:[
                    {
                        data: totals
                    },]
            },{
                options: {
                    chart: {
                        id: camera,
                        type: 'area',
                        height: 160,
                        sparkline: {
                        enabled: true
                        },
                    },
                    noData: {
                        text: 'Loading...'
                    },
                    stroke: {
                        curve: 'straight'
                      },
                      noData: {
                            text: 'Loading...'
                      },
                      fill: {
                        opacity: 0.3,
                      },
                      yaxis: {
                        min: 0
                      },
                      colors: ['#999999'],
                      title: {
                        text: 'Toal Heavy Vehicles',
                        offsetX: 0,
                        style: {
                          fontSize: '24px',
                        }
                      },
                      subtitle: {
                        text: heavy,
                        offsetX: 0,
                        style: {
                          fontSize: '14px',
                        }
                      },
                    xaxis: {
                        categories:time
                    }},
                    
                    series:[
                    {
                        name: "Total Heavy Vehicles",
                        type: 'column',
                        data: heavys
                    },]
            },{
                options: {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                        enabled: true
                        },
                        id: camera
                    },
                    noData: {
                        text: 'Loading...'
                    },
                    stroke: {
                        curve: 'straight'
                      },
                      noData: {
                            text: 'Loading'
                      },
                      fill: {
                        opacity: 0.3,
                      },
                      yaxis: {
                        min: 0
                      },
                      colors: ['#999999'],
                      title: {
                        text: 'Total Cars',
                        offsetX: 0,
                        style: {
                          fontSize: '24px',
                        }
                      },
                      subtitle: {
                        text: car,
                        offsetX: 0,
                        style: {
                          fontSize: '14px',
                        }
                      },
                    xaxis: {
                        categories: time
                    }},
                    
                    series:[
                    {
                        name: "Total Cars",
                        type: 'column',
                        data: cars
                    },]
            }]

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
            options={stateData[0].options}
            series={stateData[0].series}
            type="area"
            width="600"
            height="400"/>
             <br></br>
        <Chart
            options={stateData[1].options}
            series={stateData[1].series}
            type="bar"
            width="600"
            height="400"/>
            <br></br>
        <Chart
            options={stateData[2].options}
            series={stateData[2].series}
            type="bar"
            width="600"
            height="400"/>
        </div>
        
    )       
}

export default BarChart3;
