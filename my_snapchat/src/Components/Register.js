import React from 'react';
import axios from 'axios';

export default class Register extends React.Component {
    state = {
        persons: []
    }

    ComponentDidMount() {
        axios.get(`https://api.snapchat.wac.epitech.eu/inscription`).then(res => {
            console.log(res);
            this.setState({persons : res.data});
        })
    }
}
    render() {
        return 
    }