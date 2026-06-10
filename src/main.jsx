import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App.jsx'

// Order matters: the legacy plain CSS (index.css = desktop, mobile.css = media
// queries) is loaded first, then Tailwind last so utility classes can layer on
// top of — and override — the legacy rules when we adapt to mobile.
import './styles/fonts.css'
import './styles/index.css'
import './styles/mobile.css'
import './styles/tailwind.css'

// Use hash-based routing when the page is opened directly from the file system
// (the single-file build), and clean URLs when served over http(s).
const Router = window.location.protocol === 'file:' ? HashRouter : BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
