import React from 'react';
import { BarChart2 } from '../../components';
import { Grid, Image } from 'semantic-ui-react'
const MaskAllocate  = () => {
    console.log("Hello Hi")
    return (
        <div>
            <center><h1 class="ui header">Traffic Police Allocation according to Social Distancing and Mask Detection Norms being followed.</h1></center>
            <Grid celled>
            <Grid.Row>
                <Grid.Column width={5}>
                    <h2 class="ui header">Traffic Police Allocation - 00:00 - 08:00</h2>
                    <BarChart2 name="Allocation1" />
                </Grid.Column>
                <Grid.Column width={5}>
                    <h2 class="ui header">Traffic Police Allocation - 00:80 - 16:00</h2>
                    <BarChart2 name="Allocation2" />
                </Grid.Column>
                <Grid.Column width={5}>
                <h2 class="ui header">Traffic Police Allocation - 16:00 - 24:00</h2>
                    <BarChart2 name="Allocation3" />
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default MaskAllocate;