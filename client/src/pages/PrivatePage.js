import React, { Component } from 'react';
import fb from '../config/firebase';
import User from "../components/User.js";
import Peek from "../components/Peek.js";

class PrivatePage extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

//signout with firebase
    logout() {
        fb.auth().signOut();
    }

    //simple button with on Click
    render() {
        return (
    
<div className = "col-md-6">
            <h1>Welcome to Private Peek Page </h1>
            <button onClick={this.logout}>Logout</button>

            <User />
            <p></p>
            <Peek />


    

        </div>
        );
        }
    
    }
    export default PrivatePage;
    