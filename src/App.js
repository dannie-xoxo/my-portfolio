

import './App.css';
import Navbar from './components/navbar';
import Section from './components/section';
import Skills from './components/skills'; 
import Portfolio from './components/portfolio';
import Footer from './components/footer';


function App() {
  return (
    <div className="container">
     <Navbar/> 
     <Section />
     <Skills />
     <Portfolio />
     <Footer />
    </div>
  );
}

export default App;
