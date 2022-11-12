import React from 'react'

// when full placed used this component to try this fully reused....
// 1. icon name used bootstrap icons

export default function ActionIcon() {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row page-wrapper'>
          <div className='col-lg-12'>
            <div className="circle-wrapper">
              <div className="success circle"></div>
              <div className="icon">
                <i className="bi bi-check-lg"></i>
              </div>
            </div>
          </div>
          <div className='col-lg-12'>
            <div class="circle-wrapper">
              <div class="warning circle"></div>
              <div class="icon">
                <i class="bi bi-exclamation"></i>
              </div>
            </div>
          </div>
          <div className='col-lg-12'>
            <div class="circle-wrapper">
              <div class="error circle"></div>
              <div class="icon">
                <i class="bi bi-x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
