import React, { Component } from 'react'
import BandInput from '../BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandsInput addBand={this.props.addBand} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({addBand: band => dispatch({type: 'ADD_BAND', payload: band })})

export default connect(null, mapDispatchToProps) (BandsContainer)
