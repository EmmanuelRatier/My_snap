import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
  super(props)
  } 
/*   state = {
    selectedFile: null
  }

  fileSelectedHandler = ev => {
    this.setState({
      selectedFile: ev.target.files[0]
    })
  }

  fileUpload = () => {
    axios.post('https://api.snapchat.wac.epitech.eu/snap')
  }
 */
  render(){
    return(
      <div>
        <h1>hello</h1>
        <input id="file" type="file" onChange={ this.fileSelectedHandler }/>
        <input type="button" value="upload" onClick={ this.fileUpload }/>
      </div>
    )
  }
}

export default Home;