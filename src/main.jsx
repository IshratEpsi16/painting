import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import router from './Routes/Routes';
import {

  RouterProvider
} from "react-router-dom";
import './index.css'
import AuthProvider from './Providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
