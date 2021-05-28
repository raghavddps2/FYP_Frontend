import { useState } from "react"
import Loader from "react-loader-spinner";
import {api1} from './../../api/index'
import axios from 'axios';

const ChallanForm = () => {

    const url = `${api1}/raiseChalan`
    const [submitting, setSubmitting] = useState(false);
    const [desc,setDesc] = useState('')
    const [time,setTime] = useState('')
    const [date,setDate] = useState('')
    const [camera,setCamera] = useState('')
    const [challanAmt,setChallanAmt] = useState('')
    const [contactNo,setContactNo] = useState('')
    const [VNum,setVNum] = useState('')
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true)
        
        const datatToSubmit = {
            "contact": contactNo,
            "Amount": challanAmt,
            "Time":time,
            "Date":date,
            "number":VNum,
            "camera":camera,
            "desc":desc
        }    
        console.log(datatToSubmit)
        var data = JSON.stringify(datatToSubmit)
        var config = {
          method: 'post',
          url: url,
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
        await sleep(2000)
        setSubmitting(false)
        alert('Challan Submitted Successfully')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                <label>
                    <p>Challan Description</p>
                    <input name="challanDesc" onInput={e => setDesc(e.target.value)}/>
                </label>
                <label>
                    <p>Vehicle No</p>
                    <input name="VehicleNo" onInput={e => setVNum(e.target.value)}/>
                </label>
                </fieldset>
                <fieldset>
                <label>
                    <p>Challan Time</p>
                    <input type="time" name="challanTime" onInput={e => setTime(e.target.value)}/>
                </label>
                <label>
                    <p>Challan Date</p>
                    <input type="date" name="challanDate" onInput={e => setDate(e.target.value)}/>
                </label>
                <label>
                    <p>Select Camera and Junction</p>
                    <select name="camandjunc" onInput={e => setCamera(e.target.value)}>
                        <option value="">--Please choose an option--</option>
                        <option value="camera1">Mathikere - Junction1 - Camera1</option>
                        <option value="camera10">Rajajinagar - Junction2 - Camera10</option>
                        <option value="camera11">Rajajinagar - Junction3 - Camera11</option>
                        <option value="camera12">Rajajinagar - Junction4 - Camera12</option>
                        <option value="camera2">Mathikere - Junction2 - Camera2</option>
                        <option value="camera3">Mathikere - Junction3 - Camera3</option>
                        <option value="camera4">Mathikere - Junction4 - Camera4</option>
                        <option value="camera5">Yeshwantpur - Junction1 - Camera5</option>
                        <option value="camera7">Yeshwantpur - Junction3 - Camera7</option>
                        <option value="camera6">Yeshwantpur - Junction2 - Camera6</option>
                        <option value="camera8">Yeshwantpur - Junction4 - Camera8</option>
                        <option value="camera9">Rajajinagar - Junction1 - Camera9</option>
                    </select>
                </label>
                <label>
                    <p>Challan Amount</p>
                    <input type="number" name="challanAmt" step="100" onInput={e => setChallanAmt(e.target.value)}/>
                </label>

                <label>
                    <p>Contact Number</p>
                    <input type="text" name="phoneNumber" onInput={e => setContactNo(e.target.value)}/>
                </label>
                </fieldset>
                {submitting === true ? <center><Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}//3 secs
      /></center> : null}
                <center><button type="submit" disabled={submitting}>Submit</button></center>
            </form>
        </div>
    )

}

export default ChallanForm