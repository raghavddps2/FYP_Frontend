import React from 'react';
import { LineChart1, LineChart2} from '../../components';
import { Grid, Image } from 'semantic-ui-react'
const TrafficInformation2  = () => {
    console.log("Hello Hi")
    return (
        <div>
            <center><h1 class="ui header">Traffic Data Information</h1></center>
            <Grid celled>
                
            <Grid.Row>
                <Grid.Column width={8}>
                    <h2 class="ui-header">Historical Data - Traffic Counts of Individual Vehicles</h2>
                    <LineChart1 date="2021-01-01" camera="camera1"/>
                </Grid.Column>
                <Grid.Column width={8}>
                    <h2 class="ui-header">Historical Data - Specific count of People wearing/Not wearing masks.</h2>
                    <LineChart2 date="2021-01-01" camera="camera1"/> 
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
    )
}

export default TrafficInformation2;