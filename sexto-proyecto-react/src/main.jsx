import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ParametrosApp } from './ParametrosApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParametrosApp string = "Hola soy Jeyson" />
  </StrictMode>,
)
