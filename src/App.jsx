import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./App.css";
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Country from "./Pages/Country.jsx"
import CountryDetails from "./Pages/CountryDetails.jsx"
import Contact from "./Pages/Contact.jsx"
import AppLayout from "../src/components/Layout/AppLayout.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<AppLayout />} >
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/country' element={<Country />} />
        <Route path='/country/:id' element={<CountryDetails />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App