import React from 'react';
import { BarChart4, BarChart3, ChallanForm, ChallanList, ProcessImage } from '../../components';
import { Grid, Image } from 'semantic-ui-react'
const TrafficInformation1  = () => {
    console.log("Hello Hi")
    return (
        <div>
            <center><h1 class="ui header">Traffic Data Information</h1></center>
            <Grid celled>
                
            <Grid.Row>
                <Grid.Column width={8}>
                    <h2 class="ui-header">Historical Data - Traffic Counts</h2>
                    <BarChart3 date="2021-01-01" camera="camera1"/>
                </Grid.Column>
                <Grid.Column width={8}>
                    <h2 class="ui-header">Historical Data - Mask Counts</h2>
                    <BarChart4 date="2021-01-01" camera="camera1"/>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
    )
}

export default TrafficInformation1;