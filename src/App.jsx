import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import Journeys from './Journeys'
import LifeMoment from './LifeMoment'
import Departure from './Departure'
import ContactUs from './ContactUs'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/journeys' element={<Journeys/>}/>
            <Route path='/lifemoment' element={<LifeMoment/>}/>
            <Route path='/departure' element={<Departure/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
