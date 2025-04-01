import { Routes, Route } from 'react-router';

import UserProvider from './components/providers/UserProvider';

import Catalog from './components/recipe-catalog/Catalog';
import Details from './components/recipe-details/Details';
import Login from './components/user-login/Login';
import Register from './components/user-register/Register';
import Logout from './components/user-logout/Logout';
import Create from './components/recipe-create/Create';
import Edit from './components/recipe-edit/Edit';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/Footer/Footer';
import Contacts from './components/footer/contacts/Contacts';
import FAQ from './components/footer/FAQ/faq';
import AuthGuard from './components/guards/authGuard';
import GuestGuard from './components/guards/guestGuard';

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
            <Route path="/recipes" element={<Catalog />}/>
            <Route path="/recipes/:recipeId/details" element={<Details />}/>
            <Route path="/contacts" element={<Contacts />}/>
            <Route path="/faq" element={<FAQ />}/>
            <Route element={<AuthGuard />}>
                <Route path="/create" element={<Create />}/>
                <Route path="/recipes/:recipeId/edit" element={<Edit />}/>
                <Route path="/logout" element={<Logout />}/>
            </Route>
            <Route element={<GuestGuard />}>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/> 
            </Route>
          </Routes>
        </main>

        <Footer/>
      </div>    
    </UserProvider>
  )
}

export default App;
