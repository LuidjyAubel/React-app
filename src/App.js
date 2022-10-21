import logo from './logo.svg';
import { useEffect } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import de nos pages
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';
import Contact from './pages/Contact';
import Test from './pages/Test';
import Afficher from './pages/Afficher';

function App() {
  /*fetch('https://rebrickable.com//api/v3/lego/sets//?key=d2f2a1ef3260ceb4b63aa6bf03c1e9f9')
  .then((response) => response.json())
  .then((data) => console.log(data));*/

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='test' element={<Test/>}/>
        <Route path='afficher' element={<Afficher/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
