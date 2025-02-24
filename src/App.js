import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import animejson from "./animeData";
import AnimeSelection from './Animeselection';
import AnimeDetails from "./AnimeDetails";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Home" element={<Home/>}/>
        <Route path="/anime" element={<AnimeSelection />} />
        <Route path="/anime/:id" element={<AnimeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;