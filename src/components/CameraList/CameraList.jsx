import React, {useState,useEffect} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

import Loader from "react-loader-spinner";
import {api1} from './../../api/index'
const CameraList = () => {

    const [cameraData,setCameraData] = useState([])
    const [data,setData] = useState(false)
    const url = api1
    useEffect(()=> {
        fetch(`${url}/getAllCameraDetails`)
        .then((response)=> response.json())
        .then((response)=>{
            setCameraData(response.data);
            setData(true)
        })
    },[setCameraData])

    return (
        data == false ? <center><Loader className="loader"
        type="Puff"
        color="#00BFFF"
        width={200}
        height={200}
    /></center> :
        cameraData.map((camera)=>{
            return (
                <Card className="w3-container w3-margin w3-panel w3-topbar w3-bottombar w3-border-red w3-pale-red">
                    <Image src='https://5.imimg.com/data5/RC/NQ/MY-29870930/traffic-camera-500x500.jpg' wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>Camera Name: {camera["name"]}</Card.Header>
                    <Card.Meta>Latitude: {camera["latitude"]}</Card.Meta>
                    <Card.Meta>Longitude: {camera["longitude"]}</Card.Meta>
                    <Card.Description>
                        Police Station : {camera["police_station"]}
                        <br></br>
                        Date of Installation: {camera["date_of_installation"]}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='map' />
                        {camera["location"]}
                    </a>
                    </Card.Content>
                </Card>
            )
        })
        
)}


export default CameraList