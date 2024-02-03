import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {About} from './components/About.jsx'
import {Login} from './components/index.js'
import {Welcome} from './components/Welcome.jsx'
import {Signup} from './components/index.js'
import {PostForm} from './components/post-form/PostForm.jsx'
import {ContactUs} from './components/ContactUs.jsx'
import Requests from './components/Requests.jsx'
import AmbulanceDriverForm from './components/post-form/AmbulanceDriverForm.jsx'
import AmbulanceAvailability from './components/AmbulanceAvailability.jsx'
// creating route to change the layout structure of web app.
//Defining elements and their paths.
const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:'/',
          element:<Welcome/>
        },
        {
          path:'/login',
          element:(
            
              <Login/>
          
          ) 
        },
        {
          path:'/signup',
          element:(
            
              <Signup/>
          
          ) 
        },
        {
          path:'/post',
          element:(
            <PostForm/>
          )
        },
        {
          path:'/about',
          element:(
            <About/>
          )
        },
        {
          path:'/contact-us',
          element:(
            <ContactUs/>
          )
        },
        {
          path:'/patient-request',
          element:(
            <Requests/>
          )
        },
        {
          path:'/driver-form',
          element:(
            <AmbulanceDriverForm/>
          )
        },
        {
          path:'/ambulance-availability',
          element:(
            <AmbulanceAvailability/>
          )
        },
      ]
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    
  </React.StrictMode>,
)
