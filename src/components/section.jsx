
import "./section.css";
import { useTypewriter } from 'react-simple-typewriter';
import'react-simple-typewriter/dist/index'
import {HiDocumentDownload} from 'react-icons/hi';

  
  
const Section=()=> {
  const{text}= useTypewriter({
    words: ["HTML.", "CSS.","JavaScript.", "React.", "jQuery.",],
    loop: 0,
    typeSpeed:100,
    deleteSpeed:70,
    delaySpeed:1000
  })
    return ( 
    
 <section className="top-container">
 <header className="content">
    <h1>Hi, I'm Daniel Bryan</h1>
     <p> A Front end Developer who focuses on writing clean,<br></br>
                 elegant and efficient code.</p>
                
     <p>I offer services  from landing pages to full website with<br></br>
     preciseness and accuracy<br></br>
        If you have a plan for me or you request of my services <br></br>
        you can send me a message and I'll be right there.<br></br>
         </p>
          <p> My Stack consists of: 

            <span style={{color: '#24344d', fontWeight:'bolder', fontSize: '1.5em', marginLeft: '7px'}}>
              {text}
              <span className='cursor'>_</span>
           </span>
          </p>
          <a href="./assets/Daniel's CV.pdf" download>
    <button className="btn">Download cv <HiDocumentDownload size='1.2em' /></button>
    </a>
        </header>
    </section>
    
    );
}


export default Section;
