import { createBrowserRouter } from 'react-router-dom';
import MainSite from '../pages/MainSite';
import Blogs from '../components/blogs/blogs';
import Blog from '../components/blogs/blog';
import Layout from '../layouts/Layout';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainSite />
    },
    {
        path: "/blogs",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Blogs />
            },
            {
                path: ':id',
                element: <Blog />
            },
        ]
    }

]);

