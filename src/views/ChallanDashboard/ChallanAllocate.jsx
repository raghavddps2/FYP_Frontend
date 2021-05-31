import React from 'react';
import { BarChart2, ChallanForm, ChallanList, ProcessImage } from '../../components';
import { Grid, Image } from 'semantic-ui-react'
const ChallanAllocate  = () => {
    console.log("Hello Hi")
    return (
        <div>
            <center><h1 class="ui header">Automated Challan Dashboard</h1></center>
            <Grid celled>
                
            <Grid.Row>
                <Grid.Column width={8}>
                    <h2 class="ui-header">Challan Form</h2>
                    <ChallanForm/>
                </Grid.Column>
                <Grid.Column width={8}>
                    <h2 class="ui-header">Number Plate Identification System</h2>
                    <ProcessImage/>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={16}>
                    <h1 class="ui-header">List of Challans Raised</h1>
                    <ChallanList/>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
    )
}

export default ChallanAllocate;