import React, { Component } from 'react';
import Navbar from './Navbar';
import './css/CutieHack.css';
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    auth: true
  }

  render(){
    return(
      <div>
        <Navbar auth={this.state.auth}/>
        <div>
          <button>APPLY</button>
        </div>
        <div className="Frame1"> 
        </div>
        <div className="titleStyle">
            <h1 className="Cutie">Cutie</h1>
            <h1 className="Hack">Hack</h1>

            <h1 className ="Description">What is Cutie Hack?
            <p className="DescriptionText"> Cutie Hack is a beginner-friendly 12-hour hackathon. Hosted at UC Riverside,
            Cutie Hack is designed to help new hackers get used to the time crunch of a hackathon environment. </p>
            </h1>

            <h1 className ="About">About Us
            <p className="AboutText"> Since its inaugural year of 2015, Cutie Hack's goal
            is to create a place where students can build and create to their heart's content. Founded by ACM and IEEE
            student members at the University of California, Riverside.  </p>
            </h1>

         </div>

      </div>
    )
  }
}

export default Home;
