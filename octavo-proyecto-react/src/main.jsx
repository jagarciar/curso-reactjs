import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CalcApp } from './CalcApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalcApp />
  </StrictMode>,
)
