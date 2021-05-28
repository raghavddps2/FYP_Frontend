import React from 'react';
import './App.module.css';
import { BarChart1, BarChart6,  CameraList, ChallanForm, BarChart4, BarChart5, ChallanList, LineChart1,LineChart2, MapWithAMarker, ProcessImage, ShelterMap, RangeBarChart, ScatterChart, PolarChart1, PolarChart2, HomePage} from './components';
import { BarChart2 } from './components';
import BarChart3 from './components/BarChart3/BarChart3';

class App extends React.Component {


  render(){
    return (
      <div className="App">
          <HomePage/>  
      </div>
    )
  };
}

export default App;
