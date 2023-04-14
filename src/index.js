import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Create a root element
const root = document.getElementById('root');

// Create a root renderer
const renderer = ReactDOM.createRoot(root);

// Render the app
renderer.render(<App />);