import React from 'react'
//when button fully placed then dynamic or reused for this button
// 1.animation effect pass in props
// 2.button name 
function HeroButton() {
  return (
    <React.Fragment>
      <button className='heroButton buttonEffect-6'><span className='heroSpan'>Manage inquiries</span></button>
    </React.Fragment>
  )
}

export default HeroButton