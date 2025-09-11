import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginContextProvider from "./pages/Login/LoginContextProvider";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
          <Footer />
  </StrictMode>,
)
