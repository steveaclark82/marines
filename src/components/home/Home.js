import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (     
            <div className="home">
                <center>
                    <h1>Welcome to the USMC PFT and CFT Calculator</h1> <br />
                    {/* <img className="image" src="./images/OIP.png" alt="" /> <br /> */}
                    <h3>Please Login or Register!</h3>
                </center>
                <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>

              <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>

            </li>

            </div> 
        );
    }
}
 
export default Home;