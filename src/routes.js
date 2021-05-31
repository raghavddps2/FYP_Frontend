import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { HomePage } from './components';
import { ChallanAllocate, MaskAllocate, TrafficAllocate, TrafficInformation1,TrafficInformation2, CameraInformation, UnsafeAreas, UrbanInformation1,UrbanInformation2, RealTimeMask } from './views';
import RealTimeTraffic from './views/RealTimeTraffic/RealTimeTraffic';

export const Routes = () => {
    console.log("Hello")
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />  
        <Route exact path="/trafficAllocate" component={TrafficAllocate} />
        <Route exact path="/maskAllocate" component={MaskAllocate} />
        <Route exact path="/challanDashboard" component={ChallanAllocate} />
        <Route exact path="/trafficInformation1" component={TrafficInformation1} />
        <Route exact path="/trafficInformation2" component={TrafficInformation2} />
        <Route exact path="/urbanInformation1" component={UrbanInformation1} />
        <Route exact path="/urbanInformation2" component={UrbanInformation2} />
        <Route exact path="/cameraInformation" component={CameraInformation} />
        <Route exact path="/unsafeAreas" component={UnsafeAreas} />
        <Route exact path="/realTimeTrafficDemo" component={RealTimeTraffic} />
        <Route exact path="/realTimeMaskDemo" component={RealTimeMask} />

      </Switch>
    </div>
  );
};