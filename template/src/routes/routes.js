// src/routes/routes.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

const isAuthenticated = true; // Replace with your authentication logic

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route
          path="/home" exact 
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoute>
          }
        />

      </Routes>
    </Router>
  );
};

export default AppRoutes;