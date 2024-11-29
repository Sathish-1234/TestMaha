import React from 'react'
import Login from './components/Login'
import './App.css';

import { Route, Router, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Dashboard from './components/DAshboard';
import Demo from './components/Demo';
function App() {
  return (
    <div>
 <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Landing />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </div>
  )
}

export default App