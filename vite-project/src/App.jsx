import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import Contact from './pages/Contact';
import Navbar from './componentes/Navbar';
import Footer from './sections/Footer';
import './App.css'

function App() {

  return (
    <div>
        <Navbar />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/curriculum" element={<Curriculum />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>

        <Footer />
    </div>
  )
}

export default App;
