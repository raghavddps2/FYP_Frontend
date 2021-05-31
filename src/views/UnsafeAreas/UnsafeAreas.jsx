import React from 'react';
import { BarChart5,BarChart6, PolarChart1,PolarChart2} from '../../components';
import { Grid, Image } from 'semantic-ui-react'
const UnsafeAreas  = () => {
    console.log("Hello Hi")
    return (
        <div>
            <center><h1 class="ui header">Night Unsafe Areas - Based on Heavy Vehicles and Pedestrians count.</h1></center>
            <Grid celled>
                
            <Grid.Row>
                <Grid.Column width={8}>
                    <h2 class="ui-header">Unsafe Areas - With respect to heavy vehicle traffic.</h2>
                    <PolarChart1/>
                </Grid.Column>
                <Grid.Column width={8}>
                    <h2 class="ui-header">Unsafe Areas - With respect to less pedestrains on road.</h2>
                    <PolarChart2/>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
    )
}

export default UnsafeAreas;