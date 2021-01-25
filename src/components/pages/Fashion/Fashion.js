import React from 'react';
import allImages from "./FashionImages/fashionImages";
import './fashion.scss';

function Fashion() {
    return (
        <div className="fashion">
            {allImages.items.map((item, index) => (
                <img src={item.image} alt={item.alt} key={index} />
            ))}
        </div>
    )
}

export default Fashion
