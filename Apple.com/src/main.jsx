import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import { Header } from './Header'; // Import the named export
import { SectionA } from './SectionA';
import {SectionB} from './SectionB'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <SectionA />
    <SectionB />
  </React.StrictMode>
);




