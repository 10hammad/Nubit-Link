import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import Hero from './components/Hero';     // Import Hero component
import AboutUs from './pages/AboutUs'; 
import Contact from './Pages/Contact';   // Import AboutUs page
import Services from './components/Services';  // Import Services page
import Footer from './components/Footer';


function App() {
  return (

  
    
    <Router>
      <div>
       <Navbar/>
    
        <Routes>
          {/* Ensure the path for Hero is correct */}
          <Route path="/" element={<Hero />} />      {/* Root points to Hero */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Services/>
        <Footer/>
      </div>
      
    </Router>
  );
}

export default App;
