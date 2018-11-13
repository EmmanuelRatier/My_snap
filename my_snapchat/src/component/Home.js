import './Home.css'

import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
     constructor(props) {
      super(props)
    }  
        state = {
          users: [],
          image: null,
          duration: null,
          to: null,
          token : localStorage.getItem('token')
        }

 

    Img = ev => {
      this.setState({
        image: ev.target.files[0]
      })
    }
    To = ev => {
      this.setState({
        to: ev.target.value
      })
    }
    Duration = ev => {
      this.setState({
        duration: ev.target.value
      })
    }
   
    postSnap = ev => {
      ev.preventDefault();
      let formData = new FormData()
      formData.append("duration", this.state.duration)
      formData.append("to", this.state.to)
      formData.append("image", this.state.image)

      localStorage.getItem('token');
      axios.post('https://api.snapchat.wac.epitech.eu/snap', formData,
        {
          headers : {
            "token" : this.state.token,
            "Content-type" : "multipart/form-data"
          }
        })
        .then((res) => {
          console.log(res)

        })

    }
    
    componentDidMount() {
      localStorage.getItem('token');
      axios.get(
        'https://api.snapchat.wac.epitech.eu/all',
        {headers: {
          "token" : this.state.token
        }
      }
      )
      .then((res) => {
      
        const users= res.data.data;
        this.setState({users})
      },
      (error) => {
        console.log(error.response.status)
      }
      );
    }
    
    
    render(){
      return(
        <div>
        <h1>hello</h1>
        <form onSubmit={this.postSnap}>
        <input id="file" type="file" onChange={ this.Img }/>
        <input id="text" type="number" onChange={ this.Duration }/>
        <div>
          <h4>Users</h4>
            <select id="select" onChange={this.To}>
                { this.state.users.map(user => <option key={user.email}>{ user.email } </option>) }
             </select> 
             </div>
             <button type="submit">envoyer</button>
        </form>
      </div>
    )
  }
}

export default Home;