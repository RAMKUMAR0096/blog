import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './route/index'
// import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    <RouterProvider router={router}/>
  </>
  // </StrictMode>,
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
