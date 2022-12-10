import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Web-Components/Contact';
import SearchResults from './Web-Components/Search-Results';
import LoginPage from './Web-Components/Login-Page';
import MyCart from './Web-Components/My-Cart';
import SignUp from './Web-Components/SignUp-Page';
import MyOrder from './Web-Components/My-Order';

const RoutesFunction = ()=>{
    return(
      <BrowserRouter>
          <Routes>
            <Route path='/'       element ={<App />}/>
            <Route path='/contact'element ={<Contact/>}/>
            <Route path='/search' element ={<SearchResults />} />
            <Route path='/auth'   element ={<LoginPage />}/>
            <Route path='/cart'   element ={<MyCart />}/>
            <Route path='/signup' element ={<SignUp />}/>
            <Route path='/order'  element ={<MyOrder />}/>
          </Routes>
      </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RoutesFunction></RoutesFunction>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
