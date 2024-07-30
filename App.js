import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Chat from './components/Chat';
import Dashboard from './components/Dashboard';
import './styles.css'; // Import custom styles

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Welcome to AI Tutor Platform</h1>
        {!isAuthenticated && <p>Please log in or sign up to get started</p>}
      </header>
      <main className="main">
        {!isAuthenticated ? (
          <div className="auth-container">
            <Login />
            <SignUp />
          </div>
        ) : (
          <div className="content-container">
            <nav className="navigation">
              <button onClick={() => setCurrentPage('dashboard')}>Dashboard</button>
              <button onClick={() => setCurrentPage('chat')}>Chat</button>
              <button onClick={handleLogout}>Logout</button>
            </nav>
            <section className="page-content">
              {currentPage === 'dashboard' && <Dashboard />}
              {currentPage === 'chat' && <Chat />}
            </section>
          </div>
        )}
      </main>
      <footer className="footer">
        <p>&copy; 2024 AI Tutor Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
