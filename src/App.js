// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Blogs & News</h1>
      </header>

      <nav>
      <a href="/Home">Home</a>
        <a href="/About">About</a>
        <a href="/Department's blogs">Department's blogs</a>
        <a href="/Action">Action</a>
        {/* Add more categories as needed */}
      </nav>

      <section className="App-content">
        <article>
          <h2>Article Title 1</h2>
          <p>Article content goes here...</p>
        </article>

        <article>
          <h2>Article Title 2</h2>
          <p>Article content goes here...</p>
        </article>
        <button>Reach Out</button>

        {/* Add more articles as needed */}
      </section>

      <footer>
        <p>&copy; 2023 Swahilipot Blog & News website.  All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

