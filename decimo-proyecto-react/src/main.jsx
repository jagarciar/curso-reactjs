import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FormularioApp } from './FormularioApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormularioApp />
  </StrictMode>,
)
