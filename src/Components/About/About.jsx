import React, { useEffect } from 'react';
import StoryCard from '../StoryCard/StoryCard';
import "./About.css";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';





const About = () => {

    const controls = useAnimation();

    const { ref, inView } = useInView();


    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        if (!inView) {
            controls.start('hidden')
        }
    }, [controls, inView]);


    const aboutVariants = {
        hidden: {
            opacity: 0,
            x: "-100px"
        },

        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "tween",
                duration: 1.3,

            }
        }
    }

    const cardVariants1 = {
        hidden: {
            opacity: 0,
            x: "-400px"
        },

        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "tween",
                // delay: .5,
                duration: 1
            }
        }
    }

    const cardVariants2 = {
        hidden: {
            opacity: 0,
            x: "400px"
        },

        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "tween",
                delay: .2,
                duration: 1
            }
        }
    }





    return (


        <div className="about" id="about" ref={ref} >

            <div className="about__container" >
                <motion.div className="about__title"
                    // ref={ref}
                    variants={aboutVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <h1>Our Story</h1>
                </motion.div>

                <motion.p className="about__tag"
                    ref={ref}
                    variants={aboutVariants}
                    initial="hidden"
                    animate={controls}
                >
                    Lorem ipsum dolor sit amet, consectetu
                </motion.p>

            </div>

            <div className="story__card__container">

                <motion.div
                    ref={ref}
                    variants={cardVariants1}
                    initial="hidden"
                    animate={controls}
                >
                    <StoryCard title={"Who We Are"}
                        tag={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna lacus, amet, libero semper. Auctor "}
                    />
                </motion.div>
                

                <motion.div className="s2"

                    ref={ref}
                    variants={cardVariants2}
                    initial="hidden"
                    animate={controls}
                    
                >
                    <StoryCard className="s2" title={"Why we do this"}
                        tag={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna lacus, amet, libero semper. Auctor "}
                    />
                </motion.div>

            </div>
            {console.log(inView)}

        </div>




    )
}

export default About
