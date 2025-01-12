import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import Hero from './components/Hero';     // Import Hero component
import AboutUs from './Pages/AboutUs'; 
import Contact from './Pages/Contact';   // Import AboutUs page
import Services from './components/Services';  // Import Services page
import Footer from './components/Footer';
import CareerForm from './Pages/Career';
import ProfileSection from './components/ProfileSection';


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
          <Route path="/career-form" element={<CareerForm />} />
        </Routes>
        <Services/>
        <ProfileSection/>
        <Footer/>
      </div>
      
    </Router>
  );
}

export default App;
