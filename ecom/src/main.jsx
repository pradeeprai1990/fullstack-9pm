import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-responsive-pagination/themes/classic-light-dark.css';
import App from './App.jsx'
import MainContext from './MainContext.jsx';

createRoot(document.getElementById('root')).render(
  <MainContext>

     <App />
  </MainContext>
   
 
)
