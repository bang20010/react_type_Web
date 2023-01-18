import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import {auth} from "./lib/firebase"
import AuthProvider from "./lib/provider/authProvider";
import {createRoot} from 'react-dom/client';

 console.log(auth);  

 const container = document.getElementById('root');
 const root = createRoot(container!); 

root.render(
<React.StrictMode>
  <AuthProvider>
    <App />
  </AuthProvider>
</React.StrictMode>,
);
