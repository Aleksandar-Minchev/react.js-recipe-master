import { Routes, Route } from 'react-router';

import UserProvider from './providers/UserProvider';

import Catalog from './components/recipe-catalog/Catalog';
import Details from './components/Details';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Create from './components/Create';
import Header from './components/header/Header';
import Home from './components/Home';
import Footer from './components/Footer/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <UserProvider>
      <div id="box">
        <Header/>

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/logout" element={<Logout />}/>
            <Route path="/recipes" element={<Catalog />}/>
            <Route path="/recipes/:recipeId/details" element={<Details />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/register" element={<Register />}/>       
            <Route path="/details" element={<Details />}/>       
          </Routes>
        </main>

        <Footer/>
      </div>    
    </UserProvider>
  )
}

export default App;
