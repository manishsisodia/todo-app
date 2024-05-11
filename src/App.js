import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Newproject from './components/Newproject';
import Tasks from './components/Tasks';
import Createtask from './components/Createtask';


function App() {
  return (
    <Router>
      <div>
        <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/newproject/" element={<Newproject />} />
              <Route path="/viewproject/:project_id/" element={<Tasks />} />
              <Route path="/newtask/:project_id/" element={<Createtask />} />
        </Routes>
      </div>  
    </Router>

  );
}

export default App;
