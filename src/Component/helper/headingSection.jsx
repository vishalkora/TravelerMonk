import React from 'react'
import dashboard from '../../Images/dashboard.svg';
import HeroButton from '../tools/HeroButton';
function HeadingSection() {
  return (
    <React.Fragment>
      <div className='row py-3 px-3 headingSection'>
        <div className='col-lg-6 col-md-6 col-xm-6'>
          <h4>Dashboard</h4>
        </div>
        <div className='col-lg-6 d-flex justify-content-end'>
          <HeroButton />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HeadingSection