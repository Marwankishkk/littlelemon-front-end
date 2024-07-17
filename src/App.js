import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav';
import Menu from './components/Menu';
import About from './components/about'
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingPage from './pages/BookingPage';
import HomePage from './pages/HomePage';


function App() {
    return (
        <Router>

            <>
                <Nav />
                <Header />
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/bookingpage" element={<BookingPage />} />
                    <Route path="/home-page" element={<HomePage />} />


                </Routes>



            </>
        </Router>
    )
}

export default App;
