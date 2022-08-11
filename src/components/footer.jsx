import './footer.css';
import mail from '../icons/mail.png';
import phone from '../icons/phone.png';
import location from '../icons/location.png';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
function Footer () {
    return ( 
        <IconContext.Provider value= {{ color: '#24344d', size: '2em', margin: '10px'}}>
            <>
        <footer className='main-footer' id='foot'>
            <div className='footer-cont'>
            <div className="content1">
                <h1 className="headerr">Contact with me</h1>
                <img className='icon' src={mail} alt=""/>
              <p className='pg3'>
                <a href='mailto:orisaekedanielbryan@gmail.com'>orisaekedanielbryan@gmail.com</a>
                </p> 
              <img className='icon' src={phone} alt="" />
                <p  className='pg3'> +234 70 4677 8295</p>
                <img className='icon' src={location} alt=""/>
                 <p className='pg3'>Lagos, Nigeria.</p>
                 <div className='icon1'>
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn/>
                <FaGithub />
                </div>
            </div>

        <div className='content2'>
            <form action='https://getform.io/f/1861d489-eebb-424b-b383-4fe53780bd06' method='POST'>
                <label>
                    <input type='text' placeholder='E-mail' name='email' required/>
                    </label>
                <label>
                    <input type='text' placeholder='Name' name='name' required/>
                    </label>
               <label>
                    <textarea rows='10' cols='60' className='message'  placeholder='Message' name='message' required />
                    </label>
                    <button type='submit' className='btn1'>Send</button>
            </form>
        
        </div>
        </div>
        <div className='content3'>
            <span>Copyright&copy; 2022 | Daniel Bryan</span>
        </div>
        </footer>
        </>
        </IconContext.Provider>
    
     );
}

export default Footer ;