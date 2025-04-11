import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PorfolioApp } from './PorfolioApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PorfolioApp />
  </StrictMode>,
)
