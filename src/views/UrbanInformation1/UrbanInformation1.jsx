import React from 'react';
import { BarChart5,BarChart6} from '../../components';
import { Grid, Image } from 'semantic-ui-react'
const UrbanInformation1  = () => {
    console.log("Hello Hi")
    return (
        <div>
            <center><h1 class="ui header">Traffic Data Information - Crowded and Uncrowded areas.</h1></center>
            <Grid celled>
                
            <Grid.Row>
                <Grid.Column width={8}>
                    <h2 class="ui-header">Areas with Maximum Heavy Vehicle Traffic</h2>
                    <BarChart5/>
                </Grid.Column>
                <Grid.Column width={8}>
                    <h2 class="ui-header">Areas with Minimum Pedestrian Traffic.</h2>
                    <BarChart6/>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
    )
}

export default UrbanInformation1;