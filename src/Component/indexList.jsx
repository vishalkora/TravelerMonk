import React, { Component } from 'react'
import logo from '../logo.svg';
import dashboard from '../Images/svg/dashboard-report-icon.svg';

class IndexList extends Component {
  render() {
    return (
      <>
        <div className='row '>
          <div className='col-lg-12 d-flex justify-content-start indexList p-1'>
            <img src={logo} className="App-logo" alt="logo" style={{ height: "24px" }} />
            <h6>Dashboard</h6>
          </div>
          <div className='col-lg-12 d-flex justify-content-start indexList p-1'>
            <img src={logo} className="App-logo" alt="logo" style={{ height: "24px" }} />
            <h6>Inquiry</h6>
          </div>
          <div className='col-lg-12 d-flex justify-content-start indexList p-1'>
            <img src={logo} className="App-logo" alt="logo" style={{ height: "24px" }} />
            <h6>Itinerary</h6>
          </div>
          <div className='col-lg-12 d-flex justify-content-start indexList p-1'>
            <img src={logo} className="App-logo" alt="logo" style={{ height: "24px" }} />
            <h6>Quotation</h6>
          </div>
          <div className='col-lg-12 d-flex justify-content-start indexList p-1'>
            <img src={logo} className="App-logo" alt="logo" style={{ height: "24px" }} />
            <h6>Invoice</h6>
          </div>
          <div className='col-lg-12 d-flex justify-content-start indexList p-1'>
            <img src={logo} className="App-logo" alt="logo" style={{ height: "24px" }} />
            <h6>Customer</h6>
          </div>
          <div className='col-lg-12 d-flex justify-content-start indexList p-1'>
            <img src={logo} className="App-logo" alt="logo" style={{ height: "24px" }} />
            <h6>Employee</h6>
          </div>
        </div>
      </>
    )
  }
}

export default IndexList;