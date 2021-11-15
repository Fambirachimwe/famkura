import React from 'react';
import './Header.css';
import Logo from "../../assets/logo.png";
// import Menu from "../../assets/menu.svg";

import { HashLink } from 'react-router-hash-link';
import { connect } from 'react-redux';
import { Menu } from '@material-ui/icons';
import {motion} from 'framer-motion';



const Header = ({isOpen, setIsOpen}) => {
    // console.log(isOpen)
    return (
        <div className="header">

            <div  className="header__logo">
                <img  src={Logo} alt="" srcSet="" />
            </div>

            <div className="header__menu">

                <ul className="menu__nav">

                    <HashLink smooth className="nav_link"
                        to="/"
                        
                        activeStyle={{ color: 'red' }}
                    // etc...
                    ><motion.li className="menu__nav__item"
                        whileHover={{scale: 1.1}}
                    >Home</motion.li></HashLink>

                    <HashLink smooth className="nav_link"
                        to="/#about"
                        
                        activeStyle={{ color: 'red' }}
                    // etc...
                    ><motion.li className="menu__nav__item"
                    whileHover={{scale: 1.1}}
                    >About</motion.li></HashLink>


                    <HashLink smooth className="nav_link"
                        to="/#services"
                        
                        activeStyle={{ color: 'red' }}
                    // etc...
                    ><motion.li className="menu__nav__item"
                    whileHover={{scale: 1.1}}
                    >Services</motion.li></HashLink>


                    <HashLink smooth className="nav_link"
                        to="/#work"
                        
                        activeStyle={{ color: 'red' }}
                    // etc...
                    > <motion.li className="menu__nav__item"
                    whileHover={{scale: 1.1}}
                    >Our Work</motion.li></HashLink>


                    <HashLink smooth className="nav_link"
                        to="/#contact"
                        
                        activeStyle={{ color: 'red' }}
                    // etc...
                    ><motion.li className="menu__nav__item"
                    whileHover={{scale: 1.1}}
                    >Contact</motion.li></HashLink>


                    <HashLink smooth className="nav_link"
                        to="/#quote"
                        
                        activeStyle={{ color: 'red' }}
                    // etc...
                    ><motion.li className="btn menu__nav__item"
                    whileHover={{scale: 1.1}}
                    >Get Quote</motion.li></HashLink>



                    {/* <li className="menu__nav__item">Services</li> */}
                    {/* <li className="menu__nav__item">Our Work</li> */}
                    
                    
                </ul>


                {/* <div >
                <img   src={Menu} alt="" style={{"pointer-events": "all"}} srcSet="" />
                </div> */}
                <div className="menu__icon">
                <Menu  style={{color: "black", padding: "0px"}} onClick={() => setIsOpen(true)} />
                </div>
                
            </div>

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      setIsOpen: (value) => {dispatch({type: "isOpen", isOpen: value})},
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
