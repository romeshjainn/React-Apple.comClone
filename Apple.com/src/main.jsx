import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import { Header } from './Header'; // Import the named export
import { SectionA } from './SectionA';
import { SectionB } from './SectionB';
import { SectionC } from './SectionC';
import { SectionD } from './SectionD';
import { SectionE } from './SectionE';
import { Footer1 } from './Footer';
import { Footer2 } from './Footer2';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <SectionA />
    <SectionB />
    <SectionC />
    <SectionD />
    <SectionE />
    <Footer1 />
    <Footer2 />
  </React.StrictMode>
);




