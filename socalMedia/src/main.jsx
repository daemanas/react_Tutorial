import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactDOM } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreatePost from './components/CreatePost.jsx'
// import { PostList } from './store/post-list-store.jsx'
import PostList, { postLoader } from "./components/PostList";

const router = createBrowserRouter([
  { path: "/", 
    element: <App />, 
    children:[
      { path : "/", element:<PostList />, loader : postLoader },
      { path: "/create-post", element: <CreatePost /> }
    ]
  }
  
])


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
)
