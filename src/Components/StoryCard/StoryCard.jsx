import React from 'react';
import './StoryCard.css';


const StoryCard = ({title, tag}) => {
    return (
        <div className="scard">

            <div className="scard__title">
                <h1>{title}</h1>
            </div>

            <p className="scard__tag">
                {tag}
            </p>


            
        </div>
    )
}

export default StoryCard
