
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
                
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br></br>
        Alias nulla maxime explicabo temporibus praesentium? <br></br>
        Excepturi magni repudiandae aperiam obcaecati cumque?<br></br>
         </p>
          <p> My Stack consists of: 

            <span style={{color: '#24344d', fontWeight:'bolder', fontSize: '1.5em', marginLeft: '7px'}}>
              {text}
              <span className='cursor'>_</span>
           </span>
          </p>
    <button className="btn">Download cv <HiDocumentDownload size='1.2em' /></button>
        </header>
    </section>
    
    );
}


export default Section;
