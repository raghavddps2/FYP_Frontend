import React from 'react';
import { RangeBarChart, ScatterChart} from '../../components';
import { Grid, Image } from 'semantic-ui-react'
const UrbanInformation2  = () => {
    console.log("Hello Hi")
    return (
        <div>
            <center><h1 class="ui header">Better Road Planning and Citizens Safety</h1></center>
            <Grid celled>
                
            <Grid.Row>
                <Grid.Column width={8}>
                    <h2 class="ui-header">The Busy areas are the ones that needs better routing.</h2>
                    <ScatterChart/>
                </Grid.Column>
                <Grid.Column width={8}>
                    <h2 class="ui-header">Better view of safe roads/junctions.</h2>
                    <h2 class="ui-header"> Difference between count of Heavy vehicles and pedestrians.</h2>
                    <RangeBarChart/>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
    )
}

export default UrbanInformation2;