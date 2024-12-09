import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Refex from './Refex'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/counter" element={<h1>cccccccccc</h1>}></Route>
        <Route path="/stopwatch" element={<h1>hbghjkujjoasl</h1>}></Route>
        <Route path="*" element={<h1>Home Page</h1>}></Route>
        <Route path="/ref" element={<Refex/>}></Route>
      </Routes>
    </div>
  )
}
export default App;
