import ReactDOM from 'react-dom/client'
import {
  RouterProvider, createBrowserRouter
} from "react-router-dom";
import './index.css'
import Blogs from './pages/Blogs.jsx';
import Bookmarks from './pages/Bookmarks.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import SingleBlog from './pages/SingleBlog.jsx';
import Content from './components/Content.jsx';
import Author from './components/Author.jsx';
import toast, { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
      },
      {
        path:'/blog/:id',
        element:<SingleBlog></SingleBlog>,
        loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
        children:[
          {
            index:true,
            element:<Content></Content>,
            loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path:'author',
            element:<Author></Author>,
            loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`)
          }
        ]
      },
      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </>
)
