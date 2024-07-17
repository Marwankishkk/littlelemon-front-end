import Header from '../components/Header';
import Nav from '../components/Nav';
import Menu from '../components/Menu';
import About from '../components/about'
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
export default function HomePage() {
    return (
        <div>
            <Menu />
            < Testimonials />
            <About />
            < Footer />
        </div>
    )
}