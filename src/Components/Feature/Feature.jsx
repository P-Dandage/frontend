import React from 'react'
import './Feature.css'

const Fearture = () => {
  return (
    <div className='Feature'>
      <h1>Features That Work<br></br> For Your Future</h1>
      <p> Check out our amazing features and experience the <br></br> power of IntraAi for yourself</p>

      <div className=' section'>
        <div className='card'>
        <h3>Real-Time Feedback</h3>
        <h5>Get instant evaluation on your answers</h5>
            </div>
        <div className='card'>
        <h3>Confidence & Emotion Analysis</h3>
        <h5>AI tracks facial expressions and body language.</h5>
            </div>
        <div className='card'>
        <h3> Speech & Tone Analysi</h3>
        <h5>Improve clarity, confidence, and fluency</h5>
            
            </div>
      </div>

    </div>
  )
}

export default Fearture
