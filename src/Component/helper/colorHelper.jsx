import React from 'react'

function colorHelper() {
  return (
    <React.Fragment>
      <div className='row'>
        <div className='col-lg-2 p-2 border border-right font-weight-bold' style={{ backgroundColor: "#425F57" }}>
          <span className='font-weight-bold text-dark h5'>#425F57</span><br />
          <span className='text-dark h6'>Primary Color</span>
        </div>
        <div className='col-lg-2 p-2 border border-right font-weight-bold' style={{ backgroundColor: "#749F82" }}>
          <span className='font-weight-bold text-dark h5'>#749F82</span><br />
          <span className='text-dark h6'>Secondary Color</span>
        </div>
        <div className='col-lg-2 p-2 border border-right font-weight-bold' style={{ backgroundColor: "#A8E890" }}>
          <span className='font-weight-bold text-dark h5'>#A8E890</span><br />
          <span className='text-dark h6'>dark Color</span>
        </div>
        <div className='col-lg-2 p-2 border border-right font-weight-bold' style={{ backgroundColor: "#CFFF8D" }}>
          <span className='font-weight-bold text-dark h5'>#CFFF8D</span><br />
          <span className='text-dark h6'>info Color</span>
        </div>
        <div className='col-lg-2 p-2 border border-right font-weight-bold' style={{ backgroundColor: "#96b6a0" }}>
          <span className='font-weight-bold text-dark h5'>#96b6a0</span><br />
          <span className='text-dark h6'>muted Color</span>
        </div>
      </div>
    </React.Fragment>
  )
}

export default colorHelper