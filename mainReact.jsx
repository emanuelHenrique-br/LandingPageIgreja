import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactApp from './reactApp.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactApp />
  </StrictMode>,
)
