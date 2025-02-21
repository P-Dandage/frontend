import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Main_section from './Components/Main_section/Main_section'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Feature from './Components/Feature/Feature'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='header'>
       <Navbar></Navbar> 
        <Main_section></Main_section> 
    </div>
    <div className='feature'>
      <Feature></Feature>
      
     </div>


    <div className='about'>
    <About> </About>
    </div>
   
     

    <div className='Footer'>
      <Footer> </Footer>
    </div>
    
  
    </>
  )
}

export default App
