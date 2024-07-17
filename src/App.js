import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Menu from './components/Menu';
import About from './components/about'
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


function App() {
    return (
        <>

            <Nav />
            <Header />
            <Menu />
            <Testimonials />
            <About />
            <Footer />


        </>)
}

export default App;
