import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GoogleOAuthProvider } from "@react-oauth/google"

ReactDOM.render(
  <GoogleOAuthProvider clientId='319566936145-6au8j94l2gvlqh4amtqj9afl1r6ava2q.apps.googleusercontent.com'>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </GoogleOAuthProvider>,
  document.getElementById('root')
);
