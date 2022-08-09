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
          <p>One of the selection of recent projects.
            An e-commerce website made for the sole purpose of 
            ordering their products online.
          </p>
                
              </figcaption>
            </figure>
          </div>
          <div className="port-2">
          <figure>
            <img className="feat-img2" src={poem}/>
              <figcaption>
            <h3>Poetry Website</h3>
          <p>Another selection of recent projects.
            This is a website made for readers and poets to read and upload
            their works, 

          </p>
              </figcaption>
            </figure>
          </div>
        </div>
        </div>
        </>
    )
}


export default Portfolio