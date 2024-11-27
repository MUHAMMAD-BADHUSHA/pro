import { useState } from 'react'
import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'
import './App.css'
// import {a} from '../commponent/navbar'
import Navbar from '../commponent/navbar'
// import { obj } from '../commponent/navbar'
import Home from '../commponent/Home'
function App() {
  

  return (
    <>
      
<  Navbar/>
<Home/>
{/* <p>value of a {a}</p>
<p>{obj.name}, {obj.place}</p>   */}


    </>
  )
}

export default App
