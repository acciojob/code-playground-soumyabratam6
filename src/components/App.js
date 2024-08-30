import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';

const PrivateRoute = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/" />;
};

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Login setAuth={setIsAuth} />} />
        <Route
          path="/home"
          element={
            <PrivateRoute isAuth={isAuth}>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
