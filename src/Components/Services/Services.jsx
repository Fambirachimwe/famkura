import React, { useEffect } from 'react';
import Card from '../Card/Card';
import "./Services.css";
import Rings from "../../assets/rings_bg.svg";
import Dots from "../../assets/dots.svg";

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const titleVariants = {
    hidden: {
        opacity: 0,
        x: "-100px"
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "tween",
            duration: 1.5,

        }
    }
}

const tagVariants = {
    hidden: {
        opacity: 0,
        x: "100px"
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "tween",
            delay: .3,
            duration: 1.5,

        }
    }
}



const Services = () => {

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


    return (
        <div className="services" id="services">

            <div className="rings">
                <img src={Rings} alt="" srcSet="" />
            </div>



            <motion.div className="services__title"
                ref={ref}
                variants={titleVariants}
                initial="hidden"
                animate={controls}
            >
                <h1>Services</h1>
            </motion.div>

            <motion.p className="services__tag"
                ref={ref}
                variants={tagVariants}
                initial="hidden"
                animate={controls}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo, id gravida pellentesque nisl. Integer
            </motion.p>


            <div className="dots">
                <img src={Dots} alt="" srcset="" />
            </div>


            {/* Services Card */}

            <div className="card__container">

                <motion.div style={{ display: "inline-block" }}
                    whileHover={{ scale: 1.02 }}
                >
                    <Card title={"Capacity Testing"} tag={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo, "} />

                </motion.div>


                <motion.div style={{ display: "inline-block" }}
                    whileHover={{ scale: 1.02 }}
                >

                    <Card title={"Drilling and Cassing"} tag={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo, "} />
                </motion.div>


                <motion.div style={{ display: "inline-block" }}
                    whileHover={{ scale: 1.02 }}
                >
                    <Card title={"Pump & tank installation"} tag={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo, "} />
                </motion.div>


                <motion.div style={{ display: "inline-block" }}
                    whileHover={{ scale: 1.02 }}
                >
                    <Card title={"Borehole Sitting"} tag={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo, "} />
                </motion.div>



            </div>




        </div>
    )
}

export default Services
