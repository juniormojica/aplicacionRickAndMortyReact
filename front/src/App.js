
import './App.css';
import Nav from "../src/components/Nav/Nav"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Favorites from './components/Favorites/Favorites';


import Cards from "../src/components/Cards/Cards"
import Detail from './components/Detail/Detail';
import Filter from './components/Filter/Filter';

import About from './components/About/About';
import Form from "./components/Form/Form"


function App() {

  const username = 'admin@gmail.com';
  const password = 'Admin124*';


  const [access, setAccess] = useState(true);
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    !access && navigate('/');
    console.log("cambio");
  }, [access]);

  function login(userData) {
    if (userData.password === password && userData.email === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  return (
    <div className="App">

      {(location.pathname != "/") ? <Nav /> : ""}

      <Routes>

        <Route path='/' element={<Form login={login} />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/home' element={<Cards />} />
        <Route path='home/detail/:id' element={<Detail />} />
        <Route path='/about' element={<About />} />
        <Route path="/filtro" element={<Filter />} />


      </Routes>


    </div>
  );
}

export default App;
