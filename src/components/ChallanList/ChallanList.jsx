import { useState, useEffect } from "react"
import { Button, Card, Confirm, List} from 'semantic-ui-react'
import axios from 'axios';
import {api1} from './../../api/index'

const ChallanList = () => {

    const [challans,setChallans] = useState(['a'])
    const url = api1


    useEffect(() => {
        let challanData;
        fetch(`${url}/getAllChalans`)
        .then(data => data.json())
        .then(data1 => {
            const {dataC} = data1
            console.log(dataC)
            challanData = dataC
            setChallans(challanData)
            console.log(challanData)
        })
    },[setChallans])

    const handleResolve = (challanNum) => {

        var config = {
        method: 'put',
        url: `${url}/markAsResolved?chalan_no=${challanNum}`,
        headers: { }
        };
        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
        alert("Challan Resolved Successfully")
    }


    return (
             challans.map((challanData, idx) => (
                    <Card className="row w3-border">
                    <Card.Content>
                      <Card.Header>{challanData["chalan_number"]}</Card.Header>
                      <Card.Meta>{challanData["desc"]}</Card.Meta>
                      <List>
                        <List.Item icon='camera' content={challanData["camera"]} />
                        <List.Item icon='calendar' content={challanData["Date"]} />
                        <List.Item icon='time' content={challanData["Time"]} />
                        <List.Item icon='money' content={"Rs." +challanData["Amount"]} />
                        <List.Item icon='phone' content={challanData["contact"]} />
                        <List.Item icon='car' content={challanData["number"]} />
                      </List>
                    <Card.Content extra>
                      <div className='ui two buttons'>
                        {challanData["status"] === "Pending" ? <Button basic color='green' onClick={()=>{handleResolve(challanData["chalan_number"])}} key={challanData['chalan_number']}>
                          Resolve Challan
                        </Button> :<Button basic color='red' disabled>
                          Resolved
                        </Button> }
                      </div>
                    </Card.Content>
                  </Card.Content>
                  </Card>
                )
    ))
}

export default ChallanList;