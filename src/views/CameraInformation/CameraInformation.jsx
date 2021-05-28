import React from 'react';
import { BarChart2, CameraList } from '../../components';
import { Grid, Image } from 'semantic-ui-react'
const CameraInformation = () => {
    console.log("Hello Hi")
    return (
        <div>
            <center><h1 class="ui header"> Details of Installed Cameras </h1></center>
            <Grid celled>
                <Grid.Row>
                    <CameraList/>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default CameraInformation;