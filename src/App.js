import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import EventPage from './EventPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/event/:id" element={<EventPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
