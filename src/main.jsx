import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routing/routing.jsx'



// new branch create commend  git checkout -b <branch name>
// commit by sohan


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
