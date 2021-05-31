import react, {useCallback} from "react"
import { Redirect } from 'react-router';
import {useHistory} from 'react-router-dom';
import { Button, Card, Confirm, List, Grid} from 'semantic-ui-react'
const HomePage = () => {

    const history = useHistory();
    const handleOnClick = useCallback((event) => {
        const route = event.currentTarget.dataset.id
        history.push(route)
    },[history]);
    

    return (
        <div>
            <center><h1 className="ui-header">Dashboards</h1></center>
            <Grid celled>
                
            <Grid.Row>
                <Grid.Column width={16}>
                    <center><h2 class="ui-header">Real Time Edge Device Demo</h2></center>
                    <br></br>
                    <button data-id="/realTimeTrafficDemo" onClick={handleOnClick} class="fluid ui button">Real Time Traffic Counting Demo</button>
                    <button data-id="/realTimeMaskDemo" onClick={handleOnClick} class="fluid ui button">Real Time Mask Detection Demo</button>
                </Grid.Column>
            </Grid.Row>    
            <Grid.Row>
                <Grid.Column width={16}>
                    <center><h2 class="ui-header">Traffic Department of Government</h2></center>
                    <br></br>
                    <button className="" data-id="/trafficAllocate" onClick={handleOnClick} class="fluid ui button">Police allocation based on Traffic</button>
                    <button data-id="/maskAllocate" onClick={handleOnClick} class="fluid ui button">Police allocation based on Social Distancing Norms</button>
                    <button data-id="/cameraInformation" onClick={handleOnClick} class="fluid ui button">All Edge Camera Information</button>
                    <button data-id="/challanDashboard" onClick={handleOnClick} class="fluid ui button">Chalan Dashboard - Semi Automated.</button>
                    <button data-id="/trafficInformation1" onClick={handleOnClick} class="fluid ui button">Traffic Insights - 1</button>
                    <button data-id="/trafficInformation2" onClick={handleOnClick} class="fluid ui button">Traffic Insights - 2</button>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={16}>
                    <center><h2 class="ui-header">Urban Planning department of Government.</h2></center>
                    <br></br>
                    <button data-id="/urbanInformation1" onClick={handleOnClick} on class="fluid ui button">Urban Planning Insights - 1</button>
                    <button data-id="/urbanInformation2" onClick={handleOnClick} class="fluid ui button">Urban Planning Insights - 2</button>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={16}>
                    <center><h2 class="ui-header">Citizens</h2></center>
                    <br></br>
                    <button data-id="/unsafeAreas" onClick={handleOnClick} class="fluid ui button">Unsafe Areas</button>
                </Grid.Column>
            </Grid.Row>
            
            </Grid>
        </div>
    )
   
}

export default HomePage;