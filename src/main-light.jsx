import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App-themed.jsx'
import { lightTheme } from './themes.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App theme={lightTheme} />
  </StrictMode>,
)
