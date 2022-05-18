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
// const component
import Header from './components/Header'
import Footer from './components/Footer'


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
        component: configComponent(<Home />)
    },
    {
        path: '/dashboard',
        component: configComponent(<Dashboard />)
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
    // {
    //     path: '/lesson/:idCourse',
    //     component: configComponent(<Lesson />)
    // },
    {
        path: '/my-course',
        component: configComponent(<MyCourse />)
    },
    // {
    //     path: '/*',
    //     component: configComponent(<Home />)
    // },
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
