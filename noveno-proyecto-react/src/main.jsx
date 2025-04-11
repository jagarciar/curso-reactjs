import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ListasApp } from './ListasApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListasApp />
  </StrictMode>,
)
