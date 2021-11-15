import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Work.css";
import w1 from "../../assets/w1.jpg";
import w2 from "../../assets/w2.jpg";
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




const Work = () => {

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
        <div className="work" id="work">
            
            <motion.div className="work__title"
                ref={ref}
                variants={titleVariants}
                initial="hidden"
                animate={controls}
            >
                <h1>Our Work</h1>
            </motion.div>

            <motion.p className="work__tag"
                ref={ref}
                variants={tagVariants}
                initial="hidden"
                animate={controls}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo, id gravida pellentesque nisl. Integer 
            </motion.p>

            <div className="work__scroller">

                <div className="courosel">
                    <OwlCarousel className='owl-theme' loop margin={10} stagePadding={0} items={1} nav
                        responsive={{200: {items:1}, 600:{items: 2}, 800: {items: 3}}}
                    >
                        <div className='work__item item'>
                            <img src={w1} alt="" srcset="" />
                        </div>

                        <div className='work__item item'>
                            <img src={w2} alt="" srcset="" />
                        </div>

                        <div className='work__item item'>
                            <img src={w1} alt="" srcset="" />
                        </div>

                        <div className='work__item item'>
                            <img src={w1} alt="" srcset="" />
                        </div>
                    
                    </OwlCarousel >
                </div>
                

                <div className="work__grid">
                    <div className='work__item item'>
                        <img src={w1} alt="" srcSet="" />
                    </div>

                    <div className='work__item item'>
                        <img src={w2} alt="" srcSet="" />
                    </div>
                    <div className='work__item item'>
                        <img src={w1} alt="" srcSet="" />
                    </div>

                    <div className='work__item item'>
                        <img src={w2} alt="" srcSet="" />
                    </div>
                    <div className='work__item item'>
                        <img src={w1} alt="" srcSet="" />
                    </div>

                    <div className='work__item item'>
                        <img src={w2} alt="" srcSet="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work
