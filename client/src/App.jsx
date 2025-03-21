import { Routes, Route } from 'react-router';

import About from './components/About';
import Catalog from './components/Catalog';
import Contacts from './components/Contacts';
import Details from './components/Details';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/header/Header';

import './App.css'

function App() {

  return (
    <>
        <Header/>

        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contacts" element={<Contacts />}/>
            <Route path="/Catalog" element={<Catalog />}/>
            <Route path="/register" element={<Register />}/>       
        </Routes>
    </>
    
  )
}

export default App;
