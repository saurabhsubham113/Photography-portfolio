import React from 'react';
import './nature.scss';
import allImages from "./NatureImages/NatureImages";

function Nature() {
    return (
        <div className="nature">
            {/* looping through array to render image */}
            {allImages.items.map((item,index) => (
                <img key={index} src={item.image} alt={item.alt} />
            ))}
        </div>
    )
}

export default Nature;
