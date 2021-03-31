import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";
 
export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1 style={{ padding: 20,color: 'darkviolet',fontFamily:'cursive',fontWeight:'bold',backgroundColor:'#09DD00',fontSize:60}}>NEVAR SYSTEMS</h1>
          <br/>
          <h2>LPB DIVISIONS</h2>
          <br/>
          <form>
            <Button variant="btn btn-danger btn-lg" onClick={() => history.push('/Products')}>Click button to view Subdivisions</Button>
          </form>
        </div>
      </div>
    );
  }
}
