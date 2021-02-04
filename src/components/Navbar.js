import React, {Component} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import './Navbar.css';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

class contact extends Component{
    constructor(props) {
        super(props)
        this.state = {
            sidebar: true
        }
        this.toggleSideBar = this.toggleSideBar.bind(this)
    }
    toggleSideBar() {
        const currentState = this.state.sidebar;
        this.setState({sidebar: !currentState})
    }
    
    render() {
            if (this.state.sidebar) {
                return (
                    <IconContext.Provider value={{ color: '#fff' }}>    
                        <div className='navbar'>
                            <Link to='#' className='menu-bars'>
                                <FaIcons.FaBars onClick={this.toggleSideBar} />
                            </Link>
                            <span className ='name'>HARSHA BANGI</span>
                        </div>
                    </IconContext.Provider>
                )
            } else {
                return(
                    <IconContext.Provider value={{ color: '#fff' }}>  
                    <nav className = 'nav-menu active'> 
                        <ul className = 'nav-menu-items'>
                            <li className='navbar-toggle'>
                                <Link to='#' className='menu-bars'>
                                    <AiIcons.AiOutlineClose onClick={this.toggleSideBar}/>
                                </Link>
                            </li>
                            {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName} onClick={this.toggleSideBar}>
                                    <Link to={item.path}>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                            })}
                        </ul> 
                    </nav>
                    </IconContext.Provider>
                )
            }
            
        
    }
}
export default contact;