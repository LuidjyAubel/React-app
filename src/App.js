import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import de nos pages
import Home from './pages/Home';
import LegoList from './pages/LegoList'
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';
import Contact from './pages/Contact';
import Test from './pages/Test';
import Afficher from './pages/Afficher';
import Book from './pages/Bookmark';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='legolist' element={<LegoList/>}/>
        <Route path='test' element={<Test/>}/>
        <Route path='afficher' element={<Afficher/>}/>
        <Route path='book' element={<Book/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
