// src/App.js
import React from 'react';
import './App.css';

const App = () => {
  const handleNavigation = (section) => {
    console.log(`Navigating to ${section}`);
    // Add your navigation logic here (e.g., using react-router)
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo">Viens</div>
        <nav className="navbar">
          <button onClick={() => handleNavigation('home')}>Home</button>
          <button onClick={() => handleNavigation('about')}>About</button>
          <button onClick={() => handleNavigation('pricing')}>Pricing</button>
          <button onClick={() => handleNavigation('product')}>Product</button>
          <button onClick={() => handleNavigation('contact')}>Contact</button>
        </nav>
        <div className="auth-buttons">
          <button className="signup-btn">Sign Up</button>
          <button className="login-btn">Login</button>
        </div>
      </header>

      <main className="hero-section">
        <div className="hero-content">
          <h1 className="animate-heading">Expert Accounting For Daily Use</h1>
          <p className="subtitle">
            Free yourself from financial admin. Our dedicated experts and
            easy-to-use tools make managing your money and paying the right tax effortless.
          </p>
          <div className="hero-buttons">
            <button className="get-started">Get Started</button>
            <button className="watch-demo">Watch Demo</button>
          </div>
        </div>

        <div className="cards">
          <div className="card balance-card">
            <p>Your Balance</p>
            <h2>$6,650.05</h2>
            <div className="card-buttons">
              <button className="transfer-btn">Transfer</button>
              <button className="request-btn">Request</button>
            </div>
          </div>

          <div className="card income-card">
            <p>Income</p>
            <h3>$1,650.05</h3>
            <p className="income-details">10% ▲ +$450 this month</p>
            <p className="target">Target: $2,400.00 <span className="progress">75%</span></p>
          </div>
        </div>
      </main>

      <footer className="trusted-section">
        <p>Trusted by the world’s most innovative companies</p>
        <div className="logos">
          <span>coinbase</span>
          <span>Spotify</span>
          <span>Slack</span>
          <span>Dropbox</span>
          <span>webflow</span>
          <span>ZOOM</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
