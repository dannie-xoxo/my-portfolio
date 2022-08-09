import './skills.css'

function Skills() {
    return (
        <div className="mid-container" id='skills'>
          
    <div className='content-1'>
    <header className="head"> Skills</header>
            <p className='pg'>My Technical Level</p>
        <h3> HTML5</h3>
        <div className='container2'>
            <div className=' skills html'></div>
        </div>

        <h3> CSS</h3>
        <div className='container2'>
            <div className=' skills css'></div>
        </div>

        <h3> JAVASCRIPT</h3>
        <div className='container2'>
            <div className='skills js'></div>
        </div>

        <h3> REACT</h3>
        <div className='container2'>
            <div className='skills react'></div>
        </div>

        <h3> jQUERY</h3>
        <div className='container2'>
            <div className='skills jq'></div>
        </div>
        
     </div>
            
<div className='content-2'>
    <h1>About Me.</h1>
    <p className='pg2'>My Introduction</p>
    <p> I'm a Web Developer from Lagos, Nigeria.</p>
<p>I enjoy taking complex problems and turning them into beautiful  interface designs.</p>
<p>I also love the logic and structure of coding and always strive to write efficient code, 
    whether in HTML, CSS or JavaScript.
</p>
<p>If you're looking for a better website without going into debt
    for the years to come, then you have come to the right place. 
</p>
<p>When I'm not coding or trying to solve a problem, you'll find me in the gym,
     reading novels or on the soccer field.</p>

</div>

        </div>
    );
}

export default Skills;