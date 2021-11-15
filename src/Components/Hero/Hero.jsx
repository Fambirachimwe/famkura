import React from 'react';
import "./Hero.css";
import { Link } from 'react-router-dom'
import HeroContainerImage from "../../assets/w2.jpg";

import {motion } from "framer-motion";


// const heroVariants = {
//     hidden: {
//         opacity: 0,
//         x: "-50vw"
//     },

//     visible: {
//         opacity: 1,
//         x: 0,
//         transition: {
//             type: "spring",
//             delay: .2,
//             duration: 1.5
//         },
//         when: "beforeChildren"

//     }
// }


// const buttonVariants = {
//     hidden: {
//         opacity: 0,
//         x: "500vw"
//     },

//     visible: {
//         opacity: 1,
//         x: 0,
//         transition: {
//             delay: .5,
//             duration: 2.5
//         },
        

//     },
//     hover: {
//         scale: 1.1
//     }
// }


export const Hero = () => {
    return (
        <div className="hero" id="home" >

            <div className="hero__container"  >

                <div className="hero__container__left">

                    <motion.div className="hero__title"

                        initial={{
                            opacity: 0,
                            x: "-100px"
                        }}
                        animate={{
                            x: "0",
                            opacity: 1,
                            transition: {
                                duration: 1
                            },
                            // when: "beforeChildren"
                        }}

                        
                    >
                        <h1>"We Are Famkura Drillers"</h1>
                    </motion.div>

                    <motion.p className="hero__tag"
                        initial={{
                            x: "100px",
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: .3,
                                duration: 1
                            }
                        }}
                    >
                        Siting borehole and wells requires a good understanding of where ground water occurs and how it behaves in the local environment. if done right it will save you a lot of money, our experts are ready to help !
                    </motion.p>


                    <motion.div
                        initial={{
                            opacity: 0,
                            x: "-100px"
                        }}
                        animate={{
                            x: "0",
                            opacity: 1,
                            transition: {
                                delay: .5,
                                duration: 1
                            },
                            originX: 0
                        }}

                        whileHover={{scale: 1.1}}
                        whileTap={{scale: .9}}

                        style={{"display": 'inline-block'}}
                        
                    >
                        <Link to="#" className="hero__cta">Get Quote</Link>
                    </motion.div>
                    
                </div>


               
                <img className="hero__container__right" src={HeroContainerImage} alt="" srcset="" />
                
            </div>

        </div>
    )
}

export default Hero;

