import React from 'react'
import "./SideNav.css";
import { Close } from '@material-ui/icons';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';

const sideNavVariants = {
    hidden: {
        x: "100vw",
        opacity: 0

    },

    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .2,
            type: "tween",
            // stiffness: 120

        }
    },

    exit: {
        // opacity: 0,
        x: "100vw",
        transition: {
           ease: 'easeInOut'
            // stiffness: 120

        }
    }
}


// const listVariants = {
//     hidden: {
//         x: "-100vw",
//         opacity: 0
//     },
//     visible: {
//         x: 0,
//         opacity: 1,
//         transition: {
//             type: 'spring',

//         },
//         // staggerChildren:0.2
//     }
// }


const itemVariants = {
    hidden: {
        x: "-100vw",
        opacity: 0
    },

    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            delay: .3

        },
        // staggerChildren:0.2
    }
}


const SideNav = ({ isOpen, setIsOpen }) => {
    return (

      

            <motion.div className="sidenav"
                variants={sideNavVariants}
                initial="hidden"
                animate="visible"
                when="beforeChildren"
                exit="exit"
            >

                <div className="sidenav__container">

                    <div className="close">
                        <Close onClick={() => setIsOpen(false)} />
                    </div>
                    <motion.ul className="side__menu"
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"


                    >
                        <motion.li className="side__menu__item"
                            // animate={}
                            whileHover={{ scale: 1.5, originX: 0 }}
                        >Home</motion.li>
                        <motion.li className="side__menu__item" whileHover={{ scale: 1.5, originX: 0 }}>About</motion.li>
                        <motion.li className="side__menu__item" whileHover={{ scale: 1.5, originX: 0 }}>Services</motion.li>
                        <motion.li className="side__menu__item" whileHover={{ scale: 1.5, originX: 0 }}>Our Work</motion.li>
                        <motion.li className="side__menu__item" whileHover={{ scale: 1.5, originX: 0 }}>Contact Us</motion.li>
                        <motion.li className="side__menu__item" whileHover={{ scale: 1.5, originX: 0 }}>Get Quote </motion.li>
                    </motion.ul>
                </div>


            </motion.div>


       





    )
}

const mapStatToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setIsOpen: (value) => { dispatch({ type: "isOpen", isOpen: value }) },

    }
}

export default connect(mapStatToProps, mapDispatchToProps)(SideNav)
