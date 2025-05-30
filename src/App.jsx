import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Appointments from "./components/Appointments";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="font-sans bg-white text-gray-800">
        <Header />
        <Hero />
        <About />
        <Appointments />
        <Services />
        <CTA />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
