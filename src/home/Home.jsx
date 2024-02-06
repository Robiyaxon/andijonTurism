import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../component/about/About'
import Footer from '../component/footer/Footer'
import Saidbar from '../component/Sidebar/Sidebar'


export const Home = () => {
  return (
    <div>
        <Saidbar />
        <Routes>
        <Route path="/" element={<About />}></Route>
        {/* <Route path="/action/singleaction" element={<NewsSingle />}></Route> */}
      </Routes> 
      <Footer /> 
    </div>
  )
}
