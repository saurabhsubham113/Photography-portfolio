import React from 'react';
import './fitness.scss';
import allImages from "./FitnessImages/fitnessImages";

function Fitness() {
    return (
        <div className="fitness">

            {allImages.items.map((item, index) => (
                <img src={item.image} alt={item.alt} key={index} />
            ))}
        </div>
    )
}

export default Fitness;
