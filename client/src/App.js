import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AddBookPage from './pages/AddBookPage';
import AddMemberPage from './pages/AddMemberPage';
import TransactionPage from './pages/TransactionPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/addbook" element={<AddBookPage />} />
        <Route path="/addmember" element={<AddMemberPage />} />
        <Route path="/transaction" element={<TransactionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
