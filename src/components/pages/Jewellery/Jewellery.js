import React from 'react';
import './jewellery.scss';
import allImages from "./JewelleryImage/jewelleryImage";


function Jewellery() {
    return (
        <div className="jewellery">

            {allImages.items.map((item, index) => (
                <img src={item.image} alt={item.alt} key={index} />
            ))}

        </div>
    )
}

export default Jewellery;
