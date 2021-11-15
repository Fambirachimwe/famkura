import React from 'react';
import Arrow from "../../assets/arrow.svg";
import "./Card.css";
import {motion} from 'framer-motion';


const Card = ({title, tag}) => {
    return (
        <div className="card">
            
            <div className="card__title">
                <h1>{title}</h1>
            </div>

            <div className="card__tag__container">
                <p className="card__tag">
                    {tag}
                </p>
                <motion.div className="arrow" 
                    whileHover={{rotate: "360deg"}}
                    
                >
                    <img src={Arrow} alt="" srcset="" />
                </motion.div>
            </div>
            
            
        </div>
    )
}

export default Card
