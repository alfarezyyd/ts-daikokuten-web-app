// main.tsx or main.jsx
import ReactDOM from 'react-dom/client'
import App from './App'
import './globals.css'
import React from 'react'
import {BrowserRouter} from "react-router-dom";

// @typescript-eslint/ban-ts-comment
ReactDOM.createRoot(document.getElementById('root')!).render(
 <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
