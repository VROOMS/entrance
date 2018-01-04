import React, { Component } from "react";
import "./Home.css";
import { Cards } from "../../components/Cards";
import {Col, Row, Container} from "../../components/Grid";
// import maylineChair from "../../components/Cards/img/mayline_chair.png";
// import sauderDesk from "../../components/Cards/img/sauder_desk.png";
// import Rnd from "react-rnd"
// import Rnd from "react-rnd-rotate";
import {database} from "./firebase";



class Home extends Component {

  state = {
  };


  componentDidMount(){
  }

  // update db everytime dom update
  componentDidUpdate(){
    this.updateDatabase();
  }

  // update db method
  updateDatabase = () =>{
    let modelsData = this.state.modelsData;
    database.ref("-L0lnD2HZtHWqW9cmZYk").set(modelsData);
  }




  render(){
    console.log("==========================", this.state);

    return(
      <div>
      <div className="header">
        LOGO <a  href="https://vrooms.github.io/vr-room/" target="_blank">view room </a><span className="align-baseline">click here to visit your current room</span>
      </div>

    	<Container fluid>
        <Row>
          <Col size="col-12">
            <div id="title">
              <h1>Simulate your room</h1>
              <p>design and visualize your dream room</p>
            </div>
          </Col>
        </Row>


    		<Row>
          <div id="greenDiv"></div>

          <div className="stepDiv">
            <h5>step 1</h5>
            <p>Draw a shape of your room.<br/>
            Place the furniture of your choice into the room and fit them to the exact measurments of your home.</p>
          </div>

          <div id="pinkDiv"></div>

          <div className="stepDiv">
            <h5>step 2</h5>

          </div>

	      </Row>
	    </Container>
      </div>
      )
  }

}

export default Home;
