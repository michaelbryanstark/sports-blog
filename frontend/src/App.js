import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Category from './components/Category';

const App = () => (
    <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route exact path='/blog' element={<Blog />}></Route>
                <Route exact path='/category/:id' element={<Category/>}></Route>
                <Route exact path='/blog/:id' element={<BlogDetail />}></Route>
            </Routes>
        </Layout>
    </Router>
);

export default App;
