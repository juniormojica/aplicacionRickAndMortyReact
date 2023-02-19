
import './App.css';
import Nav from "../src/components/Nav/Nav"
import { Link, Routes, Route, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import Favorites from './components/Favorites/Favorites';


import Cards from "../src/components/Cards/Cards"
import Detail from './components/Detail/Detail';


function App() {

  const location = useLocation()
  console.log(location);


  return (
    <div className="App">

      {(location.pathname !== "/favorites" || location.pathname !== "/") ? <Nav /> : null}


      <Routes>

        <Route path='/favorites' element={<Favorites />} />
        <Route path='/home' element={<Cards />} />
        <Route path='home/detail/:id' element={<Detail />} />


      </Routes>


    </div>
  );
}

export default App;
