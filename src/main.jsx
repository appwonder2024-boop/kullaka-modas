import './index.css'
import "@fontsource/roboto/400.css"; // Peso normal
import "@fontsource/roboto/700.css"; // Peso negrita (útil para títulos)

import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
