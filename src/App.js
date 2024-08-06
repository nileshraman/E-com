import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShoppingCart from './pages/home';

const App = () => {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
};

export default App;
