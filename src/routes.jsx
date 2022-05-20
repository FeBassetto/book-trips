import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Reserves from './pages/Reserves/Reserves';
import Header from './components/Header/Header';


export default function Routing() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/reserves' element={<Reserves />} />
                </Routes>
            </Router>
        </div>
    );
}