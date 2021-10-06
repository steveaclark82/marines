import React, { Component } from 'react';
import './searchBar.css';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            
        }
    }

    handleChange = (event) => {
        this.setState({
            filter: event.target.value
        }, function(){
            let soldiers = this.props.soldiers.filter(soldiers => soldiers.username.includes(this.state.filter) || 
            soldiers.email.includes(this.state.filter))
            this.props.filterSoldiers() 
        });
    }

    render() {
            return(
                <div className='search'>
                    <label>Search a Soldier:  </label>
                    <input type='text' value={this.state.filter} onChange={this.handleChange}/>
                </div>
            );
    }
}

export default SearchBar;