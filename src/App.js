// App.js
import React, { useState } from 'react';
import {  BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Observation from './Components/Observation';
import Landing from './Components/Landing';
import Tinting from './Components/Tinting-Banco';
import Login from './Components/Login';
import ColourantsNoombal from './Components/ColourantsNoombal';
import TintingNoombal from './Components/TintingNoombal';
import ColourantBanglore from './Components/ColourantBanglore';

import "./App.css"
function App() {
  const [token, setToken] = useState(true);
  const [user,setUser]=useState("");
  return (
    <Router>
        <>
          <Header />
          <Routes>
            <Route path="/" element={token ? <Landing /> : <Login setToken={setToken} setUser={setUser} />} />
            <Route path="/observation" element={token ?  <Observation username={user} />:<Login setToken={setToken} setUser={setUser} />} />
            <Route path="/landing" element={token ? <Landing username={user} />:<Login setToken={setToken} setUser={setUser} />} />
            <Route path="/tintingbanglore" element={token ?  <Tinting username={user} />:<Login setToken={setToken} setUser={setUser} />} />
            <Route path="/tintingnoombal" element={token ?  <TintingNoombal username={user} />:<Login setToken={setToken} setUser={setUser} />} />
            <Route path="/colourantnoombal" element={token ?  <ColourantsNoombal username={user} />:<Login setToken={setToken} setUser={setUser} />} />
            <Route path="/colourantbanglore" element={token ?  <ColourantBanglore username={user} />:<Login setToken={setToken} setUser={setUser} />} />
          </Routes>
        </>
        </Router>
  );
}

export default App;