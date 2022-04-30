import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from './components/TopBar';
import Home from './components/Home';
import Profile from './components/Profile';
import CreateProfile from './components/CreateProfile';
import Activity from './components/Activity';



function App() {
  
  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Fitness Tracker</h1>
          <TopBar/>
          <br/>
          <div className="display">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Activity />} />
              <Route path="/log" element={<Profile />} />
              <Route path="/signup" element={<CreateProfile />} />
            </Routes>
          </div>

        </header>
      </Router>
    </div>
  );
}

export default App;
