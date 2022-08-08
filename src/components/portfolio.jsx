import React from "react"
import './portfolio.css';
import aryn from '../images/aryn1.png';
import poem from '../images/shot2.png';

const Portfolio = () => {
    return (
        <>
        <div className="main-port">
          <h1>Portfolio</h1>
          <p className="ph">Most Recent Works</p>
        <div className='port-container'>  
          <div className="port-1">
            <figure>
            <img className="feat-img1" src={aryn} />
              <figcaption>
              <h3>Online Store</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Repudiandae error, animi doloribus facilis suscipit necessitatibus
              molestiae distinctio quo harum nostrum.</p>
                
              </figcaption>
            </figure>
          </div>
          <div className="port-2">
          <figure>
            <img className="feat-img2" src={poem}/>
              <figcaption>
            <h3>Poetry Website</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Repudiandae error, animi doloribus facilis suscipit necessitatibus
              molestiae distinctio quo harum nostrum.</p>
              </figcaption>
            </figure>
          </div>
        </div>
        </div>
        </>
    )
}


export default Portfolio