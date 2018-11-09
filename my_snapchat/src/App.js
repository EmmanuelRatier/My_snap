import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import logo from './logo.svg';
import './App.css';

import User from './component/User';
import Home from './component/Home';

class App extends Component {
    render() {
     return (
         <Router>
             <div className="App">
                 <Route path="/" exact render= {
                     () => {
                         return (<User />);
                     }
                 } />
                 <Route path="/user" component={User} />
                 <Route path="/home" component={Home}/>
             </div>
         </Router>
     );
   } 
  } 


export default App; 
