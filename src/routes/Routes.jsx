
import Bookmarks from './pages/Bookmarks.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import SingleBlog from './pages/SingleBlog.jsx';
import { createBrowserRouter } from "react-router-dom";
import Blogs from '../components/Blogs.jsx';

export const router = createBrowserRouter([
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
                path: '/blog/:id',
                element: <SingleBlog></SingleBlog>,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path: '/bookmarks',
                element: <Bookmarks></Bookmarks>
            }
        ]
    },
]);