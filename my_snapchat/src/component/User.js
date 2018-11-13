import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';


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
/*              let Div = styled.section`
                    padding: 4em;
                    background: papayawhip;
                    `; 
            const input_style = styled.section`
                    width: 100%;
                    height: 35px;
                    padding-left: 15px;
                    border: none;
                    border-radius: 20px;
                    margin-bottom: 20px;
                    background: rgba(255,255,255,.2);
                    `;  */
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