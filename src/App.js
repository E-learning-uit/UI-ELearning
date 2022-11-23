import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import React from 'react';
//pages
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Courses from './pages/Courses'
import Lesson from './pages/Lesson'
import MyCourse from './pages/MyCourse'
import MyProfile from './pages/MyProfile'
import ContactUs from './pages/ContactUs'
// const component
import Header from './components/Header'
import Footer from './components/Footer'
import SecondBlog from './components/Blog/SecondBlog'
import FirstBlog from './components/Blog/FirstBlog'
import Payment from "./pages/Payment";

const configComponent = (component) => {
    return (
        <div>
            <Header />
            <div className="mt-12 mb-[60px]">
                {component}
            </div>

            <Footer />
        </div>
    )
}
let path = [
    {
        path: '/',
        component: configComponent(<Dashboard />)
    },
    {
        path: '/dashboard',
        component: configComponent(<Home />)
    },
    {
        path: '/contact-us',
        component: configComponent(<ContactUs />)
    },
    {
        path: '/blog',
        component: configComponent(<Blog />)
    },
    {
        path: '/blog-detail',
        component: configComponent(<BlogDetail />)
    },
    {
        path: '/course/:idCourse',
        component: configComponent(<Courses />)
    },
    {
        path: '/my-course',
        component: configComponent(<MyCourse />)
    },
    {
        path: '/my-profile',
        component: configComponent(<MyProfile />)
    },
    {
        path: '/blog/second-blog',
        component: configComponent(<SecondBlog />)
    },
    {
        path: '/blog/first-blog',
        component: configComponent(<FirstBlog />)
    },
    {
        path: '/payment/:idCourse',
        component: configComponent(<Payment />)
    }
]


function App() {
    return (
        <Routes>
            <Route path="/lesson/:idCourse" element={<Lesson />} />
            {path.map((item, index) => {
                return (
                    <Route path={item.path} element={item.component} key={index} />
                )
            })}
        </Routes>
    );
}

export default App;
