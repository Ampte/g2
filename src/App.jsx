import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './components/home'
import Sign_up from './components/sign_up';

function App() {

  return (
    <>
     <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign_up' element={<Sign_up/>}/>
      </Routes>
     </HashRouter>
    </>
  )
}

export default App
