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


  // componentDidMount(){
  // }

  // update db everytime dom update
  // componentDidUpdate(){
  //   this.updateDatabase();
  // }

  // update db method
  // updateDatabase = () =>{
  //   let modelsData = this.state.modelsData;
  //   database.ref("-L0lnD2HZtHWqW9cmZYk").set(modelsData);
  // }

  openGithubJin = () =>{
      window.open("https://www.w3schools.com");
  };


  openGithubMatt = () =>{
    window.open("https://www.w3schools.com");
  };

  render(){
    console.log("==========================", this.state);

    return(
      <div>

    	<Container fluid>
        <div id="logoDiv">
          <img id="logo" src="/images/logo.png" />
        </div>
        <Row>
          <Col size="col-12">
            <div id="title">
              <h1>Simulate your room</h1>
              <p>design and visualize your dream room</p>
              <a className="btn btn-primary"  href="https://vrooms-editor.herokuapp.com/" target="_blank"><strong>start here</strong></a>
            </div>
          </Col>
        </Row>


    		<Row>
          <div id="greenDiv">
            <img id="icon1" src="/images/icon1.png" alt="icon1" />
          </div>

          <div className="stepDiv">
            <h5>step 1</h5>
            <ul>
              <li>Draw a shape of your room.</li>
              <li>Place the furniture of your choice into the room and fit them to the exact measurments of your room.</li>
            </ul>
          </div>


          <div id="pinkDiv">
            <img id="icon2" src="/images/icon2.png" alt="icon2" />
          </div>

          <div className="stepDiv">
            <h5>step 2</h5>
            <ul>
              <li>Visit your room in 360 degree virtual reality environment.</li>
            </ul>
          </div>

	      </Row>
	    </Container>

      <div id="footerContainer">
        <div id="footerContent">
          <p className="white-font">
          Jin Redmond
          <button className="btn rounded-circle btn-secondary linkedIn-btn" onClick={this.openGithubJin}>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
          </button> 
          Matt
          <button className="btn rounded-circle btn-secondary github-btn" onClick={this.openGithubMatt}>
            <i className="fa fa-github-alt" aria-hidden="true"></i>
          </button></p>
          <p className="white-font">Copyright <i className="fa fa-copyright" aria-hidden="true"></i> 2018</p>
        </div>
      </div>

      </div>
      )
  }

}

export default Home;
