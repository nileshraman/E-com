import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
// import Cart from './pages/Cart'; // Ensure the correct path to your Cart component
// import NavBar from './components/navbar';
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
