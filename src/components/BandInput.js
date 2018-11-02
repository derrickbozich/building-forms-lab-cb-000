// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = e => {
    this.setState({
      name: e.tarvet.value
    })
  }


  render() {
    return(
      <div>
        <input type="text" onChange={this.handleChange} value={this.state.name} />
        Band Input
      </div>
    )
  }
}

export default BandInput
