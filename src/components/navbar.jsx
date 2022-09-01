import React, {useState} from 'react';
import "./navbar.css";
function Navbar() {
    const [active, setActive] = useState('mainNav');
    const [toggleIcon, setToggleIcon] = useState('toggler');
    
    const toggle = ()=> {
        active ==='mainNav'
         ? setActive('mainNav nav-active')
         : setActive ('mainNav');

        //  TogglerIcon
        toggleIcon === "toggler"
        ? setToggleIcon('toggler toggle')
        : setToggleIcon('toggler'); 
    };
    return(
        <nav className='keyNav'>
    <h1 className='brand'>Bry-x<span className='web'> Web Developer</span></h1>
    
    
             <ul className= {active}>
                <li className='navItem'><a href="#skills" className='navLink'>About</a></li>
                <li className='navItem'><a href="#port-f" className='navLink'>Portfolio</a></li>
                <li className='navItem'><a href="tel:+234 70 4677 8295" className='navLink'>Contact</a></li>
            </ul> 
            <div onClick={toggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}
export default Navbar
