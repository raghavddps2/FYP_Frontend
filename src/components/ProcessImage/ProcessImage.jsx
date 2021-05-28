import React, { Component } from "react";
import ReactDOM from "react-dom";
import Loader from "react-loader-spinner";
import {api2} from './../../api/index'
import {
  Button,
  Segment,
  Divider,
  Image,
  Tab,
  Table,
  Message,
  Checkbox,
  Form,
  Icon,
  Input,
  Dropdown,
  Dimmer,
  Label,
  Progress
} from "semantic-ui-react";

import axios from "axios";

class ProcessImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      file: null,
      fileName: "",
      isUploading: false,
      statusCode: "",
      VehicleNum: ""
    };
  }
  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  onFormSubmit = async (e) => {
    e.preventDefault(); // Stop form submit
    console.log("form submit");
    this.setState({...this.state,isUploading: true })
    await this.sleep(2000)
    this.fileUpload(this.state.file);
  };


  fileChange = e => {
    this.setState(
      {result: URL.createObjectURL(e.target.files[0]), file: e.target.files[0], fileName: e.target.files[0].name},
      () => {
        console.log(
          "File chosen --->",
          this.state.file,
          console.log("File name  --->", this.state.fileName)
        );
      }
    );
  };

  

  fileUpload = async file => {
      console.log(this.state)
    var formdata = new FormData();
    formdata.append("image", file,this.state.fileName);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch(`${api2}/getNumberFromImage`, requestOptions)
    .then(response => response.json())
    .then(result => {
        const newState = {...this.state,VehicleNum: result.number}
        console.log(newState)
        this.setState(newState)
    })
    .catch(error => console.log('error', error));
    this.setState({...this.state,isUploading: false})
  };


  render() {
    const { statusCode } = this.state;
    const panes = [
      {
        render: () => (
          <Tab.Pane attached={false}>
            <Message className="w3-red">
              <Message.Header>{this.state.VehicleNum}</Message.Header>
               <p>The number detected is above</p>
            </Message>
            <Message>We aim to use the tool like this: When the images of the cars that violate rules are sent rom the server, they can be directly passed through the detection service. The UI is just to show the approach.</Message>
            <Form onSubmit={this.onFormSubmit}>
              <Form.Field>
                <label></label>
                <Button as="label" htmlFor="file" type="button" animated="fade">
                  <Button.Content visible>
                    <Icon name="file" />
                  </Button.Content>
                  <Button.Content hidden>Choose the Image recived from edge camera</Button.Content>
                </Button>
                <input
                  type="file"
                  id="file"
                  hidden
                  onChange={this.fileChange}
                />
                <Form.Input
                  fluid
                  label="File Chosen: "
                  placeholder="Use the above bar to browse your file system"
                  readOnly
                  value={this.state.fileName}
                />
                 <Image src={this.state.result} size='large' />
                 {console.log(this.state.isUploading)}
                 {this.state.isUploading === true ?  <center><Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                    /></center> : null}
                <Button style={{ marginTop: "20px" }} type="submit">
                  Upload
                </Button>
              </Form.Field>
            </Form>
          </Tab.Pane>
        )
      }
    ];
    return (
      <Segment style={{ padding: "5em 1em" }} vertical>
        <Divider horizontal>Number Plate Extractor</Divider>
        <Tab menu={{ pointing: true }} panes={panes} />
      </Segment>
    );
  }
}

export default ProcessImage;