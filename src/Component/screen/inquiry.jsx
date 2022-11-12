import React, { Component } from 'react'
import HeroWidget from '../widget/hero-widget'

class Inquiry extends Component {
  render() {
    return (
      <>
        <div className='container-fluid'>
          <HeroWidget herotitle="Create Inquiry" />
          <div className='row'>
            <div><h1>hello</h1></div>
          </div>
        </div>
      </>
    )
  }
}

export default Inquiry