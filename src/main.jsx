import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import { RouterProvider } from 'react-router-dom'
import router from './routing/routing.jsx'
import CartSideBar from './components/CartSideBar/CartSideBar.jsx'
import Modal from './components/Modal/Modal.jsx'

// node version 20.7.0
// block z index 1000000, 10000000, 9999, 99999


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className=' text-black bg-[#f8f8f8] '>
        <RouterProvider router={router} />

        {/* all sidebar */}
        <CartSideBar />

        {/* all global modal */}
        <Modal />
      </div>
    </Provider>
  </React.StrictMode>,
)
