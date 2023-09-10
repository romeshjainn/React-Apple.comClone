import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import { Header } from './Header'; // Import the named export
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
