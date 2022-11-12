import React, { Component } from 'react'
import logo from '../../heroLogo.svg';

class HeroWidget extends Component {
  render() {
    return (
      <>
        <div className='row'>
          <div className='col-lg-12  d-flex justify-content-start py-4 hero'>
            <img src={logo} className="" alt="TravelMonk" style={{ height: "52px", paddingRight: "10px" }} />
            <h1 className="">{this.props.herotitle}</h1>
          </div>
        </div>
      </>
    )
  }
}

export default HeroWidget