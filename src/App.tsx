import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './layouts/About';
import Blogs from './components/Blogs';
import Home from './layouts/Home';
import { FC } from 'react';

const App : FC = () => {
  return (
    <>
    <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App