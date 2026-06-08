import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// Order matters: the legacy plain CSS (index.css = desktop, mobile.css = media
// queries) is loaded first, then Tailwind last so utility classes can layer on
// top of — and override — the legacy rules when we adapt to mobile.
import './styles/fonts.css'
import './styles/index.css'
import './styles/mobile.css'
import './styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
