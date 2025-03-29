import React from 'react'
import './How.css'

const How = () => {
  return (
    <div className='how'>
      <h1>How it <span>work</span></h1>

      <div className='f1'>
        <div className='f2'>
            <div className='f3-1'>
            <p className="custom-text">1</p><h3>Select your desired role and other interview details to start practicing.</h3>
        </div>
        <div className='f3'>
        <p className="custom-text">2</p><h3>Practice in real-time with live followup questions.</h3>
        </div>
        <div className='f3'>
        <p className="custom-text">3</p><h3>Get actionable feedback based on industry evaluation parameters.</h3>
        </div>
        <div className='f3'>
        <p className="custom-text">4</p><h3>Track and improve your performance through unlimited practices.</h3>
        </div>
        </div >
        <div className='f4'>
            <img src="card1.webp" alt="" />

        </div>

      </div>
    </div>
  )
}

export default How
