import React from 'react';
import { BarChart1 } from '../../components';
import { Grid, Image } from 'semantic-ui-react'
const TrafficAllocate  = () => {
    console.log("Hello Hi")
    return (
        <div>
            <center><h1 class="ui header">Traffic Police Allocation according to Vehicle Traffic</h1></center>
            <Grid celled>
                <Grid.Row>
                <Grid.Column width={5}>
                    <h2 class="ui header">Traffic Police Allocation - 00:00 - 08:00</h2>
                    <BarChart1 name="Allocation1" />
                </Grid.Column>
                <Grid.Column width={5}>
                    <h2 class="ui header">Traffic Police Allocation - 00:80 - 16:00</h2>
                    <BarChart1 name="Allocation2" />
                </Grid.Column>
                <Grid.Column width={5}>
                <h2 class="ui header">Traffic Police Allocation - 16:00 - 24:00</h2>
                    <BarChart1 name="Allocation3" />
                </Grid.Column>
                </Grid.Row>
                
            </Grid>
        </div>
    )
}

export default TrafficAllocate;