import React, {Component} from 'react'
import * as AiIcons from 'react-icons/ai'
import './Home.css';
//import MyPDF from '../path/to/file.pdf';

class Home extends Component{
    render() {
        return (
            <div class="home">
                <nav className='nav-icons'>
                    <a href='https://www.linkedin.com/in/harsha-vardhan-3420a812b/'>
                        <i className="icon"><AiIcons.AiFillLinkedin/></i>
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100008283829229'> 
                        <i className="icon"><AiIcons.AiFillFacebook/></i>
                    </a>
                    <a href='https://github.com/harshabangi'> 
                        <i className="icon"><AiIcons.AiFillGithub/></i>
                    </a>
                </nav>
                <div>
                    <button className="button">
                        <a className='link' href="/COE15B024.jpg" download>
                            Download Resume
                        </a>
                    </button>
                </div>
            </div>
        );
    }
}       
export default Home;