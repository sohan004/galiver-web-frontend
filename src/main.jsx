import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './components/HomePage/HomePage.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CategorisPage from './components/CategorisPage/CategorisPage.jsx'
import logo from './assets/logo/png-02.png'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/categories',
        element: <CategorisPage></CategorisPage>
      }
    ]
  }
])

// cmmmit by sohan

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router}></RouterProvider>
      <dialog id="spin" className="modal ">
        <div method="dialog" className="modal-box bg-transparent shadow-none relative">
          <img src={logo} className='w-16 h-16 lg:w-20 lg:h-20 mx-auto bg-[#ffffff] animate-pulse shadow-2xl  rounded-full' alt="" />
        </div>
      </dialog>
    </div>
  </React.StrictMode>,
)
