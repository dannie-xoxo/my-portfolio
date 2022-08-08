
import { Typewriter } from 'react-simple-typewriter';
import './App.css';
import Navbar from './components/navbar';
import Section from './components/section';
import Skills from './components/skills'; 
import Portfolio from './components/portfolio';


function App() {
  return (
    <div className="container">
     <Navbar/> 
     <Section />
     <Skills />
     <Portfolio />
     
    </div>
  );
}

export default App;
