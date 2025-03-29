import React from 'react'
import './Feature.css'

const Fearture = () => {
  return (
    <div className='Feature'>
      <h1>Features That Work<br></br> For Your Future</h1>
      <p> Check out our amazing features and experience the <br></br> power of IntraAi for yourself</p>

      <div className=' sections'>
        <div className='card'>
        <img src="card1.webp" alt=""  className='image'/>
              <h3>Ultimate Interview Mastery</h3>
        <h5>Take unlimited AI mock interviews tailored to your dream job, covering multiple interview rounds with personalized feedback.</h5>
  
               </div>
        <div className='card'>
        <img src="card2.webp" alt=""  className='image'/>
        <h3>Job Description-Based Interviews</h3>
        <h5>Practice based on the job description for any role in the company to improve your skills in articulation, communication and domain.</h5>
            </div>
        <div className='card'>
        <img src="card3.webp" alt=""  className='image'/>
        <h3> Actionable Analytics</h3>
        <h5>In-depth analytics that evaluate multiple factors, providing comprehensive insights into your interview performance, helping you improve across key areas.</h5>
            
            </div>
            <div className='card'>
        <img src="card4.jpeg" alt=""  className='image'/>
        <h3>Practice without the pressure</h3>
        <h5>Build your interview skills in a judgment-free zone. Answer practice questions and refine your delivery at your own pace.</h5>
            </div>

            <div className='card'>
        <img src="card1.webp" alt=""  className='image'/>
        <h3>Customize Mock Interviews for any Job Industry</h3>
        <h5> Specify your job title, paste the job description, and choose the interview type — Behavioral, Technical, Leadership, or HR.</h5>
            </div>
      </div>

    </div>
  )
}

export default Fearture
