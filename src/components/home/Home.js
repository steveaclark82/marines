import React from 'react';
import './Home.css';

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
                    <img className="image" src="./images/marine.png" alt="" />                   
                    <h3>Please Login or Register!</h3>
                </center>
            </div> 
        );
    }
}
 
export default Home;