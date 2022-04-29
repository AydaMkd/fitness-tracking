import React from 'react';
import TopBar from './components/TopBar';
import './App.css';


import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'



import Activity from './components/Activity';


function App() {

  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Fitness Tracking</h1>

          <div className="navBar">
            <ul>
              
            <Link to="/">Home</Link><br/>
            <Link to="/create">Create Account</Link><br/>
             <Link to="/sign">Sign In</Link><br/>
            <Link to="/Activity">Activity</Link>
            </ul>
          </div>
          <div className="display">
          <Routes>
             
          <Route path="/Activity" element={<Activity />} />
             
          </Routes>
          </div>

        </header>
      </Router>
    </div>
  );
}

export default App;