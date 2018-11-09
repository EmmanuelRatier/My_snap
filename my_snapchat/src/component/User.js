import React, { Component } from 'react';
import axios from 'axios';


class User extends Component {
     constructor(props) {
    super(props)
    
  } 
        state = {
          email: '',
          password: ''
        }
    
        handleChangeEmail = ev => {
            this.setState({ email: ev.target.value });
        }
    
        handleChangePassword = ev => {
          this.setState({ password: ev.target.value });
      }
    
      handleInscription = ev => {
          ev.preventDefault();
    
          const data = {
            email: this.state.email,
            password: this.state.password
          } 
          
          axios.post('https://api.snapchat.wac.epitech.eu/inscription', data)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                alert('Vous êtes bien inscrit, Appuyer sur connection')
            })
        }
    
        handleConnection = ev => {
          ev.preventDefault();
    
          const data = {
            email: this.state.email,
            password: this.state.password
          } 
          
          axios.post('https://api.snapchat.wac.epitech.eu/connection', data)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                let token = res.data.data.token;
                console.log("token: ", token);
                if(res.status === 200) {
                    localStorage.setItem('token', token);
                    window.location = "/home";
                }
            })
        }
    
        render() {
            return (
                <div>
                  <form>
                    <input 
                        type="text"
                        name="email"
                        value={this.state.email}   
                        onChange={this.handleChangeEmail}                    
                    />
                    <input 
                        type="password"
                        name="password"
                        value={this.state.password}        
                        onChange={this.handleChangePassword}
                    />
                    <input type="button" value="Inscription" onClick={this.handleInscription}/>
                    <input type="button" value="Connection" onClick={this.handleConnection}/>
                </form>
                </div>
    
            )
        }
}
export default User;