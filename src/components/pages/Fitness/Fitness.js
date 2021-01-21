import React from 'react';
import './fitness.scss';

import fit1 from '../../../assets/images/fitness/image-1.jpg';
import fit2 from '../../../assets/images/fitness/image-2.jpg';
import fit3 from '../../../assets/images/fitness/image-3.jpg';
import fit4 from '../../../assets/images/fitness/image-4.jpg';
import fit5 from '../../../assets/images/fitness/image-5.jpg';
import fit6 from '../../../assets/images/fitness/image-6.jpg';
import fit7 from '../../../assets/images/fitness/image-7.jpg';
import fit8 from '../../../assets/images/fitness/image-8.jpg';

function Fitness() {
    return (
        <div className="fitness">
            <img src={fit1} alt="fitness" />
            <img src={fit2} alt="fitness" />
            <img src={fit3} alt="fitness" />
            <img src={fit4} alt="fitness" />
            <img src={fit5} alt="fitness" />
            <img src={fit6} alt="fitness" />
            <img src={fit7} alt="fitness" />
            <img src={fit8} alt="fitness" />
        </div>
    )
}

export default Fitness;
