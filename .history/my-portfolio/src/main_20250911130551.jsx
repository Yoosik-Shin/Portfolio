import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginContextProvider from "./pages/Login/LoginContextProvider";
import Footer from './pages/MenuPage/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginContextProvider>
      <App />
      <Footer />
    </LoginContextProvider>
  </StrictMode>,
)
