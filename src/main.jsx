import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import { RouterProvider } from 'react-router-dom'
import router from './routing/routing.jsx'
import CartSideBar from './components/CartSideBar/CartSideBar.jsx'
import Modal from './components/Modal/Modal.jsx'



// new branch create commend  git checkout -b <branch name>
// commit by sohan


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <div className='text-black bg-white'>

        {/* all sidebar */}
        <CartSideBar />

        {/* all global modal */}
        <Modal />
      </div>
    </Provider>
  </React.StrictMode>,
)
