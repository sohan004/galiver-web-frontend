import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import App from './App.jsx'
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: import.meta.env.VITE_GTM_ID // Replace with your GTM ID
};

TagManager.initialize(tagManagerArgs);

// node version 20.7.0
// block z index 1000000, 10000000, 9999, 99999


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
