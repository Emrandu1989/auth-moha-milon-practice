import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Orders from './components/Orders.jsx';
import PrivateRoute from './route/PrivateRoute.jsx';
import Profile from './components/Profile.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/login',
          element:<Login />
        },
        {
          path:'/register',
          element:<Register />
        },
        {
          path:'/profile',
          element:<PrivateRoute><Profile /></PrivateRoute>
        },
        {
          path:'/orders',
          element: <PrivateRoute><Orders /></PrivateRoute>
        },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
